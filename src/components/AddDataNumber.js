"use client"
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import { usePointContext } from './usePointContext';
import { useImageContext  } from '@/components/useImageContext'

import DrawCircle from "@/components/draw_circle"

export default function AddDataNumber({ onNext, currentInde, dataLength }) {
  const { data, updateData } = usePointContext();
  const { newData } = usePointContext();
  const { image } = useImageContext();
  
  const [circleRadius, setCircleRadius] = useState(data[2]); 

  const handleSliderChange = (value) => {
    setCircleRadius(value);
  };

  const imageUrl = image

  const handleUpdateData = () => {
    updateData(circleRadius);
    onNext(); 
  };

  return (
    <form className="flex flex-col justify-between items-center">
      <div className="flex flex-col w-full h-max max-h-fit lg:flex-row items-center ">

        <DrawCircle image={imageUrl} circleRadius={circleRadius} Xaxis={data[0]} Yaxis={data[1]}/>
        
        <div className="text-3xl bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] mt-8 lg:ml-12 lg:mt-0 lg:h-[500px]">
          <div className='p-8 rounded-tl-[28px] rounded-tr-[28px] bg-[#D9D9D9]'>
            <p>{currentInde} of {dataLength}</p>
          </div>
          <div className='p-6 h-full flex flex-col justify-between'>
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
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#CDCDCD]"
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

