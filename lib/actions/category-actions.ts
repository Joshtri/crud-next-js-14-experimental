import { prisma } from "@/lib/prisma"; // Pastikan prisma diimpor dengan benar

// Fungsi untuk mendapatkan semua kategori
export async function getAllCategories() {
    console.log("getAllCategories: Fetching categories from database"); // Debug log
  
    try {
      const categories = await prisma.category.findMany({
        orderBy: {
          name: "asc", // Mengurutkan berdasarkan nama (opsional)
        },
      });
      console.log("getAllCategories: Successfully fetched categories:", categories); // Debug log
      return categories;
    } catch (error: any) {
      console.error("getAllCategories: Error fetching categories:", error.message, error.stack); // Debug log
      throw new Error("Failed to fetch categories");
    }
  }

// Fungsi untuk membuat kategori baru
export async function createCategory(data: { name: string }) {
  try {
    const newCategory = await prisma.category.create({
      data: {
        name: data.name,
      },
    });
    return newCategory;
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Failed to create category");
  }
}
