'use client'
import Image from "next/image";
import React, { useState } from "react";

const Props: React.FC = () => {
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [edit, setEdit] = useState(true);
    return (
        <div className="w-full h-full border-white border-4 p-5 rounded-badge shadow-lg flex flex-col items-center justify-center">
            <div className="flex w-full pl-10">
                <div className="radial-progress text-accent" style={{ "--value": "70", "--size": "12rem", "--thickness": "1.5rem" }} role="progressbar">
                    <img src={'./coder.png'} alt="T" width={142} height={142} className="rounded-full" />
                </div>
                <div className="grid grid-cols-2 h-48 w-[900px] mx-auto rounded-badge">
                    <div>
                        <label className="input mt-2 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                            Username:
                            {
                                edit ? <h1 className="grow text-white">{email}</h1>
                                    : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0" />
                            }
                        </label>
                        <label className="input mt-4 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                            Email:
                            <h1 className="grow text-white">{email}</h1>
                        </label>
                        <label className="input mt-4 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                            Name:
                            {
                                edit ? <h1 className="grow text-white">{email}</h1>
                                    : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0" />
                            }
                        </label>
                    </div>
                    <div>
                        <label className="input mt-2 input-bordered flex items-center gap-2 w-full h-28 bg-gray-700 border-none text-white text-xl font-semibold">
                            {
                                edit ? <h1 className="grow text-justify"><span className="text-accent">Bio:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laboriosam dignissimos neque fuga inventore reiciendis sed hic iste?</h1>
                                    : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0" />
                            }
                        </label>
                        <div className="flex justify-end mt-4">
                            {
                                edit ?
                                    <button className="btn btn-wide btn-outline btn-accent" onClick={() => setEdit(false)}>Edit</button>
                                    : <button className="btn btn-wide btn-outline btn-accent" onClick={() => setEdit(true)}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Props;
