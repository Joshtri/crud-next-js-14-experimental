import React from 'react'
import ItemTable from '@/components/items/item-table'
import { Button } from '@/components/buttons'
import { IoAddSharp } from 'react-icons/io5'
// import { CreateButton } from '@/components/buttons'

export default function ItemPage() {
  return (
    <div>
        <h2>Data Items</h2>
        <Button
            label="Create"
            href="/items/create"
            icon={<IoAddSharp size={20} />}
            variant="primary"
        />

        <ItemTable/>
    </div>
  )
}
