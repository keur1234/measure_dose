import { createContext, useContext, useState } from 'react';

const InputData = createContext();

export const InputProvider = ({ children }) => {
  const [data, setData] = useState();

  const updateData = (newItem) => {
    setData(prevData => {
      const newDataArray = [...prevData];
      newDataArray[index] = [...newDataArray[index], newItem]; // เพิ่มข้อมูลใหม่ลงในตำแหน่งที่ต้องการ
      return newDataArray; // อัพเดตข้อมูลใหม่ทั้งหมด
    });
  };

  return (
    <InputData.Provider value={{ data, updateData }}>
      {children}
    </InputData.Provider>
  );
};

export const useInputData = () => useContext(InputData);
