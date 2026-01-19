'use client';

import React, { useEffect } from 'react';
import { cn } from '../../../lib/utils';

interface AdSlotProps {
  className?: string;
  label?: string;
  adSlot?: string; // AdSense 광고 단위 ID (예: "1234567890")
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
}

export function AdSlot({ 
  className, 
  label = "광고",
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true
}: AdSlotProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  if (!adSlot) {
    // 광고 단위 ID가 없으면 플레이스홀더 표시
    return (
      <div className={cn("w-full my-8 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 min-h-[100px] rounded-md overflow-hidden", className)}>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-medium">{label}</span>
        <div className="w-[300px] h-[250px] bg-gray-200/50 flex items-center justify-center rounded text-gray-400 text-xs">
          광고 영역 (300x250)
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full my-8 flex flex-col items-center justify-center", className)}>
      {label && (
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-medium">{label}</span>
      )}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1410200096892996"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}

export function HorizontalAdSlot({ 
  className, 
  label = "광고",
  adSlot,
  fullWidthResponsive = true
}: AdSlotProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  if (!adSlot) {
    // 광고 단위 ID가 없으면 플레이스홀더 표시
    return (
      <div className={cn("w-full my-6 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 min-h-[90px] rounded-md overflow-hidden py-4", className)}>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">{label}</span>
        <div className="w-full max-w-[728px] h-[90px] bg-gray-200/50 flex items-center justify-center rounded text-gray-400 text-xs">
          반응형 광고 배너
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full my-6 flex flex-col items-center justify-center py-4", className)}>
      {label && (
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">{label}</span>
      )}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1410200096892996"
        data-ad-slot={adSlot}
        data-ad-format="horizontal"
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
