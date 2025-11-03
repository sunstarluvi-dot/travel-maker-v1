"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatbotProps {
  onClose: () => void
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const faqQuestions = [
    "상품 등록이 안돼요",
    "가격은 자동 계산되나요?",
    "반려동물 코스만 보고 싶어요",
    "여행 코스 수정은 어떻게 하나요?",
    "지도는 어떻게 추가하나요?",
  ]

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 h-96 rounded-2xl bg-white soft-shadow-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3A9CFD] to-[#FF6F42] p-4 flex items-center justify-between text-white">
        <h3 className="font-bold">도움이 필요하신가요?</h3>
        <button onClick={onClose} className="hover:opacity-80 transition-opacity">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* FAQ Buttons */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-sm text-muted-foreground mb-4">자주 묻는 질문을 선택해주세요</p>
        <div className="space-y-2">
          {faqQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto py-3 px-4 rounded-xl hover:bg-primary/5 hover:border-primary transition-colors bg-transparent"
            >
              <span className="text-sm">{question}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <p className="text-xs text-center text-muted-foreground">
          더 많은 도움이 필요하신가요?
          <br />
          <a href="mailto:support@travelmaker.com" className="text-primary hover:underline">
            고객센터 문의하기
          </a>
        </p>
      </div>
    </div>
  )
}
