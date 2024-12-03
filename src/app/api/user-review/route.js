import { ImageUpload } from "@/lib/upload-image";
import { NextResponse } from "next/server";
import Review from "@/model/review";
import { dbConnect } from "@/lib/db";

export async function POST(request) {
  try {
    // Extracting Form Data
    const formData = await request.formData();
    const name = formData.get("name");
    const comment = formData.get("comment");
    const occupation = formData.get("occupation");
    const image = formData.get("image");

    //Upload Image Cloudinary;
    const data = await ImageUpload(image);

    //Save Review to Database
    await dbConnect()
    const newReview = await Review.create({name,comment,occupation,image:data.secure_url})
    return NextResponse.json(
      { success: true, message: "Review submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in Review Submission:", err);
    return NextResponse.json(
      { success: false, message: "Error in Review Submission" },
      { status: 500 }
    );
  }
}
