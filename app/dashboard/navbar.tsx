'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const router = useRouter();

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
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-2xl">Data Structures & Algorithms Visualizer</a>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-base-300">
                        <div className="w-10 rounded-full" onClick={() => router.push('/profile') }>
                            <img
                                alt="T"
                                src="/coder.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
