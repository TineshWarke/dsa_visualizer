// import mongoose from "mongoose";

// export const connectDB = async (): Promise<void> => {
//     try {
//         const dbUri = process.env.MONGO_URI as string;
//         if (!dbUri) {
//             throw new Error("MONGO_URI is not defined in environment variables.");
//         }
//         if (mongoose.connection.readyState === 0) {
//             await mongoose.connect(dbUri);
//             console.log("Database connected successfully");
//         } else {
//             console.log("Database already connected");
//         }
//     } catch (error) {
//         console.error("Database connection failed:", error instanceof Error ? error.message : error);
//         process.exit(1);
//     }
// };

import mongoose from "mongoose"

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dsa_visualizer:DynaMight@cluster0.nb8w0.mongodb.net/user')
        console.log('DB Connected');
    } catch (error) {
        console.log('Error:', error);
    }
}