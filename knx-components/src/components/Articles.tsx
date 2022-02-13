import React, { useEffect } from "react";
import "./Articles.css";

type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// type Article = {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   author: string;
//   picture: string;
//   content: string;
// };

type ArticleProps = {
  theme?: React.CSSProperties;
};

export default function Articles({ theme }: ArticleProps) {
  const [articles, setArticles] = React.useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setArticles(data.slice(0, Math.floor(Math.random() * 6) + 1));
    };

    fetchData();
  }, []);

  if (articles.length === 0) return null;

  return (
    <div style={{ ...theme, top: "70px" }}>
      {articles &&
        articles?.map((article, index) => {
          return (
            <div key={index} className="article">
              <div className="article-title">{article.title}</div>
              <div>
                <div className="article-body">{article.body}</div>
                <div className="article-id">{article.id}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
