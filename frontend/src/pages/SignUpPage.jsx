import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const SignUpPage = () => {
	const { searchParams } = new URL(document.location);
	const emailValue = searchParams.get("email");

	const [email, setEmail] = useState(emailValue || "");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { signup, isSigningUp } = useAuthStore();

	return (
		<div className="min-h-screen w-full bg-[url('/public/hero.png')] bg-cover bg-center bg-no-repeat font-[Poppins] text-white animate-fade-in">
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
				<Link to={"/"}>
					<img src='/netflix-logo.png' alt='logo' className='w-52 drop-shadow-xl' />
				</Link>
			</header>

			<div className='flex justify-center items-center mt-20 mx-3'>
				<div className='w-full max-w-md p-8 space-y-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl border border-pink-300 animate-slide-in'>
					<h1 className='text-center text-3xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md'>
						Create Your Account
					</h1>

					<form className='space-y-4' onSubmit={(e) => {
						e.preventDefault();
						signup({ email, username, password });
					}}>
						<div>
							<label htmlFor='email' className='text-sm font-medium text-pink-200 block'>
								Email
							</label>
							<input
								type='email'
								className='w-full px-3 py-2 mt-1 border border-pink-400 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner'
								placeholder='you@example.com'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='username' className='text-sm font-medium text-pink-200 block'>
								Username
							</label>
							<input
								type='text'
								className='w-full px-3 py-2 mt-1 border border-pink-400 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner'
								placeholder='johndoe'
								id='username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='password' className='text-sm font-medium text-pink-200 block'>
								Password
							</label>
							<input
								type='password'
								className='w-full px-3 py-2 mt-1 border border-pink-400 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner'
								placeholder='••••••••'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							className='w-full py-2 bg-fuchsia-600 text-white font-semibold rounded-md hover:bg-pink-500 transition-all duration-300 ease-in-out disabled:opacity-50 shadow-md'
							disabled={isSigningUp}
						>
							{isSigningUp ? "Creating..." : "Sign Up"}
						</button>
					</form>

					<div className='text-center text-pink-100'>
						Already a member?{" "}
						<Link to={"/login"} className='text-white underline hover:text-fuchsia-300 transition'>
							Sign in here
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
