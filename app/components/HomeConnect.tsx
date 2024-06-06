"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"

const HomeConnect = ( {imagesAbout, titleAboutUs, descriptionAboutUs, buttonName, buttonLink}:any) => {
    const a = usePathname();
  return (
    <div className="bg-cover relative">
        <div>
            <div className="relative bg-white">
                <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-[3.438rem] py-5 lg:py-10">
                        <div className="flex items-center justify-center basis-1/2">
                            <Image src={imagesAbout} width="523" height="280" alt="RX-image" className="" priority={false}/>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-center gap-[0.625rem]">
                            <div className='font-bold'>
                                <h3 className='text-[1.7rem]'><strong className='text-[#b82025]'>RX Tradex:</strong> {titleAboutUs} </h3>
                            </div>
                            <div className="text-justify">
                                <p dangerouslySetInnerHTML={descriptionAboutUs}></p>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap max-[500px]:justify-center">
                                    <a href={`${a}${buttonLink}`} className="flex items-center btn_thick_white justify-center" aria-label={buttonName}>
                                        <div className="flex items-center justify-center">
                                            {buttonName}
                                        </div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeConnect