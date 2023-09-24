/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com",
      "xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com",
      "replicate.delivery",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/garrrikkotua/github-illusion",
        permanent: false,
      },
     
      {
        source: "/t",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
