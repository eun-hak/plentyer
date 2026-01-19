import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: '쿠키 정책 | 플랜티어',
  description: '플랜티어의 쿠키 정책을 확인하세요.',
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">쿠키 정책</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">쿠키 정책</h1>
        <p className="text-gray-500 mb-8">최종 수정일: 2025년 1월 1일</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 쿠키란?</h2>
          <p className="text-gray-700 leading-relaxed">
            쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 사용자의 기기를 인식하고, 
            사용자가 선호하는 설정을 기억하며, 사용자 경험을 개선하는 데 도움이 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 쿠키의 사용 목적</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 다음의 목적을 위해 쿠키를 사용합니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>필수 쿠키:</strong> 웹사이트가 정상적으로 작동하는 데 필요한 쿠키입니다.</li>
            <li><strong>성능 쿠키:</strong> 방문자 통계 및 웹사이트 성능 분석을 위한 쿠키입니다.</li>
            <li><strong>기능 쿠키:</strong> 사용자가 선택한 설정(언어, 지역 등)을 기억하는 쿠키입니다.</li>
            <li><strong>타겟팅 쿠키:</strong> 광고 및 마케팅 목적으로 사용되는 쿠키입니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 사용하는 쿠키의 종류</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-gray-900">필수 쿠키</h3>
            <p className="text-gray-700 mb-3">
              이러한 쿠키는 웹사이트의 핵심 기능을 제공하는 데 필수적입니다. 웹사이트가 이러한 쿠키 없이는 제대로 작동하지 않습니다.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-900">쿠키 이름</th>
                  <th className="text-left py-2 text-gray-900">목적</th>
                  <th className="text-left py-2 text-gray-900">보관 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">session_id</td>
                  <td className="py-2 text-gray-700">세션 관리</td>
                  <td className="py-2 text-gray-700">세션 종료 시</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">auth_token</td>
                  <td className="py-2 text-gray-700">로그인 상태 유지</td>
                  <td className="py-2 text-gray-700">30일</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-gray-900">성능 및 분석 쿠키</h3>
            <p className="text-gray-700 mb-3">
              이러한 쿠키는 방문자가 웹사이트와 상호 작용하는 방식을 수집하여 웹사이트 성능을 측정하고 개선하는 데 도움이 됩니다.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-900">쿠키 이름</th>
                  <th className="text-left py-2 text-gray-900">목적</th>
                  <th className="text-left py-2 text-gray-900">보관 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">_ga</td>
                  <td className="py-2 text-gray-700">Google Analytics - 방문자 구분</td>
                  <td className="py-2 text-gray-700">2년</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">_gid</td>
                  <td className="py-2 text-gray-700">Google Analytics - 방문자 구분</td>
                  <td className="py-2 text-gray-700">24시간</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-900">기능 쿠키</h3>
            <p className="text-gray-700 mb-3">
              이러한 쿠키는 웹사이트의 기능성과 개인화를 향상시킵니다. 예를 들어, 사용자가 선택한 언어 설정을 기억합니다.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-900">쿠키 이름</th>
                  <th className="text-left py-2 text-gray-900">목적</th>
                  <th className="text-left py-2 text-gray-900">보관 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">language</td>
                  <td className="py-2 text-gray-700">선호 언어 설정 저장</td>
                  <td className="py-2 text-gray-700">1년</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">theme</td>
                  <td className="py-2 text-gray-700">테마 설정 저장 (다크/라이트 모드)</td>
                  <td className="py-2 text-gray-700">1년</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 제3자 쿠키</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            위키블로그는 서비스 향상을 위해 다음과 같은 제3자 서비스를 사용할 수 있으며, 이러한 서비스들은 자체 쿠키를 사용할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Analytics:</strong> 웹사이트 방문 통계 분석</li>
            <li><strong>광고 네트워크:</strong> 맞춤형 광고 제공</li>
            <li><strong>소셜 미디어 플랫폼:</strong> 소셜 공유 기능 제공</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 쿠키 관리 방법</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            대부분의 웹 브라우저는 쿠키에 대한 선택권을 제공합니다. 브라우저 설정을 통해 쿠키를 차단하거나 삭제할 수 있습니다. 
            다만, 쿠키를 차단할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
          
          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-gray-900">주요 브라우저별 쿠키 설정 방법</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</li>
              <li><strong>Firefox:</strong> 옵션 &gt; 개인정보 보호 &amp; 보안 &gt; 쿠키 및 사이트 데이터</li>
              <li><strong>Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹 사이트 데이터</li>
              <li><strong>Edge:</strong> 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 쿠키 정책 변경</h2>
          <p className="text-gray-700 leading-relaxed">
            Plentyer는 법률, 규정 또는 운영상의 필요에 따라 이 쿠키 정책을 수정할 수 있습니다. 
            중요한 변경사항이 있는 경우 웹사이트를 통해 공지하거나 이메일로 알려드립니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 문의</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            쿠키 정책에 대한 질문이나 문의사항이 있으시면 아래 연락처로 문의해 주세요.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>이메일:</strong> plentyer.comp@gmail.com
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

