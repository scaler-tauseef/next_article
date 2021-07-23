import Link from 'next/link'
import { useEffect } from 'react'

function Article({ articles }) {

    useEffect(() => {
      console.log("Taking effect");
      async function fetchData() {
        // You can await here
        const res = await fetch('/users')
        const users = await res.json();
        console.log("Users");
        console.log(users);
        // ...
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
    const res = await fetch('http://localhost:8080/api/v1/articles/')
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