import React from "react";

type newsProp = {
	news: any;
};
const RightSection = (props: newsProp) => {
	
	const topNews = props.news?.slice(0, 5);
	return (
		<div className="bg-yellow-600">
			<h1 className="text-4xl text-red-700 font-extrabold text-center underline">TOP NEWS</h1>
			<ul className="flex  max-w text-m text-gray-500 dark:text-gray-400 list-outside">
				{topNews.map(
					(
						data: {
							url: string | undefined;
							title: string;
						},
						index: React.Key | null | undefined
					) => (
						<li
							key={index}
							className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box font-semibold text-left text-gray-900 dark:text-black hover:bg-yellow-700 hover:text-gray-300 rounded-md mt-3"
						><a href={data.url}>
							<span className="text-3xl text-red-700">{(index as number) + 1}. </span> {data.title} {/* Type assertion */}
							</a>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default RightSection;
