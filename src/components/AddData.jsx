"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'  // Install: npm install lucide-react

const AddData = () => {
    const [showToggle, setShoeToggle] = useState(false)
    const handleClick = ()=>{

    }
  return (
    <div className="p-4">
      <Button className="gap-2" onClick={handleClick}>
        <Plus className="h-4 w-4" />
        Add New Data
      </Button>
      

      {
        
      }
    </div>
  )
}

export default AddData