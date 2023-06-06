import React, { useEffect, useState } from "react";
import bg from "../../assets/absolutvision-WYd_PkCa1BY-unsplash.jpg";
import PageTop from "../../components/PageTop";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";
import { client } from '../../client';
import Loading  from "../../components/Loading";



const News = () => {
  const [newsData, setNewsData ]= useState([])
  const [isloading, setLoading]=useState(true)
  const newsFunction= async() => {
    const newsItem= await client.fetch(`*[_type=="news"]{
      title,
      slug,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      },
      publishedAt,
    }`).then((data) =>setNewsData(data))  
   setLoading(false)
    return newsItem
  }


  useEffect(() => {
    newsFunction()
  }, []);
  return (
    <div>
      {isloading?<Loading/>:<div>

      <PageTop bg={bg} label="news and events" />
      <div className="flex flex-col py-10 px-5 md:px-16">
        <h1 className="font-bold text-xl">News and Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news)=>(
          
          <NewsCard key={news.slug.current} 
          newsImage={news.mainImage.asset.url} 
          newsTitle={news.title}
          slug={news.slug.current}
          />
         
        ))}
        </div>
      </div>
      <Footer />
      </div> 
      }
        
    </div>
  );
};

export default News;
