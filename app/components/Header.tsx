import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar';

const Header = async ( { lang } : any ) => {
    // Call API gọi data Menu
    const menuUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=header-footer&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
    if (!menuUrl.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await menuUrl.json();
    const homPage = data[0].acf.homPage
    const contact = data[0].acf.contact
    const contactURL = data[0].acf.contactURL
    const language = data[0].acf.language

    return (
    <header className="fixed w-full z-50 top-0">
        <div className="bg-white h-[40px] lg:h-[32px]">
            <div className="mx-auto max-w-[71rem] w-full px-4 xl:px-0">
                <div className="flex xs:flex-row gap-2 xs:gap-0 items-center justify-between py-[0.438rem]">
                    <nav className="flex items-center gap-[0.438rem] uppercase text-[0.563rem] leading-[167%]">
                        <div>
                            <Link href={`/${lang}`} className="hover:text-[#e7631c]">
                                {homPage}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/${lang}/${contactURL}`} className="hover:text-[#e7631c]">
                                {contact}
                            </Link>
                        </div>
                        <div className="flex">
                                {language}:
                            <Link href="/en" className="self-center">
                                <Image src="/images/en.svg" alt="en" height="69" width="100" className="ml-2 w-5 align-bottom" />
                            </Link>
                            <Link href="/vi" className="self-center">
                                <Image src="/images/vi.svg" alt="en" height="69" width="100" className="ml-2 w-5 align-bottom" />
                            </Link>
                        </div>
                    </nav>
                    <div className="flex items-center gap-[0.625rem]">
                        <nav className="social-network flex items-center gap-[0.625rem]">
                            <Link href="https://www.facebook.com/rxtradexvietnam" aria-label="reedtradex-facebook" target="_blank">
                                <svg className="svg-inline--fa fa-square-facebook w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-facebook" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                            </Link>
                            <Link href="https://x.com/manufactexpo" aria-label="reedtradex-twitter" target="_blank">
                                <svg className="svg-inline--fa fa-square-twitter w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-twitter" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/rxtradexvn" aria-label="reedtradex-linkedin" target="_blank">
                                <svg className="svg-inline--fa fa-linkedin w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.youtube.com/user/reedtradex" aria-label="reedtradex-youtube" target="_blank">
                                <svg className="svg-inline--fa fa-square-youtube w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-youtube" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="" fill="currentColor" d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"></path>
                                </svg>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
		<Navbar
            lang = {lang}
            data = {data}
        />
	</header>
    )
}

export default Header