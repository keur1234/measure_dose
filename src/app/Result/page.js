"use client"
import { useRouter } from 'next/navigation';

export default function Result() {
  
  const router = useRouter();
  const receivedData = router?.state?.data;

  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <div className="flex flex-col w-3/4">
        <p>Summary Result</p>
      </div>
    </main>
  )
}
