'use client'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Navbar from './navbar';

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    const topics = [
        {
            id: 1, title: 'Arrays',
            description: 'Learn the fundamentals of arrays, including their structure, indexing, and common operations like traversal, insertion, and deletion. Discover how arrays form the basis for more complex data structures and algorithms.',
            path: '/dsa/arrays'
        },
        {
            id: 2, title: 'Strings',
            description: 'Understand the intricacies of strings, including manipulation techniques such as concatenation, substring extraction, and pattern matching. Explore their role in text processing and algorithmic problem-solving.',
            path: '/dsa/strings'
        },
        {
            id: 3, title: 'Sorting Algorithms',
            description: 'Dive into popular sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort. Learn their time and space complexities, use cases, and how to implement them efficiently.',
            path: '/dsa/sorting'
        },
        {
            id: 4, title: 'Sets',
            description: 'Explore the set data structure and its properties, including uniqueness and unordered storage. Learn about operations like union, intersection, and difference, and their applications in solving problems.',
            path: '/dsa/sets'
        },
        {
            id: 5, title: 'Map',
            description: 'Gain an understanding of map data structures, including hash maps and tree maps. Learn about key-value pair storage, hashing techniques, and practical applications like frequency counting.',
            path: '/dsa/map'
        },
        {
            id: 6, title: 'Stack',
            description: 'Learn about the stack data structure, its LIFO (Last In, First Out) property, and common operations like push and pop. Discover its use in recursion, expression evaluation, and backtracking.',
            path: '/dsa/stack'
        },
        {
            id: 7, title: 'Queue',
            description: 'Understand the FIFO (First In, First Out) property of queues and their variants like circular queues and priority queues. Explore their applications in scheduling, buffering, and breadth-first search.',
            path: '/dsa/queue'
        },
        {
            id: 8, title: 'Linked List',
            description: 'Dive into linked lists and learn about their structure, types (singly, doubly, and circular), and operations. Explore their advantages over arrays in dynamic memory allocation.',
            path: '/dsa/linkedlist'
        }
    ]
        ;

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
        <div className='w-screen h-screen pt-4'>
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
            <Navbar />

            {/* DSA Topics Divs */}
            <div className="flex flex-wrap justify-center gap-8 w-[96vw] mx-auto mt-12 h-[80vh] overflow-y-scroll">
                {topics.map((topic) => (
                    <motion.div
                        key={topic.id}
                        className="btn w-80 h-48 p-6 mx-2 my-8 bg-white rounded-lg shadow-lg transform transition-all hover:bg-gray-400 cursor-pointer"
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
                            className="text-2xl font-bold text-gray-800"
                        >
                            {topic.title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-600 text-justify"
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
