import Link from 'next/link'
import { useEffect } from 'react'

function Article({ articles }) {

    useEffect(() => {
      console.log("Taking effect");
      async function fetchData() {
        // API calls which will get data from ROR through proxy from client
        const res = await fetch('/users')
        const users = await res.json();
        console.log("Users");
        console.log(users);
      }
      fetchData();
    }, []);

    return (
      <ul>
        {articles.map((article) => (
            <li key={article.id}>
                <Link key={article.id} href={`/articles/${encodeURIComponent(article.id)}`}>
                    <a>{article.title}</a>
                </Link>
          </li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get articles
    const res = await fetch(`${process.env.HOST}api/v1/articles/`)
    const articles = await res.json()
  
    // By returning { props: { articles } }, the Blog component
    // will receive `articles` as a prop at build time
    return {
      props: {
        articles,
      },
    }
  }

  export default Article