import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../../utils/constants";
import { useContentStore } from "../../store/content";
import MovieSlider from "../../components/MovieSlider";
import { useState } from "react";
import { motion } from "framer-motion";

const HomeScreen = () => {
	const { trendingContent } = useGetTrendingContent();
	const { contentType } = useContentStore();
	const [imgLoading, setImgLoading] = useState(true);

	if (!trendingContent)
		return (
			<div className='h-screen text-white relative'>
				<Navbar />
				<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer' />
			</div>
		);

	return (
		<>
			<div className='relative h-screen text-white font-poppins'>
				<Navbar />

				{imgLoading && (
					<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
				)}

				<img
					src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
					alt='Hero img'
					className='absolute top-0 left-0 w-full h-full object-cover -z-50 transition-opacity duration-1000'
					onLoad={() => setImgLoading(false)}
				/>

				<div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true' />

				<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
					<div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10' />

					<motion.div 
						className='max-w-2xl'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<h1 className='mt-4 text-6xl font-extrabold text-purpleMain drop-shadow-xl'>
							{trendingContent?.title || trendingContent?.name}
						</h1>
						<p className='mt-2 text-lg text-pinkSoft'>
							{trendingContent?.release_date?.split("-")[0] || trendingContent?.first_air_date.split("-")[0]} | {trendingContent?.adult ? "18+" : "PG-13"}
						</p>
						<p className='mt-4 text-lg text-white/90'>
							{trendingContent?.overview.length > 200 ? trendingContent?.overview.slice(0, 200) + "..." : trendingContent?.overview}
						</p>
					</motion.div>

					<motion.div 
						className='flex mt-8'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Link
							to={`/watch/${trendingContent?.id}`}
							className='bg-purpleMain hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl mr-4 flex items-center shadow-lg transition-all duration-300'
						>
							<Play className='size-6 mr-2 fill-white' />
							Play
						</Link>
						<Link
							to={`/watch/${trendingContent?.id}`}
							className='bg-pinkSoft hover:bg-pink-600 text-white py-2 px-4 rounded-xl flex items-center shadow-lg transition-all duration-300'
						>
							<Info className='size-6 mr-2' />
							More Info
						</Link>
					</motion.div>
				</div>
			</div>

			<div className='flex flex-col gap-10 bg-black py-10'>
				{contentType === "movie"
					? MOVIE_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
					: TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)}
			</div>
		</>
	);
};
export default HomeScreen;
