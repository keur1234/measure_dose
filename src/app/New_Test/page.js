import Link from 'next/link'

//add New Test
export default function New_Test() {
  return (
    <main className="flex flex-col justify-between items-center mt-20 w-5/6">
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-4xl text-center pb-16">NEW TEST</h1>
        
        <form className="" action="">   
          <div className="text-3xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">AST ID</p>
            <input className="w-full min-h-24 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none my-4 p-2 px-4 text-4xl"></input>
            <p className="text-2xl">The AST ID is the unique number for label each dish</p>
          </div>
          <div className="text-3xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Bacteria</p>
            <select className="w-full min-h-24 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none my-4 p-2 px-4 text-4xl" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <p className="text-2xl">Select bacteria that you use in the test</p>
          </div>
          <div className="text-3xl pb-16">
            <p className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Your name</p>
            <input className="w-full min-h-24 border drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-[32px] outline-none my-4 p-2 px-4 text-4xl"></input>
          </div>
        </form>
      </div>

      <div className="flex w-full justify-end mb-8 ">
        <Link href={`/Import_Image`}>
          <button className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-6 px-32 rounded-full bg-[#CDCDCD]">
            NEXT
          </button>
        </Link>
      </div>
    </main>
  )
}
