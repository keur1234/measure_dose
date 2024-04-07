"use client"
import { useState } from 'react';
import { useImageContext  } from '@/components/useImageContext'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Import_Image() {
  const [image, setImage]  = useState();
  const [processedImage, setProcessedImage] = React.useState(null);
  const { imageContext, setImageData } = useImageContext();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
        const response = await fetch('http://localhost:5000/api/process_image', {
            method: 'POST',
            body: formData
        });

        // console.log("response",response)

        if (response.ok) {
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);
            setProcessedImage(imgUrl);
            setImageData(imgUrl);

            router.push('/Analysis');
        } else {
            // Handle errors
            console.error('Image upload failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during image upload:', error);
    }
  };

  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-4xl text-center pb-16">IMPORT IMAGE</h1>
        
        <form className='flex flex-col items-center w-full px-4' action="">   
          <input 
            className='hidden'
            type="file" 
            accept="image/*"
            id="fileInput" 
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label 
            className='flex justify-center items-center bg-white p-2.5 rounded-lg outline-none w-full resize-none overflow-y-auto' 
            style={{ boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.5)'}} 
            htmlFor="fileInput" // Change "for" to "htmlFor"
          >
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" />}
          </label>
        </form>
      </div>

      <div className="flex w-full justify-end mb-8 ">
        <button onClick={handleSubmit} className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-6 px-32 rounded-full bg-[#CDCDCD]">
          NEXT
        </button>
      </div>

      <div>
        {processedImage && <img src={processedImage} alt="Processed Image" />}
      </div>
    </main>
  )
}