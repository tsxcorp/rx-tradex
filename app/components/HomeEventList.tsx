import React from 'react'
import HomeEvent from './HomeEvent'

const HomeEventList = async ({ lang } : any) => {
  // Call API gọi data Menu
  const menuUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=header-footer&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!menuUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const data = await menuUrl.json();

  // Call API gọi data Event
  const eventUrl = await fetch(`${process.env.URL_BE}events?_fields=id,title,slug,acf&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!eventUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const events = await eventUrl.json();
  return (
    <div className="bg-[#f3f3f3] py-10 relative" >
        <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
            <div className="font-bold mb-10">
              <div className="text-3xl" dangerouslySetInnerHTML={{__html: data[0].acf.Heading.eventComing}} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.938rem] mb-10" >
              {events?.map((event:any) => (
                <HomeEvent key={event.id}
                  data = {event}
                  lang = {lang}
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default HomeEventList