import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Subscription from "./Subscription";
import Footer from "./Footer";
import SearchResultsList from "./SearchResultsList";

type newsProp = {
  news: any;
};

const Home: React.FC<newsProp> = (props) => {
  return (
    <div>
      <SearchResultsList articles={[]} />
      <RightSection news={props?.news} />
      <LeftSection urlToImage={""} title={""} source={{
        name: ""
      }} publishedAt={""} description={""} url={""}/>
      
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;