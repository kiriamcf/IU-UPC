/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    GOOGLE_ID: "688423484319-qvrn42m6mv5h1er40itvkg2ghjflpa0m.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig