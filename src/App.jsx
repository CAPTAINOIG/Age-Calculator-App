import { useState } from 'react'
import './App.css'
import icon from './images/icon.svg'
// import Calculator from './component/Calculator'

import {differenceInDays,differenceInMonths, differenceInYears } from 'date-fns'


function App() {

  const [days, setDays] = useState("")
  const [months, setMonths] = useState("")
  const [years, setYears] = useState("")

  // const date = Date.now()
  // console.log(date.toLocaleString());


  const diffInDays = differenceInDays(
    new Date(years, months - 1, 31),
    new Date(years, months - 1, days)
  );
  
  const diffInMonths = differenceInMonths(
    new Date(years, 11, 31),
    new Date(years, months - 1, days)
  );
  
  const diffInYears = differenceInYears(
    new Date(2023, 11, 31),
    new Date(years, months - 1, days)
  );
  

    //  let date = new Date()
    //  console.log(date);

  
  return (
    <>
    <main id='main' className='lg:flex lg:items-center lg:justify-center lg:h-screen bg-slate-100'>
    <div id='wid' style={{borderBottomRightRadius: 100}} className="max-w-lg mx-auto bg-white rounded-3xl shadow bg-slate-100 p-8">
      <form className='flex gap-4'>
        <article>
          <label id='label' className= {`${days > 31 && "text-rose-600"}`}  htmlFor="day">DAY</label>
          <input className='bg-transparent border border-purple-600 w-full py-3 px-4 rounded text-3xl placeholder-slate-400 focus:ring-4 focus:ring-purple-600 transition-all duration-150 focus:border-purple-600 outline-none' type="number" name="day" placeholder='DD' min={1} max={31} onChange={e => setDays(e.target.value)} />
          {
             days > 31 && (
                 <small className='text-rose-600 font-normal block mt-2'>Must Be a Valid Day</small>
             )
          }
        </article>
 
        <article>
        <label id='label' className= {`${months > 12 && "text-rose-600"}`}  htmlFor="months">MONTH</label>
        <input className='bg-transparent border border-purple-600 w-full py-3 px-4 rounded text-3xl placeholder-slate-400 focus:ring-4 focus:ring-purple-600 transition-all duration-150 focus:border-purple-600 outline-none' type="number" name="month" placeholder='MM' min={1} max={12} onChange={e => setMonths(e.target.value)} />
        {
           months > 12 && (
               <small className='text-rose-600 font-normal block mt-2'>Must Be a Valid Month</small>
           )
        }
      </article>

 
      <article>
      <label id='label' className= {`${years > 2023 && "text-rose-600"}`}  htmlFor="years">YEAR</label>
      <input className='bg-transparent border border-purple-600 w-full py-3 px-4 rounded text-3xl placeholder-slate-400 focus:ring-4 focus:ring-purple-600 transition-all duration-150 focus:border-purple-600 outline-none' type="number" name="month" placeholder='YY' min={1900} max={2023} onChange={e => setYears(e.target.value)} />
      {
         years > 2023 && (
             <small className='text-rose-600 font-normal block mt-2'>Must be in the past</small>
         )
      }
    </article>
      </form>
 
     <div className='mt-10 relative'>
     <article className='border-b border-slate-400'></article>
     <article className='absolute right-0 -top-6'>
     <img src={icon} alt="" className='bg-purple-600 rounded-full' />
     </article>
     </div>
 
      <div  className='mt-10 font-bold'>
        <ul>
          <li id='italic' className='text-7xl italic'>
            <span className='text-purple-600'>{diffInYears}</span>years
          </li>
          <li id='italic' className='text-7xl italic'>
            <span className='text-purple-600'>{diffInMonths}</span>months
          </li>
          <li id='italic' className='text-7xl italic'>
            <span className='text-purple-600'>{diffInDays}</span>days
          </li>
        </ul>
      </div>
    </div>
 
  </main>
    </>
  )
}

export default App
