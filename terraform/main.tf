provider "aws" {
  region = var.region
}



resource "aws_security_group" "mysg" {
  name = "mysg"
  description = "The security group for the connection of ssh , http and backend"

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }
  ingress {
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [ "0.0.0.0/0" ]
  }
}

data "aws_subnet" "default_public" {
  default_for_az = true
  availability_zone = "eu-north-1a"
}


resource "aws_iam_instance_profile" "ecr_profile" { # add this iam instance profile to ec2_instance
  name = "ecr-profile"
  role = "EC2-ECR-Access-Role"
}

resource "aws_instance" "mern_app" {
  instance_type = var.instance_type
  ami = var.ami
  iam_instance_profile = aws_iam_instance_profile.ecr_profile.name
  key_name = aws_key_pair.mykey.key_name
  vpc_security_group_ids = [aws_security_group.mysg.id]
  subnet_id = data.aws_subnet.default_public.id

  associate_public_ip_address = true

  user_data = file("user_data.sh")
  tags = {
    Name = "mern_app"
  }
  
}



resource "aws_key_pair" "mykey" {
  key_name = "mydeployer-key"
  public_key = file("/home/suzit05/.ssh/Ansible25.pub") # ssh -i ~/.ssh/Ansible25.pem ubuntu@<NEW_PUBLIC_IP>
}