import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";


type newsProp = {
  news: any;
};

const Home: React.FC<newsProp> = (props) => {
  return (
    <div>
      <LeftSection urlToImage={""} title={""} source={{
        name: ""
      }} publishedAt={""} description={""} url={""}/>
      <RightSection news={props?.news} />
    </div>
  );
};

export default Home;