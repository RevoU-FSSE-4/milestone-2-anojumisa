import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Politics from "./Components/NewsCategory/Politics";
import Entertainment from "./Components/NewsCategory/Entertainment";
import Business from "./Components/NewsCategory/Business";
import Technology from "./Components/NewsCategory/Technology";
import NotFound from "./Components/NotFound";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/politics" element={<Politics urlToImage={""} title={""} source={{
					name: ""
				}} publishedAt={""} description={""} url={""} />} />
				<Route path="/entertainment" element={<Entertainment urlToImage={""} title={""} source={{
					name: ""
				}} publishedAt={""} description={""} url={""} />} />
				<Route path="/technology" element={<Technology urlToImage={""} title={""} source={{
					name: ""
				}} publishedAt={""} description={""} url={""} />} />
				<Route path="/business" element={<Business urlToImage={""} title={""} source={{
					name: ""
				}} publishedAt={""} description={""} url={""} />} />
			</Routes>
		</div>
	);
}

export default App;
