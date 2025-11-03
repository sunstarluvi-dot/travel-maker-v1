export default function LeftSidebar() {
  return (
    <aside className="hidden xl:block w-[250px] shrink-0">
      <div className="sticky top-20 space-y-4">
        {/* Regional Banner */}
        <div className="rounded-2xl overflow-hidden soft-shadow bg-gradient-to-br from-[#3A9CFD]/10 to-[#FF6F42]/10 p-6">
          <h3 className="font-bold text-lg mb-2">지역별 추천</h3>
          <p className="text-sm text-muted-foreground mb-4">당신의 지역에서 시작하는 특별한 여행</p>
          <div className="space-y-2">
            {["경상도", "전라도", "충청도", "강원도"].map((region) => (
              <button
                key={region}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 transition-colors text-sm"
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Ad Space */}
        <div className="rounded-2xl overflow-hidden soft-shadow bg-muted/20 p-6 text-center">
          <div className="text-xs text-muted-foreground mb-2">광고</div>
          <div className="aspect-square bg-gradient-to-br from-[#C9C9C9]/30 to-[#C9C9C9]/10 rounded-xl flex items-center justify-center">
            <span className="text-sm text-muted-foreground">배너 영역</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
