import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDataSaverOff } from "react-icons/md";
import { MdOutlineFactCheck } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { IoBusinessOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { Chart as ChartJS } from "chart.js/auto"
import VerticalGraph from './Graph/VerticalGraph';
import { Line } from 'react-chartjs-2';
import { LineGraph } from './Graph/Line';
import PollDoughnutChart from './Graph/Doughnut';
import { IoCarSportOutline } from "react-icons/io5";
import { LuUserSquare } from "react-icons/lu";
import Json from './Graph/Json';


const Home = () => {
  return (
    <>
      <div className=' p-3 '>
        <div className='bg-[#212a3b] w-full h-[65px] p-3 rounded-lg '>
          <div className='flex items-center justify-between'>
            <div className='flex font-extralight p-2 space-x-4 text-white '>
          <p>Logo</p>
          <p className='pl-12'>DataSet</p>
          <p>All Data</p>
          </div>
          <div className='flex items-center  space-x-4'>
          <div className=''>
             <input
              type="text"
              placeholder="Search"
              className="p-2 bg-white-200 rounded-lg w-[350px] px-4 border-2 border-slate-200 " outline-offset-2
            />
            </div>
          <p className='border p-3 rounded-lg text-[20px] text-[#ffff]'><IoAddCircleOutline /></p>
          <p className='border p-3 rounded-lg text-[20px] text-[#ffff]'><IoIosNotificationsOutline /></p>
          <p className='border p-3 rounded-lg text-[20px] text-[#ffff]'><GoSun /></p>
          <p className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </p>
            
          </div>
          </div>
        </div>
      </div>

      {/* left hand sidebar */}
      <div className='flex'>
      <div className='p-3'>
        <div className='bg-[#212a3b] w-[220px] h-[598px] p-3 rounded-lg flex flex-col justify-between text-white'>
          <div className='space-y-5 font-light'>
        <p className="flex items-center"><span className="mr-2"><IoSettingsOutline className='text-[21px]' /></span>Goeal</p>
        <p className="flex items-center"><span className="mr-2"><MdDataSaverOff  className='text-[21px]' /></span>Goeal</p>
        <p className="flex items-center"><span className="mr-2"><MdOutlineFactCheck  className='text-[21px]'/></span>Goeal</p>
        <p className="flex items-center"><span className="mr-2"><LuMessagesSquare className='text-[21px]' /></span>Goeal</p>
        <p className="flex items-center"><span className="mr-2"><IoKeyOutline className='text-[21px]' /></span>Goeal</p>
          
          </div>
          <div>
        <p className="flex items-center"><span className="mr-2"><TbLogout2  className='text-[21px]'/></span>Goeal</p>
        </div>
        </div>
       
      </div>

      {/* Main course */}
      <div className='pt-3'>
        <div className='bg-[#625bf6]  rounded-lg w-[360px] p-2 flex text-white '>
          <div>
          <div className='flex space-x-3 item-center pb-8 '>
            <div className='text-white p-2 rounded bg-gray-700'><IoBusinessOutline /></div>
            <p>Total AutoMobiles</p>
          </div>
          <div className='flex py-3'>
            <div className='px-2'>
            <span className="flex items-center space-x-1">
             <GoDotFill className="text-green-500" />
             <p className='text-xs'>Active</p>
           </span>
              <p className='ml-4 text-xl pt-2 font-semibold'>189</p>
            </div>
            <div className='border-l-2 px-2'>
            <span className="flex items-center space-x-1">
             <GoDotFill className="text-red-500" />
             <p className='text-xs'>InActive</p>
           </span> 
             <p className='ml-5 text-xl pt-2 font-semibold'>56</p>
            </div>
            
          </div> 
          </div>
          <div>
          <div className="flex items-center justify-center w-[170px]  rounded-lg overflow-hidden ml-auto">
        <img
          src="https://r2.erweima.ai/imgcompressed/compressed_a5734b07f0eec8d50fc6219e7ad5564d.webp"
          alt="Automobile Icon"
          className="object-contain w-full h-full"
        />
      </div>
      </div>
        </div>



        {/* data */}
        <div className='pt-3'>
          <div className='bg-[#212a3b] rounded-lg w-[360px] h-[400px] p-2'>
            <div className='flex item-center justify-between'>
            <div>
              <p className='text-white'>AutoMobile Category</p>
              <p className='text-xs text-slate-400'>Latest Update</p>
            </div>
            <div className='p-3 text-white '>
    <CiShare1 />
  </div>
            </div>
            <div className='flex-grow '>
              <div><VerticalGraph className='h-[200px]'/></div>
            </div>
          </div>
        </div>
      </div>

      {/* dataset */}
      
      <div  className='pt-3 pl-3'>
      <div className='flex items-center justify-center space-x-3 mb-2'>
  <div className='bg-[#212a3b] rounded-lg w-[140px] p-1 text-center '>
  <div className='flex space-x-3 item-center pb-2'>
            <div className='text-red-600 p-2 rounded bg-gray-700 mt-1 ml-1'><IoBusinessOutline /></div>
            <p className='text-xs text-white'>
    <span className="block text-[10px] text-slate-400 ml-[-25px] ">Total</span>
    <span className="block text-sm font-thin">Vehicles</span>
</p>
          </div><p className='text-white text-lg font-medium pl-6'>97K</p>
    
  </div>
  <div className='bg-[#212a3b] rounded-lg w-[140px] p-1 text-center'>
  <div className='flex space-x-3 item-center pb-2'>
            <div className='text-blue-600 p-2 rounded bg-gray-700 mt-1 ml-1'><LuUserSquare /></div>
            <p className='text-xs text-white'>
    <span className="block text-[10px] text-slate-400 ml-[-10px] ">Total</span>
    <span className="block text-sm font-thin">PHEV</span>
</p>
          </div><p className='text-white text-lg font-medium pl-6'>25K</p>
    
  
  </div>
  <div className='bg-[#212a3b] rounded-lg w-[140px] p-1 text-center'>
  <div className='flex space-x-3 item-center pb-2'>
            <div className='text-purple-600 p-2 rounded bg-gray-700 mt-1 ml-1'><LuUserSquare /></div>
            <p className='text-xs text-white'>
    <span className="block text-[10px] text-slate-400 ml-[0px] ">Total</span>
    <span className="block text-sm font-thin">BEV</span>
</p>
          </div><p className='text-white text-lg font-medium pl-6'>72K</p>
 
</div>
</div>

       <div className='bg-[#212a3b] rounded-lg w-[450px] p-2 '>
      <div className='flex item-center text-white'>Electric Vehicle Analysis</div>
      <div className='text-slate-400 text-xs'>Total Vehicles By model</div>
      <div className='pt-8'>
       <Json/>

      </div>
       </div>
      </div >
      
      {/* Last chart */}

      <div className='pt-3 pl-3'>
       <div className='bg-[#212a3b] rounded-lg w-[360px] p-2 '>
       <p className='text-white'>Total Vehical By Model Year</p>
       <p className='text-xs text-slate-400'>Latest Update</p>
        <LineGraph/>

       </div>

       <div className='bg-[#212a3b] mt-3 rounded-lg w-[360px] p-2 '>
        <p className='text-white'>Total Vehical By Electric Vehical Type</p>
       <p className='text-xs text-slate-400'>Latest Update</p>

       <PollDoughnutChart/>

       </div>
      </div>
      </div>
    </>
  )
}

export default Home
