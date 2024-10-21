export default function Dashboard(){
    return(
        <div>
        <div className='flex mt-20 justify-around'>
        <div className='h-40 w-1/3 bg-[white] shadow-lg rounded-2xl'>
          <h1 className='font-bold text-xl text-center mt-5 text-[#000000a9]'>Total Properties</h1>
          <h1 className='font-bold text-3xl text-center mt-5 text-[#000000]'>20000</h1>


        </div>
        <div className='h-40 w-1/3 bg-[white]  shadow-lg rounded-2xl'>
        <h1 className='font-bold text-xl text-center mt-5 text-[#000000a9]'>Total Categories</h1>
          <h1 className='font-bold text-3xl text-center mt-5 text-[#000000]'>2</h1>
        </div>
        </div>
        <div className='w-4/5 mt-10 mx-auto border-[#00000033] border-2 rounded-3xl flex p-10 gap-9'>
        <div className='w-4/6'>
        <h1 className='font-bold text-lg text-center text-[#000000a9] '>Categpries</h1>
        <h1 className='font-medium text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>Land</h1>
        <h1 className='font-medium text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>House</h1>
        </div>
        <div className='w-2/6'>
        <h1 className='font-bold text-lg text-center text-[#000000a9]'>count</h1>
        <h1 className='font-bold text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>500</h1>
        <h1 className='font-bold text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>34534</h1>
        </div>
        </div>
        </div>
    )
}