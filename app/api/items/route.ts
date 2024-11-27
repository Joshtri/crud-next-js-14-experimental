import { getAllItems } from "@/lib/actions/item-actions";
import { NextResponse } from "next/server";


export async function GET(){
    console.log("API /api/items: Incoming GET request"); // Debug log
    try {
        const items = await getAllItems();
        console.log("API /api/items: Fetched items:", items); // Debug log
    
        return NextResponse.json(items, { status: 200 });
      } catch (error : any) {
        console.error("API /api/items: Error fetching items:", error.message); // Debug log
        return NextResponse.json(
          { message: "Failed to fetch items" },
          { status: 500 }
        );
      }
}