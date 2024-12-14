'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Badge: React.FC = () => {
    const [arr, setArr] = useState<boolean>(false);
    const [str, setStr] = useState<boolean>(false);
    const [sort, setSort] = useState<boolean>(false);
    const [set, setSet] = useState<boolean>(false);
    const [map, setMap] = useState<boolean>(false);
    const [stk, setStk] = useState<boolean>(false);
    const [que, setQue] = useState<boolean>(false);
    const [list, setList] = useState<boolean>(false);

    const getTopicData = async () => {
        try {
            if (typeof window !== "undefined") {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    const response = await axios.put("/api/topic", { email: parsedUser.email });
                    const { topicData } = response.data
                    setArr(topicData[0].completedQuestions.length / 21 === 1);
                    setStr(topicData[1].completedQuestions.length / 25 === 1);
                    setSort(topicData[2].completedQuestions.length / 10 === 1);
                    setSet(topicData[3].completedQuestions.length / 10 === 1);
                    setMap(topicData[4].completedQuestions.length / 10 === 1);
                    setStk(topicData[5].completedQuestions.length / 19 === 1);
                    setQue(topicData[6].completedQuestions.length / 16 === 1);
                    setList(topicData[7].completedQuestions.length / 21 === 1);
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
        <div>
            <div className="flex justify-center pb-4 w-[650px]">
                <h1 className="text-accent text-2xl font-bold">BADGES</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 p-8 border-accent border-4 w-[650px] rounded-badge">
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${arr ? "bg-[#B13D2D]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!arr ? "Complete all array problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${arr ? 'text-white' : 'text-gray-800'}`}>Array</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${str ? "bg-[#1B8C3D]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!str ? "Complete all string problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${str ? 'text-white' : 'text-gray-800'}`}>Strings</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${sort ? "bg-[#2A3F91]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!sort ? "Complete all sorting algorithms problems to earn this badge" : ""}>
                    <h1 className={`text-xl font-bold break-words text-center ${sort ? 'text-white' : 'text-gray-800'}`}>Sorting Algorithms</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${set ? "bg-[#B61D6C]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!set ? "Complete all set problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${set ? 'text-white' : 'text-gray-800'}`}>Sets</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${map ? "bg-[#D38F00]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!map ? "Complete all map problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${map ? 'text-white' : 'text-gray-800'}`}>Map</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${stk ? "bg-[#8B0C2A]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!stk ? "Complete all stack problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${stk ? 'text-white' : 'text-gray-800'}`}>Stack</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${que ? "bg-[#74cf42]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!que ? "Complete all queue problems to earn this badge" : ""}>
                    <h1 className={`text-2xl font-bold ${que ? 'text-white' : 'text-gray-800'}`}>Queue</h1>
                </div>
                <div className={`rounded-badge w-28 h-28 mx-auto border-4 flex items-center justify-center cursor-pointer hover:scale-110 ${list ? "bg-[#14b8a6]  border-accent" : "bg-gray-500 border-white"}`}
                    title={!list ? "Complete all linked list problems to earn this badge" : ""}>
                    <h1 className={`text-xl font-bold break-words text-center ${list ? 'text-white' : 'text-gray-800'}`}>Linked List</h1>
                </div>
            </div>
        </div>
    );
};

export default Badge;
