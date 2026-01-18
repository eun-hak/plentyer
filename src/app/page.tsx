import React, { Suspense } from 'react';
import { POSTS, CATEGORIES } from './data/mock';
import { PostCard } from './components/blog/PostCard';
// import { HorizontalAdSlot, AdSlot } from './components/blog/AdSlot'; // AdSense 승인 후 활성화
import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 로딩 컴포넌트
function PostCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}

export default function Home() {
    const featuredPosts = POSTS.slice(0, 3);
    const recentPosts = POSTS.slice(3);

    return (
        <div className="flex flex-col gap-12 pb-20">
            {/* Hero Section */}
            <section className="py-16 md:py-24 text-center space-y-6 max-w-2xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                    게임의 모든 <span className="text-indigo-600">정보</span>를<br />
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">한 곳에서</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                    PC, 콘솔, 모바일 게임 리뷰부터 e스포츠 분석까지<br />
                    게이머를 위한 최고의 콘텐츠를 제공합니다.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Link href="/category/guide">
                        <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                            게임 탐험하기
                        </Button>
                    </Link>
                    <Link href="/category/strategy">
                        <Button size="lg" variant="outline" className="rounded-full px-8 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                            공략 둘러보기
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">추천 콘텐츠</h2>
                    <Button variant="link" className="text-indigo-600 hidden sm:flex">전체 보기 <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </section>

            {/* 
                AdSense 승인 후 광고 영역 추가 예정
                - 추천 콘텐츠와 최신 업데이트 사이에 HorizontalAdSlot (728x90) 배치
                - 위치: 추천 콘텐츠 섹션 아래
            */}

            {/* Recent Posts List */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">최신 업데이트</h2>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <PostCard
                                    key={post.id}
                                    post={post}
                                    variant="compact"
                                />
                            ))}
                            {/* Duplicating for demo as in original code */}
                            {featuredPosts.map(post => (
                                <PostCard
                                    key={`repeat-${post.id}`}
                                    post={post}
                                    variant="compact"
                                />
                            ))}
                        </div>
                        <div className="pt-8">
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-8">
                        {/* Sidebar */}
                        <div className="sticky top-24">
                            {/* 
                                AdSense 승인 후 사이드바 광고 영역 추가 예정
                                - AdSlot (300x250) 배치
                                - 위치: 사이드바 상단, 인기 주제 위
                            */}

                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">인기 주제</h3>
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map(cat => (
                                        <Link key={cat.id} href={`/category/${cat.slug}`}>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-700"
                                            >
                                                {cat.name}
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
