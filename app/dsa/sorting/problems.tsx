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
        title: "Find Target Indices After Sorting Array",
        titleSlug: "find-target-indices-after-sorting-array",
        level: "Easy",
        topics: ["Array", "Sorting"]
    },
    {
        title: "Count Negative Numbers in a Sorted Matrix",
        titleSlug: "count-negative-numbers-in-a-sorted-matrix",
        level: "Easy",
        topics: ["Array", "Matrix"]
    },
    {
        title: "The K Weakest Rows in a Matrix",
        titleSlug: "the-k-weakest-rows-in-a-matrix",
        level: "Easy",
        topics: ["Array", "Matrix"]
    },
    {
        title: "Peak Index in a Mountain Array",
        titleSlug: "peak-index-in-a-mountain-array",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Intersection of Two Arrays",
        titleSlug: "intersection-of-two-arrays",
        level: "Easy",
        topics: ["Array", "Hash Set"]
    },
    {
        title: "Minimum Sum of Four Digit Number After Splitting Digits",
        titleSlug: "minimum-sum-of-four-digit-number-after-splitting-digits",
        level: "Easy",
        topics: ["Math", "Greedy"]
    },
    {
        title: "How Many Numbers Are Smaller Than the Current Number",
        titleSlug: "how-many-numbers-are-smaller-than-the-current-number",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Sorting the Sentence",
        titleSlug: "sorting-the-sentence",
        level: "Easy",
        topics: ["String"]
    },
    {
        title: "Maximum Product Difference Between Two Pairs",
        titleSlug: "maximum-product-difference-between-two-pairs",
        level: "Easy",
        topics: ["Array"]
    },
    {
        title: "Maximum Product of Two Elements in an Array",
        titleSlug: "maximum-product-of-two-elements-in-an-array",
        level: "Easy",
        topics: ["Array"]
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
