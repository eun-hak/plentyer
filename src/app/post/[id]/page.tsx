import React from 'react';
import { Metadata } from 'next';
import { POSTS, CATEGORIES } from '../../data/mock';
import { PostCard } from '../../components/blog/PostCard';
import { TableOfContents } from '../../components/blog/TableOfContents';
// import { HorizontalAdSlot, AdSlot } from '../../components/blog/AdSlot'; // AdSense 승인 후 활성화
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronRight, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const post = POSTS.find(p => p.id === id);
    
    if (!post) {
        return {
            title: '게시물을 찾을 수 없습니다',
        };
    }

    const category = CATEGORIES.find(c => c.slug === post.category);

    return {
        title: post.title,
        description: post.summary,
        keywords: [post.category, category?.name || '', '블로그', '게시물'],
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            publishedTime: post.date,
            authors: ['Plentyer'],
            tags: [category?.name || post.category],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
        },
    };
}

export async function generateStaticParams() {
    return POSTS.map((post) => ({
        id: post.id,
    }));
}

export default async function PostDetailPage({ params }: PageProps) {
    const { id } = await params;
    
    // 타입 안전성을 위한 검증
    if (!id || typeof id !== 'string') {
        notFound();
    }

    const post = POSTS.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    const category = CATEGORIES.find(c => c.slug === post.category);
    const relatedPosts = POSTS.filter(p => p.id !== post.id && p.category === post.category);
    
    // JSON-LD 구조화 데이터
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        image: post.coverImage || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com'}/og-image.png`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: 'Plentyer',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Plentyer',
            logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com'}/og-image.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://plentyer.com'}/post/${post.id}`,
        },
        keywords: post.tags?.join(', ') || category?.name || '',
        articleSection: category?.name || post.category,
        wordCount: post.content.length,
    };

    return (
        <>
            {/* JSON-LD 구조화 데이터 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <article className="pb-10">
            {/* Breadcrumb */}
            <nav className="bg-gray-50 border-b border-gray-100" aria-label="Breadcrumb">
                <div className="container mx-auto px-4 max-w-5xl py-2.5">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
                        <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
                        <Link href={`/category/${post.category}`} className="hover:text-indigo-600 cursor-pointer">
                            {category?.name || post.category}
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
                        <span className="font-medium text-gray-900 truncate max-w-[200px]">{post.title}</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 max-w-5xl py-6 flex flex-col md:flex-row gap-6">
                {/* Main Content Column - Max width constrained for readability */}
                <div className="flex-1 max-w-[680px] mx-auto w-full">

                    <header className="mb-5 text-center md:text-left">
                        <div className="mb-2.5 flex flex-wrap gap-1.5 items-center justify-center md:justify-start text-xs">
                            <Link href={`/category/${post.category}`}>
                                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer text-xs px-2 py-0.5">
                                    {category?.name}
                                </Badge>
                            </Link>
                            <span className="text-gray-500 flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.date}
                            </span>
                            {post.readingTime && (
                                <span className="text-gray-500">• {post.readingTime}분 읽기</span>
                            )}
                            <span className="text-gray-400">• 조회 {post.views.toLocaleString()}</span>
                        </div>

                        <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 leading-tight mb-3">
                            {post.title}
                        </h1>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {post.summary}
                        </p>
                    </header>

                    {/* 
                        AdSense 승인 후 광고 영역 추가 예정
                        - 본문 시작 전: HorizontalAdSlot (728x90) 또는 In-Article Ad
                        - 본문 중간 (약 300-500자 읽은 후): In-Article Ad 또는 HorizontalAdSlot
                        - 본문 끝나기 전: HorizontalAdSlot (728x90)
                    */}

                    {post.tags && post.tags.length > 0 && (
                        <div className="mb-5 flex flex-wrap gap-1.5 items-center">
                            <Tag className="h-3.5 w-3.5 text-gray-400" />
                            {post.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <section className="article-content text-gray-800">
                        <div className="[&_h2]:text-lg md:[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-gray-200
                            [&_h3]:text-base md:[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-5 [&_h3]:mb-2.5
                            [&_p]:text-sm md:[&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-3 [&_p]:text-gray-700
                            [&_ul]:my-3 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5
                            [&_ol]:my-3 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1.5
                            [&_li]:text-sm md:[&_li]:text-base [&_li]:text-gray-700 [&_li]:leading-relaxed
                            [&_strong]:font-semibold [&_strong]:text-gray-900
                            [&_a]:text-indigo-600 [&_a]:no-underline hover:[&_a]:underline">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </section>

                    {/* 문의 섹션 */}
                    <section className="mt-6 p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-1.5 text-xs md:text-sm">궁금한 점이 있으신가요?</h3>
                        <p className="text-xs text-blue-800 mb-2.5 leading-relaxed">
                            이 글에 대한 질문이나 정정 요청이 있으시다면 언제든 연락주세요. 
                            더 정확하고 유용한 정보를 제공하기 위해 노력하겠습니다.
                        </p>
                        <Link href="/contact">
                            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs h-7 md:h-8 px-3">
                                문의하기
                            </Button>
                        </Link>
                    </section>

                    <section className="border-t border-gray-200 mt-6 pt-5">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                            <h4 className="font-semibold text-gray-900 text-sm md:text-base">이 글 공유하기</h4>
                            <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="rounded-full h-9 w-9 text-blue-600 border-blue-100 bg-blue-50 hover:bg-blue-100"><Twitter className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-9 w-9 text-blue-800 border-blue-100 bg-blue-50 hover:bg-blue-100"><Facebook className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-9 w-9 text-blue-700 border-blue-100 bg-blue-50 hover:bg-blue-100"><Linkedin className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-9 w-9 text-gray-600"><Share2 className="h-3.5 w-3.5" /></Button>
                            </div>
                        </div>
                    </section>

                    {/* 
                        AdSense 승인 후 본문 끝 광고 영역 추가 예정
                        - HorizontalAdSlot (728x90) 배치
                        - 위치: 본문 끝, 공유 버튼 위
                    */}

                </div>

                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 space-y-6 sticky top-20 self-start">
                    <TableOfContents content={post.content} />

                    {/* 
                        AdSense 승인 후 사이드바 광고 영역 추가 예정
                        - AdSlot (300x250) 배치
                        - 위치: 목차 아래, 인기글 위
                    */}

                    <section>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">{category?.name} 인기글</h3>
                        <div className="space-y-3">
                            {relatedPosts.slice(0, 3).map(p => (
                                <Link key={p.id} href={`/post/${p.id}`}>
                                    <div className="group cursor-pointer">
                                        <h4 className="text-xs font-medium text-gray-900 group-hover:text-indigo-600 leading-snug mb-1">{p.title}</h4>
                                        <span className="text-xs text-gray-400">{p.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>

            {/* Related Posts Section (Bottom) */}
            <section className="bg-gray-50 py-8 mt-6 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-5">다음 읽을 글</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {relatedPosts.slice(0, 3).map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </article>
        </>
    );
}
