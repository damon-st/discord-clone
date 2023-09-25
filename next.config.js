/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (confing) => {
    confing.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return confing;
  },
  images: {
    domains: ["utfs.io"],
  },
};

module.exports = nextConfig;
