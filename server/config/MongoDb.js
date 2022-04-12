import mongoose from "mongoose";

const connectDatabase = async () => {
  const MONGO_URL =
    process.env.MONGO_URL ||
    "mongodb+srv://saliu-damilola:2905omolara@cluster0.imown.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  // console.log(MONGO_URL, "mongo");

  try {
    const conn = await mongoose.connect(
      "mongodb+srv://saliu-damilola:2905omolara@cluster0.imown.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB Connected`);
  } catch (error) {
    // console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
