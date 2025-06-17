import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function formatDate(dateString) {
	const date = new Date(dateString);
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[date.getUTCMonth()];
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();
	return `${month} ${day}, ${year}`;
}

const SearchHistoryPage = () => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		const getSearchHistory = async () => {
			try {
				const res = await axios.get(`/api/v1/search/history`);
				setSearchHistory(res.data.content);
			} catch (error) {
				setSearchHistory([]);
			}
		};
		getSearchHistory();
	}, []);

	const handleDelete = async (entry) => {
		try {
			await axios.delete(`/api/v1/search/history/${entry.id}`);
			setSearchHistory(searchHistory.filter((item) => item.id !== entry.id));
		} catch (error) {
			toast.error("Failed to delete search item");
		}
	};

	if (searchHistory?.length === 0) {
		return (
			<div className='bg-black min-h-screen text-white font-poppins'>
				<Navbar />
				<div className='max-w-6xl mx-auto px-4 py-8'>
					<h1 className='text-3xl font-bold mb-8 text-purpleMain'>Search History</h1>
					<div className='flex justify-center items-center h-96'>
						<p className='text-xl text-pinkSoft'>No search history found</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-black text-white min-h-screen font-poppins'>
			<Navbar />
			<div className='max-w-6xl mx-auto px-4 py-8'>
				<motion.h1
					className='text-3xl font-bold mb-8 text-purpleMain'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Search History
				</motion.h1>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					{searchHistory?.map((entry) => (
						<motion.div
							key={entry.id}
							className='bg-gray-800 p-4 rounded-xl flex items-start shadow-md hover:shadow-lg transition duration-300'
							whileHover={{ scale: 1.02 }}
						>
							<img
								src={SMALL_IMG_BASE_URL + entry.image}
								alt='History image'
								className='size-16 rounded-full object-cover mr-4 border border-purpleMain'
							/>
							<div className='flex flex-col'>
								<span className='text-white text-lg font-semibold'>{entry.title}</span>
								<span className='text-gray-400 text-sm'>{formatDate(entry.createdAt)}</span>
							</div>

							<span
								className={`py-1 px-3 min-w-20 text-center rounded-full text-sm ml-auto font-medium ${
									entry.searchType === "movie"
										? "bg-purpleMain text-white"
										: entry.searchType === "tv"
										? "bg-pinkSoft text-white"
										: "bg-green-600 text-white"
								}`}
							>
								{entry.searchType[0].toUpperCase() + entry.searchType.slice(1)}
							</span>
							<Trash
								className='size-5 ml-4 cursor-pointer hover:fill-red-600 hover:text-red-600 transition duration-300'
								onClick={() => handleDelete(entry)}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};
export default SearchHistoryPage;
