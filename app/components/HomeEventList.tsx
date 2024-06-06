import React from 'react'
import HomeEvent from './HomeEvent'

function HomeEventList() {
  return (
    <div className="bg-[#f3f3f3] py-10 relative" >
        <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
            <div className="font-bold mb-10">
                <h3 className='text-[2rem]'>Triển Lãm <strong className="text-[#b82025]">Sắp Diễn Ra</strong></h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.938rem] mb-10" >
                <HomeEvent />
                <HomeEvent />
                <HomeEvent />
                <HomeEvent />
            </div>
        </div>
    </div>
  )
}

export default HomeEventList