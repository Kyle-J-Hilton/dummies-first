import React, { useEffect, useRef } from "react";
import Head from "next/head";
import HSC from "./components/HSC";
import Loader from "./components/Loader";
import ogImgUrl from "./assets/images/airpods.png";


const Home = () => {
 
  const contentRef = useRef(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dummies Lab",
    "url": "https://www.dummies-lab.com/",
    "description": "Explore the world of NFTs with Dummies Lab. Discover unique and limited-edition artworks.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dummies-lab.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div>
      <Head>
        <title>Dummies Lab - Bitcoin NFTs</title>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="en_US" />
    	  <meta property="og:site_name" content='dummies lab' />
    	  <meta property="og:type" content='website' />
    	  
    	  <meta property="og:image" content="../public/favicon.ico" />
    	  <meta property="og:url" content='https://www.dummies-lab.com/' />

        <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/DummiesLab" />
        <meta name="twitter:title" content="@DummiesLab" />
        <meta name="twitter:description" content="Bout to go DUMMY" />
        <meta name="twitter:image" content="../public/favicon.ico" />


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
