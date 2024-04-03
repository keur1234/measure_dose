"use client"
import { useState } from 'react';
import { PointProvider } from '@/components/usePointContext';
import AddDataName from '@/components/AddDataName';
import AddDataNumber from '@/components/AddDataNumber';

export default function Analysis() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNameInput, setShowNameInput] = useState(true);
    const [dataSet, setDataSet] = useState([
        [1200.5,  567.5,   66.5],
        [1444.5, 1110.5,   66.3],
        [ 990.5, 1500.5,   67.4],
        [ 572.5, 1302.5,   66.8],
        [ 668.5,  696.5,   69. ]
    ]);

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setShowNameInput(true); // กลับไปแสดงชื่อหลังจากกด Next
    };

    const handleShowNumberInput = () => {
        setShowNameInput(false); // แสดงตัวเลขแทนชื่อ
    };
    
    return (
        <main className=" mt-20 w-5/6">
            <h1 className="font-bold text-4xl text-center pb-16">ANALYSIS IMAGE</h1>
            <PointProvider pointData={dataSet} index={currentIndex}>
                {showNameInput ? (
                    <AddDataName onShowNumberInput={handleShowNumberInput} currentInde={currentIndex + 1} dataLength={dataSet.length}/>
                ) : (
                    <AddDataNumber onNext={handleNext} currentInde={currentIndex + 1} dataLength={dataSet.length}/>
                )}
            </PointProvider>
        </main>
        
    )
}

