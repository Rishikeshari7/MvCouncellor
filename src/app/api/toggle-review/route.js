

import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Review from "@/model/review";

export async function PUT(req) {
  try {
    const { id,isPublished} = await req.json()
        
    //Save Review to Database
    await dbConnect();
    console.log("id",id)
    await Review.findByIdAndUpdate(id,{
      isPublished:!isPublished
    })
    return NextResponse.json(
      { success: true,message: "Review published successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in Review Deletion:", err);
    return NextResponse.json(
      { success: false, message: "Error in Review Deletion" },
      { status: 500 }
    );
  }
}
