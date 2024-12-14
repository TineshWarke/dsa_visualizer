import React from "react";
import Badge from "./Badge";
import Pie from "./Pie";
import Props from "./Props";
import { ToastContainer } from "react-toastify";

const Profile: React.FC = () => {
    return (
        <>
            <ToastContainer position="top-right"/>
            <div className="w-screen h-screen">
                <div className="w-dvw h-[40vh] py-2 px-28">
                    <Props />
                </div>
                <div className="w-dvw h-[60vh] pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Pie />
                        </div>
                        <div>
                            <div className="my-2">
                                <Badge />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
