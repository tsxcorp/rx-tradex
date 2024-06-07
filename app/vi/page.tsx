import HomeHeroVid from "../components/HomeHeroVid";
import HomeConnect from "../components/HomeConnect";
import HomeEventList from "../components/HomeEventList";

const Home = async () => {
  // Call API gọi data trang Home
  const homeUrl = await fetch(`${process.env.URL_BE}pages?_fields=id,title,acf&slug=trang-chu&acf_format=standard`, { next: { revalidate: 3600 } });
  if (!homeUrl.ok) {
      throw new Error('Failed to fetch data')
  }
  const homepageUrl = await homeUrl.json();

  const heroVideo = homepageUrl[0].acf.heroVideo;
  const imagesAbout = homepageUrl[0].acf.imagesAbout.url;
  const titleAboutUs = homepageUrl[0].acf.groupAbout.titleAboutUs;
  const descriptionAboutUs = {__html:homepageUrl[0].acf.groupAbout.descriptionAboutUs};
  const buttonName = homepageUrl[0].acf.groupAbout.groupAboutButton.buttonName;
  const buttonLink = homepageUrl[0].acf.groupAbout.groupAboutButton.buttonLink;


return (
  <main>
    <HomeHeroVid
      heroVideo = {heroVideo}
    />

    <HomeConnect
      imagesAbout = {imagesAbout}
      titleAboutUs = {titleAboutUs}
      descriptionAboutUs = {descriptionAboutUs}
      buttonName = {buttonName}
      buttonLink ={buttonLink}
    />

    <HomeEventList
      lang = "vi"
    />
  </main>
);
}
export default Home
