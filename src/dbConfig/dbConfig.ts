import mongoose from "mongoose";


export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on("connected", () => {
        console.log("DB connected successfully");
    });

    connection.on("error", (error) => {
        console.log("MongoDB Connection Error :: ", error);
        process.exit(1);
    });

  } catch (error) {
    console.log("Error while connecting to DB", error);
  }
}