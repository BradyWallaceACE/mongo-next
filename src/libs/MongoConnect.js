import mongoose from "mongoose";

export const connectMongoDB = async () => {
  // Check if mongo is connected
  if (mongoose.connection.readyState === 1) {
    // Return the connection if connected
    return mongoose.connection.asPromise();
  }

  // Wait for connection if not connected
  return await mongoose.connect(process.env.MONGO_URI);
};
