'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Props: React.FC = () => {
    const [edit, setEdit] = useState(true);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        fullName: '',
        bio: ''
    })

    const saveChanges = async () => {
        try {
            if (formData.userName.length < 8 || formData.userName.length > 20) {
                toast.error("Username must be between 8 and 20 characters.");
                getData();
                return;
            }

            if (formData.userName.includes(' ')) {
                toast.error("Username cannot contain spaces.");
                getData();
                return;
            }

            if (formData.fullName.length < 8 || formData.fullName.length > 20) {
                toast.error("Username must be between 8 and 20 characters.");
                getData();
                return;
            }

            if (formData.bio.length > 120) {
                toast.error("Bio must be less than 120 characters.");
                getData();
                return;
            }

            let response = await axios.post("/api/user", { user: formData });
            toast.success(response.data.msg);
            getData();
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            toast.error(errorMessage);
        }
    }

    const getData = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/user", { email: parsedUser.email });
                    const { user } = response.data;
                    setFormData({
                        userName: user.userName,
                        email: user.email,
                        fullName: user.fullName,
                        bio: user.bio
                    })
                }
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            console.log(errorMessage);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    interface CustomStyle extends React.CSSProperties {
        "--value"?: string;
        "--size"?: string;
        "--thickness"?: string;
    }

    return (
        <div className="w-full h-full border-white border-4 p-5 rounded-badge shadow-lg flex flex-col items-center justify-center">
            <div className="flex w-full pl-10">
                <div className="radial-progress text-accent mr-10" style={{ "--value": "70", "--size": "12rem", "--thickness": "1.5rem" } as CustomStyle} role="progressbar">
                    <img src={'./coder.png'} alt="T" width={142} height={142} className="rounded-full" />
                </div>
                <form>
                    <div className="grid grid-cols-2 h-48 w-[900px] mx-auto rounded-badge">
                        <div>
                            <label className="input mt-2 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                                Username:
                                {
                                    edit ? <h1 className="grow text-white">{formData.userName}</h1>
                                        : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0"
                                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                                }
                            </label>
                            <label className="input mt-4 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                                Email:
                                <h1 className="grow text-white">{formData.email}</h1>
                            </label>
                            <label className="input mt-4 input-bordered flex items-center gap-2 w-96 bg-gray-700 border-none text-accent text-xl font-semibold">
                                Name:
                                {
                                    edit ? <h1 className="grow text-white">{formData.fullName}</h1>
                                        : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0"
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                                }
                            </label>
                        </div>
                        <div>
                            <label className="input mt-2 input-bordered flex items-center gap-2 w-full h-28 bg-gray-700 border-none text-white text-xl font-semibold">
                                {
                                    edit ? <h1 className="grow text-justify"><span className="text-accent">Bio:</span>{'  '} {formData.bio}</h1>
                                        : <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs border-0"
                                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })} />
                                }
                            </label>
                            <div className="flex justify-end mt-4">
                                {
                                    edit ? (
                                        <button
                                            className="btn btn-wide btn-outline btn-accent"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setEdit(false); // Enable editing
                                            }}
                                        >
                                            Edit
                                        </button>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                className="btn btn-outline btn-error w-40"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    getData();
                                                    setEdit(true);
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn w-52 btn-outline btn-accent"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    saveChanges();
                                                    setEdit(true);
                                                }}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Props;
