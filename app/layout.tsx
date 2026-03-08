import type { Metadata } from 'next';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlowerAnimation from '@/components/FlowerAnimation';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: "Happy Women's Day - A small gift for amazing women",
  description:
    "Một món quà nhỏ gửi đến những người phụ nữ phi thường nhân ngày Quốc tế Phụ nữ 8/3. Chúc mừng ngày của bạn!",
  keywords: ["Quốc tế Phụ nữ", "8/3", "Women's Day", "lời chúc", "phụ nữ", "hoa"],
  authors: [{ name: "Women's Day App" }],
  openGraph: {
    title: "Happy Women's Day 🌸 - A small gift for amazing women",
    description:
      "Một món quà nhỏ gửi đến những người phụ nữ phi thường nhân ngày Quốc tế Phụ nữ 8/3.",
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Happy Women's Day",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Happy Women's Day 🌸",
    description: "Một món quà nhỏ gửi đến những người phụ nữ phi thường nhân ngày 8/3.",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-inter antialiased">
        <LoadingScreen />
        <FlowerAnimation />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
