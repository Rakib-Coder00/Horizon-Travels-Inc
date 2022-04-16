import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="qna-container">
      <h1>Difference between authorization and authentication :</h1>
      <p>
      The Context API was created to solve a specific problem in react, sharing state down a component tree.This is used to provide state across entire , or some part of the application.This is achieved using createContext function to define the context.
      A provider component is mainly a component which wraps the component tree which will access the context value.
      After Passing the value from the top level the next task is to consume the context at the required nested component. Then either a Consumer component, Context class member or useContext is used to access the state value.
      </p>
      <h1>What other services does firebase provide other than authentication :</h1>
      <p>
      Semantic tags clearly define the purpose of the HTML element. It also  have meaningful names which tells about type of content. For example header, footer, table, article … etc. HTML5 introduces many semantic tags as mentioned below which make the code easier to write and understand for the developer.Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.
      </p>
    </div>
    );
};

export default Blog;