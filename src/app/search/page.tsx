'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, ChevronRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { PostCard } from '../components/blog/PostCard';
import { POSTS } from '../data/mock';
import { Badge } from '../components/ui/badge';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // 검색 로직: 제목, 요약, 태그에서 검색
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return POSTS.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const summaryMatch = post.summary.toLowerCase().includes(query);
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(query));
      const contentMatch = post.content.toLowerCase().includes(query);
      
      return titleMatch || summaryMatch || tagsMatch || contentMatch;
    });
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">검색</span>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">게시글 검색</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          원하는 정보를 빠르게 찾아보세요
        </p>
      </div>

      {/* 검색 입력 */}
      <div className="mb-12">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="제목, 내용, 태그로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg bg-white border-2 border-gray-200 focus:border-indigo-500"
            autoFocus
          />
        </div>
        {searchQuery.trim() && (
          <p className="mt-4 text-gray-600">
            <span className="font-semibold">&quot;{searchQuery}&quot;</span>에 대한 검색 결과: 
            <span className="ml-2 text-indigo-600 font-bold">{filteredPosts.length}개</span>
          </p>
        )}
      </div>

      {/* 검색 결과 */}
      {searchQuery.trim() ? (
        filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-600 mb-6">
              다른 키워드로 다시 검색해보세요
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-500">추천 키워드:</span>
              {['FPS', '가이드', '전략', '리뷰', '초보자'].map(keyword => (
                <Badge 
                  key={keyword}
                  variant="secondary"
                  className="cursor-pointer hover:bg-indigo-100"
                  onClick={() => setSearchQuery(keyword)}
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-16">
          <div className="mb-4">
            <Search className="h-16 w-16 text-gray-300 mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">검색어를 입력하세요</h3>
          <p className="text-gray-600 mb-6">
            제목, 내용, 태그로 원하는 게시글을 찾을 수 있습니다
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-500">인기 검색어:</span>
            {['FPS 가이드', 'MOBA 공략', '모바일 게임', '하드웨어', 'e스포츠'].map(keyword => (
              <Badge 
                key={keyword}
                variant="secondary"
                className="cursor-pointer hover:bg-indigo-100"
                onClick={() => setSearchQuery(keyword)}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* 전체 카테고리 링크 */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">카테고리별로 찾아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { name: '가이드', slug: 'guide' },
            { name: '공략', slug: 'strategy' },
            { name: '리뷰', slug: 'review' },
          ].map(cat => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer text-center">
                <h3 className="font-semibold text-gray-900">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
