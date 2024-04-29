import React from "react";

interface NewsItemProps {
	title: string;
	description: string;
	url: string;
	urlToImage: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
	title,
	description,
	url,
	urlToImage,
}) => {
	return (
		<div className="news-app">
			<div className="news-item">
				<img className="news-img" src={urlToImage} alt={url} />
				<h3>
					<a href={url}>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default NewsItem;
