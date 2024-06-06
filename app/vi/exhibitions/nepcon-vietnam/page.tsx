import NewVME from '@/app/components/NewVME'
import Image from 'next/image'
import Link from 'next/link'

const VME = async () => {
   const lang = "vi";
   const cate = 14

   // Call API gọi data trang News
  const newUrl = await fetch(`${process.env.URL_BE}posts?_fields=id,title,slug,date,excerpt,featured_media,featured_image_url,acf&categories=${cate}&per_page=3`, { next: { revalidate: 3600 } });
  if (!newUrl.ok) {
    throw new Error('Failed to fetch data')
  }
  const newPageUrl = await newUrl.json();

  return (
   <div className="">
      <div id="vme-heroes" className="bg-cover">
         <div className="mx-auto mt-0">
            <div className="w-full h-[800px] object-cover overflow-hidden">
               <Image className="w-full h-[800px] object-cover" src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05133814/bg-vme.webp" width={1920} height={980} alt="VME banner" />
            </div>
            <div className="absolute inset-0 bg-black h-[800px] opacity-60"></div>
            <div className="absolute inset-0 h-[800px] flex items-center justify-center mt-14">
               <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0 h-fit flex flex-col items-center gap-10">
                  <div className="flex gap-10 flex-col items-center">
                     <div className="flex flex-col gap-[.9375rem] items-center">
                           <div className="flex items-center justify-center w-[7rem] lg:w-[16.625rem]" max-width="150">
                              <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05133958/Logo-VME.webp" width="260" height="164" alt="RX-image" className="" />
                           </div>
                     </div>
                     <div className="text-center text-white">
                           <h2 className="font-bold text-3xl lg:text-5xl"><strong>SUSTAINOVATION</strong></h2>
                           <h3 className="font-bold text-xl lg:text-3xl"><strong>THE PATH TO MANUFACTURING EFFICIENCY</strong></h3>
                     </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4 text-[1.313rem] text-white leading-[130%]">
                     <div className="flex items-center gap-[0.375rem]">
                           <div className="flex items-center justify-center shrink-0">
                              <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05141051/date.svg" width="20" height="28" alt="RX-image" className="" />
                           </div>
                           <div className="text-white font-medium leading-[120%]">
                              <p>7-9 August 2024 | 09:00-17:00</p>
                           </div>
                     </div>
                     <div className="flex items-center gap-[0.375rem]">
                           <div className="flex items-center justify-center shrink-0">
                              <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05141051/location.svg" width="16" height="22" alt="RX-image" className="" />
                           </div>
                           <div className="p1 font-medium leading-[120%]">
                              <p>I.C.E Hanoi (Cung Van Hoa), 91 Tran Hung Dao street, Hanoi Vietnam</p>
                           </div>
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-[.9375rem] justify-around items-center">
                     <div className="">
                           <Link download="" target="_blank" rel="nofollow" aria-label="Download Material" href="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06145046/VME_23_Fact.pdf" className="flex items-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 rounded-lg text-white border-b-4 border-green-900">
                              <div className="flex items-center justify-center">
                                    <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05152613/Event_Tag.svg" width="24" height="25" alt="RX-image" className="" />
                              </div>
                              Download Material
                           </Link>
                     </div>
                     <div className="">
                           <Link href="/exhibitions/vme-vietnam-manufacturing-expo/exhibitor-registration" className="flex items-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 rounded-lg text-white border-b-4 border-green-900" aria-label="Exhibitor Registration">
                              <div className="flex items-center justify-center">
                                 <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05152613/Event_Tag_4.svg" width="25" height="25" alt="RX-image" className="" />
                              </div>
                              Exhibitor Registration
                           </Link>
                     </div>
                     <div className="">
                           <Link href="/exhibitions/vme-vietnam-manufacturing-expo/visitor-registration" className="flex items-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 rounded-lg text-white border-b-4 border-green-900" aria-label="Visitor Registration">
                              <div className="flex items-center justify-center">
                                 <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05174742/visitor.svg" width="24" height="21" alt="Đăng ký tham quan" className="" />
                              </div>
                              Visitor Registration
                           </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-vietnam-leading-exhibition" className="py-10 bg-cover bg-center bg-[url('https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05151333/bg-vme-01.webp')]">
         <div className="w-full mx-auto text-center mb-0 text-white lg:text-4xl text-xl px-6">
            <h2>Vietnam&#39;s Leading Exhibition on Machinery and Technology<br className="hidden lg:block"/> for Manufacturing and Supporting Industries</h2>
         </div>
         <div className="w-full">
            <div className="w-full grid grid-cols-2 lg:gap-5 gap-2 justify-evenly lg:px-20 px-5 mt-5 mb-2 text-center items-center">  
               <div className="w-full h-48 bg-red-600 text-white flex items-center justify-center">
                  <div className='flex flex-col items-center justify-center'>
                     <span className="lg:text-7xl text-5xl font-bold">200++</span>
                     <span className="text-3xl">Leading Brands</span>
                  </div>
               </div>
               <div className="w-full h-48 bg-red-600 text-white flex items-center justify-center">
                  <div className='flex flex-col items-center justify-center'>
                     <span className="lg:text-7xl text-5xl font-bold">20++</span>
                     <span className="text-3xl">Countries</span>
                  </div>
               </div>
            </div> 
            <div className="w-full grid grid-cols-3 lg:gap-5 gap-2 justify-evenly lg:px-20 px-5 mt-0 lg:mt-5 mb-2 text-center items-center">
               <div className="bg-red-600 w-full h-48 lg:h-[250px] text-white flex items-center justify-center">
                  <div className='flex flex-col items-center justify-center'>
                     <div className="flex justify-center items-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05151444/icon-meeting.png" height={100} width={100} alt="Icon Meeting" className="lg:w-28 w-12 items-center justify-center invert"/>
                     </div>
                     <span className="lg:text-3xl text-xl mt-2">Conference and<br/>Sharing Sessions</span>
                  </div>
               </div>
               <div className="bg-red-600 w-full h-48 lg:h-[250px] text-white flex items-center justify-center">
                  <div className='flex flex-col items-center justify-center'>
                     <div className="flex justify-center items-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05151443/icon-handshake.png" height={100} width={100} alt="Icon Meeting" className="lg:w-28 w-16 items-center justify-center invert"/>
                     </div>
                     <span className="lg:text-3xl text-xl mt-2">Business matching<br/>program</span>
                  </div>
               </div>
               <div className="w-full h-48 lg:h-[250px] bg-red-600 text-white flex items-center justify-center">
                  <div className='flex flex-col items-center justify-center'>
                     <span className="lg:text-7xl text-3xl font-bold">10.000+</span><br/>
                     <span className="text-3xl">Visitors</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-industrial-news" className="lg:py-10 py-3 bg-slate-100">
         <div className="max-w-3xl mx-auto text-center mt-10">
         <div className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
            <h3 className="">Industrial&#39;s News</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         </div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px] px-4 mb-0">
            <p>Optimize productivity and transform factory production lines with Vietnam Manufacturing Expo 2024, which brings together more than 200 brands of machinery, equipment, and technology from more than 20 countries with the presence of more than 10,000 manufacturers, manufacturing, and supporting industries to explore cutting-edge advancements under the Future Factory theme.</p>
         </div>
         <div className="max-w-3xl mx-auto text-center mt-10">
         <div className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
            <h3 className="">Confex BAC NINH</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         </div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px]:px-4 mb-0">
            <p>Step into the future of manufacturing with the Vietnam Manufacturing Expo and Nepcon Vietnam Confex – a dynamic and condensed version of our renowned exhibitions. This Confex is a unique opportunity to delve into the latest trends, innovations, and strategic insights shaping the manufacturing landscape. With a focus on green manufacturing, circular practices, and navigating challenging times, the Confex promises an intimate and enriching experience for industry professionals.</p>
         </div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px]:px-4 my-10">
            <Link download="" target="_blank" rel="nofollow" aria-label="Download Material" href="https://www.vme-expo.com/content/dam/sitebuilder/rxvn/vme-expo/documents/VME24-Brochure-Confex-Bac-Ninh-2024.pdf.coredownload.114371975.pdf" className="flex items-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 rounded-lg text-white border-b-4 border-green-900">
               Download Brochure
            </Link>
         </div>
      </div>
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
      <div id="vme-enewsletter" className="relative">
         <div>
            <div className="py-10 bg-blend-darken">
               <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                  <div className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                     <h3 className="text-center">Latest eNewsletter</h3>
                     <div className="flex justify-center items-center">
                        <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
                     </div>
                  </div>
                  <NewVME
                     lang = {lang}
                     data = {newPageUrl}
                  />
               </div>
            </div>
         </div>
      </div>
      <div id="vme-activities" className="py-10 bg-slate-100">
         <div className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
            <h3 className="text-center">Activities</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="mx-auto my-10 max-w-[1136px]">
            <div className="lg:flex justify-center mx-auto gap-5 px-6">
               <div className="items-center text-center w-full h-full">
                  <div className="items-center text-center">
                     <h4 className="font-bold text-2xl">Innovation Showcase</h4>
                     <p className="my-3">Book your slot and showcase your product in this one-of-a-kind activity designed to demonstrate cutting-edge technology through on-site performance, with a timeslot spotlight on an LED screen. There are only a few performance slots available, for a good offer, reserve now!</p>
                  </div>
                  <div className="mt-auto">
                     <Link href={`../../${lang}/exhibitions/vme-vietnam-manufacturing-expo/exhibitor-registration`} className="flex items-center btn_thick_dark_green justify-center" aria-label="Exhibitor Registration">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                           REGISTER NOW
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="items-center text-center w-full h-full mt-10 lg:mt-0">
                  <div className="items-center text-center">
                     <h4 className="font-bold text-2xl">Buyer Zone</h4>
                     <p className="my-3">Drop by and experience a mini-at-hall marketplace for business-to-business networking, where all Buyer and Seller demands will collide and lead to the formation of a future corporation. 
                        <br/>Don’t miss out and register today!</p>
                  </div>
                  <div className="mt-auto">
                     <Link href={`../../${lang}/exhibitions/vme-vietnam-manufacturing-expo/visitor-registration`} className="flex items-center btn_thick_dark_green justify-center" aria-label="Exhibitor Registration">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                           REGISTER NOW
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-booth-demo" className="pt-10 bg-cover bg-center bg-[url('https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05175038/booth-Demo-Background.webp')]">
         <div className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
            <h3 className="text-center">Booth Demo</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="flex items-center justify-center">
            <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05174742/booth-demo.webp" width="1542" height="378" alt="RX-image" className="" />
         </div>
      </div>
      <div id="vme-featured-exhibitors" className="py-10 bg-slate-100">
         <div className="font-bold text-gray-900 leading-tight my-10 pb-4 relative">
            <h3 className="text-center text-3xl lg:text-4xl">FEATURED EXHIBITORS</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="grid lg:grid-cols-3 grid-cols-2 justify-center mx-auto gap-5 lg:w-[1200px] px-6">
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133314/Youtube-06.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133314/Youtube-05.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133313/Youtube-01.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133313/Youtube-02.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133313/Youtube-03.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center" max-width="368">
                        <Link href="https://www.youtube.com/watch?v=HQgEZqG1vpo" target="_blank">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06133314/Youtube-04.webp" width="371" height="209" alt="RX-image" className="" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-media-partner" className="pt-10 bg-cover">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center">Media Partner</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="mx-auto max-[1136px]:px-4 divider-dark_green mb-0"></div>
         <div>
            <div className="py-10 bg-blend-darken">
               <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                  
                  <div className="flex flex-wrap justify-center mx-auto gap-4">
                     <div className="w-full">
                        <div className="flex flex-col items-center text-center gap-4 h-full">
                           <div className="flex-1 flex flex-col items-center text-center gap-4">
                              <div className="flex items-center justify-center">
                                 <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06143541/media.webp" width="1186" height="387" alt="RX-image" className="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-about-rx-tradex" className="pt-10 bg-[#1a1a1a]">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center text-white">About RX Tradex</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="mx-auto max-[1136px]:px-4 divider-dark_green mb-[1.875rem]"></div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px]:px-4 mb-0">
            <p className="text-white">RX Tradex is ASEAN&#39;s leading exhibition organizer. We are a member of RX, the world’s leading events organizer which creates high-profile, targeted industry events where buyers and suppliers come together to do business.</p>
         </div>
         <div>
            <div className="py-10 bg-blend-darken">
               <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                  <div className="flex flex-wrap justify-center mx-auto">
                     <div className="w-full">
                        <div className="flex flex-col items-center text-center gap-4 h-full">
                           <div className="flex-1 flex flex-col items-center text-center gap-4">
                              <div className="flex items-center justify-center">
                                 <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06143702/rx-vietnam.webp" width="1136" height="536" alt="RX-image" className="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-previous-post-show-report" className="bg-cover my-10">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center">Previous Post Show Report</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="grid lg:grid-cols-4 grid-cols-2">
            <div className="w-full py-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06143933/show-report.webp" width="296" height="273" alt="RX-image" className="" />
                     </div>
                  </div>
                  <div className="mt-auto">
                     <Link href="https://www.vme-expo.com/content/dam/sitebuilder/rxvn/vme-expo/documents/post-show-report/VME19%20Post%20Show%20Report%20.pdf" target="_blank" aria-label="DOWNLOAD" rel="nofollow" className="flex items-center btn_thick_dark_green justify-center">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                        DOWNLOAD
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="w-full py-2" >
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144109/show-report-2.webp" width="296" height="273" alt="RX-image" className="" />
                     </div>
                  </div>
                  <div className="mt-auto">
                     <Link href="https://www.vme-expo.com/content/dam/sitebuilder/rxvn/vme-expo/documents/post-show-report/VME21%20Post%20Show%20Report.pdf" target="_blank" aria-label="DOWNLOAD" rel="nofollow" className="flex items-center btn_thick_dark_green justify-center">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                        DOWNLOAD
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="w-full py-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144553/Show_Report02_60cbfa9418.webp" width="296" height="273" alt="RX-image" className=""/>
                     </div>
                  </div>
                  <div className="mt-auto">
                     <Link href="https://www.vme-expo.com/content/dam/sitebuilder/rxvn/vme-expo/documents/post-show-report/VME22%20Post%20Show%20Report.pdf" target="_blank" aria-label="DOWNLOAD" rel="nofollow" className="flex items-center btn_thick_dark_green justify-center">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                        DOWNLOAD
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="w-full py-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="flex-1 flex flex-col items-center text-center gap-4">
                     <div className="flex items-center justify-center">
                        <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144552/Show_Report01_de6e19183c.webp" width="296" height="273" alt="RX-image" className="" />
                     </div>
                  </div>
                  <div className="mt-auto">
                     <Link href="https://www.vme-expo.com/content/dam/sitebuilder/rxvn/vme-expo/documents/post-show-report/VME-SIE-2023-Post-show-Report.pdf" target="_blank" aria-label="DOWNLOAD" rel="nofollow" className="flex items-center btn_thick_dark_green justify-center">
                        <div className="w-36 flex items-center justify-center bg-green-600 hover:bg-green-700 gap-[.625em] p-3 text-white border-b-4 border-green-800">
                        DOWNLOAD
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-contact-us" className="pt-10 bg-[#1a1a1a]">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center text-white">Contact Us</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div>
            <div className="pt-[1.875rem] pb-10 bg-blend-darken">
               <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4rem] mb-[1.875rem] text-white">
                     <div className="flex flex-col gap-5 items-center">
                        <p className="text-[1.75rem] font-bold text-center">Space Reservation</p>
                        <p className="p1h font-bold">MS. THANH NGUYEN (LUCY)​</p>
                        <div className="p1h flex flex-col items-center gap-[1.0625rem]">
                           <p>M: +84 (0)936 22 77 39 - Ext 123</p>
                           <p>E. vme-expo@rxtradex.com</p>
                           <p> E. <span className="">thanh.nguyen@rxtradex.com​</span></p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-5 items-center">
                        <p className="text-[1.75rem] font-bold text-center">Visitor Registration</p>
                        <p className="p1h font-bold">MS. HA NGUYEN (HANA)​</p>
                        <div className="p1h flex flex-col items-center gap-[1.0625rem]">
                           <p>M: +84 (0) 869 049 714​</p>
                           <p>E. vme-expo@rxtradex.com</p>
                           <p> E. <span className="">ha.nguyen@rxtradex.com</span></p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-5 items-center">
                        <p className="text-[1.75rem] font-bold text-center">For Media Partner and Press</p>
                        <p className="p1h font-bold">Please contact: Lê Thị Kim Thơ (Sophie)</p>
                        <div className="p1h flex flex-col items-center gap-[1.0625rem]">
                           <p>T: (+84) 28 6287 3355 - Ext 115</p>
                           <p>M: (+84) 937 77 2297</p>
                           <p> E. <span className="">tho.le@rxtradex.com</span></p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center justify-center">
                     <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144552/line_png_1_2d48cabf36.webp" width="1136" height="63" alt="RX-image" className="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-show-location" className="pt-10 bg-cover">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center">Show Location</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="mx-auto max-[1136px]:px-4 divider-red mb-[1.875rem]"></div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px]:px-4 mb-0">
            <p className="font-bold text-lg">I.C.E. Hanoi (Cung Văn Hóa Hữu nghị Việt Xô)</p>
            <p>91 Tran Hung Dao Street, Hanoi, Vietnam</p>
            <p>Located in the heart of Hanoi, the center of easy-to-access transportation links, I.C.E. Hanoi is built with heavy machinery exhibitions in mind. Its facilities and services will make your exhibiting or visiting experience very productive and convenient.</p>
         </div>
         <div className="py-10 relative">
            <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
               <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14897.41040811685!2d105.84270300000001!3d21.018573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab91bac271b3%3A0x8cbd83460242ac57!2sHanoi%20International%20Exhibition%20Center!5e0!3m2!1sen!2suk!4v1717557363488!5m2!1sen!2suk" width="1200" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
      </div>
      <div id="vme-follow-us" className="pt-10 bg-cover bg-center bg-[url('https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/06144826/bg_show1.webp')]">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center text-white">Follow Us</h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="grid grid-cols-4 w-full pb-20">
            <div className="w-full flex justify-center">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link href="https://www.vme-expo.com/en-gb/contact-us.html" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="84" max-height="84">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05170623/contact.webp" width="84" height="84" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="text-white mt-2 hidden lg:block">Contact Us</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link href="https://www.facebook.com/vietnammanufacturingexpopage/" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="84" max-height="84">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05170623/facebook_logo.webp" width="84" height="84" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="text-white mt-2 hidden lg:block">@vietnammanufacturingexpopage</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link  href="https://www.youtube.com/channel/UCmRT_51YXDlUYvC15GafWkw" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="84" max-height="84">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05170611/youtube-logo.webp" width="84" height="84" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="text-white mt-2 hidden lg:block">Youtube Channel</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link href="https://zalo.me/4111701111765786722" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="84" max-height="84">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05170612/zalo-logo.webp" width="84" height="84" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="text-white mt-2 hidden lg:block">VME Expo</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-info" className="my-14">
         <div className="grid lg:grid-cols-4 grid-cols-1 w-full">
            <div className="w-full flex justify-center my-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link  href="https://www.vme-expo.com/en-gb/venue-and-travel.html" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="180" max-height="180">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05171026/icon-venue.webp" width="280" height="280" alt="RX-image" className="object-fill" />
                        </div>
                     </Link>
                     <p className="mt-2">Venue</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center my-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link href="https://www.vme-expo.com/en-gb/venue-and-travel.html" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="80" max-height="80">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05171026/icon-about-vn.webp" width="272" height="81" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="mt-2">About Vietnam</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center my-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                     <Link href="https://www.vme-expo.com/en-gb/venue-and-travel.html" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="80" max-height="80">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05171027/icon-visa.webp" width="272" height="81" alt="RX-image" className="" />
                        </div>
                     </Link>
                     <p className="mt-2">VISA information</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-center my-2">
               <div className="flex flex-col items-center text-center gap-4 h-full">
                  <div className="items-center text-center gap-4">
                  <Link href="https://www.vme-expo.com/en-gb/recommended-hotel.html" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center justify-center" max-width="80" max-height="80">
                           <Image src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/05171026/icon-hotel.webp" width="272" height="81" alt="RX-image" className="scale-75" />
                        </div>
                     </Link>
                     <p className="mt-2">Recommended Hotel</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="vme-important-note" className="py-10 bg-slate-100">
         <div className="text-4xl font-bold text-gray-900 leading-tight my-5 pb-4 relative">
            <h3 className="text-center">Important Note
            </h3>
            <div className="flex justify-center items-center">
               <span className="absolute w-32 h-1 bg-gradient-to-r from-green-500 to-blue-700"></span>
            </div>
         </div>
         <div className="flex flex-col items-center gap-4 text-center max-w-[1136px] w-full mx-auto max-[1136px]:px-4 mb-0">
            <p>“Vietnam Manufacturing Expo is open to trade visitors only. Please dress in business attire. Those wearing shorts and/or sandals and minors under the age of 15 will not be permitted into the exhibition hall. The organizer reserves the right to refuse admission to anyone without cause or explanation.</p>
         </div>
      </div>
   </div>
  )
}

export default VME