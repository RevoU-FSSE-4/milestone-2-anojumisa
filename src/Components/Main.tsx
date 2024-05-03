import React, { useEffect, useState } from "react";
import Home from "./Home";

const Main = () => {
	const [news, setNews] = useState([]);
    const getNews = async () => {
		try {
			await fetch(
				"https://newsapi.org/v2/top-headlines?country=us&apiKey=19d2d58149474e4cb08304a83cbe8ffc&pageSize=5"
			)
				.then((res) => res.json())
				.then((json) => setNews(json.articles));
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
        getNews()
    }, [])

	return (
		<div>
			
			<Home news={news}/>
		</div>
	);
};

export default Main;
