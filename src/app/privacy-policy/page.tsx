import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: '개인정보 처리 방침 | Plentyer',
  description: 'Plentyer의 개인정보 처리 방침을 확인하세요.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">개인정보 처리 방침</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">개인정보 처리 방침</h1>
        <p className="text-gray-500 mb-8">최종 수정일: 2025년 1월 1일</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 개인정보의 처리 목적</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>서비스 제공 및 운영</li>
            <li>회원 관리 및 본인 확인</li>
            <li>콘텐츠 제공 및 맞춤형 서비스 제공</li>
            <li>마케팅 및 광고에의 활용</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 개인정보의 처리 및 보유기간</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 
            개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>회원 가입 및 관리: 회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
            <li>전자상거래에서의 계약·청약철회 등에 관한 기록: 5년</li>
            <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 처리하는 개인정보의 항목</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 다음의 개인정보 항목을 처리하고 있습니다:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-2 text-gray-900">필수 항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>이메일 주소</li>
              <li>비밀번호</li>
              <li>닉네임</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">선택 항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>프로필 이미지</li>
              <li>소개글</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 개인정보의 제3자 제공</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 
            법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 개인정보처리의 위탁</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>위탁받는 자 (수탁자):</strong> 클라우드 서비스 제공 업체<br />
                <strong>위탁하는 업무의 내용:</strong> 서버 운영 및 관리
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5-1. 쿠키(Cookie) 및 자동 수집 정보</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 서비스 제공을 위해 쿠키를 사용합니다. 쿠키는 웹사이트가 귀하의 브라우저에 전송하는 작은 텍스트 파일로, 
            귀하의 컴퓨터 하드디스크에 저장됩니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>쿠키의 사용 목적:</strong> 이용자의 방문 및 이용 형태, 보안 접속 여부 등을 파악하여 최적화된 서비스를 제공하기 위함</li>
            <li><strong>쿠키의 설치/운영 및 거부:</strong> 웹브라우저 상단의 도구 → 인터넷 옵션 → 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다</li>
            <li><strong>쿠키 저장 거부 시:</strong> 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>자동으로 수집되는 정보:</strong> IP 주소, 브라우저 종류, OS 종류, 방문 일시, 서비스 이용 기록 등이 자동으로 생성되어 수집될 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5-2. 광고 서비스 및 제3자 쿠키</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 광고 서비스를 제공하기 위해 제3자 광고 제공업체(Google AdSense 등)를 이용합니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-blue-900">Google AdSense</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>• Google은 쿠키를 사용하여 사용자가 이 웹사이트 및 다른 웹사이트에 방문한 정보를 기반으로 광고를 게재합니다</li>
              <li>• 사용자는 Google 광고 설정 페이지(<a href="https://www.google.com/settings/ads" className="underline">www.google.com/settings/ads</a>)에서 맞춤 광고를 사용하지 않도록 설정할 수 있습니다</li>
              <li>• Google의 개인정보처리방침: <a href="https://policies.google.com/privacy" className="underline">policies.google.com/privacy</a></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            제3자 광고 제공업체는 사용자의 관심사에 기반한 광고를 게재하기 위해 쿠키, 웹 비콘 등의 기술을 사용할 수 있습니다. 
            이러한 기술을 통해 수집되는 정보는 해당 제3자의 개인정보처리방침에 따라 관리됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5-3. 웹 로그 분석</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            서비스 개선 및 통계 분석을 위해 다음과 같은 정보가 자동으로 수집될 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>방문자의 IP 주소</li>
            <li>브라우저 종류 및 OS 정보</li>
            <li>방문 일시 및 서비스 이용 기록</li>
            <li>방문 경로 (referrer)</li>
            <li>페이지 조회 수 및 체류 시간</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            이러한 정보는 개인을 식별할 수 없는 형태로 수집되며, 통계 자료로만 활용됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            정보주체는 Plentyer에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>개인정보 처리정지 요구</li>
            <li>개인정보 열람 요구</li>
            <li>개인정보 정정·삭제 요구</li>
            <li>개인정보 처리정지 요구</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 개인정보의 파기</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 개인정보 보호책임자</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plentyer는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>개인정보 보호책임자</strong><br />
              이메일: plentyer.comp@gmail.com<br />
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 아동의 개인정보 보호</h2>
          <p className="text-gray-700 leading-relaxed">
            Plentyer는 만 14세 미만 아동의 개인정보를 보호하기 위하여 만 14세 미만 아동의 회원가입을 받지 않습니다. 
            부득이하게 만 14세 미만 아동의 개인정보를 수집해야 하는 경우에는 법정대리인의 동의를 받습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">10. 개인정보 처리방침 변경</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
            변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <p className="text-sm text-indigo-900">
              <strong>문의 및 신고:</strong><br />
              개인정보 처리방침에 대한 문의사항이 있으시면 <Link href="/contact" className="underline font-semibold">문의하기</Link> 페이지를 통해 연락해 주시기 바랍니다.<br />
              이메일: plentyer.comp@gmail.com
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

