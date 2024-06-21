"use client"
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

function Navbar( { lang, data } : any) {
    const [show, setShow] = useState(false);
    const [subShow, setSubShow] = useState(false);

    const logo = data[0].acf.logo
    const aboutUs = data[0].acf.aboutUs
    const aboutUsURL = data[0].acf.aboutUsURL
    const exhibition = data[0].acf.exhibition
    const exhibitionURL = data[0].acf.exhibitionURL
    const worldwideOpportunities = data[0].acf.worldwideOpportunities
    const worldwideOpportunitiesURL = data[0].acf.worldwideOpportunitiesURL
    const news = data[0].acf.news
    const newsURL = data[0].acf.newsURL
    const events = data[0].acf.listEvent

    return (
    <div className="relative bg-DarkBlack flex items-center">
        <div className="mx-auto max-w-[71rem] w-full px-4 xl:px-0">
            <div className="flex flex-col xl:flex-row items-center justify-between py-4 xl:py-[0.313rem]">
                <div className="w-full xl:w-auto flex items-center justify-between">
                    <div className="lg:w-auto">
                        <Link onClick={() => setShow(false)} aria-current="page" href={`/${lang}`} className="router-link-active router-link-exact-active">
                            <div className="flex items-center justify-center w-[11rem] lg:w-[17rem]">
                                <Image src={logo} width="265" height="45" alt="RX Tradex logo" className="" />
                            </div>
                        </Link>
                    </div>
                    <div className="xl:hidden">
                        <svg onClick={() => setShow(true)} className={show ? "svg-inline--fa fa-bars w-6 h-6 text-white xl:hidden hidden" : "svg-inline--fa fa-bars w-6 h-6 text-white xl:hidden"}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="" fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                        <svg onClick={() => setShow(false)} className={show ? "svg-inline--fa fa-bars w-6 h-6 text-white xl:hidden" : "svg-inline--fa fa-bars w-6 h-6 text-white xl:hidden hidden"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path className="" fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                        </svg>
                    </div>
                </div>
                <nav className="hidden xl:block">
                    <ul className="flex items-center capitalize text-white text-[0.813rem] leading-[150%] h-[5.313rem]">
                        <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <Link href={`/${lang}/${aboutUsURL}`} className="w-full h-full px-10 flex items-center">
                                <span>{aboutUs}</span>
                            </Link>
                        </li>
                        {/* <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <span className="w-full h-full px-10 flex items-center">{lang === "vi" ? "Triển Lãm" : "Exhibitions"}</span>
                            <ul className="mega__menu hover-item absolute z-10 top-full left-0 bg-DarkBlack w-max capitalize opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                {events?.map((event:any) => (
                                    <li className="hover-item hover:bg-red-800" key={event.eventName}>
                                        <Link href={`/${lang}/exhibitions/${event.eventURL}`} className="inline-block w-full h-full px-4 py-[0.625rem]">{event.eventName}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li> */}
                        <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <span className="w-full h-full px-10 flex items-center">{lang === "vi" ? "Triển Lãm" : "Exhibitions"}</span>
                            <ul className="mega__menu hover-item absolute z-10 top-full left-0 bg-DarkBlack w-max capitalize opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <li className="hover-item hover:bg-red-800">
                                    <Link href="https://www.vme-expo.com/" className="inline-block w-full h-full px-4 py-[0.625rem]">
                                        Vietnam Manufacturing Expo
                                    </Link>
                                </li>
                                <li className="hover-item hover:bg-red-800">
                                    <Link href="https://www.nepconvietnam.com/" className="inline-block w-full h-full px-4 py-[0.625rem]">
                                        NEPCON Việt Nam
                                    </Link>
                                </li>
                                <li className="hover-item hover:bg-red-800">
                                    <Link href="https://www.metalexvietnam.com/" className="inline-block w-full h-full px-4 py-[0.625rem]">
                                        METALEX Việt Nam
                                    </Link>
                                </li>
                                <li className="hover-item hover:bg-red-800">
                                    <Link href="https://www.wrv-expo.com/" className="inline-block w-full h-full px-4 py-[0.625rem]">
                                        Waste And Recycling Việt Nam
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <Link href={`${exhibitionURL}`} className="w-full h-full px-10 flex items-center" target='_blank'>
                                <span>{exhibition}</span>
                            </Link>
                        </li>
                        <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <Link href={`${worldwideOpportunitiesURL}`} className="w-full h-full px-10 flex items-center" target='_blank'>
                                <span>{worldwideOpportunities}</span>
                            </Link>
                        </li>
                        <li className="hover-item group text-white relative cursor-pointer hover:bg-red-800 h-full">
                            <Link href={`/${lang}/${newsURL}`} className="w-full h-full px-10 flex items-center">
                                <span>{news}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="xl:hidden overflow-hidden" >
                    <ul className={show ? "z-10 absolute duration-500 bg-DarkBlack flex flex-col w-full gap-4 capitalize text-white text-base leading-[150%] p-4 left-0 opacity-100" : "z-10 absolute duration-500 bg-DarkBlack flex flex-col w-full gap-4 capitalize text-white text-base leading-[150%] p-4 left-[100vh] opacity-0"}>
                        <li className="hover-item cursor-pointer hover:bg-red-800">
                            <Link onClick={() => setShow(false)} href={`/${lang}/${aboutUsURL}`} className="flex justify-between w-11/12 h-full py-[0.625rem] px-2">
                                <span>{aboutUs}</span>
                            </Link>
                        </li>
                        <li className="hover-item cursor-pointer hover:bg-red-800">
                            <span className="flex justify-between w-full h-full py-[0.625rem] px-2" onClick={() => setSubShow((prev1) => !prev1)}>{lang === "vi" ? "Triển Lãm" : "Exhibitions"}
                            {!subShow ? (
                                <svg className="svg-inline--fa fa-angle-up w-4 h-4 text-white overflow-hidden transition-all duration-150 ease-linear rotate-180" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path>
                                </svg>
                            ) : (
                                <svg className="svg-inline--fa fa-angle-up w-4 h-4 text-white overflow-hidden transition-all duration-150 ease-linear" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path>
                                </svg>
                            )
                            }
                            </span>
                            <ul className="translate-x-10 opacity-1 capitalize transition-all duration-300 ease-linear">
                            {subShow && (
                                <>
                                    {events?.map((event:any) => (
                                        <li className="hover-item hover:bg-red-800" key={event.eventName}>
                                            <Link onClick={() => setShow(false)} href={`/${lang}/exhibitions/${event.eventURL}`} className="inline-block w-full h-full px-4 py-[0.625rem]">{event.eventName}</Link>
                                        </li>
                                    ))}
                                </>
                                )
                            }
                            </ul>
                        </li>
                        <li className="hover-item cursor-pointer hover:bg-red-800">
                            <Link onClick={() => setShow(false)} href={`${exhibitionURL}`} target="_blank" className="flex justify-between w-11/12 h-full py-[0.625rem] px-2">
                                <span>{exhibition}</span>
                            </Link>
                        </li>
                        <li className="hover-item cursor-pointer hover:bg-red-800">
                            <Link onClick={() => setShow(false)} href={`${worldwideOpportunitiesURL}`} target="_blank" className="flex justify-between w-11/12 h-full py-[0.625rem] px-2">
                                <span>{worldwideOpportunities}</span>
                            </Link>
                        </li>
                        <li className="hover-item cursor-pointer hover:bg-red-800">
                            <Link onClick={() => setShow(false)} href={`/${lang}/${newsURL}`} className="flex justify-between w-11/12 h-full py-[0.625rem] px-2">
                                <span>{news}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    </div>
  )
}

export default Navbar