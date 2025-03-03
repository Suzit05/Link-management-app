import React, { createContext, useContext, useState, useEffect } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }) => {


    const [linkCount, setlinkCount] = useState(0)
    const [shopCount, setShopCount] = useState(0)
    const [ctaCount, setctaCount] = useState(0)
    const totalCount = linkCount + shopCount;


    return (
        <AnalyticsContext.Provider value={{ linkCount, shopCount, setlinkCount, setShopCount, totalCount, ctaCount, setctaCount }}>
            {children}
        </AnalyticsContext.Provider>
    );
};
