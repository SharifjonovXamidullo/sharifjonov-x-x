/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/my-contact-form", // bu repo nomi bilan bir xil bo'lishi kerak
};

export default nextConfig;
