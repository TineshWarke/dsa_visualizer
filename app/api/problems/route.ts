import { ConnectDB } from "@/lib/config/mongodb"
import User from "@/lib/models/User";
import { NextResponse } from "next/server"

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb()

interface RequestBody {
    email: string;
    topic: string;
    title: string;
}

interface CompletedQuestion {
    title: string;
}

interface Topic {
    topic: string;
    completedQuestions: CompletedQuestion[];
}

export async function PUT(request: Request) {
    try {
        const { email, topic, title }: RequestBody = await request.json();

        const user = await User.findOne({ email, "topicData.topic": topic });
        if (!user) {
            return NextResponse.json({ error: "User or topic not found" }, { status: 404 });
        }

        const topicData = user.topicData.find((t: Topic) => t.topic === topic);
        if (!topicData) {
            return NextResponse.json({ error: "Topic not found" }, { status: 404 });
        }

        const completedQuestions = topicData.completedQuestions;

        const index = completedQuestions.findIndex((q: string) => q === title);
        console.log(index);
        if (index !== -1) {
            completedQuestions.splice(index, 1); 
        } else {
            completedQuestions.push( title ); 
        }

        await user.save();
        return NextResponse.json({ msg: "Title updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
    }
}

