import React from 'react';
import { Metadata } from 'next';
import { POSTS, CATEGORIES } from '../../data/mock';
import { PostCard } from '../../components/blog/PostCard';
// import { HorizontalAdSlot, AdSlot } from '../../components/blog/AdSlot'; // AdSense 승인 후 활성화
import { Button } from '../../components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = CATEGORIES.find(c => c.slug === slug);
    
    if (!category) {
        return {
            title: '카테고리를 찾을 수 없습니다',
        };
    }

    return {
        title: `${category.name} - 플랜티어`,
        description: category.description,
        keywords: [category.name, category.slug, '블로그', '카테고리', '플랜티어'],
        openGraph: {
            title: `${category.name} - 플랜티어`,
            description: category.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        slug: category.slug,
    }));
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    
    // 타입 안전성을 위한 검증
    if (!slug || typeof slug !== 'string') {
        notFound();
    }

    const category = CATEGORIES.find(c => c.slug === slug);
    const posts = POSTS.filter(p => p.category === slug);

    if (!category) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 max-w-5xl py-12">
            <div className="mb-4 flex items-center text-sm text-gray-500">
                <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="font-medium text-gray-900">{category.name}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-12 border-b border-gray-100 pb-8">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{category.name}</h1>
                        <p className="text-xl text-gray-500">{category.description}</p>
                    </div>

                    <div className="space-y-8">
                        {posts.map((post, index) => (
                            <div key={post.id} className="flex flex-col gap-8">
                                {/* PostCard now handles navigation internally via Link */}
                                <PostCard post={post} />
                                {/* 
                                    AdSense 승인 후 광고 영역 추가 예정
                                    - 두 번째 게시글 아래에 HorizontalAdSlot (728x90) 배치
                                    - 위치: 게시글 목록 중간
                                */}
                            </div>
                        ))}

                        {posts.length === 0 && (
                            <div className="py-20 text-center text-gray-500 bg-gray-50 rounded-lg">
                                <p>이 카테고리에 글이 없습니다.</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-12 flex justify-center">
                        <Button variant="outline" size="lg" className="px-8">더 보기</Button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-80 shrink-0 space-y-8">
                    {/* 
                        AdSense 승인 후 사이드바 광고 영역 추가 예정
                        - AdSlot (300x250) 배치
                        - 위치: 사이드바 상단, 카테고리 소개 위
                    */}

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">{category.name} 소개</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {category.name} 아카이브에 오신 것을 환영합니다. 여기서는 {category.slug}와 관련된 모든 글, 가이드, 튜토리얼을 찾을 수 있습니다.
                            이 섹션은 매주 새로운 콘텐츠로 업데이트됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
