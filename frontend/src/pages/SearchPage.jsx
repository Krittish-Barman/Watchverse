import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SearchPage = () => {
	const [activeTab, setActiveTab] = useState("movie");
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const { setContentType } = useContentStore();

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		tab === "movie" ? setContentType("movie") : setContentType("tv");
		setResults([]);
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`);
			setResults(res.data.content);
		} catch (error) {
			if (error.response?.status === 404) {
				toast.error("Nothing found, make sure you are searching under the right category");
			} else {
				toast.error("An error occurred, please try again later");
			}
		}
	};

	return (
		<div className='bg-black min-h-screen text-white font-poppins'>
			<Navbar />
			<div className='container mx-auto px-4 py-8'>
				<div className='flex justify-center gap-3 mb-4'>
					{["movie", "tv", "person"].map((tab) => (
						<button
							key={tab}
							onClick={() => handleTabClick(tab)}
							className={`py-2 px-4 rounded font-semibold transition duration-300 ${
  tab === activeTab ? "bg-purpleMain" : "bg-gray-800 hover:bg-purpleMain/50"
							}`}
						>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</div>

				<form className='flex gap-2 items-stretch mb-8 max-w-2xl mx-auto' onSubmit={handleSearch}>
					<input
						type='text'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={`Search for a ${activeTab}`}
						className='w-full p-2 rounded bg-gray-800 text-white border border-purpleMain focus:outline-none focus:ring-2 focus:ring-pinkSoft'
					/>
					<button className='bg-purpleMain hover:bg-pinkSoft text-white p-2 rounded transition duration-300'>
						<Search className='size-6' />
					</button>
				</form>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					{results.map((result) => {
						if (!result.poster_path && !result.profile_path) return null;
						return (
							<motion.div
								key={result.id}
								className='bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300'
								whileHover={{ scale: 1.03 }}
							>
								{activeTab === "person" ? (
									<div className='flex flex-col items-center'>
										<img
											src={ORIGINAL_IMG_BASE_URL + result.profile_path}
											alt={result.name}
											className='max-h-96 rounded-full border border-purpleMain'
										/>
										<h2 className='mt-2 text-xl font-bold text-pinkSoft'>{result.name}</h2>
									</div>
								) : (
									<Link
										to={`/watch/${result.id}`}
										onClick={() => setContentType(activeTab)}
									>
										<img
											src={ORIGINAL_IMG_BASE_URL + result.poster_path}
											alt={result.title || result.name}
											className='w-full h-auto rounded border border-purpleMain'
										/>
										<h2 className='mt-2 text-xl font-bold text-purpleMain'>{result.title || result.name}</h2>
									</Link>
								)}
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
};

export default SearchPage;
