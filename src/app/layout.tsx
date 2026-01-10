import React from 'react';
import '../styles/index.css';
import '../styles/tailwind.css';
import '../styles/fonts.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SuppressHydrationWarning } from './components/SuppressHydrationWarning';

export const metadata = {
    title: {
        default: 'Plentyer - 풍요로운 지식과 경험을 나누는 공간',
        template: '%s | Plentyer',
    },
    description: 'Plentyer는 기술, 금융, 라이프스타일, 여행 등 다양한 주제의 깊이 있는 콘텐츠를 제공합니다. 풍부한(Plenty) 지식을 계층(Tier)별로 구조화하여 당신의 성장을 돕습니다.',
    keywords: ['플렌티어', 'Plentyer', '블로그', '기술', '금융', '라이프스타일', '여행', '지식 공유', '성장', '인사이트'],
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
        title: 'Plentyer - 풍요로운 지식과 경험을 나누는 공간',
        description: '기술, 금융, 라이프스타일, 여행 등 다양한 주제의 깊이 있는 콘텐츠를 제공합니다.',
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
        description: '풍요로운 지식과 경험을 나누는 공간',
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
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head suppressHydrationWarning>
                {/* suppressHydrationWarning은 브라우저 확장 프로그램이 추가하는 요소들로 인한 경고를 억제합니다 */}
            </head>
            <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    if (document.readyState === 'loading') {
                                        document.addEventListener('DOMContentLoaded', function() {
                                            setTimeout(function() {
                                                fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        location: 'layout.tsx:inline-script',
                                                        message: 'DOMContentLoaded - initial DOM check',
                                                        data: {
                                                            hasHead: !!document.head,
                                                            headChildren: Array.from(document.head.children || []).map(function(el) {
                                                                return {
                                                                    tag: el.tagName,
                                                                    id: el.id,
                                                                    classes: el.className,
                                                                    hasWxt: el.hasAttribute('data-wxt-integrated'),
                                                                    isEndic: el.id === '__endic_crx__'
                                                                };
                                                            }),
                                                            bodyChildren: Array.from(document.body.children || []).slice(0, 5).map(function(el) {
                                                                return { tag: el.tagName, id: el.id };
                                                            })
                                                        },
                                                        timestamp: Date.now(),
                                                        sessionId: 'debug-session',
                                                        runId: 'run1',
                                                        hypothesisId: 'E'
                                                    })
                                                }).catch(function() {});
                                            }, 100);
                                        });
                                    } else {
                                        setTimeout(function() {
                                            fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    location: 'layout.tsx:inline-script',
                                                    message: 'DOM already loaded - initial DOM check',
                                                    data: {
                                                        hasHead: !!document.head,
                                                        headChildren: Array.from(document.head.children || []).map(function(el) {
                                                            return {
                                                                tag: el.tagName,
                                                                id: el.id,
                                                                hasWxt: el.hasAttribute('data-wxt-integrated'),
                                                                isEndic: el.id === '__endic_crx__'
                                                            };
                                                        })
                                                    },
                                                    timestamp: Date.now(),
                                                    sessionId: 'debug-session',
                                                    runId: 'run1',
                                                    hypothesisId: 'E'
                                                })
                                            }).catch(function() {});
                                        }, 100);
                                    }
                                } catch(e) {}
                            })();
                        `,
                    }}
                />
                <SuppressHydrationWarning />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
