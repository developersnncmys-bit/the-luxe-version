/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF first, WebP fallback — both are dramatically smaller than the
    // 2MB source PNGs in /public/images. Next serves the best format the
    // browser accepts.
    formats: ["image/avif", "image/webp"],
    // Cache optimized variants for 30 days. Repeat visits hit the CDN/browser
    // cache instead of re-decoding source PNGs each time.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Only picsum is allowed — the SafeImage fallback when a local file is
    // missing. Unsplash and Pexels are deliberately excluded so no stock
    // imagery can slip into the site.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" }
    ]
  },
  experimental: {
    optimizePackageImports: ["framer-motion"]
  }
};

export default nextConfig;
