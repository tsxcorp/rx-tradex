import NewList from "@/app/components/NewList";
import NewTop from "@/app/components/NewTop";
import Widget from "@/app/components/Widget";
import { promises as fs } from 'fs';

const AboutUs = async ( props : any ) => {
  const lang = "vi";

  // Gọi data dịch từ file /dictionaries/vi.json
  const file = await fs.readFile(process.cwd() + '/app/dictionaries/vi.json', 'utf8');
  const translate = JSON.parse(file);

  // Giới hạn gọi 6 trang/lần & lấy số ?page= trên URL
  const LIMIT = 6;
  const page = +(props?.searchParams?.page ?? 1);

  // Call API gọi data trang News
  const newUrl = await fetch(`${process.env.URL_BE}posts?_fields=id,title,slug,date,excerpt,featured_media,featured_image_url,acf&lang=${lang}&per_page=${LIMIT}&page=${page}`, { next: { revalidate: 3600 } });
  if (!newUrl.ok) {
    throw new Error('Failed to fetch data')
  }
  const newPageUrl = await newUrl.json();
  const totalPage = +(newUrl.headers?.get('X-Wp-Totalpages')?? 0)

  return (
    <main className="mt-[127px] bg-white">
      <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
        <div className="w-full py-10">
          <div className="relative inline-block">
            <h1 className="text-[2.5rem]">{translate.News}</h1>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
          </div>
          <div className="flex flex-col lg:flex-row py-10 gap-[3.125rem]">
            <div className="w-full lg:w-[70%]">
              <NewTop
                lang = {lang}
                data = {newPageUrl}
              />
              <div className="flex flex-col gap-[1.875rem]">
                <div className="border-b-2 border-solid border-slate-300">
                  <div className="relative inline-block">
                    <h3 className="text-black text-[1.188rem] leading-[171%] font-bold max-w-fit relative after:absolute after:content-[''] after:left-0 after:bottom-[-0.625rem] after:bg-DarkRed after:h-[0.188rem] after:w-full">
                      {translate.AllPosts}
                    </h3>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
                  </div>
                </div>
                <NewList
                  lang = {lang}
                  data = {newPageUrl}
                  totalPage = {totalPage}
                  page = {page}
                  translate = {translate}s
                />
              </div>
            </div>
            <Widget
              lang = {lang}
              data = {newPageUrl}
              translate = {translate}
              url = {translate.CategoryURL}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default AboutUs
