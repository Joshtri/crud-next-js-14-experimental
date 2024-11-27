import React from 'react'
import ContactTable from "@/components/contact-table";

const Contacts = async ({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) => {
    
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <div className='max-w-screen-md mx-auto mt-5'>
        <div className="flex items-center justify-between gap-1 mb-5">
        <ContactTable query={query} currentPage={currentPage} />

        </div>
    </div>
  )
}

export default Contacts