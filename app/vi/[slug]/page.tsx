import News from "@/app/components/News";
import Widget from "@/app/components/Widget";

const AboutUs : any = async ( { params } : any ) => {
  const lang = "vi";

  // Call API gọi data Heading ở trang Header Header& Footer
  const headingUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=header-footer&lang=${lang}&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!headingUrl.ok) {
    throw new Error('Failed to fetch data')
  }
  const newHeadingUrl = await headingUrl.json();

  // Call API gọi data trang News
  const newUrl = await fetch(`${process.env.URL_BE}posts?_fields=id,title,slug,date,excerpt,content,featured_media,featured_image_url,acf&slug=${params.slug}`, { next: { revalidate: 3600 } });
  if (!newUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const newPageUrl = await newUrl.json();
  const news = newPageUrl[0]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rx-vietnamshows.com/vi/${params.slug}`
    },
    "headline": news.title.rendered,
    "image": news.featured_image_url,  
    "author": {
      "@type": "Organization",
      "name": "RX Tradex Vietnam",
      "url" : "https://rx-vietnamshows.com"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "RX Tradex Vietnam",
      "logo": {
        "@type": "ImageObject",
        "url": "https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/07101138/logo-rxtradex-white.webp"
      }
    },
    "datePublished": `${news.date}+07:00`
  }

  // Call API gọi data list trang News
  const newsUrl = await fetch(`${process.env.URL_BE}posts?_fields=id,title,slug,date,excerpt,content,featured_media,featured_image_url,acf&slug=${params.slug}`, { next: { revalidate: 3600 } });
  if (!newsUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const newsPageUrl = await newsUrl.json();

  return (
    <>
      <title>{news.title.rendered}</title>
      
      <meta property="og:title" content={news.title.rendered}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`https://rx-vietnamshows.com/${lang}/${params.slug}`}/>
      <meta property="og:image" content={news.featured_image_url}/>
      <meta name="description" content={news.excerpt.rendered} />
      <link rel="canonical" href={`https://rx-vietnamshows.com/${lang}/${params.slug}`} />   

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mt-[100px] bg-white">
        <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
          <div className="w-full py-10">
            <div className="flex flex-col lg:flex-row py-10 gap-[3.125rem]">
              <div className="w-full lg:w-[70%]">
                <News
                  tranlaste = {newHeadingUrl[0].acf.Heading}
                  data = {news}
                />
              </div>
              <Widget
                lang = {lang}
                data = {newPageUrl}
                translate = {newHeadingUrl[0].acf.Heading}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default AboutUs
