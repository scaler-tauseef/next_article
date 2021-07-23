import DangerousComponent from "../../components/dangerous-html"

function Article({ article }) {
    return <DangerousComponent html={article.content}/>
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get articles
    const res = await fetch(`${process.env.HOST}/api/v1/articles/`)
    const articles = await res.json()
  
    // Get the paths we want to pre-render based on articles
    const paths = articles.map((article) => ({
      params: { id: article.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log("Getting static props", params.id);
  // params contains the article `id`.
    // If the route is like /articles/1, then params.id is 1
    const res = await fetch(`${process.env.HOST}/api/v1/articles/${params.id}`)
    const article = await res.json()
  
    // Pass article data to the page via props
    return { props: { article } }
  }

export default Article;