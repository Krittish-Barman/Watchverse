import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { motion } from "framer-motion";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoggingIn } = useAuthStore();

	const handleLogin = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<div className='h-screen w-full hero-bg font-poppins'>
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
				<Link to={'/'}>
					<img src='/netflix-logo.png' alt='logo' className='w-52' />
				</Link>
			</header>

			<div className='flex justify-center items-center mt-10 mx-3'>
				<motion.div 
					className='w-full max-w-md p-8 space-y-6 bg-black/70 rounded-2xl shadow-2xl border border-purpleMain'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-center text-purpleMain text-3xl font-bold mb-4'>Login</h1>

					<form className='space-y-4' onSubmit={handleLogin}>
						<div>
							<label htmlFor='email' className='text-sm font-medium text-pinkSoft block'>
								Email
							</label>
							<input
								type='email'
								className='w-full px-4 py-2 mt-1 border border-purpleMain rounded-md bg-transparent text-white focus:outline-none focus:ring focus:ring-purpleMain'
								placeholder='you@example.com'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='password' className='text-sm font-medium text-pinkSoft block'>
								Password
							</label>
							<input
								type='password'
								className='w-full px-4 py-2 mt-1 border border-purpleMain rounded-md bg-transparent text-white focus:outline-none focus:ring focus:ring-purpleMain'
								placeholder='••••••••'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							type='submit'
							className='w-full py-2 bg-purpleMain text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-300'
							disabled={isLoggingIn}
						>
							{isLoggingIn ? "Loading..." : "Login"}
						</button>
					</form>
					<p className='text-center text-sm text-gray-300'>
						Don't have an account?{' '}
						<Link to={'/signup'} className='text-pinkSoft hover:underline'>Sign Up</Link>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default LoginPage;
