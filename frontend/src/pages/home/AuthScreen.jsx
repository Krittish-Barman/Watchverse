import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='hero-bg relative font-[Poppins] bg-gradient-to-b from-purple-900 via-fuchsia-800 to-pink-600 text-white'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 md:w-52 brightness-150' />
				<Link to={"/login"} className='text-white bg-purple-700 hover:bg-fuchsia-600 transition py-1 px-2 rounded shadow-lg'>
					Sign In
				</Link>
			</header>

			{/* hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto animate-fade-in'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text'>Every emotion, Every genre, Every screen</h1>
				<p className='text-lg mb-4 text-fuchsia-200'>Watch anything. On any screen. With zero pressure.</p>
				<p className='mb-4 text-pink-200'>Sign up now with your email and join the fun.</p>

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/80 border border-fuchsia-500 text-white focus:outline-none focus:ring-2 focus:ring-pink-400'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-fuchsia-600 hover:bg-pink-600 transition text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center shadow-xl'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
			</div>

			{/* separator */}
			<div className='h-2 w-full bg-black/50' aria-hidden='true' />

			{/* 1st section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-purple-300'>Watch it your way</h2>
						<p className='text-lg md:text-xl text-pink-200'>Binge-worthy shows and blockbusters — now playing on every device you own.</p>
					</div>
					<div className='flex-1 relative'>
						<img src='/tv.png' alt='Tv image' className='mt-4 z-20 relative rounded-xl shadow-lg' />
						<video
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10 rounded-lg shadow-inner'
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/hero-vid.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-black/50' aria-hidden='true' />

			{/* 2nd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/stranger-things-lg.png' alt='Stranger Things img' className='mt-4 rounded-xl shadow-lg' />
							<div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-pink-500 rounded-md px-2'>
								<img src='/stranger-things-sm.png' alt='image' className='h-full' />
								<div className='flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold text-fuchsia-300'>Housefull 5</span>
										<span className='text-sm text-blue-500'>Downloading...</span>
									</div>
									<img src='/download-icon.gif' alt='' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-purple-300'>Offline is the new online.</h2>
						<p className='text-lg md:text-xl text-pink-200'>Download shows with one tap and enjoy them wherever life takes you.</p>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-black/50' aria-hidden='true' />

			{/* 3rd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-purple-300'>Watch everywhere</h2>
						<p className='text-lg md:text-xl text-pink-200'>On any screen. At any time. In the comfort of your home</p>
					</div>
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative rounded-xl shadow-lg' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%] rounded-lg shadow-inner'
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-black/50' aria-hidden='true' />

			{/* 4th section*/}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
					<div className='flex-1 relative'>
						<img src='/kids.png' alt='Enjoy on your TV' className='mt-4 rounded-xl shadow-lg' />
					</div>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-purple-300'>A world of wonder for every child</h2>
						<p className='text-lg md:text-xl text-pink-200'>Create kid-friendly profiles so they can explore, laugh, and learn in a safe environment.</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthScreen;
