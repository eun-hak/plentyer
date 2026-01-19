import React from 'react';
import Link from 'next/link';
import { ChevronRight, Target, Users, BookOpen, Shield } from 'lucide-react';

export const metadata = {
  title: '사이트 소개 | 플랜티어',
  description: '플랜티어는 게이머를 위한 신뢰할 수 있는 정보를 제공하는 게임 전문 블로그입니다. 우리의 미션과 콘텐츠 작성 원칙을 알아보세요.',
  openGraph: {
    title: '사이트 소개 | 플랜티어',
    description: '게이머를 위한 신뢰할 수 있는 게임 정보 플랫폼',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">사이트 소개</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Plentyer 소개</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          게이머를 위한 신뢰할 수 있는 정보, 풍요로운 지식을 계층화하여 제공합니다.
        </p>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">우리의 미션</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer(플렌티어)는 "Plenty(풍요로운)"와 "Tier(계층)"의 합성어로, 게임에 관한 풍부한 정보를 초보자부터 고급 사용자까지 
            각자의 수준에 맞게 체계적으로 제공하는 것을 목표로 합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            우리는 PC 게임, 콘솔 게임, 모바일 게임, e스포츠 등 게임 산업 전반에 걸친 심도 있는 분석과 실용적인 가이드를 통해 
            게이머들이 더 나은 게임 경험을 할 수 있도록 돕습니다.
          </p>
        </section>

        {/* What We Provide */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">제공하는 콘텐츠</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">초보자 가이드</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                게임을 처음 시작하는 분들을 위한 친절하고 상세한 입문 가이드를 제공합니다. 
                기본 조작법부터 핵심 게임 메커니즘까지 단계별로 설명합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">공략 및 전략</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                게임의 난관을 돌파하고 더 높은 수준의 플레이를 원하는 게이머를 위한 
                전문적인 공략과 전략 분석을 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-3">게임 리뷰</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                최신 게임부터 클래식 명작까지, 객관적이고 심도 있는 리뷰를 통해 
                구매 전 충분한 정보를 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border border-pink-100">
              <h3 className="text-xl font-bold text-rose-900 mb-3">e스포츠 분석</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                프로 게임 리그의 경기 분석, 팀 전략, 메타 변화 등 e스포츠 팬들을 위한 
                전문 콘텐츠를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Content Principles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">콘텐츠 작성 원칙</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. 정확성과 신뢰성</h3>
              <p className="text-gray-700 leading-relaxed">
                모든 정보는 철저한 검증을 거쳐 제공됩니다. 직접 플레이하고 테스트한 내용만을 바탕으로 
                콘텐츠를 작성하며, 불확실한 정보는 명확히 표시합니다.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. 독창성</h3>
              <p className="text-gray-700 leading-relaxed">
                다른 사이트의 내용을 복사하거나 표절하지 않습니다. 모든 글은 우리 팀이 직접 작성하며, 
                독자적인 관점과 분석을 담아냅니다.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. 사용자 중심</h3>
              <p className="text-gray-700 leading-relaxed">
                광고나 협찬보다 독자의 이익을 우선시합니다. 편향되지 않은 객관적인 평가와 
                실제로 도움이 되는 정보 제공에 집중합니다.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. 지속적인 업데이트</h3>
              <p className="text-gray-700 leading-relaxed">
                게임은 패치와 업데이트로 끊임없이 변화합니다. 우리는 콘텐츠를 정기적으로 
                검토하고 업데이트하여 최신 정보를 유지합니다.
              </p>
            </div>

            <div className="border-l-4 border-rose-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">5. 접근성</h3>
              <p className="text-gray-700 leading-relaxed">
                전문 용어는 쉽게 풀어 설명하고, 누구나 이해할 수 있는 명확한 문장으로 작성합니다. 
                스크린샷과 다이어그램을 활용하여 시각적 이해를 돕습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">팀 소개</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 10년 이상의 게임 경험을 가진 전문 게이머, 게임 저널리스트, 콘텐츠 크리에이터들로 구성된 팀이 운영합니다. 
            각자의 전문 분야에서 쌓은 깊이 있는 지식과 경험을 바탕으로, 게이머 커뮤니티에 가치 있는 정보를 전달하기 위해 노력하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            우리는 단순히 정보를 나열하는 것이 아니라, 실제 게임 플레이를 통해 검증된 인사이트를 제공합니다. 
            각 카테고리별로 전문 작성자가 배치되어 있으며, 크로스 체크 시스템을 통해 콘텐츠의 품질을 보장합니다.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 가치</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <strong className="text-gray-900">게이머를 위한, 게이머에 의한 콘텐츠</strong>
                  <p className="text-gray-700 mt-1">우리 모두가 게이머이기에, 게이머가 진정으로 필요로 하는 것이 무엇인지 알고 있습니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <strong className="text-gray-900">배움과 성장</strong>
                  <p className="text-gray-700 mt-1">게임 실력 향상뿐만 아니라, 게임 문화와 산업에 대한 이해를 높이는 콘텐츠를 지향합니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <strong className="text-gray-900">커뮤니티</strong>
                  <p className="text-gray-700 mt-1">독자들의 피드백을 소중히 여기며, 함께 성장하는 커뮤니티를 만들어갑니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <strong className="text-gray-900">투명성과 윤리</strong>
                  <p className="text-gray-700 mt-1">광고 관계, 협찬 내용 등을 명확히 공개하며, 항상 독자의 이익을 최우선으로 합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">함께 성장하고 싶으신가요?</h2>
            <p className="mb-6 text-indigo-100">
              콘텐츠에 대한 의견, 제안, 협업 문의 등 언제든 환영합니다. 
              게임에 대한 열정을 가진 분들과 함께 더 나은 콘텐츠를 만들어가고 싶습니다.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors no-underline"
            >
              문의하기 →
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-sm text-gray-500 border-t pt-8">
          <p className="mb-2">
            <strong>면책사항:</strong> 본 사이트의 콘텐츠는 정보 제공 목적으로만 작성되었습니다. 
            게임 플레이 전략이나 의견은 작성자의 개인적인 견해이며, 모든 상황에 적용되지 않을 수 있습니다.
          </p>
          <p>
            게임 내 정보는 개발사의 업데이트에 따라 변경될 수 있으며, 정보의 정확성을 위해 최선을 다하고 있으나 
            일부 내용이 최신 버전과 다를 수 있습니다. 오류를 발견하신 경우 <Link href="/contact" className="text-indigo-600 underline">문의하기</Link>를 통해 알려주시면 감사하겠습니다.
          </p>
        </section>
      </article>
    </div>
  );
}
