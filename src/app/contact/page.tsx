'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현 시에는 API 호출
    // 데모용으로 2초 후 성공 메시지 표시
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // 3초 후 성공 메시지 숨김
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">문의하기</span>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">문의하기</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          궁금한 사항이나 제안, 피드백이 있으시면 언제든 연락 주세요. 
          빠른 시일 내에 답변드리겠습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900">이메일</h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              이메일로 직접 문의하실 수 있습니다:
            </p>
            <a 
              href="mailto:contact@plentyer.com" 
              className="text-indigo-600 font-semibold hover:underline block"
            >
              contact@plentyer.com
            </a>
            <p className="text-xs text-gray-500 mt-3">
              평일 기준 24-48시간 내 답변
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">문의 유형</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 콘텐츠 오류 제보</li>
              <li>• 콘텐츠 제안</li>
              <li>• 협업 및 제휴 문의</li>
              <li>• 광고 문의</li>
              <li>• 기술적 문제</li>
              <li>• 저작권 관련 문의</li>
              <li>• 개인정보 관련 문의</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">운영 시간</h3>
            <p className="text-sm text-gray-700">
              <strong>월 - 금:</strong> 09:00 - 18:00<br />
              <strong>주말 및 공휴일:</strong> 휴무
            </p>
            <p className="text-xs text-gray-500 mt-3">
              업무 시간 외 문의는 다음 영업일에 처리됩니다.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {isSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900">문의가 성공적으로 접수되었습니다!</p>
                <p className="text-sm text-green-700">빠른 시일 내에 답변 드리겠습니다.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 font-semibold">
                  이름 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-semibold">
                  이메일 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-900 font-semibold">
                제목 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="문의 제목을 입력해주세요"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-900 font-semibold">
                문의 내용 <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="문의하실 내용을 상세히 작성해주세요. 구체적일수록 더 정확한 답변을 드릴 수 있습니다."
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="bg-white border-gray-300 resize-none"
              />
              <p className="text-sm text-gray-500">
                최소 20자 이상 작성해주세요. 
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>개인정보 처리:</strong> 제공해주신 정보는 문의 응대 목적으로만 사용되며, 
                답변 완료 후 일정 기간 경과 시 안전하게 파기됩니다. 
                자세한 내용은 <Link href="/privacy-policy" className="underline font-semibold">개인정보처리방침</Link>을 참조하세요.
              </p>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-base"
            >
              {isSubmitting ? (
                <>처리 중...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  문의하기
                </>
              )}
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">자주 묻는 질문</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Q. 콘텐츠 오류를 발견했어요.</p>
                <p className="text-gray-700">
                  A. 정확한 정보 제공을 위해 최선을 다하고 있습니다. 오류를 발견하신 경우 
                  해당 게시글 URL과 함께 자세한 내용을 알려주시면 신속히 수정하겠습니다.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Q. 기고나 협업이 가능한가요?</p>
                <p className="text-gray-700">
                  A. 게임 관련 전문 지식을 가지고 계신 분의 기고를 환영합니다. 
                  협업 제안은 위 양식이나 이메일을 통해 문의해주세요.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Q. 광고는 어떻게 게재하나요?</p>
                <p className="text-gray-700">
                  A. 광고 문의는 contact@plentyer.com으로 보내주시면 담당자가 연락드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Contact Options */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">다른 연락 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">일반 문의</h3>
            <a href="mailto:contact@plentyer.com" className="text-indigo-600 text-sm hover:underline">
              contact@plentyer.com
            </a>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">개인정보 관련</h3>
            <a href="mailto:privacy@plentyer.com" className="text-indigo-600 text-sm hover:underline">
              privacy@plentyer.com
            </a>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
            <h3 className="font-semibold text-gray-900 mb-2">제휴 및 협업</h3>
            <a href="mailto:partner@plentyer.com" className="text-indigo-600 text-sm hover:underline">
              partner@plentyer.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
