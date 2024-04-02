"use client"
import { useState } from 'react';
import { useImageContext  } from '@/components/useImageContext'

import Link from 'next/link'

export default function Import_Image() {
  const { image, setImageData } = useImageContext();

  const handleFileChange = (event) => {
    setImageData(event.target.files[0]);
  };

  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-4xl text-center pb-16">IMPORT IMAGE</h1>
        
        <form className='flex flex-col items-center w-full px-4' action="">   
          <input 
            className='hidden'
            type="file" 
            id="fileInput" 
            onChange={handleFileChange}
          />
          <label 
            className='flex justify-center items-center bg-white p-2.5 rounded-lg outline-none w-full resize-none overflow-y-auto' 
            style={{ boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.5)'}} 
            for="fileInput"
          >
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" />}
          </label>
        </form>
      </div>

      <div className="flex w-full justify-end mb-8 ">
        {/* <Link href={`/Analysis_Image`}> */}
        <Link href={`/Analysis`}>
          <button className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-6 px-32 rounded-full bg-[#CDCDCD]">
            NEXT
          </button>
        </Link>
      </div>
    </main>
  )
}
