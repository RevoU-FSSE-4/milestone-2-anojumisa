import React from "react";

type newsProp = {
	news: any;
};
const RightSection = (props: newsProp) => {
	const topNews = props.news.slice(0, 10);
	return (
		<div className="w-56">
			<h1>TOP NEWS</h1>
			<ul className="max-w-md space-y-1 text-gray-500 dark:text-gray-400">
				{topNews.map(
					(data: { title: string }, index: React.Key | null | undefined) => (
						<li
							key={index}
							className="font-semibold text-left text-gray-900 dark:text-black text-pretty list-outside"
						>
							{(index as number) + 1}. {data.title} {/* Type assertion */}
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
