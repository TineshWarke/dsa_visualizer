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
        title: "Build Array from Permutation",
        titleSlug: "build-array-from-permutation",
        level: "Easy",
        topics: ["Array", "Simulation"]
    },
    {
        title: "Concatenation of Array",
        titleSlug: "concatenation-of-array",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Shuffle the Array",
        titleSlug: "shuffle-the-array",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Kids With the Greatest Number of Candies",
        titleSlug: "kids-with-the-greatest-number-of-candies",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Decode XORed Array",
        titleSlug: "decode-xored-array",
        level: "Easy",
        topics: ["Array", "Bit Manipulation"]
    },
    {
        title: "Maximum XOR for Each Query",
        titleSlug: "maximum-xor-for-each-query",
        level: "Medium",
        topics: ["Array", "Bit Manipulation", "Prefix Sum"]
    },
    {
        title: "Matrix Block Sum",
        titleSlug: "matrix-block-sum",
        level: "Medium",
        topics: ["Matrix", "Prefix Sum"]
    },
    {
        title: "How Many Numbers Are Smaller Than the Current Number",
        titleSlug: "how-many-numbers-are-smaller-than-the-current-number",
        level: "Easy",
        topics: ["Array", "Sorting"]
    },
    {
        title: "Minimum Number of Moves to Seat Everyone",
        titleSlug: "minimum-number-of-moves-to-seat-everyone",
        level: "Easy",
        topics: ["Array", "Sorting"]
    },
    {
        title: "Number of Good Pairs",
        titleSlug: "number-of-good-pairs",
        level: "Easy",
        topics: ["Array", "Hash Map"]
    },
    {
        title: "Count the Number of Consistent Strings",
        titleSlug: "count-the-number-of-consistent-strings",
        level: "Easy",
        topics: ["String", "Hash Set"]
    },
    {
        title: "Flipping an Image",
        titleSlug: "flipping-an-image",
        level: "Easy",
        topics: ["Array", "Matrix"]
    },
    {
        title: "Find First Palindromic String in the Array",
        titleSlug: "find-first-palindromic-string-in-the-array",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Find Target Indices After Sorting Array",
        titleSlug: "find-target-indices-after-sorting-array",
        level: "Easy",
        topics: ["Array", "Sorting"]
    },
    {
        title: "Count Negative Numbers in a Sorted Matrix",
        titleSlug: "count-negative-numbers-in-a-sorted-matrix",
        level: "Easy",
        topics: ["Matrix", "Binary Search"]
    },
    {
        title: "Best Time to Buy and Sell Stock",
        titleSlug: "best-time-to-buy-and-sell-stock",
        level: "Easy",
        topics: ["Array", "Dynamic Programming"]
    },
    {
        title: "Get Maximum in Generated Array",
        titleSlug: "get-maximum-in-generated-array",
        level: "Easy",
        topics: ["Array", "Dynamic Programming"]
    },
    {
        title: "Minimum Difference Between Highest and Lowest of K Scores",
        titleSlug: "minimum-difference-between-highest-and-lowest-of-k-scores",
        level: "Easy",
        topics: ["Array", "Sorting"]
    },
    {
        title: "Maximum Average Subarray I",
        titleSlug: "maximum-average-subarray-i",
        level: "Easy",
        topics: ["Array", "Sliding Window"]
    },
    {
        title: "Check if It Is a Straight Line",
        titleSlug: "check-if-it-is-a-straight-line",
        level: "Easy",
        topics: ["Geometry", "Math"]
    },
    {
        title: "Richest Customer Wealth",
        titleSlug: "richest-customer-wealth",
        level: "Easy",
        topics: ["Array", "Matrix"]
    }
];


const LeetCodePage = () => (
    <div className="container mx-auto p-4 mb-8">
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
