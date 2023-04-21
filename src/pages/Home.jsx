import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg2 from "../assets/conor-sexton-hRemch0ZDwI-unsplash.jpg"
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import { client } from "../client";
import Loading from '../components/Loading';
const Home = () => {
  const navigate=useNavigate()
  // sanity theming
  const [theme, setTheme]=useState([])
  const [isloading, setLoading]=useState(true)
  const [news, setNews]=useState([])
  const item=[]
  const themeFunction =async()=>{
    const themeData = await client.fetch(`*[_type=="home"]{
      backgroundImageHero{
        asset -> {
          _id,
          url
        }
      },
      heroHeadText,
      mission,
      backgroundImageMission{
        asset -> {
          _id,
          url
        }
      },
      about,
    }`).then((data)=>setTheme(data))
    setLoading(false)
    return themeData
  }
  const newsData= async()=>{
    const newsItems = await client.fetch(`
    *[feature==true]{
      title,
      slug,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      }
    }
    `).then((data)=>setNews(data))
    return newsItems
  }
  
  useEffect(()=>{
    themeFunction()
    newsData()
  },[])
  
    
  return (
    <>
    {isloading?<Loading/>:
    <div className="bg-slate-100 w-screen min-h-screen ">
  
      <div className="flex bg-red-800 flex-col " >
        <img src={theme[0].backgroundImageHero.asset.url} alt="bg" className="lg:h-[calc(100vh-230px)] object-cover"/>
        <div className="text-white px-3 py-6 flex flex-col gap-5 md:px-16 lg:px-32">
        <div className="font-bold text-3xl md:text-4xl lg">
        {theme[0].heroHeadText}
        </div>
        <button className=" bg-blue-950 font-bold w-fit  px-5 py-3 rounded-md" onClick={()=>navigate("/contact")}>
          CONTACT US
        </button>
        </div>
      </div>
      {/* mission statement */}
      <div className="relative overflow-hidden w-screen ">
        <img src={theme[0].backgroundImageMission.asset.url} alt="ocean background " className="object-contain "/>
        <div className="absolute w-screen
        md:px-20 
        top-0 h-full text-white 
        flex items-center justify-center flex-col
         p-5 text-center leading-relaxed space-y-2
         lg:px-40" style={{
          backgroundColor:'rgba(0,0,0,0.5)'
        }} >
        <h2 className=" font-bold text-xl md:text-2xl">Mission</h2>
        <p className=" text-base md:text-xl ">
        {theme[0].mission}
        </p>
        </div>
      </div>
      {/* about us */}
      <div className="px-3 py-10 text-center bg-white space-y-3 md:px-20 lg:px-32">
      <h2 className=" font-bold text-xl md:text-2xl">About Us</h2>
      <p className=" text-base md:text-xl">
      {theme[0].about}
      </p>
      <button className="bg-blue-950 
      text-white px-5 
      py-2 rounded-md"
      onClick={()=>navigate("/about")}>
        Read More
      </button>
      </div>
      {/* news and event section 1 */}
      <div className="px-3 md:px-16 bg-white py-5 lg:px-32 " >
      <h2 className=" text-xl font-bold pb-7">News and Events</h2>
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-3">
      {/* card */}
      
        {news.map((news)=>(
          
          <NewsCard key={news.slug.current} 
          newsImage={news.mainImage.asset.url} 
          newsTitle={news.title}
          slug={news.slug.current}
          />
         
        ))}
      
      </div>

      </div>
      {/* footer */}
      <Footer/>
    </div>}
    </>
  );
};

export default Home;
