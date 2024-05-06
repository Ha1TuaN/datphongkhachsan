import { ReactNode } from "react";

export const renderStars = (type: string, icon: ReactNode) => {
    const stars: ReactNode[] = [];
    let count: number = 0;
    if (type === "FiveStar") {
        count = 5;
    } else if (type === "FourStar") {
        count = 4;
    } else if (type === "ThreeStar") {
        count = 3;
    } else if (type === "TwoStar") {
        count = 2;
    } else if (type === "OneStar") {
        count = 1;
    }
    for (let i = 0; i < count; i++) {
        stars.push(icon);
    }
    return stars; // Return an array of ReactNode
};

export const formatCurrency = (amount:number) => {
    let formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    formattedAmount += " VNĐ";
    
    return formattedAmount;
}