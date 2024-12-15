'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const router = useRouter();
    const [rating, setRating] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAvatarClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            router.push('/profile');
        }, 1000);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setRating(parsedUser.rating);
            }
        }
    }, []);

    return (
        <div className='mx-10'>
            <div className="navbar bg-gray-400 rounded-box text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a href='https://tineshwarke-portfolio.vercel.app/' target="_blank">Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-2xl">Data Structures & Algorithms Visualizer</a>
                </div>
                <div className="navbar-end">
                    <div className="rating gap-1 mx-4">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked={rating === 1} onChange={() => setRating(1)} />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked={rating === 2} onChange={() => setRating(2)} />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" checked={rating === 3} onChange={() => setRating(3)} />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked={rating === 4} onChange={() => setRating(4)} />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked={rating === 5} onChange={() => setRating(5)} />
                    </div>
                    <div
                        tabIndex={0}
                        role="button"
                        className={`btn btn-ghost btn-circle avatar bg-base-300 ${isLoading ? 'cursor-wait' : ''
                            }`}
                    >
                        <div className="w-10 rounded-full" onClick={handleAvatarClick}>
                            {isLoading ? (
                                <span className="loading loading-spinner loading-lg bg-gray-600"></span>
                            ) : (
                                <img alt="T" src="/coder.png" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
