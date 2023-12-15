import mongoose from "mongoose";

const connectcDataBase = () => {
  console.log("Wait connect to the database");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => console.log(error));
};

export default connectcDataBase;
