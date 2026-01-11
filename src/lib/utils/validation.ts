/**
 * URL이 유효한지 확인
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 이메일이 유효한지 확인
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * slug가 유효한지 확인 (영문자, 숫자, 하이픈, 언더스코어만 허용)
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9_-]+$/;
  return slugRegex.test(slug);
}

/**
 * 안전하게 HTML 문자열을 정리
 */
export function sanitizeHtml(html: string): string {
  // 기본적인 XSS 방지 (프로덕션에서는 더 강력한 라이브러리 사용 권장: DOMPurify 등)
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}



