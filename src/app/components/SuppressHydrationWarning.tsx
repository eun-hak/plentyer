'use client';

import { useEffect } from 'react';

/**
 * 브라우저 확장 프로그램으로 인한 하이드레이션 경고를 억제합니다.
 * 개발 환경에서만 작동합니다.
 */
export function SuppressHydrationWarning() {
  useEffect(() => {
    // 개발 환경에서만 콘솔 필터링
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      const originalError = console.error;
      const originalWarn = console.warn;

      // hydration 관련 에러 필터링
      console.error = (...args: any[]) => {
        const message = args[0]?.toString() || '';
        const isHydrationError =
          message.includes('Hydration failed') ||
          message.includes('hydration') ||
          message.includes('did not match') ||
          message.includes('__endic_crx__') ||
          message.includes('__wxt') ||
          message.includes('data-wxt-integrated') ||
          message.includes('wxt-integrated') ||
          message.includes('suppressHydrationWarning');

        // hydration 관련 에러는 무시
        if (isHydrationError) {
          return;
        }

        originalError.apply(console, args);
      };

      // hydration 관련 경고 필터링
      console.warn = (...args: any[]) => {
        const message = args[0]?.toString() || '';
        const isHydrationWarning =
          message.includes('Hydration') ||
          message.includes('__endic_crx__') ||
          message.includes('__wxt') ||
          message.includes('data-wxt-integrated');

        // hydration 관련 경고는 무시
        if (isHydrationWarning) {
          return;
        }

        originalWarn.apply(console, args);
      };

      // 정리 함수
      return () => {
        console.error = originalError;
        console.warn = originalWarn;
      };
    }
  }, []);

  return null;
}
