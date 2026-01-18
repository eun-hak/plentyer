'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // HTML에서 h2, h3 태그 추출하여 목차 생성
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    
    const items: TocItem[] = [];
    headings.forEach((heading, index) => {
      const text = heading.textContent || '';
      const id = `heading-${index}-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
      items.push({
        id,
        text,
        level: heading.tagName === 'H2' ? 2 : 3,
      });
    });

    setTocItems(items);

    // 본문에 id 부여 (실제 DOM에 반영)
    const updateHeadings = () => {
      const articleContent = document.querySelector('.article-content');
      if (articleContent) {
        const actualHeadings = articleContent.querySelectorAll('h2, h3');
        actualHeadings.forEach((heading, index) => {
          if (items[index] && !heading.id) {
            heading.id = items[index].id;
          }
        });
      }
    };

    // DOM이 준비될 때까지 대기
    const timer = setTimeout(updateHeadings, 100);
    updateHeadings(); // 즉시 실행도 시도

    return () => clearTimeout(timer);
  }, [content]);

  // 스크롤 위치에 따라 활성 섹션 감지
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for sticky header

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(tocItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 헤더 높이 고려
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">목차</h3>
      <ul className="space-y-2 text-xs text-gray-600">
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={cn(
              'pl-2 border-l-2 transition-colors cursor-pointer',
              activeId === item.id
                ? 'border-indigo-500 text-indigo-700 font-medium'
                : 'border-transparent hover:border-gray-300'
            )}
            style={{ paddingLeft: item.level === 3 ? '1rem' : '0.5rem' }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="block hover:text-indigo-600 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
