import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

// Interface for News API response data (articles)
interface NewsAPIArticle {
	source: { name: string };
	author?: string; // Optional property
	title: string;
	description: string;
	url: string;
	urlToImage: string; // Optional property
	publishedAt: string;
	content?: string; // Optional property
}

interface NewsListProps {}

const NewsList: React.FC<NewsListProps> = () => {
	const [articles, setArticles] = useState<NewsAPIArticle[]>([]);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const response = await axios.get(
					"https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=19d2d58149474e4cb08304a83cbe8ffc"
				);
				setArticles(response.data.articles);
			} catch (error) {
				console.error("Error fetching articles:", error);
				
			}
		};

		getArticles();
	}, []);

	return (
		<div>
			{articles.map((article) => (
				<NewsItem
					key={article.url} 
					title={article.title}
					description={article.description}
					url={article.url}
					urlToImage={article.urlToImage}
				/>
			))}
		</div>
	);
};

export default NewsList;
