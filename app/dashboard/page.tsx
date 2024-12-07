'use client'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    const topics = [
        { id: 1, title: 'Arrays', description: 'Learn the fundamentals of arrays and how to use them in algorithms.', path: '/dsa/arrays' },
        { id: 2, title: 'Strings', description: 'Learn the fundamentals of strings and how to use them in algorithms.', path: '/dsa/strings' },
        { id: 3, title: 'Sorting Algorithms', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/sorting' },
        { id: 4, title: 'Sets', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/sets' },
        { id: 5, title: 'Map', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/map' },
        { id: 6, title: 'Linked List', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/linkedlist' },
        { id: 7, title: 'Stack', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/stack' },
        { id: 8, title: 'Queue', description: 'Study popular sorting algorithms and their complexities.', path: '/dsa/queue' },
    ];

    const handleTopicClick = (path: string) => {
        router.push(path);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Render nothing on the server side
    }
    return (
        <div className='w-screen h-screen'>
            <ToastContainer />
            {/* Animated Stars Background */}
            {[...Array(200)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-50"
                    style={{
                        top: `${Math.random() * 99}vh`,
                        left: `${Math.random() * 99}vw`,
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

            <motion.h1
                className="text-4xl font-bold text-center text-white w-screen"
                animate={{
                    opacity: 1,
                    y: [20, 17],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                Data Structures & Algorithms Visualizer
            </motion.h1>

            {/* DSA Topics Divs */}
            <div className="flex flex-wrap justify-center gap-8 w-[96vw] mx-auto mt-12 h-[85vh] overflow-y-scroll">
                {topics.map((topic) => (
                    <motion.div
                        key={topic.id}
                        className="btn w-80 h-48 p-6 m-2 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: topic.id * 0.2,
                            type: 'spring',
                            stiffness: 50,
                        }}
                        onClick={() => handleTopicClick(topic.path)}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-gray-800 mb-4"
                        >
                            {topic.title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-600"
                        >
                            {topic.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
