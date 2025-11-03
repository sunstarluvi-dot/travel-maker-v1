import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Hash, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const topCourses = [
  { id: 5, rank: 1, title: "전주 구도심 로컬 맛집 탐방 1일 코스", region: "전주", views: 15420 },
  { id: 2, rank: 2, title: "강릉 로컬 로스터리 카페 투어", region: "강릉", views: 13850 },
  { id: 1, rank: 3, title: "순천 골목 속 감성 산책 하루", region: "순천", views: 12390 },
  { id: 6, rank: 4, title: "통영 골목 시장과 감성 카페", region: "통영", views: 11560 },
  { id: 3, rank: 5, title: "경주 구도심 골목 맛집 탐방", region: "경주", views: 10720 },
]

const trendingHashtags = [
  { tag: "#골목투어", count: 2840, growth: "+28%" },
  { tag: "#로컬맛집", count: 2390, growth: "+35%" },
  { tag: "#로컬카페", count: 1950, growth: "+22%" },
  { tag: "#구도심", count: 1620, growth: "+18%" },
  { tag: "#전통시장", count: 1380, growth: "+15%" },
]

const recommendations = [
  {
    id: 11,
    title: "목포 원도심 골목 여행",
    region: "목포",
    category: "로컬",
    image: "/mokpo-old-downtown-alley-with-seafood-restaurant.jpg",
  },
  {
    id: 9,
    title: "보성 작은 다원과 마을 산책",
    region: "보성",
    category: "로컬",
    image: "/boseong-small-tea-farm-with-village.jpg",
  },
  {
    id: 8,
    title: "진주 남강변 로컬 카페 투어",
    region: "진주",
    category: "카페",
    image: "/jinju-namgang-riverside-small-cafe.jpg",
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD]">
            지금 인기 있는 로컬 여행 코스
          </h1>
          <p className="text-muted-foreground">현지인만 아는 숨은 명소를 발견하세요</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Top 5 인기 코스
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCourses.map((course) => (
                    <Link key={course.id} href={`/course/${course.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3A9CFD]/5 hover:to-[#FF6F42]/5 transition-all cursor-pointer group">
                        <div
                          className={`
                          flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg shrink-0
                          ${course.rank === 1 ? "bg-gradient-to-br from-[#FF6F42] to-[#FF6F42]/70 text-white" : ""}
                          ${course.rank === 2 ? "bg-gradient-to-br from-[#C9C9C9] to-[#C9C9C9]/70 text-white" : ""}
                          ${course.rank === 3 ? "bg-gradient-to-br from-[#3A9CFD] to-[#3A9CFD]/70 text-white" : ""}
                          ${course.rank > 3 ? "bg-muted text-muted-foreground" : ""}
                        `}
                        >
                          {course.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{course.region}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-medium">{course.views.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">조회수</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-secondary" />
                  트렌딩 해시태그
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingHashtags.map((item) => (
                    <div
                      key={item.tag}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#3A9CFD]/5 hover:to-[#FF6F42]/5 transition-all cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-primary">{item.tag}</p>
                        <p className="text-xs text-muted-foreground">{item.count.toLocaleString()} 게시물</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD] text-white border-0">
                        {item.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold">당신에게 추천하는 로컬 코스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:soft-shadow-lg hover:-translate-y-1 cursor-pointer soft-shadow">
                  <div className="aspect-video overflow-hidden gradient-overlay">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit text-xs mb-2 bg-gradient-to-r from-[#3A9CFD]/10 to-[#FF6F42]/10 text-foreground border-0">
                      {course.category}
                    </Badge>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{course.region}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
