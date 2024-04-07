"use client"
import { useState, useEffect } from 'react';
import { PointProvider } from '@/components/usePointContext';
import AddDataName from '@/components/AddDataName';
import AddDataNumber from '@/components/AddDataNumber';

import axios from 'axios';

export default function Analysis() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNameInput, setShowNameInput] = useState(true);
    const [dataSet, setDataSet] = useState([]);

    const fetchDataFromApi = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/med_info');
            const responseData = response.data
            setDataSet(responseData);
            // if (response.ok) {
            //     setDataSet(responseData);
            // } else {
            //     console.error('failed to :', response.statusText);
            // }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchDataFromApi()
    }, []);

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

