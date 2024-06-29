import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    if (connection.isConnected) {
      console.log("DB CONNECTED")
    }

  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};