// next-config.mjs

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    react: {
      // Configuration related to React
      removeProperties: true,
      throwIfNamespace: false,
    },
  };
  
  export default nextConfig;
  