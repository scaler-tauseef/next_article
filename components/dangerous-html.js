function createMarkup(html = "First &middot; Second") {
    return { __html: html };
  }
  
  function DangerousComponent({ html }) {
    return <div dangerouslySetInnerHTML={createMarkup(html)} />;
  }
  
  export default DangerousComponent;