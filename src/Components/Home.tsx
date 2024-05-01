import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

type newsProp = {
    news: any
}


const Home = (props:newsProp) => {
    return (
        <div >
            <LeftSection  news={props?.news} />
            <RightSection news={props?.news} />
        </div>
    )
}

export default Home;