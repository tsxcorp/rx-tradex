import React from 'react'
import Image from 'next/image'

function HomeEvent() {
  return (
    <a href="/vi/trien-lam/vme-vietnam-manufacturing-expo-vi" className="w-full">
        <div className="flex">
            <div className="w-[34.164%] shrink-0 flex justify-center items-center bg-[#D9D9D9]">
                <div className="flex items-center justify-center">
                    <Image src="/images/004-home-bgEvent.webp" width="900" height="900" alt="Logo Show" />
                </div>
            </div>
            <div className="w-[65.836%] flex flex-1 pl-5 bg-[#C4C4C4] text-[#333333]">
                <div className="flex-1 py-[0.844rem]">
                    <div className="flex flex-col gap-[0.188rem] mb-2">
                    <p className="text-base font-bold leading-5">Vietnam Manufacturing Expo</p>
                    <p>Hà Nội, VN</p>
                    <div className=" w-[72.4138%]"><span className="block bg-[#333333] h-[2px] w-full"></span></div>
                    </div>
                    <div>
                    <p className="text-base font-bold leading-5">Ngày 07 - 09 Tháng 08 Năm 2024</p>
                    <p className="p3 leading-4">09:00 - 17:00</p>
                    <p className="p3 leading-4 capitalize">Cung Văn Hoá Hữu nghị Việt Xô (ICE)</p>
                    </div>
                </div>
                <div className="">
                    <Image src="/images/002-home-bgEvent.webp" width={61} height={191} alt="rx-img"/>
                </div>
            </div>
        </div>
        <div className="bg-[#626262] flex justify-end items-center py-[0.219rem] px-[0.625rem]">
            <Image src="/images/003-home-bgEvent.webp" width="95" height="15" alt="rx-img" />
        </div>
    </a>
  )
}

export default HomeEvent