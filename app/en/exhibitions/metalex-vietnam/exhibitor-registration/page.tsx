import HomeEventList from '@/app/components/HomeEventList'
import Image from 'next/image'

const VME = async () => {
   const lang = "en"
   const eventName = "metalex-vietnam"

   // Call API gọi data Event
  const eventUrl = await fetch(`${process.env.URL_BE}events?_fields=id,title,slug,acf&lang=${lang}&slug=${eventName}&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!eventUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const events = await eventUrl.json();
  return (
   <main className="mt-[127px]">
      <div className="w-full">
         <Image src={events[0].acf.banner} width={1920} height={980} alt="Event banner" />
      </div>
      <div className="registor mx-auto max-w-[71rem] w-full px-4 xl:px-0 text-center py-16" dangerouslySetInnerHTML={{__html: events[0].acf.registerExhTitle}} />
      <iframe
         src={events[0].acf.exhibitorRegistration}
         aria-label="VME Visitor"
         className="w-full h-[1130px] mb-16"
      />
      <HomeEventList
      lang = {lang}
      />
   </main>
  )
}

export default VME