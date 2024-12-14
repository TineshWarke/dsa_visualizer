import { ConnectDB } from "@/lib/config/mongodb";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb()

export async function POST(request: Request) {
    try {
        const { email, topic, note } = await request.json();

        if (!note.title || !note.description) {
            return NextResponse.json({ error: "Title and Description are required" }, { status: 400 });
        }

        await User.findOneAndUpdate(
            { "email": email, "topicData.topic": topic },
            {
                $push: {
                    "topicData.$.notes": {
                        "title": note.title,
                        "description": note.description
                    }
                }
            }
        );
        return NextResponse.json({ msg: "Note added successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error adding note:", error);
        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { email, topic, title } = await request.json();

        await User.findOneAndUpdate(
            { "email": email, "topicData.topic": topic },
            {
                $pull: {
                    "topicData.$.notes": { "title": title }
                }
            }
        );
        return NextResponse.json({ msg: "Note deleted successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error deleting note:", error);

        // Handle specific error cases (optional)
        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}