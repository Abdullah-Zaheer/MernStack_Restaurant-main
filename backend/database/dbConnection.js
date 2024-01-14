import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("YAY! Abdullah You are Connected to database successfully!");
    })
    .catch((err) => {
      console.log(`Some error occured while connedting to database! ${err}`);
    });
};
