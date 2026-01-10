import React from 'react';
import { cn } from '../../../lib/utils';

interface AdSlotProps {
  className?: string;
  label?: string;
}

export function AdSlot({ className, label = "광고" }: AdSlotProps) {
  return (
    <div className={cn("w-full my-8 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 min-h-[100px] rounded-md overflow-hidden", className)}>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-medium">{label}</span>
      <div className="w-[300px] h-[250px] bg-gray-200/50 flex items-center justify-center rounded text-gray-400 text-xs">
        광고 영역 (300x250)
      </div>
    </div>
  );
}

export function HorizontalAdSlot({ className, label = "광고" }: AdSlotProps) {
    return (
      <div className={cn("w-full my-6 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 min-h-[90px] rounded-md overflow-hidden py-4", className)}>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">{label}</span>
        <div className="w-full max-w-[728px] h-[90px] bg-gray-200/50 flex items-center justify-center rounded text-gray-400 text-xs">
          반응형 광고 배너
        </div>
      </div>
    );
  }
