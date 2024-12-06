"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

const AuthForm = () => {
    const [isClient, setIsClient] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter(); // Create an instance of the router
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((form) => ({ ...form, [e.target.name]: e.target.value }));
    };

    const signInUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Validate input
            if (!formData.email || !formData.password) {
                toast.error("Email and password are required");
                return;
            }

            // Send data to the server
            const response = await axios.put("/api/auth", formData);
            // toast.success(response.data.msg);
            // Store in localStorage
            localStorage.setItem("email", formData.email); // To maintain email across the app

            // Clear form
            setFormData({ email: "", password: "", confirmPassword: "" });

            // Save token (optional)
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token); // For authentication
            }

            // Navigate to the dashboard
            router.push('/dashboard'); // This navigates to the dashboard page
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            toast.error(errorMessage);
        }
    };

    const signUpUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const { password, confirmPassword, email } = formData;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const { data } = await axios.post("/api/auth", { email, password });
            toast.success(data.msg);
            setFormData({ email: "", password: "", confirmPassword: "" });
            setIsSignUp(false)
        } catch (error: unknown) {
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.error
                ? error.response.data.error
                : "An error occurred";

            toast.error(errorMessage);
        }
    };


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>
            <ToastContainer />
            <Head>
                <title>{isSignUp ? "Sign Up" : "Sign In"}</title>
            </Head>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-300 via-base-100 to-pink-600">
                {/* Gradient Animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-base-300 via-base-100 to-accent opacity-60 mix-blend-overlay"
                    initial={{ scale: 1 }}
                    animate={{
                        scale: 2,
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                ></motion.div>

                {/* Pulsating Circles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 border-4 border-accent rounded-full opacity-20"
                        style={{
                            top: `${Math.random() * 90}vh`,
                            left: `${Math.random() * 90}vw`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Floating Squares */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-12 h-12 bg-white/20 rounded-md shadow-lg"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                        animate={{
                            y: ["0%", "10%", "-10%", "0%"],
                            x: ["0%", "10%", "-10%", "0%"],
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}

                {/* Rotating Circles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-16 h-16 border-2 border-accent rounded-full"
                        style={{
                            top: `${30 + i * 10}vh`,
                            left: `${30 + i * 10}vw`,
                        }}
                        animate={{
                            // rotate: [0, 360],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

                {/* Animated Stars Background */}
                {[...Array(200)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-50"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Sign-In / Sign-Up Form */}
                <motion.div
                    initial={{ opacity: 0.95, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: [50, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeOut",
                    }}
                    className="relative z-10 bg-white shadow-lg rounded-xl p-6 w-full max-w-sm"
                >
                    <h1 className="text-2xl font-bold text-center mb-4 text-base-300">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </h1>
                    <form onSubmit={isSignUp ? signUpUser : signInUser}>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-base-300 font-medium text-lg">Email</span>
                            </label>
                            <motion.input
                                type="email"
                                name="email"
                                onChange={onChangeHandler}
                                value={formData.email}
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                autoFocus
                                spellCheck="false"
                                whileFocus={{ scale: 1.05 }} // Slight scale increase on focus
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-base-300 font-medium text-lg">Password</span>
                            </label>
                            <motion.input
                                type="password"
                                name="password"
                                onChange={onChangeHandler}
                                value={formData.password}
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                whileFocus={{ scale: 1.05 }} // Slight scale increase on focus
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        {isSignUp && (
                            <div className="form-control mb-1">
                                <label className="label">
                                    <span className="label-text text-base-300 font-medium text-lg">Confirm Password</span>
                                </label>
                                <motion.input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={onChangeHandler}
                                    value={formData.confirmPassword}
                                    placeholder="Confirm your password"
                                    className="input input-bordered w-full"
                                    whileFocus={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        )}
                        <div className="form-control mt-3">
                            <motion.button
                                type="submit"
                                className="btn btn-neutral w-full mt-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isSignUp ? "Sign Up" : "Sign In"}
                            </motion.button>
                        </div>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        {isSignUp ? (
                            <>
                                Already have an account?{" "}
                                <motion.a
                                    href="#"
                                    onClick={() => setIsSignUp(false)}
                                    className="text-blue-500 hover:underline"
                                    whileHover={{ scale: 1.1 }} // Scale increase on hover
                                    transition={{ duration: 0.3 }}
                                >
                                    Sign In
                                </motion.a>
                            </>
                        ) : (
                            <>
                                Don&apos;t have an account?{" "}
                                <motion.a
                                    href="#"
                                    onClick={() => setIsSignUp(true)}
                                    className="text-blue-500 hover:underline"
                                    whileHover={{ scale: 1.1 }} // Scale increase on hover
                                    transition={{ duration: 0.3 }}
                                >
                                    Sign Up
                                </motion.a>
                                <br />
                                <motion.a
                                    href="#"
                                    className="text-blue-500 hover:underline cursor-not-allowed"
                                    whileHover={{ scale: 1.1 }} // Scale increase on hover
                                    transition={{ duration: 0.3 }}
                                >
                                    Forgot Password?
                                </motion.a>
                            </>
                        )}
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default AuthForm;

