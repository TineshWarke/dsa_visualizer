import { ConnectDB } from "@/lib/config/mongodb"
import User from "@/lib/models/User";
import { NextResponse } from "next/server"

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb()

export async function PUT(request: Request) {
    try {
        const { email } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 401 });
        }

        return NextResponse.json({ msg: "success", topicData: user.topicData }, { status: 200 });
    } catch (error) {
        console.error("Error", error);

        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
