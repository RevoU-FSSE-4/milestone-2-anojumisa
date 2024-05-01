import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchFeature = () => {
	const [input, setInput] = useState("");

	const fetchData = (value: React.SetStateAction<string>) => {
		fetch(
			"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=19d2d58149474e4cb08304a83cbe8ffc"
		)
			.then((response) => response.json())
			.then((json) => {
				const results = json.articles.filter((article: any) => 
					article.title.toLowerCase().includes(value)
				);
				console.log(results);
			});
	};

	const handleChange = (value: React.SetStateAction<string>) => {
		setInput(value);
		fetchData(value);
	};
	return (
		
			<div className=" block w-60 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 start-0 flex items-center ps-3 ">
				<FaSearch id="Search-icon" />
				<input
					className="block w-50 p-2 ps-10 text- text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
					value={input}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
			
		
	);
};

export default SearchFeature;
