import { prisma } from "@/lib/prisma";


// Fungsi untuk membuat item baru
export async function createItem(data: {
  name: string;
  quantity: number;
  categoryId: string;
  supplierId: string;
}) {
  try {
    // Simpan item baru ke database menggunakan Prisma
    const newItem = await prisma.Item.create({
      data: {
        name: data.name,
        quantity: data.quantity,
        categoryId: data.categoryId,
        supplierId: data.supplierId,
      },
    });
    return newItem; // Kembalikan data item yang baru dibuat
  } catch (error) {
    console.error("Error creating item:", error);
    throw new Error("Failed to create item");
  }
}

export async function getAllItems(){
    console.log("getAllItems: Fetching Items from database"); // Debug log

    try {
        const items = await prisma.item.findMany({
            orderBy:{
                name: "asc"
            }
        });
        return items;
    } catch (error) {
        console.error("getAllItems: Error fetching Items:", error.message, error.stack); // Debug log
        throw new Error("Failed to fetch items");
    }
}
