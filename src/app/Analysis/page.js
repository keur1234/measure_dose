"use client"
import { useState } from 'react';
import { PointProvider } from '@/components/usePointContext';
import AddDataName from '@/components/AddDataName';
import AddDataNumber from '@/components/AddDataNumber';

export default function Analysis() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNameInput, setShowNameInput] = useState(true);
    const [dataSet, setDataSet] = useState([
        ["data11", "data12", "data13"],
        ["data21", "data22", "data23"],
        ["data31", "data32", "data33"]
    ]);

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setShowNameInput(true); // กลับไปแสดงชื่อหลังจากกด Next
    };

    const handleShowNumberInput = () => {
        setShowNameInput(false); // แสดงตัวเลขแทนชื่อ
    };
    
    return (
        // <PointProvider pointData={dataSet} index={currentIndex}>
        //     <p>Component {currentIndex + 1}/{dataSet.length}</p>
        //     <AddDataName/>
        //     <AddDataNumber onNext={handleNext}/>
        // </PointProvider>
        <PointProvider pointData={dataSet} index={currentIndex}>
            <p>Component {currentIndex + 1}/{dataSet.length}</p>
            {showNameInput ? (
                <AddDataName onShowNumberInput={handleShowNumberInput} />
            ) : (
                <AddDataNumber onNext={handleNext} />
            )}
        </PointProvider>
    )
}

