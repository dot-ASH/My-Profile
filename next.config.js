/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'cloudinary',
    path: 'res.cloudinary.com/dhqvucmrt'
  }
}

module.exports = nextConfig
