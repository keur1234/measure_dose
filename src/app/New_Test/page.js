"use client"
import { useState, useContext  } from 'react';
// import Link from 'next/link'
import { useInputData } from '@/components/useInputData';

import { useRouter } from 'next/navigation';


//add New Test
export default function New_Test() {
  const {astId, setAstId} = useInputData();
  const {bacteria, setBacteria} = useInputData();
  const {name, setName} = useInputData();

  const router = useRouter  ();

  const handleUpdateData = () => {
    router.push('/Import_Image')
  };

  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <form className='flex items-center flex-col w-full' >
        <div className="flex flex-col md:w-3/4">
          <h1 className="font-bold text-4xl text-center pb-16">NEW TEST</h1>
          
          <div className="text-2xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">AST ID</p>
            <input 
              className="w-full min-h-20 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none mt-4 mb-1 p-2 px-4 text-3xl"
              onChange={(e) => setAstId(e.target.value)}
            />
            <p className="text-lg">The AST ID is the unique number for label each dish</p>
          </div>

          <div className="text-2xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Bacteria</p>
            <select 
              className="w-full min-h-20 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none mt-4 mb-1 p-2 px-4 text-3xl" 
              name="bacterias" 
              id="bacterias"
              onChange={(e) => setBacteria(e.target.value)}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <p className="text-lg">Select bacteria that you use in the test</p>
          </div>

          <div className="text-2xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Your name</p>
            <input 
              className="w-full min-h-20 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none mt-4 p-2 px-4 text-3xl"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full justify-end mb-8 ">
          <button 
            className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#CDCDCD]"
            type="button" 
            onClick={() => handleUpdateData()}
          >
            NEXT
          </button>
        </div>
      </form>
    </main>
  )
}
