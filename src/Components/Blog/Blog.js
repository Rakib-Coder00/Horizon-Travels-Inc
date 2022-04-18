import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="qna-container">
      <h1>Difference between authorization and authentication :</h1>
      <p>
      In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to. <br /> Both are very crucial topics often associated with the web as key pieces of its service infrastructure.
      </p>
      <p className="fw-bold">Authorization:</p>
      <p>Authentication is about validating your credentials like User Name/User ID and password to verify your identity. <br /> This term is often used interchangeably with access control or client privilege. Authorization usually done before authorization.</p>
      <p className="fw-bold">Authentication:</p>
      <p>Authorization is the process to determine whether the authenticated user has access to the particular resources. It determines what user can and cannot access. <br /> Authorization is done after successful authentication.</p>

      <h1>What other services does firebase provide other than authentication :</h1>
      <p>
      Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. <br /> It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business.  <br />
      There are many services which Firebase provides other than authentication, Most useful of them are: <br />

        Cloud Firestore,
        Cloud Functions,
        Hosting,
        Cloud Storage,
        Google Analytics,
        Predictions,
        Cloud Messaging,
        Dynamic Links,
        Remote Config .
      </p>
    </div>
    );
};

export default Blog;