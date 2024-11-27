import { NextResponse } from "next/server";
import { getAllCategories, createCategory } from "@/lib/actions/category-actions";

// Handle GET request
export async function GET() {
  console.log("API /api/categories: Incoming GET request"); // Debug log

  try {
    const categories = await getAllCategories();
    console.log("API /api/categories: Fetched categories:", categories); // Debug log

    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    console.error("API /api/categories: Error fetching categories:", error.message); // Debug log
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
// Handle POST request
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi input (pastikan ada field `name`)
    if (!body.name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    const newCategory = await createCategory(body);
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error: any) {
    console.error("Error in POST /api/categories:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
