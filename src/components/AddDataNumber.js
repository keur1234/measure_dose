"use client"
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import { usePointContext } from './usePointContext';
import { useImageContext  } from '@/components/useImageContext'

import DrawCircle from "@/components/draw_circle"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddDataNumber({ onNext, currentInde, dataLength }) {
  const { data, updateData } = usePointContext();
  const { newData } = usePointContext();
  const { image } = useImageContext();
  
  const [circleRadius, setCircleRadius] = useState(data[2]); 

  const router = useRouter();

  const handleSliderChange = (value) => {
    setCircleRadius(value);
  };

  const imageUrl = URL.createObjectURL(image)

  const handleUpdateData = () => {
    updateData(circleRadius);
    onNext(); // เมื่อคลิกปุ่ม Update Number ให้กลับไปแสดง AddDataName แทน

    //ส่ง api 
    if (currentInde === dataLength) {
      router.push({
        pathname: '/Result',
        state: { data: newData }
      });
    }
  };

  return (
    <form className="flex flex-col justify-between items-center">
      <div className="flex w-full h-max max-h-fit">
        
        <DrawCircle image={imageUrl} circleRadius={circleRadius} Xaxis={data[0]} Yaxis={data[1]}/>
        
        <div className="text-3xl ml-12 bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
          <div className='p-8 rounded-tl-[28px] rounded-tr-[28px] bg-[#D9D9D9]'>
            <p>{currentInde} of {dataLength}</p>
          </div>
          <div className='p-12 h-full flex flex-col justify-between'>
            <div>
              <p className='mb-8'>Confirm Inhibition Zone : {circleRadius}</p>
              <Slider 
                min={40}  
                max={400} 
                step={0.01}
                value={circleRadius} 
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end m-8 ">
        <button 
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-6 px-32 rounded-full bg-[#CDCDCD]"
          type="button" 
          onClick={() => handleUpdateData(circleRadius)
        }  
        >NEXT</button>
      </div>
      {/* <p>inputDataNumber</p>
      <p>Data: {JSON.stringify(data)}</p>
      <input 
        type='text'
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={() => handleUpdateData(number)}>Update Number</button> */}
    </form>
  );
};

