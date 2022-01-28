import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
  useEffect(() => {
    document.title = "Blog - ELKAWTHER MARKET";
  }, []);

  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default Blog;
