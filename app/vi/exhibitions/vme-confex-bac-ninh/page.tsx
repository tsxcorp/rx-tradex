import Image from 'next/image'
import Link from 'next/link'

function VME() {
  return (
  <div className="mt-[127px]">
      <div id="bac-ninh-confex" className="bg-cover bg-center bg-[url('https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05152613/bn_confex_bac_ninh.webp')]">
         <div className="py-10 bg-blend-darken">
            <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
               <div className="flex flex-wrap justify-center mx-auto gap-4">
                  <div className="w-full">
                     <div className="flex flex-col items-center text-center gap-4 h-full">
                        <div className="flex-1 flex flex-col items-center text-center gap-4">
                           <div className="flex items-center justify-center" max-width="1440">
                              <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05152612/bn_confex_bac_ninh_1.webp" width="1920" height="787" alt="RX-image" className="" />
                           </div>
                        </div>
                        <div className="mt-auto">
                           <Link href="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144919/Confex_Agenda.pdf" target="_blank" aria-label="AGENDA CONFEX" rel="nofollow" className="flex items-center btn_register_green justify-center">
                              <div className="flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                                 AGENDA CONFEX
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="flex flex-col items-center text-center gap-4 h-full">
                        <div className="mt-auto">
                           <Link href="https://reg.rx-vietnamshows.com/vme-confex-2024" target="_blank" aria-label="REGISTER NOW" rel="nofollow" className="flex items-center btn_register_gold justify-center">
                              <div className="flex items-center justify-center bg-amber-500 hover:bg-amber-300 gap-[.625em] p-3 text-white border-b-4 border-amber-600">
                                 REGISTER NOW
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  </div>
  )
}

export default VME