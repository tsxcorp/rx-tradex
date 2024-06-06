import Image from 'next/image'
import Category from './Category'

function NewTop ( {data, lang} : any ) {
    const slug = data[0].slug
    const title = data[0].title.rendered
    const category = data[0].acf.category
    const thumb = data[0].featured_image_url
  return (
    <div className="mb-[1.875rem] relative after:absolute after:bg-black after:opacity-50 after:top-0 after:left-0 after:bottom-0 after:right-0">
        <a href={`/${lang}/${slug}`} className="">
        <div className="flex items-center justify-center w-full">
            <Image src={thumb} width="760" height="427" alt="RX-image" />
        </div>
        </a>
        <div className="absolute left-[1.563rem] bottom-[1.563rem] z-10 flex flex-col gap-[0.938rem]">
        <Category category={category} />
        <h3 className="text-white leading-[120%] font-bold text-xl lg:text-[2rem] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <a href={`/${lang}/${slug}`} className="hover:text-[#a22701] line-clamp-2">
                {title}
            </a>
        </h3>
        </div>
    </div>
  )
}

export default NewTop