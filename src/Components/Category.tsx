import React from "react";

const Category = ({}) => {
    const fetchData = async (value: React.SetStateAction<string>) => {
        try {
            const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=19d2d58149474e4cb08304a83cbe8ffc";
        } catch (error) {
            
        }
    }
    
    return (
        <div>
            <h1>Category</h1>
        </div>
    )
}