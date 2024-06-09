import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = async ( { lang }:any) => {
    // // Call API gọi data Menu
    const menuUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=header-footer&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
    if (!menuUrl.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await menuUrl.json();
    const logo = data[0].acf.logo
    const events = data[0].acf.listEvent

  return (
    <footer className="w-full bg-DarkBlack">
        <div className="pt-[2.5rem] pb-5 relative">
            <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row gap-4 pb-8 border-b-2 border-[#3F3F3F] border-solid">
                    <div className="w-full lg:w-[23rem] flex flex-col gap-[0.688rem]">
                    <div className="lg:w-auto mb-[.6875rem]">
                        <Link aria-current="page" href="/vi" className="router-link-active router-link-exact-active">
                            <div className="flex items-center justify-center w-[11rem] lg:w-[17rem]">
                                <Image src={logo} width="265" height="45" alt="RX-image" className="" />
                            </div>
                        </Link>
                    </div>
                    <div className="description">
                        <div className="" dangerouslySetInnerHTML={{__html: data[0].acf.footerInfo}} />
                    </div>
                    </div>
                    <div className="w-full lg:w-[29rem]">
                        <p className="font-semibold text-[1.09375em] leading-[1.3125rem] text-[#787878] pb-[10px]">{data[0].acf.Heading.eventConnect}</p>
                        <div className="grid grid-cols-2 justify-items-start gap-x-10 gap-y-3">
                        {events?.map((event:any) => (
                            <Link href={`/${lang}/exhibitions/${event.eventURL}`} className="text-[#ECECEC] font-semibold text-[.8125em] leading-[1.3125rem]" key={event.eventName}>
                                {event.eventName}
                            </Link>
                        ))}
                        </div>
                    </div>
                    <div className="max-w-[17rem] w-full">
                        <div className="" dangerouslySetInnerHTML={{__html: data[0].acf.footerContact}} />
                        <div className="mt-[.9375rem] flex flex-wrap gap-[1.125rem]">
                            <Link href="https://privacy.reedexpo.com/vt/cookie-policy.html" rel="noopener noreferrer nofollow" target="_blank" className="text-[.8125rem] leading-5 text-[#ECECEC]">Chính sách Cookie</Link><Link href="https://privacy.rxglobal.com/vt.html" rel="noopener noreferrer nofollow" target="_blank" className="text-[.8125rem] leading-5 text-[#ECECEC]">Điều khoản bảo mật</Link><Link href="https://www.reedtradex.vn/html/copyright_statement.html" rel="noopener noreferrer nofollow" target="_blank" className="text-[.8125rem] leading-5 text-[#ECECEC]">Điều khoản về bản quyền</Link><Link href="https://www.reedexhibitions.com/terms-conditions" rel="noopener noreferrer nofollow" target="_blank" className="text-[.8125rem] leading-5 text-[#ECECEC]">Terms &amp; Conditions</Link><Link href="https://www.reedtradex.vn/vn_site/index.html#" rel="noopener noreferrer nofollow" target="_blank" className="text-[.8125rem] leading-5 text-[#ECECEC]">Cookie Settings</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:flex flex-col hidden lg:flex-row gap-[1.25rem] mt-[0.813rem] mb-2">
                    <Link href="/vi/ve-chung-toi" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">Về chúng tôi</Link><Link href="/vi/trien-lam/vme-vietnam-manufacturing-expo-vi" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">VME - Việt Nam</Link><Link href="/vi/trien-lam/metalex-vietnam-vi" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">METALEX Việt Nam</Link><Link href="/vi/trien-lam/nepcon-vietnam-vi" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">NEPCON Việt Nam</Link><Link href="/vi/hoi-nghi" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">Hội nghị</Link><Link href="/vi/co-hoi-toan-cau-2022-2023" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">Cơ hội giao thương</Link><Link href="/vi/tin-tuc" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">Tin tức</Link><Link href="/vi/so-do-trang" className="text-[#ECECEC] text-sm leading-[150%] hover:text-[#901c20]">Sơ đồ trang</Link>
                </div>
                <div className="w-full">
                    <p className="text-[0.688rem] leading-[191%] text-[#ECECEC]">Công ty thành viên của RX, đơn vị tổ chức triển lãm đầu thế giới. © 2023 Thông tin được sở hữu bởi Công ty TNHH  RX Tradex. Bản quyền được bảo lưu.​</p>
                </div>
            </div>
        </div>
        <div className="w-full bg-[#202020] relative">
            <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center py-4">
                    <Link href="/" className="" title="RX Tradex Viet Nam">
                        <Image src="/images/logoRXTradex.svg" width="336" height="31" alt="RX-image" />
                    </Link>
                    <Link href="https://www.relx.com/" target='_blank' className="hidden lg:block" title="Relx Global">
                        <Image src="/images/relx.svg" width="85" height="31" alt="Relx Logo" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer