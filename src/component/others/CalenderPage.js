'use client';



export default function CalenderPage({year, month, day, weekDay}) {
  


  return (
    <>
      <div className='relative bg-white rounded-2xl text-[#4C37AC] flex items-center justify-center flex-col p-6'>
        <div className='flex justify-between gap-3'>
          <div className=''>{year}</div>
          <div className=''>乙巳年[蛇]四月初四</div>
          <div className=''>{month}</div>
        </div>
          <div className='text-[240px] font-extrabold'>{day}</div>
          <div className='text-[60px]'>{weekDay}</div>
      </div>
    </>
  );
}