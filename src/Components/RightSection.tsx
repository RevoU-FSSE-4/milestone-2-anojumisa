import React from "react";

type newsProp = {
	news: any;
};
const RightSection = (props: newsProp) => {
	const topNews = props.news.slice(0, 10);
	return (
		<div className="">
			<h1 className="text-2xl font-extrabold text-center">TOP NEWS</h1>
			<ul className="flex flex-row flex-wrap max-w text-m text-gray-500 dark:text-gray-400 list-outside">
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
							className="font-semibold text-left text-gray-900 dark:text-black"
						><a href={data.url}>
							{(index as number) + 1}. {data.title} {/* Type assertion */}
							</a>
						</li>
					)
				)}
			</ul>
		</div>
		//    <div className="w-56">
		//         <h1>TOP NEWS</h1>
		//         {props?.news?.map((data:any) => {
		//             return <>
		//             <ul className=" max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">

		//                 <li className="font-semibold text-left text-gray-900 dark:text-black text-pretty">{data?.title}</li>
		//             </ul>
		//             <br className="mt-4"/>
		//             </>
		//         })}
		//    </div>
	);
};

export default RightSection;
