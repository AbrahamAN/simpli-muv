/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "simplimuv.com",
      "e00-expansion.uecdn.es",
      "www.motociclismo.es",
      "e00-marca.uecdn.es",
      "s3-alpha-sig.figma.com",
      "www.1zoom.me",
      "i.pinimg.com",
      "fondosmil.co",
      "bucket-rn-40-dev-test.s3.amazonaws.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/:path*",
      },
    ];
  },
};

export default nextConfig;
