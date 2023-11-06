import mongoose from "mongoose";
export const connect = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URL as string);
  } catch (error) {
    throw new Error("Db connection faild");
  }
};
