import Link from 'next/link'

function Article({ articles }) {
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
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8080/api/v1/articles/')
    const articles = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        articles,
      },
    }
  }

  export default Article