import { Category, Post } from '../app/data/mock';

/**
 * Category 타입 가드
 */
export function isCategory(obj: any): obj is Category {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.slug === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.count === 'number'
  );
}

/**
 * Post 타입 가드
 */
export function isPost(obj: any): obj is Post {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.summary === 'string' &&
    typeof obj.content === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.date === 'string' &&
    typeof obj.slug === 'string' &&
    typeof obj.views === 'number'
  );
}

/**
 * 문자열이 비어있지 않은지 확인
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * 유효한 날짜 문자열인지 확인
 */
export function isValidDateString(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const date = new Date(value);
  return !isNaN(date.getTime());
}



