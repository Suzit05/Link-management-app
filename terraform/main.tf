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

resource "aws_instance" "mern_app" {
  instance_type = var.instance_type
  ami = var.ami
  key_name = aws_key_pair.mykey.key_name
  security_groups = [aws_security_group.mysg.name]
  user_data = file("user_data.sh")
  tags = {
    Name = "mern_app"
  }
  
}

resource "aws_key_pair" "mykey" {
  key_name = "mydeployer-key"
  public_key = file("/mnt/c/Users/sujee/.ssh/id_rsa.pub")
}