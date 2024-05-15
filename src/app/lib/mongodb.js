import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

export default connectToDatabase;



// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("db connected");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;