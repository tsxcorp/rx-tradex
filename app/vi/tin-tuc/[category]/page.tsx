import NewList from "@/app/components/NewList";
import NewTop from "@/app/components/NewTop";
import Widget from "@/app/components/Widget";

const AboutUs = async ( props : any ) => {
  const lang = "vi";

  // Call API gọi data Heading ở trang Header Header& Footer
  const headingUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=header-footer&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!headingUrl.ok) {
    throw new Error('Failed to fetch data')
  }
  const newHeadingUrl = await headingUrl.json();

  // // Call API gọi data của category
  const categoryUrl = await fetch(`${process.env.URL_BE}categories?_fields=id,name,slug,count&lang=${lang}&slug=${props.params.category}`, { next: { revalidate: 3600 } });
  if (!categoryUrl.ok) {
    throw new Error('Failed to fetch data')
  }
  const categoryData = await categoryUrl.json();

  // Giới hạn gọi 6 trang/lần & lấy số ?page= trên URL
  const LIMIT = 6;
  const page = +(props?.searchParams?.page ?? 1);

  // Call API gọi data danh sách bài post của category
  const newUrl = await fetch(`${process.env.URL_BE}posts?_fields=id,title,slug,date,excerpt,featured_media,featured_image_url,acf&categories=${categoryData[0].id}&per_page=${LIMIT}&page=${page}`, { next: { revalidate: 3600 } });
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
            <h1 className="text-[2.5rem]">{newHeadingUrl[0].acf.Heading.news}</h1>
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
                      {newHeadingUrl[0].acf.Heading.allNewPosts}
                    </h3>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
                  </div>
                </div>
                <NewList
                  lang = {lang}
                  data = {newPageUrl}
                  totalPage = {totalPage}
                  page = {page}
                  translate = {newHeadingUrl[0].acf.Heading}
                />
              </div>
            </div>
            <Widget
              lang = {lang}
              data = {newPageUrl}
              translate = {newHeadingUrl[0].acf.Heading}
              url = {newHeadingUrl[0].acf.Heading.categoryURL}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default AboutUs
