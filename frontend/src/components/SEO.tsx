import React from "react";
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "ConstructDev - Digital Solutions That Drive Success | Web Development & Design",
  description = "Transform your vision into immersive digital experiences with ConstructDev. Expert web development, SEO optimization, branding, and AI integration services. Your trusted tech partner for cutting-edge solutions.",
  keywords = "web development, web design, SEO optimization, branding, AI integration, digital solutions, website development, web agency, constructdev, tech partner, digital transformation",
  image = "https://res.cloudinary.com/dsvgadc5d/image/upload/v1768481706/CD_logo_ultra_clear_sputsh.png",
  url = "https://constructdev.in",
  type = "website",
}: SEOProps) {
  const fullTitle = title.includes("ConstructDev")
    ? title
    : `${title} | ConstructDev`;
  const fullUrl = url.startsWith("http")
    ? url
    : `https://constructdev.in${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

