import React, { useEffect, useState } from "react";
import SearchFeature from "./SearchFeature";
import SearchResultsList from "./SearchResultsList";
import { Link } from "react-router-dom";
import axios from "axios";

interface Article {
	title: string;
	url: string;
	description: string;
}

const apiKey = "19d2d58149474e4cb08304a83cbe8ffc";
const Navbar: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (query: string) => {
		setSearchTerm(query);
		const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}&pageSize=5`;
		axios
			.get(url)
			.then((response) => setArticles(response.data.articles))
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		if (searchTerm) {
			handleSearch(searchTerm);
		}
	}, [searchTerm]);

	return (
		<div>
			<nav className="bg-white border-gray-200 dark:bg-red-800">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link
						className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
						to="/"
					>
						AJ News
					</Link>

					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-red-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-800 dark:border-gray-700">
						<li>
							<Link
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								to="/politics"
							>
								Politics
							</Link>
						</li>
						<li>
							<Link
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								to="/business"
							>
								Business
							</Link>
						</li>
						<li>
							<Link
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								to="/entertainment"
							>
								Entertainment
							</Link>
						</li>
						<li>
							<Link
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								to="/technology"
							>
								Technology
							</Link>
						</li>
						
					</ul>
					{/* <SearchFeature /> */}
					<div className="App">
						<SearchFeature onSearch={handleSearch} />
						
					</div>
					{articles.length > 0 && <SearchResultsList articles={articles} />}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
