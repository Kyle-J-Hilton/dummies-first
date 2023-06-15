import React, { useEffect, useRef } from "react";
import Head from "next/head";
import HSC from "./components/HSC";
import Loader from "./components/Loader";
import ogImgUrl from "./assets/images/airpods.png"


const Home = () => {
 
  const contentRef = useRef(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dummies Lab",
    "url": "https://www.dummieslab.com",
    "description": "Explore the world of NFTs with Dummies Lab. Discover unique and limited-edition artworks.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dummieslab.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div>
      <Head>
        <title>Dummies Lab - Bitcoin NFTs</title>
        <meta name='description' content='Discover the exciting world of Dummies Lab, a leading NFT project revolutionizing the digital art space. Explore the latest creation from the team that brought you Cha Cha Vans, and collect unique, limited-edition artworks.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="en_US" />
    	  <meta property="og:site_name" content='dummies lab' />
    	  <meta property="og:type" content='website' />
    	  <meta property="og:description" content='Discover the exciting world of Dummies Lab, a leading NFT project revolutionizing the digital art space. Explore the latest creation from the team that brought you Cha Cha Vans, and collect unique, limited-edition artworks.' />
    	  <meta property="og:image" content={ogImgUrl} />
    	  <meta property="og:url" content='https://www.dummieslab.com' />

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
