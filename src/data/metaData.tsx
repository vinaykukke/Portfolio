import * as React from "react";
import { keyWords } from "./keywords";

const getMetaTags = () => (
  <>
    <meta
      property="og:title"
      content="The Oro Coffee Company - Product Listings"
      key="title"
    />
    <meta property="og:type" content="website" />
    <meta name="geo.placename" content="Bengaluru" />
    <meta name="geo.region" content="IN-KA" />
    <meta name="Keywords" content={keyWords.join(", ")} />
    <meta property="og:site_name" content="The Oro Coffee Company" />
    <meta property="og:url" content="https://kukke.coffee/oro" />
    <meta
      property="og:description"
      content="The Oro Coffee Company brings you fresh premium sourced coffee beans, 
        roasted with care, from the best farms across India. Order yours online now!"
    />
    <meta
      property="og:image"
      content="https://kukke.coffee/_next/image?url=%2Flogos%2Flogo-main.png&w=2048&q=75"
    />
    <meta
      name="description"
      key="description"
      content="The Oro Coffee Company is a coffee powder manufacturer, supplier, wholesaler 
        and exporter in Bengaluru, Karnataka. We offer the best coffee prices on Filter Coffee, Espresso Blends,
        Instant Coffee - Spray Dried, Instant Coffee - Agglomerated, Arabica - Green Beans, 
        Robusta - Green Beans, Arabica - Roasted Coffee Beans, Robusta - Roasted Coffee Beans.
        We also offer premium grade coffee beans: Arabica - AAA, AA, PB, Robusta - AAA, AA, PB"
    />
    <link rel="canonical" href="https://kukke.coffee/oro" key="canonical" />
  </>
);

export default getMetaTags;
