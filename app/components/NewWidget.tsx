import Image from 'next/image'
import Category from './Category'

function NewWidget( {data, lang} : any ) {
    const slug = data[0].slug
    const title = data[0].title.rendered
    const category = data[0].acf.category
    const thumb = data[0].featured_image_url
  return (
    <div className="flex flex-col gap-[0.625rem] pb-4 border-b border-Gray border-solid mt-4">
        <a href={`/${lang}/${slug}`} className="">
            <div className="flex items-center justify-center xl:w-[21rem] xl:h-[11.5rem] overflow-hidden">
                <Image src={thumb} width="750" height="422" alt="RX-image" />
            </div>
        </a>
        <div className="flex flex-col gap-[0.625rem]">
            <Category category={category} />
            <h3 className="text-[1.23rem] text-black leading-[120%] font-semibold">
                <a href={`/${lang}/${slug}`} className="hover:text-[#a22701] line-clamp-2">
                    {title}
                </a>
            </h3>
        </div>
    </div>
  )
}

export default NewWidget