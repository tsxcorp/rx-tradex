import NewCategory from "@/app/components/NewCategory";
import NewWidget from "@/app/components/NewWidget";

function Widget( { translate,lang,data,url } : any ) {
  return (
    <div className="w-full lg:w-[30%] h-screen sticky top-36">
        <div className="border-b-2 border-solid border-slate-300">
            <div className="relative inline-block">
                <h3 className="text-black text-[1.188rem] leading-[171%] font-bold max-w-fit relative after:absolute after:content-[''] after:left-0 after:bottom-[-0.625rem] after:bg-DarkRed after:h-[0.188rem] after:w-full">
                {translate.Category}
                </h3>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
            </div>
        </div>
        <NewCategory
            lang = {lang}
            url = {url}
        />
        <div className="border-b-2 border-solid border-slate-300 mt-3">
            <div className="relative inline-block">
                <h3 className="text-black text-[1.188rem] leading-[171%] font-bold max-w-fit relative after:absolute after:content-[''] after:left-0 after:bottom-[-0.625rem] after:bg-DarkRed after:h-[0.188rem] after:w-full">
                {translate.NewPosts}
                </h3>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#cd1719] to-red-500"></span>
            </div>
        </div>
        <NewWidget
            lang = {lang}
            data = {data}
        />
    </div>
  )
}

export default Widget