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
   <main className="mt-24 lg:mt-[127px]">
      <iframe
         src="https://reg.rx-vietnamshows.com/mxv-pre-regis"
         className="w-full h-[790px] lg:h-screen"
      />
   </main>
  )
}

export default VME