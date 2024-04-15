"use client"
import Link from 'next/link'
import logo from './assets/logo2.png'
import Image from 'next/image';


//Home page
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="py-3 md:py-6 flex items-center w-full bg-white justify-center drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
        <div>
        <Image
          src={logo}
          alt="Logo"
          className='flex flex-col items-center w-48 md:w-64' 
          width={250}
          height={150}
        />
        </div>
      </div>

      <div className="flex flex-col justify-between w-5/6">
        <div className="my-5 md:my-11 flex flex-col w-full">
          <p className="text-2xl md:text-4xl font-bold">History</p>
          <p className="md:text-xl text-[#545454]">Modify/History</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6 w-full ">
          
        <div className="text-xl md:text-2xl p-4 md:p-9 flex flex-col justify-between bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#FCF9F7] active:bg-[#FCF9F7]">
            <div>
              <label className="font-bold">AST ID : </label>
              <label>001</label>
            </div>
            <div>
              <label className="font-bold">NAME FOR TEST : </label>
              <label>ANY TEXT</label>
            </div>
            <div>
              <label className="font-bold">BY : </label>
              <label>User</label>
            </div>
          </div>

          <div className="text-xl md:text-2xl p-4 md:p-9 flex flex-col justify-between bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#FCF9F7] active:bg-[#FCF9F7]">
            <div>
              <label className="font-bold">AST ID : </label>
              <label>001</label>
            </div>
            <div>
              <label className="font-bold">NAME FOR TEST : </label>
              <label>ANY TEXT</label>
            </div>
            <div>
              <label className="font-bold">BY : </label>
              <label>User</label>
            </div>
          </div>

          <div className="text-xl md:text-2xl p-4 md:p-9 flex flex-col justify-between bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#FCF9F7] active:bg-[#FCF9F7]">
            <div>
              <label className="font-bold">AST ID : </label>
              <label>001</label>
            </div>
            <div>
              <label className="font-bold">NAME FOR TEST : </label>
              <label>ANY TEXT</label>
            </div>
            <div>
              <label className="font-bold">BY : </label>
              <label>User</label>
            </div>
          </div>

          <div className="text-xl md:text-2xl p-4 md:p-9 flex flex-col justify-between bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#FCF9F7] active:bg-[#FCF9F7]">
            <div>
              <label className="font-bold">AST ID : </label>
              <label>001</label>
            </div>
            <div>
              <label className="font-bold">NAME FOR TEST : </label>
              <label>ANY TEXT</label>
            </div>
            <div>
              <label className="font-bold">BY : </label>
              <label>User</label>
            </div>
          </div>

          <div className="text-xl md:text-2xl p-4 md:p-9 flex flex-col justify-between bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#FCF9F7] active:bg-[#FCF9F7]">
            <div>
              <label className="font-bold">AST ID : </label>
              <label>001</label>
            </div>
            <div>
              <label className="font-bold">NAME FOR TEST : </label>
              <label>ANY TEXT</label>
            </div>
            <div>
              <label className="font-bold">BY : </label>
              <label>User</label>
            </div>
          </div>

        </div>

        <div className="flex w-full justify-end my-8 ">
          <Link href={`/New_Test`}>
            <button className="text-xl md:text-3xl py-3 md:py-5 px-16 md:px-24 font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-full bg-[#396EFF] text-white hover:bg-[#1C49EB] active:bg-[#1C49EB]">
              NEW TEST
            </button>

          </Link>
        </div>
      </div>
      
    </main>
  )
}
