import React, { useEffect, useState } from "react";

type NewsData = {
	urlToImage: string;
	title: string;
	source: {
		name: string;
	};
	name: string;
	publishedAt: string;
	description: string;
	url: string;
};
const url =
	"https://newsapi.org/v2/top-headlines?country=us&apiKey=19d2d58149474e4cb08304a83cbe8ffc";

const Headline = () => {
	const [news, setNews] = useState<NewsData | null>(null);

	const getNews = async () => {
		try {
			const response = await fetch(url);
			const json = await response.json();
			setNews(json.articles[0]);
		} catch (error) {
			console.error("Error fetching news:", error);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<div className="w-full mx-1 my-6 text-left bg-white rounded-xl shadow-md overflow-hidden md:w-full">
			{news && (
				<div className="md:flex">
					<div className="md:shrink-0">
						<img
							className="h-20 w-full object-cover md:h-full md:w-60 rounded-lg"
							src={news?.urlToImage}
							alt={news?.title}
						/>
					</div>
					<div className="p-8 bg-[#2C4E80] rounded-lg">
						<h1 className="underline pb-3 font-extrabold text-2xl text-gray-300">
							Highlight of The Day
						</h1>
						<div className="uppercase tracking-wide text-l text-red-600 bg-white w-32 text-center rounded-md font-semibold">
							{news?.source.name}{" "}
						</div>
						<a
							href={news?.url}
							className="block mt-1 text-3xl leading-tight font-medium text-[#e1ae4f] hover:underline"
						>
							{news?.title}{" "}
						</a>
						<p className="mt-2 text-slate-200 italic">{news?.description} </p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Headline;
