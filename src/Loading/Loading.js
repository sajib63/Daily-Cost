import { ThreeCircles } from "react-loader-spinner"

export const Loader = () => {
    return  <div className='flex justify-center items-center mt-[300px]'>
    <p className='text-6xl font-bold'>C</p>
    <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
    <p className='text-6xl font-bold'>ming S</p>
    <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
    <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
    <p className='text-6xl font-bold'>n.....</p>
  </div>
}