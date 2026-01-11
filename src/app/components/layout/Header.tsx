'use client';

import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CATEGORIES } from '../../data/mock';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("검색 중:", searchQuery);
    // 실제 앱에서는 검색 페이지로 라우팅됩니다
  };

  const isActive = (slug: string) => pathname === `/category/${slug}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white w-8 h-8 rounded-lg font-bold text-lg flex items-center justify-center aspect-square">P</div>
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">Plentyer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {CATEGORIES.slice(0, 5).map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive(cat.slug) ? "text-gray-900" : "text-gray-500"
              )}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Search & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden sm:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="검색..."
              className="w-[200px] lg:w-[300px] pl-9 bg-gray-50 focus:bg-white transition-colors border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white p-4 absolute w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            <form onSubmit={handleSearch} className="relative mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="글 검색..."
                className="w-full pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-left py-2 border-b border-gray-100 last:border-0 block"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
