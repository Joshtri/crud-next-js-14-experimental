import React, { useState } from "react";

interface ItemFormProps {
  onSubmit: (data: { name: string; quantity: number; categoryId: string; supplierId: string }) => void;
  categories: { id: string; name: string }[]; // Data kategori untuk dropdown
  suppliers: { id: string; name: string }[]; // Data supplier untuk dropdown
  initialData?: { name: string; quantity: number; categoryId: string; supplierId: string }; // Data awal untuk edit
}

export default function ItemForm({
  onSubmit,
  categories,
  suppliers,
  initialData = { name: "", quantity: 0, categoryId: "", supplierId: "" },
}: ItemFormProps) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Item Form</h2>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
          min="0"
        />
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="categoryId"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Supplier Field */}
      <div className="mb-4">
        <label htmlFor="supplierId" className="block text-sm font-medium text-gray-700">
          Supplier
        </label>
        <select
          id="supplierId"
          name="supplierId"
          value={formData.supplierId}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        >
          <option value="">Select a supplier</option>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
