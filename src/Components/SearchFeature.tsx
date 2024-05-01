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
				console.log(json);
			});
	};

	const handleChange = (value: React.SetStateAction<string>) => {
		setInput(value);
		fetchData(value);
	};
	return (
		<div className="flex flex-1 mx-auto">
			<FaSearch id="Search-icon" />
			<input
				placeholder="type to search..."
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};

export default SearchFeature;
