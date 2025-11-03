"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border soft-shadow">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD]">
              TRAVEL MAKER
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="여행지, 지역, 키워드로 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-11 rounded-full border-2 border-muted focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Category Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors">
              탐색
            </Link>
            <Link href="/upload" className="text-sm font-medium hover:text-primary transition-colors">
              코스 등록
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
