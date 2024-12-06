import { ConnectDB } from "@/lib/config/mongodb"
import User from "@/lib/models/User";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb()

// export async function GET(request: Request) {
//     return NextResponse.json({ msg: 'get method hit' })
// }

const SECRET_KEY = process.env.JWT_SECRET || "your_default_secret_key"; // Store this securely in an environment variable

export async function PUT(request: Request) {
    try {
        const { email, password } = await request.json();

        // Validate inputs
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        // Generate a JWT
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        return NextResponse.json({ msg: "Login successful", token }, { status: 200 });
    } catch (error) {
        console.error("Error signing in user:", error);

        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Validate inputs
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        await User.create({
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ msg: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);

        // Handle specific error cases (optional)
        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

