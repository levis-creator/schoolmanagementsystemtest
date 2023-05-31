import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { client } from "../client";
import Loading from "../components/Loading";
import { PortableText } from "@portabletext/react";

const Article = () => {
  const [articlePost, setArticlePost] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const articleItem = async () => {
    const news = await client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setArticlePost(data[0]));
    setIsLoading(false);
    return news;
  };

  useEffect(() => {
    articleItem();
  }, [slug]);

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <section>
          <div className="flex flex-col gap-6 p-5">
            <img
              src={articlePost.mainImage.asset.url}
              alt=""
              className="h-[200px] w-full object-cover"
            />
            <div className="text-justify space-y-4">
              <h1 className="font-bold">{articlePost.title}</h1>
              <PortableText value={articlePost.body} />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Article;
