"use client"
import { useState } from 'react';
import { usePointContext } from './usePointContext';

export default function AddDataName({ onShowNumberInput }) {
  const { data, updateData } = usePointContext();
  const [name, setName] = useState("");

  // const handleUpdateData = (name) => {
  //   const updatedData = name;
  //   updateData(updatedData);
  // };

  const handleUpdateData = () => {
    updateData(name);
    onShowNumberInput(); // เมื่อคลิกปุ่ม Update Name ให้แสดง AddDataNumber แทน
};

  return (
    <form>
      <p>inputDataName</p>
      <p>Data: {JSON.stringify(data)}</p>
      <input 
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={() => handleUpdateData(name)}>Update Name</button>
    </form>
  );
};

