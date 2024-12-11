'use client';

import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// Define the structure for topics data
interface Topic {
    name: string;
    completed: number;
    total: number;
}

// Data for the Polar Area Chart
const topics: Topic[] = [
    { name: 'Array', completed: 50, total: 50 },
    { name: 'Stack', completed: 30, total: 80 },
    { name: 'Queue', completed: 12, total: 20 },
    { name: 'Linked List', completed: 15, total: 40 },
    { name: 'Binary Tree', completed: 25, total: 50 },
    { name: 'Graph', completed: 18, total: 60 },
    { name: 'Hash Map', completed: 35, total: 60 },
    { name: 'Dynamic Programming', completed: 0, total: 60 },
];

// Darker shades for background colors
const backgroundColors = [
    '#B13D2D', // Darker Red for Array
    '#1B8C3D', // Darker Green for Stack
    '#2A3F91', // Darker Blue for Queue
    '#B61D6C', // Darker Pink for Linked List
    '#D38F00', // Darker Yellow for Binary Tree
    '#8B0C2A', // Darker Red for Hash Map
    '#A5D78A', // Darker Light Green for Graph
    '#14b8a6', // Darker Dark Red for Dynamic Programming
];

// Extract labels and data
const data = {
    labels: topics.map(topic => `${topic.name} (${topic.completed}/${topic.total})`),
    datasets: [
        {
            label: 'Topics Distribution',
            data: topics.map(topic => (topic.completed / topic.total) * 100), // Calculate the percentage completion for each topic
            backgroundColor: backgroundColors,
            borderWidth: 2,
        },
        {
            label: 'Empty Portion',
            data: topics.map(topic => 100 + (topic.total * 0)), // The empty portion of the topic
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light gray to represent the empty portion
            borderWidth: 0.5,
        },
    ],
};

// Chart options to hide radial numbers and enhance tooltips
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Disable the legend
        },
        tooltip: {
            callbacks: {
                label: (context: any) => {
                    const index = context.dataIndex;
                    const topic = topics[index];
                    return `   (${((topic.completed / topic.total) * 100).toFixed(2)}%)`;
                },
            },
        },
    },
    scales: {
        r: {
            ticks: {
                display: false, // Disable numbers on radial scale
            },
        },
    },
};

// Polar Area Chart Component
const PolarChartExample: React.FC = () => {
    return (
        <div className="w-1/2 mx-auto text-center bg-gray-500 rounded-full mt-2">
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarChartExample;

// 'bg-red-700', // Darker Red for Array
// 'bg-green-700', // Darker Green for Stack
// 'bg-blue-700', // Darker Blue for Queue
// 'bg-pink-700', // Darker Pink for Linked List
// 'bg-yellow-700', // Darker Yellow for Binary Tree
// 'bg-green-800', // Darker Green for Graph
// 'bg-red-800', // Darker Red for Hash Map
// bg-teal-500 – 
