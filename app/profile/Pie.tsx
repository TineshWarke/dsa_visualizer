'use client';

import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register necessary components for Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// Define the structure for topics data
interface Topic {
    name: string;
    completed: number;
    total: number;
}

// Polar Area Chart Component
const PolarChartExample: React.FC = () => {
    const [arr, setArr] = useState<number>(0);
    const [str, setStr] = useState<number>(0);
    const [sort, setSort] = useState<number>(0);
    const [set, setSet] = useState<number>(0);
    const [map, setMap] = useState<number>(0);
    const [stk, setStk] = useState<number>(0);
    const [que, setQue] = useState<number>(0);
    const [list, setList] = useState<number>(0);

    // Data for the Polar Area Chart
    const topics: Topic[] = [
        { name: 'Array', completed: arr, total: 21 },
        { name: 'String', completed: str, total: 25 },
        { name: 'Sorting Algorithams', completed: sort, total: 10 },
        { name: 'Set', completed: set, total: 10 },
        { name: 'Map', completed: map, total: 10 },
        { name: 'Stack', completed: stk, total: 19 },
        { name: 'Queue', completed: que, total: 16 },
        { name: 'Linked List', completed: list, total: 21 },
    ];

    const backgroundColors = [
        '#B13D2D',
        '#1B8C3D', 
        '#2A3F91', 
        '#B61D6C', 
        '#D38F00',
        '#8B0C2A', 
        '#A5D78A', 
        '#14b8a6', 
    ];

    const data = {
        labels: topics.map(topic => `${topic.name} (${topic.completed}/${topic.total})`),
        datasets: [
            {
                label: 'Complete',
                data: topics.map(topic => (topic.completed / topic.total) * 100),
                backgroundColor: backgroundColors,
                borderWidth: 2,
            },
            {
                label: 'Pending',
                data: topics.map(topic => 100 + (topic.total * 0)),
                borderWidth: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
        },
        scales: {
            r: {
                ticks: {
                    display: false,
                },
            },
        },
    };

    const getTopicData = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/topic", { email: parsedUser.email });
                    const { topicData } = response.data
                    setArr(topicData[0].completedQuestions.length);
                    setStr(topicData[1].completedQuestions.length);
                    setSort(topicData[2].completedQuestions.length);
                    setSet(topicData[3].completedQuestions.length);
                    setMap(topicData[4].completedQuestions.length);
                    setStk(topicData[5].completedQuestions.length);
                    setQue(topicData[6].completedQuestions.length);
                    setList(topicData[7].completedQuestions.length);
                }
            }
        } catch (error) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data?.error
                    ? error.response.data.error
                    : "An error occurred";
            console.log(errorMessage);
        }
    };

    useEffect(() => {
        getTopicData();
    }, [])

    return (
        <div className="w-1/2 mx-auto text-center bg-gray-500 rounded-full mt-2 border-4 border-accent">
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarChartExample;