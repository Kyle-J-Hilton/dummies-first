import React, { useEffect, useRef } from "react";
import Head from "next/head";
import HSC from "./components/HSC";
import Loader from "./components/Loader";



const Home = () => {
 
  const contentRef = useRef(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dummies Lab",
    "url": "https://dummies-6yv4.vercel.app/",
    "description": "Explore the world of NFTs with Dummies Lab. Discover unique and limited-edition artworks.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dummies-6yv4.vercel.app/search?q={dummieslab}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div>
      <Head>
        <title>Dummies Lab</title>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="en_US" />
    	  
    	  <meta property="og:type" content='website' />
    	  <meta property="og:description" content='Bout to go DUMMY' />
    	  <meta property="og:image" content="/dummiestarp.png" />
    	  <meta property="og:url" content='https://dummies-6yv4.vercel.app/' />
       <meta name="og:title" content="Dummies Lab" />

        <link rel="apple-touch-icon" sizes="180x180" href="/dummiestarp.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/dummiestarp.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/dummiestarp.png" />
        <meta name="theme-color" content="#fb9516" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/DummiesLab" />
        <meta name="twitter:title" content="Dummies Lab" />
        <meta name="twitter:description" content="Bout to go DUMMY" />
        <meta name="twitter:image" content="https://dummies-6yv4.vercel.app/dummiestarp.png" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      <Loader />
      <div ref={contentRef}>
        <HSC />
      </div>
    </div>
  );
};

export default Home;
