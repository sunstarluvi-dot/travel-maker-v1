"use client"

import { Button } from "@/components/ui/button"
import { Plus, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Chatbot from "./chatbot"

export default function RightSidebar() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <>
      <aside className="hidden xl:block w-[280px] shrink-0">
        <div className="sticky top-20 space-y-4">
          {/* Creator Profile */}
          <div className="rounded-2xl overflow-hidden soft-shadow bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A9CFD] to-[#FF6F42]" />
              <div>
                <h3 className="font-bold text-sm">여행 크리에이터</h3>
                <p className="text-xs text-muted-foreground">로컬 여행 전문가</p>
              </div>
            </div>
            <Link href="/upload">
              <Button className="w-full rounded-full bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD] hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4 mr-2" />새 코스 만들기
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="rounded-2xl overflow-hidden soft-shadow bg-white p-6">
            <h3 className="font-bold text-sm mb-4">이번 주 인기</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">등록된 코스</span>
                <span className="font-bold text-primary">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">활동 크리에이터</span>
                <span className="font-bold text-secondary">567</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">이번 주 조회수</span>
                <span className="font-bold text-[#C9C9C9]">89K</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Chatbot Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#3A9CFD] to-[#FF6F42] text-white soft-shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Panel */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  )
}
