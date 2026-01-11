'use client';

import React from 'react';
import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // 치명적인 에러를 로깅 서비스에 전송
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">오류가 발생했습니다</h1>
            <p className="text-gray-600 mb-8">
              애플리케이션에서 치명적인 오류가 발생했습니다.
              페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left mb-6">
                <p className="text-sm font-mono text-red-800 break-all">
                  {error.message}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-4">
              <button
                onClick={reset}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                다시 시도
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                홈으로 가기
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}



