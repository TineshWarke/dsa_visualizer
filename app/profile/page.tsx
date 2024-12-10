'use client'
import React from "react";

const Profile: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Array</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Strings</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-xl font-bold text-center break-words">Sorting Algorithms</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Sets</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Map</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Stack</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Queue</h1>
                </div>
                <div className="rounded-badge w-28 h-28 bg-gray-500 border-2 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-xl font-bold text-center break-words">Linked List</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;
