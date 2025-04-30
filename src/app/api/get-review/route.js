
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Review from "@/model/review";

export async function GET() {
  try {
    //Save Review to Database
    await dbConnect();
    const allReview = await Review.find({isPublished:true},'-createdAt -updatedAt');
    return NextResponse.json(
      { success: true, data:allReview,message: "Review fetched successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in Review Fetching:", err);
    return NextResponse.json(
      { success: false, message: "Error in Review Fetching" },
      { status: 500 }
    );
  }
}
