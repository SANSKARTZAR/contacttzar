import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


// pages/api/contact.js
// import dbConnect from '../../lib/mongoose';
// import Contact from '../../models/Contact';

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === 'POST') {
//     try {
//       const contact = await Contact.create(req.body);
//       res.status(201).json({ success: true, data: contact });
//     } catch (error) {
//       res.status(400).json({ success: false, error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
//   }
// }


export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}