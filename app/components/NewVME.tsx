import Image from 'next/image'
import Category from './Category'

function NewWidget( {data, lang} : any ) {
  return (
    <div className="flex flex-col gap-[0.625rem] pb-4 mt-4">
        <div className="grid lg:grid-cols-3">
        {data?.map((category:any) => (
            <div key={category.title}>
                <a href={category.slug} className="">
                    <div className="flex items-center justify-center xl:w-[21rem] xl:h-[11.5rem] overflow-hidden">
                        <Image src={category.featured_image_url} width="750" height="422" alt="RX-image" />
                    </div>
                </a>
                <div className="flex flex-col gap-[0.625rem]">
                    <div className="mt-3">
                        <Category category={category.acf.category} />
                    </div>
                    <h3 className="text-[1.23rem] text-black leading-[120%] font-semibold">
                        <a href={`/${lang}/${category.slug}`} className="hover:text-[#a22701] line-clamp-2 pr-5">
                            {category.title.rendered}
                        </a>
                    </h3>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default NewWidget