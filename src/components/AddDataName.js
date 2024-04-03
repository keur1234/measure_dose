"use client"
import { useState } from 'react';
import { usePointContext } from './usePointContext';
import { useImageContext  } from '@/components/useImageContext'

export default function AddDataName({ onShowNumberInput ,currentInde, dataLength}) {
  const { data, updateData } = usePointContext();
  const [name, setName] = useState("");
  const { image } = useImageContext();

  const handleUpdateData = () => {
    updateData(name);
    onShowNumberInput(); // เมื่อคลิกปุ่ม Update Name ให้แสดง AddDataNumber แทน
};

  return (
    <form className="flex flex-col justify-between items-center">
      <div className="flex w-full h-max max-h-fit">
        {image && <img 
          src={URL.createObjectURL(image)} 
          width={500}
          height={500}
          alt="Uploaded Image" 
        />}
        
        <div className="text-3xl ml-12 bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
          <div className='p-8 rounded-tl-[28px] rounded-tr-[28px] bg-[#D9D9D9]'>
            <p>{currentInde} of {dataLength}</p>
          </div>
          <div className='p-12 h-full flex flex-col justify-between'>
            <div>
              <p className='mb-8'>Confirm antibiotic name</p>
              <select 
                className="border border-white border-b-stone-500 outline-none" 
                name="names" 
                id="names"
                onChange={(e) => setName(e.target.value)}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            {/* <p>This is correct</p> */}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end m-8 ">
        <button 
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-6 px-32 rounded-full bg-[#CDCDCD]"
          type="button" onClick={() => handleUpdateData(name)}
        >
          NEXT
        </button>
      </div>
    </form>
  );
};

