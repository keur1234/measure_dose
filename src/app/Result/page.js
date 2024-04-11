"use client"
import { useInputData } from '@/components/useInputData';
import { useRouter } from 'next/navigation';

export default function Result() {
  const { astId, bacteria, name, testData } = useInputData();

  const router = useRouter  ();

  return (
    <main className="flex flex-col mt-20 w-5/6">
      <div className="flex flex-col w-full">
        <p className="font-bold text-4xl">History</p>
        <p className="text-xl text-[#545454]">Modify/History</p>
      </div>

      <div className="bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] mt-8 ">
        <div className='p-6 h-full flex flex-col justify-between'>
          <p className='font-bold mb-6 text-3xl'>Testing information</p>
          <div className="text-2xl flex flex-col md:flex-row mb-2">
            <label className="font-bold">AST ID :&nbsp;</label>
            <label> {astId}</label>
          </div>
          <div className="text-2xl flex flex-col md:flex-row mb-2">
            <label className="font-bold">Date of antibiogram :&nbsp;</label>
            <label> 21 December 2026</label>
          </div>
          <div className="text-2xl flex flex-col md:flex-row mb-2">
            <label className="font-bold">Bacteria :&nbsp;</label>
            <label> {bacteria}</label>
          </div>
          <div className="text-2xl flex flex-col md:flex-row mb-2">
            <label className="font-bold">Performed by :&nbsp;</label>
            <label>{name}</label>
          </div>
          {/* <p>This is correct</p> */}
        </div>
      </div>

      <div className="bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] mt-8">
        <div className='p-6 h-full flex flex-col justify-between'>
          <p className='font-bold mb-6 text-3xl'>Antibiotics tested</p>

            {testData.map((data, index) => {
              return <div key={index} className="text-2xl flex flex-col md:flex-row w-4/5 justify-between  mb-2">
                  <label className="font-bold">{ data[0]}</label>
                  <label>
                    {data[0] !== "Antimicrobial or Bacteria not found" && (
                      <label>{data[1]}</label>
                    )}
                    <label>&nbsp;&nbsp;({data[2]}mm)</label>
                  </label>
                </div>
            })}
        </div>
      </div>

      <div className="flex w-full justify-end m-8 ">
        <button 
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#CDCDCD] mx-2"
          type="button" onClick={() => router.push('/')}
        >
          HOME
        </button>
        <button 
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#CDCDCD] mx-2"
          type="button" 
        >
          SAVE
        </button>
      </div>

    </main>
  )
}
