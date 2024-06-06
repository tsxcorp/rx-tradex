const AboutUs = async () => {
  // Call API gọi data trang About - tiếng Việt
  const aboutUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,content&slug=ve-chung-toi`, { next: { revalidate: 3600 } });
  if (!aboutUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const aboutpageUrl = await aboutUrl.json();
  const title = aboutpageUrl[0].title.rendered;
  const content = {__html:aboutpageUrl[0].content.rendered}

  return (
    <main className="mt-[127px] bg-white">
      <div className="max-w-[1136px] w-full mx-auto px-4 xl:px-0">
        <div className="w-full py-10">
          <div className="relative inline-block">
            <h1 className="text-[2.5rem]">{title}</h1>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
          </div>
          <div className="blog" dangerouslySetInnerHTML={content}></div>
        </div>
      </div>
    </main>
  );
}
export default AboutUs
