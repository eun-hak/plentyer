'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundActions() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto">
            <Home className="mr-2 h-4 w-4" />
            홈으로 가기
          </Button>
        </Link>
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full sm:w-auto"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          이전 페이지
        </Button>
      </div>
    </>
  );
}



