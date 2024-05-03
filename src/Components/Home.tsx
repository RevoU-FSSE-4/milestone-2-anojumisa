import React from "react";
import { Suspense } from "react";
import RightSection from "./RightSection";
import Subscription from "./Subscription";
import SearchResultsList from "./SearchResultsList";
import Headline from "./Headline";

const LeftSection = React.lazy(() => import("./LeftSection"));
const Footer = React.lazy(() => import("./Footer"));

type newsProp = {
	news: any;
};

const Home: React.FC<newsProp> = (props) => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<SearchResultsList articles={[]} />

				<RightSection news={props?.news} />

				<Headline />
				<LeftSection
					urlToImage={""}
					title={""}
					source={{
						name: "",
					}}
					publishedAt={""}
					description={""}
					url={""}
				/>

				<Subscription />
				<Footer />
			</Suspense>
		</div>
	);
};

export default Home;
