const HomeHeroVid = async ( {heroVideo} : any) => {
  return (
    <div className="h-[18.75rem] sm:h-[25rem] lg:h-[42.5rem] xl:h-screen py-10 bg-cover bg-center relative mt-14 lg:mt-0" >
        <video width="100%" height="100%" muted autoPlay loop playsInline>
            <source src={heroVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default HomeHeroVid