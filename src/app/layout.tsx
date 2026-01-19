import React from 'react';
import Script from 'next/script';
import '../styles/index.css';
import '../styles/tailwind.css';
import '../styles/fonts.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SuppressHydrationWarning } from './components/SuppressHydrationWarning';

export const metadata = {
    title: {
        default: 'Plentyer - 게임의 모든 정보',
        template: '%s | Plentyer',
    },
    description: 'Plentyer는 PC, 콘솔, 모바일 게임 리뷰와 공략, e스포츠 분석 등 게이머를 위한 최고의 콘텐츠를 제공합니다.',
    keywords: ['플렌티어', 'Plentyer', '게임', 'PC게임', '콘솔게임', '모바일게임', 'e스포츠', '게임리뷰', '게임공략', '게임추천'],
    authors: [{ name: 'Plentyer' }],
    creator: 'Plentyer',
    publisher: 'Plentyer',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: '/',
        siteName: 'Plentyer',
        title: 'Plentyer - 게임의 모든 정보',
        description: 'PC, 콘솔, 모바일 게임 리뷰와 공략, e스포츠 분석 등 게이머를 위한 최고의 콘텐츠를 제공합니다.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Plentyer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Plentyer',
        description: '게임의 모든 정보',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'nGLC6wqeingyxdWpDtTR9DKlBw7TNDT9A8_l8PrHWt0',
        other: {
            'naver-site-verification': '094139038ce6770db27aa5907e4d187026f34334',
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
                <meta name="naver-site-verification" content="094139038ce6770db27aa5907e4d187026f34334" />
                <meta name="google-adsense-account" content="ca-pub-1410200096892996" />
            </head>
            <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
                {/* Google AdSense - beforeInteractive로 head에 삽입 */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1410200096892996"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"
                />
                
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZCMSKGVQ2M"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-ZCMSKGVQ2M');
                    `}
                </Script>
                
                <SuppressHydrationWarning />
                <Header />
                <main suppressHydrationWarning>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
