import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Varsayılan olarak, Next.js'nin Image bileşeni, SVG dosyalarını doğrudan yüklemez. SVG'ler XML tabanlı dosyalar oldukları için, özellikle kullanıcı tarafından sağlanan SVG’lerin içeriği kötü niyetli kod barındırabilir. SVG'ler üzerinden JavaScript kodu ya da diğer güvenlik açıkları içeren kodlar yüklenebilir.
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
