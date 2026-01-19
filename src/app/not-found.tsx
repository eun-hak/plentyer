import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { NotFoundActions } from './components/NotFoundActions';

export const metadata = {
  title: '페이지를 찾을 수 없습니다 | 플랜티어',
  description: '요청하신 페이지를 찾을 수 없습니다.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 다시 확인해주세요.
          </p>
        </div>

        <NotFoundActions />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">추천 페이지:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/category/tech">
              <Button variant="ghost" size="sm">기술</Button>
            </Link>
            <Link href="/category/finance">
              <Button variant="ghost" size="sm">금융</Button>
            </Link>
            <Link href="/category/lifestyle">
              <Button variant="ghost" size="sm">라이프스타일</Button>
            </Link>
            <Link href="/category/travel">
              <Button variant="ghost" size="sm">여행</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

