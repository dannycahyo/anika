/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  publicRuntimeConfig: {
    url: process.env.NEXT_PUBLIC_ANIME_API ?? "https://api.jikan.moe/v4/anime",
  },
};

module.exports = nextConfig;
