import React from "react";
import Badge from "./Badge";
import Pie from "./Pie";

const Profile: React.FC = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-dvw h-[40vh]">

            </div>
            <div className="w-dvw h-[60vh]">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Pie/>
                    </div>
                    <div>
                        <div className="my-2">
                            <Badge />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
