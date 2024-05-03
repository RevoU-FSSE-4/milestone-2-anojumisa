import React from "react";
import { lazy, Suspense } from 'react';
import RightSection from "./RightSection";
import Subscription from "./Subscription";
import Footer from "./Footer";
import SearchResultsList from "./SearchResultsList";
import Headline from "./Headline";

const LeftSection = React.lazy(() => import('./LeftSection'));

type newsProp = {
  news: any;
};

const Home: React.FC<newsProp> = (props) => {
  return (
    <div>
      <SearchResultsList articles={[]} />
      <Suspense fallback={<div>Loading...</div>}>
      
      <RightSection news={props?.news} />
      </Suspense>
      <Headline   />
      <LeftSection urlToImage={""} title={""} source={{
        name: ""
      }} publishedAt={""} description={""} url={""}/>
      
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;