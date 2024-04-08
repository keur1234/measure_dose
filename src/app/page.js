import Link from 'next/link'

//Home page
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex items-center w-full bg-white justify-center drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] py-6 ">
        <div className="h-32 w-32 bg-current">
          Image
        </div>
        <p className="font-bold text-6xl ml-16">LOGO</p>
      </div>

      <div className="flex flex-col justify-between w-5/6">
        <div className="flex flex-col w-ful my-11 ">
          <p className="font-bold text-4xl">History</p>
          <p className="text-xl text-[#545454]">Modify/History</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6 w-full ">
          
          <div className="flex flex-col justify-between p-9 bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-2xl">
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

          <div className="flex flex-col justify-between p-9 bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-2xl">
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

          <div className="flex flex-col justify-between p-9 bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-2xl">
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

          <div className="flex flex-col justify-between p-9 bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-2xl">
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

          <div className="flex flex-col justify-between p-9 bg-white rounded-3xl drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-2xl">
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
            <button className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#396EFF] text-white">
              NEW TEST
            </button>
          </Link>
        </div>
      </div>
      
    </main>
  )
}
