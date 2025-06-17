import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div
			className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative animate-fade-in'
			style={{ backgroundImage: `url('/404.png')` }}
		>
			{/* Header */}
			<header className='absolute top-0 left-0 w-full p-4 bg-blackGlass flex items-center justify-start backdrop-blur-md z-20'>
				<Link to='/'>
					<img src='/netflix-logo.png' alt='Netflix' className='h-8 hover:scale-105 transition-transform duration-200' />
				</Link>
			</header>

			{/* Main Content */}
			<main className='text-center px-6 z-10'>
				<h1 className='text-5xl md:text-7xl font-bold mb-4 text-purpleMain drop-shadow-lg animate-bounce-in'>
					Lost your way?
				</h1>
				<p className='mb-6 text-lg md:text-xl text-pinkSoft max-w-xl mx-auto'>
					Sorry, we can't find that page. But don't worry — you'll find plenty to explore on the home page.
				</p>

				<Link
					to='/'
					className='bg-purpleMain hover:bg-fuchsiaMain text-white font-medium py-2 px-6 rounded-xl shadow-xl transition-all duration-300 animate-slide-in'
				>
					Go Back to WATCHVERSE Home
				</Link>
			</main>

			{/* Overlay if needed */}
			<div className='absolute inset-0 bg-blackGlass z-0'></div>
		</div>
	);
};

export default NotFoundPage;
