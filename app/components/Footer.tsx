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
                        <p><Link href={`/${lang}`}>RX Tradex</Link> là đơn vị tổ chức triển lãm hàng đầu châu Á. Chúng tôi tự hào là thành viên của <Link href="https://www.rxglobal.com/" target='_blank'>RX</Link>, công ty tổ chức sự kiện hàng đầu thế giới chuyên mang đến những sự kiện cao cấp, chuyên sâu, kết nối người mua đến với các nhà cung cấp, đối tác kinh doanh chiến lược. Với quy mô toàn cầu hơn 400 sự kiện tại 22 quốc gia, phục vụ 43 lĩnh vực công nghiệp. Riêng tại Thái Lan và Việt Nam, chúng tôi tổ chức 20 triển lãm và hội nghị quốc tế uy tín.</p>
                        <h4>38 năm thành công</h4>
                        <p>Với 38 năm, <strong>RX Tradex</strong> đã và đang thiết lập hệ thống kết nối mạng lưới các doanh nghiệp đa dạng trong nhiều ngành công nghiệp, tối ưu bằng phương thức kết hợp các yếu tố <strong>Chiến lược sự kiện</strong>, <strong>Kiểm soát tài chính</strong>, <strong>Vận hành tinh gọn</strong> và <strong>Truyền thông tích hợp</strong>, chứng minh hiệu quả nhờ vào kinh nghiệm và sự kết nối.</p>
                    </div>
                    </div>
                    <div className="w-full lg:w-[29rem]">
                        <p className="font-semibold text-[1.09375em] leading-[1.3125rem] text-[#787878] pb-[10px]">Liên Kết Với Các Triển Lãm</p>
                        <div className="grid grid-cols-2 justify-items-start gap-x-10 gap-y-3">
                        {events?.map((event:any) => (
                            <Link href={`/${lang}/${event.eventURL}`} className="text-[#ECECEC] font-semibold text-[.8125em] leading-[1.3125rem]" key={event.eventName}>
                                {event.eventName}
                            </Link>
                        ))}
                        </div>
                    </div>
                    <div className="max-w-[17rem] w-full">
                        <p className="font-bold text-[1.09375em] leading-[1.3125rem] text-[#787878] pb-[10px]">Liên hệ với chúng tôi</p>
                        <div className="flex flex-col gap-[.625rem] mb-[.625rem]">
                            <p className="font-bold text-white text-[.9375rem] leading-[1.375rem]">Văn phòng Thái Lan</p>
                            <p className="text-[#787878] text-[.9375rem] leading-[1.375rem]">Tầng 32, Tòa nhà Sathorn Nakorn, 100/68-69 North Sathon đường Silom, Bangrak, Băng Cốc 10500 Thái Lan.</p>
                            <div className="text-[.875rem] text-white">
                                <div className=""><span className="text-[#787878]">Điện thoại: </span> (+66) 2686 7299</div>
                                <div className=""><span className="text-[#787878]">Hộp thư: </span> rtdxvn@rxtradex.com</div>
                                <div className=""><span className="text-[#787878]">Trang web: </span> www.rxtradex.com</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[.625rem] mb-[.625rem]">
                            <p className="font-bold text-white text-[.9375rem] leading-[1.375rem]">Văn phòng Việt Nam</p>
                            <p className="text-[#787878] text-[.9375rem] leading-[1.375rem]">Tầng 2, Kova Center, 92G-92H Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
                            <div className="text-[.875rem] text-white">
                                <p className=""><span className="text-[#787878]">Điện thoại: </span> (+84) 28-6287-3355</p>
                                <p className=""><span className="text-[#787878]">Hộp thư: </span> CustomerService@rxtradex.com</p>
                                <p className=""><span className="text-[#787878]">Trang web: </span> rx-vietnamshows.com</p>
                            </div>
                        </div>
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