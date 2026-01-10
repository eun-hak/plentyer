import React from 'react';
import { Post, CATEGORIES } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock, Eye } from 'lucide-react';
import { cn } from '../../../lib/utils';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  // onClick prop removed as we use Link now
}

export function PostCard({ post, variant = 'default', className }: PostCardProps) {
  const category = CATEGORIES.find(c => c.slug === post.category);
  const href = `/post/${post.id}`;

  if (variant === 'compact') {
    return (
      <Link href={href}>
        <div
          className={cn("group cursor-pointer py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-sm", className)}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{category?.name}</span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h3 className="text-base font-medium text-gray-900 group-hover:text-indigo-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <Card
        className={cn("cursor-pointer border-none shadow-none bg-transparent hover:bg-gray-50/50 transition-colors rounded-xl overflow-hidden", className)}
      >
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-normal rounded-md px-2 py-0.5">
              {category?.name || post.category}
            </Badge>
            <div className="flex items-center text-xs text-gray-400 gap-3">
              <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
              <span className="flex items-center gap-1"><Eye size={12} /> {post.views}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-indigo-700">
            {post.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3">
            {post.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
