import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Plentyer</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              풍요로운(Plenty) 지식을 계층(Tier)별로 구조화하여 제공합니다.
              성장하는 당신을 위한 깊이 있는 콘텐츠 플랫폼.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">탐색</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">인기글</a></li>
              <li><a href="#" className="hover:text-indigo-600">최신글</a></li>
              <li><a href="#" className="hover:text-indigo-600">카테고리</a></li>
              <li><a href="#" className="hover:text-indigo-600">작성자</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">법적 고지</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-indigo-600">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600">서비스 이용약관</Link></li>
              <li><Link href="/cookies" className="hover:text-indigo-600">쿠키 정책</Link></li>
              <li><a href="#" className="hover:text-indigo-600">문의하기</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 Plentyer. 모든 권리 보유.</p>
          <p>풍요로운 지식, 계층화된 성장</p>
        </div>
      </div>
    </footer>
  );
}
