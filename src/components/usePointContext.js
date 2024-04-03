import { createContext, useContext, useState, useEffect } from 'react';

const PointContext = createContext();

export const PointProvider = ({ children, pointData, index }) => {
  const [data, setData] = useState(pointData[index]);
  const [newData, setNewData] = useState(pointData);
  
  useEffect(() => {
    setData(pointData[index]);
  }, [pointData, index]);

  const updateData = (newItem) => {
    setNewData(prevData => {
      const newDataArray = [...prevData];
      newDataArray[index] = [...newDataArray[index], newItem]; // เพิ่มข้อมูลใหม่ลงในตำแหน่งที่ต้องการ
      return newDataArray; // อัพเดตข้อมูลใหม่ทั้งหมด
    });
  };

  return (
    <PointContext.Provider value={{ data, updateData, newData }}>
      {children}
    </PointContext.Provider>
  );
};

export const usePointContext = () => useContext(PointContext);
