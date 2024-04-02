"use client"
import { useState } from 'react';
import { usePointContext } from './usePointContext';

export default function AddDataNumber({ onNext }) {
  const { data, updateData } = usePointContext();
  const [number, setNumber] = useState("");

  const handleUpdateData = () => {
    updateData(number);
    onNext(); // เมื่อคลิกปุ่ม Update Number ให้กลับไปแสดง AddDataName แทน
  };

  return (
    <form>
      <p>inputDataNumber</p>
      <p>Data: {JSON.stringify(data)}</p>
      <input 
        type='text'
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={() => handleUpdateData(number)}>Update Number</button>
    </form>
  );
};

