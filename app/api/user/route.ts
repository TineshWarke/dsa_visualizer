import { ConnectDB } from "@/lib/config/mongodb"
import User from "@/lib/models/User";
import { NextResponse } from "next/server"

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb()

export async function PUT(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        const temp = {
            userName: user.username,
            email: email,
            fullName: user.fullName,
            bio: user.bio
        }
        return NextResponse.json({ msg: "Login successful", user: temp }, { status: 200 });
    } catch (error) {
        console.error("Error signing in user:", error);

        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { user } = await request.json();
        console.log(user);

        await User.findOneAndUpdate(
            { "email": user.email },
            {
                $set: {
                    username: user.userName,
                    fullName: user.fullName,
                    bio: user.bio
                }
            }
        );
        return NextResponse.json({ msg: "Data change successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);

        // Handle specific error cases (optional)
        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}