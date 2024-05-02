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
		<div>
			<form className=" ">
				<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-yellow-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search news..."
						onChange={(e) => handleChange(e.target.value)}
					/>
					<button
						type="submit"
						className="text-white absolute end-2.5 bottom-2.5 bg-red-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-900 dark:focus:ring-blue-800"
					>
						Enter
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchFeature;
