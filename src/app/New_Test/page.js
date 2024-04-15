"use client"
// import Link from 'next/link'
import { useInputData } from '@/components/useInputData';

import { useRouter } from 'next/navigation';


//add New Test
export default function New_Test() {
  const {astId, setAstId} = useInputData();
  const {bacteria, setBacteria} = useInputData();
  const {name, setName} = useInputData();

  const router = useRouter  ();

  const handleUpdateData = (e) => {
    e.preventDefault();
    router.push('/Import_Image')
  };

  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <form className='flex items-center flex-col w-full' onSubmit={handleUpdateData}>
        <div className="flex flex-col md:w-3/4">
          <h1 className="text-2xl md:text-4xl pb-8 md:pb-16 font-bold text-center">NEW TEST</h1>
          
          <div className="text-2xl pb-8 md:pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">AST ID</p>
            <input 
              className="mt-2 md:mt-4 mb-1 p-2 px-4 text-2xl md:text-3xl md:min-h-20 w-full border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none"
              onChange={(e) => setAstId(e.target.value)}
              required
            />
            <p className="text-sm md:text-lg">The AST ID is the unique number for label each dish</p>
          </div>

          <div className="text-2xl pb-8 md:pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Bacteria</p>
            <select 
              className="mt-2 md:mt-4 mb-1 p-2 px-4 text-2xl md:text-3xl md:min-h-20 w-full border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none" 
              name="bacterias" 
              id="bacterias"
              onChange={(e) => setBacteria(e.target.value)}
              required
            >
              <option value="">Select an bacteria</option> 
              <option value="Enterobacterales">Enterobacterales</option>
              <option value="Pseudomonas aeruginosa">Pseudomonas aeruginosa</option>
              <option value="Acinetobacter spp.">Acinetobacter spp.</option>
              <option value="Burkholderia cepacia complex">Burkholderia cepacia complex</option>
              <option value="Stenotrophomonas maltophilia">Stenotrophomonas maltophilia</option>
              <option value="Enterococcus spp.">Enterococcus spp.</option>
              <option value="Haemophilus influenzae and Haemophilus parainfluenzae">Haemophilus influenzae and Haemophilus parainfluenzae</option>
            </select>
            <p className="text-sm md:text-lg">Select bacteria that you use in the test</p>
          </div>

          <div className="text-2xl pb-12 md:pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Your name</p>
            <input 
              className="mt-2 md:mt-4 mb-1 p-2 px-4 text-2xl md:text-3xl md:min-h-20 w-full border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex w-full justify-end mb-8 ">
          <button 
          className="text-xl md:text-3xl py-3 md:py-5 px-16 md:px-24 font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-full bg-[#CDCDCD] hover:bg-[#AAAAAA] active:bg-[#888888]"
          type="submit" 
          // onClick={() => handleUpdateData()}
          >
          NEXT
          </button>

        </div>
      </form>
    </main>
  )
}