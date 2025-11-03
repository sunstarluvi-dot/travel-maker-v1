"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "전체", icon: "🗺️" },
  { id: "local", label: "로컬", icon: "🏘️" },
  { id: "cafe", label: "카페", icon: "☕" },
  { id: "food", label: "맛집", icon: "🍜" },
  { id: "nature", label: "자연", icon: "🌿" },
  { id: "culture", label: "문화", icon: "🎨" },
  { id: "pet", label: "반려동물", icon: "🐾" },
  { id: "budget", label: "가성비", icon: "💰" },
]

export default function CategoryButtons() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="relative">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all shrink-0 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD] text-white soft-shadow"
                : "bg-white text-foreground hover:bg-muted/50 border border-border"
            }`}
          >
            <span>{category.icon}</span>
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
