'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface Problem {
    title: string;
    titleSlug: string;
    level: string;
    topics: string[];
}

const problems: Problem[] = [
    {
        title: "Find the Closest Point to the Origin",
        titleSlug: "find-the-closest-point-to-the-origin",
        level: "Easy",
        topics: ["Math", "Geometry"]
    },
    {
        title: "Count Number of Distinct Integers After Reverse Operations",
        titleSlug: "count-number-of-distinct-integers-after-reverse-operations",
        level: "Easy",
        topics: ["Array", "Set"]
    },
    {
        title: "Check if Two String Arrays are Equivalent",
        titleSlug: "check-if-two-string-arrays-are-equivalent",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Find the Winner of an Array Game",
        titleSlug: "find-the-winner-of-an-array-game",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Find Common Characters in Strings",
        titleSlug: "find-common-characters-in-strings",
        level: "Easy",
        topics: ["String", "Array"]
    },
    {
        title: "Determine if a Cell is Reachable in a Grid",
        titleSlug: "determine-if-a-cell-is-reachable-in-a-grid",
        level: "Medium",
        topics: ["Grid", "BFS"]
    },
    {
        title: "Maximum Number of Points with Cost",
        titleSlug: "maximum-number-of-points-with-cost",
        level: "Medium",
        topics: ["Dynamic Programming", "Array"]
    },
    {
        title: "Count the Number of Consistent Strings",
        titleSlug: "count-the-number-of-consistent-strings",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Find First Palindromic String in an Array",
        titleSlug: "find-first-palindromic-string-in-an-array",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Number of Subarrays with Bounded Maximum",
        titleSlug: "number-of-subarrays-with-bounded-maximum",
        level: "Medium",
        topics: ["Array", "Sliding Window"]
    }
];

const LeetCodePage = () => (
    <div className="container mx-auto p-4 mb-8 w-[1300px]">
        <h1 className="text-2xl font-bold mb-4">LeetCode Problems</h1>
        <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.95 }} // Starting slightly scaled down
            animate={{ opacity: 1, scale: 1 }} // End state with full scale and opacity
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }} // Spring animation for smoothness
        >
            {problems.map(({ title, titleSlug, level, topics }, index) => (
                <motion.li
                    key={titleSlug}
                    className="flex items-center justify-between p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }} // Start from below the viewport
                    animate={{ opacity: 1, y: 0 }} // Animate to its normal position
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 25
                    }} // Spring-based animation for individual list items
                >
                    <div className="flex-1">
                        <div className="flex justify-start items-center mb-2 gap-8">
                            <p className="text-lg font-semibold text-white">{title}</p>
                            <div className={`badge pb-3 p-2 text-black font-medium ${level === 'Easy' ? 'bg-green-500' : level === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>{level}</div>
                        </div>
                        <p className="text-sm text-gray-300">{topics.join(", ")}</p>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <Link href={`https://leetcode.com/problems/${titleSlug}`} target="_blank">
                            <button
                                className="btn btn-outline btn-accent"
                                aria-label={`View problem ${title}`}
                            >
                                View
                            </button>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={`checkbox-${titleSlug}`}
                                className="checkbox checkbox-accent"
                            />
                            <label htmlFor={`checkbox-${titleSlug}`} className="text-sm text-gray-300">
                                Mark as Complete
                            </label>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>

    </div>
);

export default LeetCodePage;
