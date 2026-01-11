/**
 * 환경 변수 검증 및 타입 안전한 접근을 위한 유틸리티
 */

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  
  if (!value) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`환경 변수 ${key}가 설정되지 않았습니다.`);
    }
    console.warn(`환경 변수 ${key}가 설정되지 않았습니다. 기본값을 사용합니다.`);
  }
  
  return value || '';
}

export const env = {
  // 사이트 URL
  siteUrl: getEnvVar('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
  
  // 개발 모드 여부
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // API 엔드포인트 (필요시 추가)
  // apiUrl: getEnvVar('NEXT_PUBLIC_API_URL', ''),
} as const;



