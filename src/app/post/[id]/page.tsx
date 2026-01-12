import React from 'react';
import { Metadata } from 'next';
import { POSTS, CATEGORIES } from '../../data/mock';
import { PostCard } from '../../components/blog/PostCard';
import { HorizontalAdSlot, AdSlot } from '../../components/blog/AdSlot';
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
            
            <article className="pb-20">
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl py-4">
                    <div className="flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
                        <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
                        <Link href={`/category/${post.category}`} className="hover:text-indigo-600 cursor-pointer">
                            {category?.name || post.category}
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
                        <span className="font-medium text-gray-900 truncate max-w-[200px]">{post.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-12 flex flex-col md:flex-row gap-12">
                {/* Main Content Column - Max width constrained for readability */}
                <div className="flex-1 max-w-[740px] mx-auto w-full">

                    <header className="mb-8 text-center md:text-left">
                        <div className="mb-4 flex flex-wrap gap-2 items-center justify-center md:justify-start">
                            <Link href={`/category/${post.category}`}>
                                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
                                    {category?.name}
                                </Badge>
                            </Link>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.date}
                            </span>
                            {post.readingTime && (
                                <span className="text-sm text-gray-500">• {post.readingTime}분 읽기</span>
                            )}
                            <span className="text-sm text-gray-400">• 조회 {post.views.toLocaleString()}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-500 leading-relaxed font-light">
                            {post.summary}
                        </p>
                    </header>

                    {/* Ad Slot before content - 추후 AdSense 승인 후 활성화 */}
                    {/* <HorizontalAdSlot className="mb-10 bg-gray-50 border-y border-gray-100 rounded-none mx-[-1rem] md:mx-0 md:rounded-md w-auto" /> */}

                    {post.tags && post.tags.length > 0 && (
                        <div className="mb-8 flex flex-wrap gap-2 items-center">
                            <Tag className="h-4 w-4 text-gray-400" />
                            {post.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <div className="prose prose-lg prose-indigo max-w-none text-gray-800">
                        {/* Simulating content render */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* 문의 섹션 */}
                    <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-bold text-blue-900 mb-2">궁금한 점이 있으신가요?</h3>
                        <p className="text-sm text-blue-800 mb-4">
                            이 글에 대한 질문이나 정정 요청이 있으시다면 언제든 연락주세요. 
                            더 정확하고 유용한 정보를 제공하기 위해 노력하겠습니다.
                        </p>
                        <Link href="/contact">
                            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                                문의하기
                            </Button>
                        </Link>
                    </div>

                    <div className="border-t border-gray-200 mt-12 pt-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <h4 className="font-bold text-gray-900">이 글 공유하기</h4>
                            <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="rounded-full h-10 w-10 text-blue-600 border-blue-100 bg-blue-50 hover:bg-blue-100"><Twitter className="h-4 w-4" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-10 w-10 text-blue-800 border-blue-100 bg-blue-50 hover:bg-blue-100"><Facebook className="h-4 w-4" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-10 w-10 text-blue-700 border-blue-100 bg-blue-50 hover:bg-blue-100"><Linkedin className="h-4 w-4" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-10 w-10 text-gray-600"><Share2 className="h-4 w-4" /></Button>
                            </div>
                        </div>
                    </div>

                    {/* Ad Slot after content - 추후 AdSense 승인 후 활성화 */}
                    {/* <HorizontalAdSlot className="mt-12" /> */}

                </div>

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-80 shrink-0 space-y-8 sticky top-24 self-start">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">목차</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="pl-2 border-l-2 border-indigo-500 text-indigo-700 font-medium">소개</li>
                            <li className="pl-2 border-l-2 border-transparent hover:border-gray-300 cursor-pointer">왜 Tailwind인가?</li>
                            <li className="pl-2 border-l-2 border-transparent hover:border-gray-300 cursor-pointer">설정하기</li>
                            <li className="pl-2 border-l-2 border-transparent hover:border-gray-300 cursor-pointer">핵심 개념</li>
                            <li className="pl-2 border-l-2 border-transparent hover:border-gray-300 cursor-pointer">결론</li>
                        </ul>
                    </div>

                    {/* AdSense 승인 후 활성화 */}
                    {/* <AdSlot label="관련 광고" /> */}

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">{category?.name} 인기글</h3>
                        <div className="space-y-4">
                            {relatedPosts.slice(0, 3).map(p => (
                                <Link key={p.id} href={`/post/${p.id}`}>
                                    <div className="group cursor-pointer">
                                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 leading-snug mb-1">{p.title}</h4>
                                        <span className="text-xs text-gray-400">{p.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts Section (Bottom) */}
            <div className="bg-gray-50 py-16 mt-12 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">다음 읽을 글</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.slice(0, 3).map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
