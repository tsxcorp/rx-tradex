"use client"
import Link from "next/link";
import Category from './Category'
import Image from 'next/image'
import Date from '../components/date.vietnam';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function NewList ( {lang, data, translate, totalPage, page} : any ) {
  return (
    <>
        {data?.map((news:any) => (
        <div className="flex flex-col lg:flex-row gap-4" key={news.id}>
            <a href={`/${lang}/${news.slug}`} className="">
                <div className="flex items-center justify-center w-full lg:w-[17.188rem] xl:h-[12rem] overflow-hidden">
                    <Image src={news.featured_image_url} width="750" height="422" alt="RX-image"/>
                </div>
            </a>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <Category category={news.acf.category} />
                    <h4 className="text-[1.25rem] text-black leading-[120%] font-bold">
                        <a href={`/${lang}/${news.slug}`} className="line-clamp-2 hover:text-[#a22701]">
                            {news.title.rendered}
                        </a>
                    </h4>
                    <p className="text-[#8B8B8B] leading-none font-medium italic">
                       {translate.publish} <Date dateString={news.date} lang={lang}/>
                    </p>
                    <div className="text-[1.063rem] line-clamp-2 leading-[120%] text-gray-500" dangerouslySetInnerHTML={{__html: news.excerpt.rendered}} />
                    <a href={`/${lang}/${news.slug}`} className="text-sm font-bold leading-none max-w-fit border-b border-solid mt-2 shrink-0 hover:text-[#a22701]">{translate.readMore}</a>
                </div>
            </div>
        </div>
        ))}
        <Pagination
            className="flex justify-center space-x-2 mt-10"
            page={page}
            count={totalPage}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    href={`?page=${item.page}`}
                    {...item}
                />
                )}
        />
    </>
  )
}

export default NewList