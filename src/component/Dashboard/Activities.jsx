import React from 'react'
import ActivityCalendar from './ActivityCalendar'

const Activities = () => {
  return (
    <div>
       <div className="flex mt-6 justify-between items-center mb-3">
        <h3 className="font-medium text-[18px] text-[#0B0809] mb-3  dark:text-[#F5F5F5]">
          Activities
        </h3>
        <a className=" dark:text-[#D1F462] text-[#313DDF] text-[10px] sm:text-[12px] md:text-[14px] underline  font-medium">
          See all
        </a>
      </div>

      <ActivityCalendar/>
    </div>
  )
}

export default Activities
