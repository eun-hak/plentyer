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
              이메일: privacy@plentyer.com<br />
              전화: 02-1234-5678
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 개인정보 처리방침 변경</h2>
          <p className="text-gray-700 leading-relaxed">
            이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
            변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>
      </article>
    </div>
  );
}

