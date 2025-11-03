"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Star,
  MapPin,
  Calendar,
  User,
  Train,
  Bus,
  BugPlay as Subway,
  PawPrint,
  DollarSign,
  TrendingUp,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const courseData: Record<string, any> = {
  "1": {
    title: "순천 골목 속 감성 산책 하루",
    author: "순천토박이",
    region: "순천",
    category: "로컬",
    days: 1,
    image: "/suncheon-old-town-alley-with-traditional-market.jpg",
    description: `순천 구도심 골목길과 전통시장을 따라 걷는 로컬 투어입니다.

관광지가 아닌, 순천 사람들이 실제로 살아가는 골목길과 시장을 둘러봅니다. 30년 된 다방, 현지인 단골 국밥집, 작은 공방들이 모여있는 진짜 순천의 모습을 만날 수 있습니다.

**일정**: 순천역 → 중앙시장 골목 탐방 → 구도심 옛 다방 → 현지인 맛집 (국밥, 떡볶이) → 작은 공방 & 서점 → 순천천 산책로 → 순천역

순천만이나 국가정원 대신, 순천 사람들의 일상 속으로 들어가는 특별한 하루입니다.`,
    hashtags: ["#순천", "#골목투어", "#전통시장", "#로컬맛집", "#구도심"],
    rating: 4.8,
    reviews: 87,
  },
  "2": {
    title: "강릉 로컬 로스터리 카페 투어",
    author: "커피덕후",
    region: "강릉",
    category: "카페",
    days: 1,
    image: "/gangneung-local-coffee-roastery-with-beans.jpg",
    description: `안목해변을 벗어나 현지인이 사랑하는 작은 로스터리 카페를 찾아가는 투어입니다.

관광객으로 붐비는 안목해변 대신, 강릉 주택가 골목 사이 숨어있는 로컬 로스터리 카페들을 방문합니다. 로스터가 직접 들려주는 커피 이야기와 함께 진짜 강릉 커피를 경험할 수 있습니다.

**일정**: 강릉역 → 성내동 골목 로스터리 → 포남동 작은 카페 → 현지인 맛집 점심 → 교동 주택가 카페 → 홍제동 감성 카페 → 강릉역

커피 체인점이 아닌, 로스터의 철학이 담긴 진짜 강릉 커피를 만나보세요.`,
    hashtags: ["#강릉", "#로스터리", "#로컬카페", "#커피투어", "#골목카페"],
    rating: 4.9,
    reviews: 124,
  },
  "3": {
    title: "경주 구도심 골목 맛집 탐방",
    author: "경주맛집러",
    region: "경주",
    category: "맛집",
    days: 1,
    image: "/gyeongju-old-downtown-alley-restaurant.jpg",
    description: `황리단길을 벗어나 경주 사람들이 진짜 가는 골목 맛집을 찾아가는 투어입니다.

관광객으로 붐비는 황리단길 대신, 경주역 앞 구도심과 성동시장 골목에 숨어있는 현지인 단골 맛집들을 방문합니다. 30년 전통 국밥집, 할머니 손맛 김밥집, 작은 분식집까지.

**일정**: 경주역 → 성동시장 골목 탐방 → 전통 국밥집 → 구도심 옛 다방 → 할머니 김밥집 → 작은 떡집 → 동네 빵집 → 경주역

관광지 음식이 아닌, 경주 사람들의 진짜 맛을 경험하는 하루입니다.`,
    hashtags: ["#경주", "#골목맛집", "#성동시장", "#로컬맛집", "#구도심"],
    rating: 4.7,
    reviews: 96,
  },
  "4": {
    title: "여수 작은 섬마을 하루 여행",
    author: "섬여행러",
    region: "여수",
    category: "로컬",
    days: 1,
    image: "/yeosu-small-island-village-with-fishing-boats.jpg",
    description: `관광객 없는 조용한 섬마을에서 느리게 보내는 하루입니다.

오동도나 해상케이블카 대신, 여수 앞바다의 작은 섬마을로 떠납니다. 어촌계 할머니들이 운영하는 작은 식당, 마을 구멍가게, 방파제 끝 등대까지. 관광지가 아닌 진짜 섬 사람들의 일상을 만날 수 있습니다.

**일정**: 여수여객선터미널 → 작은 섬 도착 → 마을 골목 산책 → 어촌계 식당 점심 → 방파제 산책 → 마을 구멍가게 → 일몰 감상 → 여수 복귀

느리게 걷고, 천천히 바라보는 여유로운 섬 여행입니다.`,
    hashtags: ["#여수", "#섬마을", "#어촌", "#로컬여행", "#느린여행"],
    rating: 4.8,
    reviews: 73,
  },
  "5": {
    title: "전주 구도심 로컬 맛집 탐방 1일 코스",
    author: "전주토박이",
    region: "전주",
    category: "맛집",
    days: 1,
    image: "/jeonju-old-downtown-local-restaurant-street.jpg",
    description: `한옥마을 대신 전주 사람들이 진짜 가는 구도심 맛집을 찾아가는 투어입니다.

관광객으로 붐비는 한옥마을 대신, 전주역 앞 구도심과 서노송동 골목에 숨어있는 현지인 단골 맛집들을 방문합니다. 40년 전통 콩나물국밥, 할머니 손맛 순대국, 작은 빵집까지.

**일정**: 전주역 → 구도심 전통시장 → 콩나물국밥 맛집 → 옛 다방 → 서노송동 골목 → 순대국 맛집 → 동네 빵집 → 전주역

관광지 음식이 아닌, 전주 사람들의 진짜 맛을 경험하는 하루입니다.`,
    hashtags: ["#전주", "#골목맛집", "#콩나물국밥", "#로컬맛집", "#구도심"],
    rating: 4.9,
    reviews: 142,
  },
  "6": {
    title: "통영 골목 시장과 감성 카페",
    author: "통영러버",
    region: "통영",
    category: "로컬",
    days: 1,
    image: "/tongyeong-alley-market-with-seafood-stalls.jpg",
    description: `중앙시장 골목 깊숙이, 현지인 단골 해산물집과 숨은 카페를 찾아가는 투어입니다.

케이블카나 동피랑 대신, 통영 중앙시장 골목 깊숙이 들어가 현지인들이 진짜 가는 해산물집과 작은 카페들을 방문합니다. 시장 할머니가 직접 손질하는 멍게, 골목 안쪽 작은 카페까지.

**일정**: 통영터미널 → 중앙시장 골목 탐방 → 현지인 해산물집 → 시장 안 작은 카페 → 골목 빵집 → 항구 산책 → 통영터미널

관광지가 아닌, 통영 사람들의 일상 속으로 들어가는 하루입니다.`,
    hashtags: ["#통영", "#중앙시장", "#골목투어", "#해산물", "#로컬카페"],
    rating: 4.7,
    reviews: 89,
  },
  "7": {
    title: "포항 구룡포 어촌마을 산책",
    author: "어촌탐험가",
    region: "포항",
    category: "로컬",
    days: 1,
    image: "/pohang-guryongpo-fishing-village-with-boats.jpg",
    description: `일본인 가옥거리를 벗어나 진짜 어촌 사람들의 일상 속으로 들어가는 투어입니다.

관광지화된 일본인 가옥거리 대신, 구룡포 어촌마을 골목을 걸으며 어부들의 일상을 만납니다. 새벽 어시장, 그물 손질하는 할아버지, 작은 횟집까지.

**일정**: 포항역 → 구룡포 도착 → 어촌마을 골목 산책 → 새벽 어시장 구경 → 현지인 횟집 점심 → 방파제 산책 → 작은 카페 → 포항역

관광지가 아닌, 진짜 어촌 사람들의 삶을 엿보는 하루입니다.`,
    hashtags: ["#포항", "#구룡포", "#어촌마을", "#로컬여행", "#골목투어"],
    rating: 4.6,
    reviews: 67,
  },
  "8": {
    title: "진주 남강변 로컬 카페 투어",
    author: "진주카페러",
    region: "진주",
    category: "카페",
    days: 1,
    image: "/jinju-namgang-riverside-small-cafe.jpg",
    description: `진주성 대신 남강변 작은 카페들에서 여유롭게 보내는 오후입니다.

관광객으로 붐비는 진주성 대신, 남강변 주택가 골목에 숨어있는 작은 카페들을 방문합니다. 강을 바라보며 커피 한 잔, 책 한 권 읽기 좋은 조용한 카페들입니다.

**일정**: 진주역 → 남강변 산책로 → 주택가 골목 카페 → 현지인 맛집 점심 → 강변 작은 카페 → 동네 빵집 → 진주역

관광지가 아닌, 진주 사람들이 사랑하는 여유로운 카페 투어입니다.`,
    hashtags: ["#진주", "#남강", "#로컬카페", "#강변카페", "#골목카페"],
    rating: 4.7,
    reviews: 81,
  },
  "9": {
    title: "보성 작은 다원과 마을 산책",
    author: "차사랑",
    region: "보성",
    category: "로컬",
    days: 1,
    image: "/boseong-small-tea-farm-with-village.jpg",
    description: `대한다원 대신 현지인이 운영하는 작은 차밭과 시골 마을을 찾아가는 투어입니다.

관광지화된 대한다원 대신, 보성 시골 마을에 숨어있는 작은 차밭과 농가를 방문합니다. 차농부가 직접 들려주는 차 이야기, 마을 할머니가 끓여주는 차 한 잔까지.

**일정**: 보성역 → 시골 마을 도착 → 작은 차밭 산책 → 농가 차 체험 → 마을 식당 점심 → 마을 구멍가게 → 보성역

관광지가 아닌, 진짜 차농부들의 삶을 경험하는 하루입니다.`,
    hashtags: ["#보성", "#차밭", "#시골마을", "#로컬여행", "#농가체험"],
    rating: 4.8,
    reviews: 94,
  },
  "10": {
    title: "울산 공업도시 감성 카페 투어",
    author: "울산카페러",
    region: "울산",
    category: "카페",
    days: 1,
    image: "/ulsan-industrial-area-hidden-cafe.jpg",
    description: `공장지대 사이 숨어있는 감성 카페와 로컬 베이커리를 찾아가는 투어입니다.

공업도시 울산의 이미지를 벗어나, 공장지대 사이 주택가 골목에 숨어있는 감성 카페들을 방문합니다. 공장 노동자들이 쉬어가는 작은 카페, 동네 빵집까지.

**일정**: 울산역 → 공업지대 주택가 → 골목 카페 → 현지인 맛집 점심 → 작은 베이커리 → 동네 카페 → 울산역

공업도시의 또 다른 얼굴, 따뜻한 울산 사람들의 일상을 만나는 하루입니다.`,
    hashtags: ["#울산", "#골목카페", "#로컬카페", "#공업도시", "#감성카페"],
    rating: 4.6,
    reviews: 72,
  },
  "11": {
    title: "목포 원도심 골목 여행",
    author: "목포토박이",
    region: "목포",
    category: "로컬",
    days: 1,
    image: "/mokpo-old-downtown-alley-with-seafood-restaurant.jpg",
    description: `목포역 앞 구도심 골목길과 현지인 단골 해산물 맛집을 찾아가는 투어입니다.

해상케이블카나 유달산 대신, 목포역 앞 구도심 골목을 걸으며 목포 사람들의 일상을 만납니다. 30년 전통 홍어집, 작은 다방, 골목 빵집까지.

**일정**: 목포역 → 구도심 골목 탐방 → 전통시장 → 현지인 홍어집 → 옛 다방 → 골목 빵집 → 항구 산책 → 목포역

관광지가 아닌, 목포 사람들의 진짜 일상을 경험하는 하루입니다.`,
    hashtags: ["#목포", "#구도심", "#골목투어", "#홍어", "#로컬맛집"],
    rating: 4.7,
    reviews: 86,
  },
  "12": {
    title: "부여 시골 마을과 작은 사찰",
    author: "시골여행러",
    region: "부여",
    category: "로컬",
    days: 1,
    image: "/buyeo-rural-village-with-small-temple.jpg",
    description: `관광지 대신 조용한 시골 마을과 현지인만 아는 작은 절을 찾아가는 투어입니다.

정림사지나 궁남지 대신, 부여 시골 마을 깊숙이 들어가 현지인들만 아는 작은 사찰과 마을을 방문합니다. 마을 할머니가 끓여주는 차 한 잔, 작은 절의 고요함까지.

**일정**: 부여터미널 → 시골 마을 도착 → 마을 골목 산책 → 작은 사찰 방문 → 마을 식당 점심 → 농가 체험 → 부여터미널

관광지가 아닌, 부여 시골 사람들의 평화로운 일상을 경험하는 하루입니다.`,
    hashtags: ["#부여", "#시골마을", "#작은사찰", "#로컬여행", "#농촌체험"],
    rating: 4.8,
    reviews: 79,
  },
  "13": {
    title: "당진 해안마을 일몰 투어",
    author: "일몰사냥꾼",
    region: "당진",
    category: "자연",
    days: 1,
    image: "/dangjin-coastal-village-sunset-with-fishing-port.jpg",
    description: `서해 작은 포구마을에서 만나는 고요한 일몰과 어촌 풍경입니다.

관광지가 아닌, 당진 앞바다의 작은 포구마을로 떠납니다. 어부들이 그물을 손질하는 모습, 방파제 끝에서 바라보는 서해 일몰까지.

**일정**: 당진역 → 해안마을 도착 → 포구 산책 → 현지인 횟집 점심 → 방파제 산책 → 일몰 감상 → 마을 식당 → 당진역

관광지가 아닌, 진짜 어촌 사람들의 삶과 서해의 고요한 일몰을 만나는 하루입니다.`,
    hashtags: ["#당진", "#해안마을", "#일몰", "#포구", "#서해"],
    rating: 4.7,
    reviews: 68,
  },
  "14": {
    title: "사천 어촌마을 해산물 투어",
    author: "해산물러버",
    region: "사천",
    category: "맛집",
    days: 1,
    image: "/sacheon-fishing-village-with-fresh-seafood.jpg",
    description: `관광객 없는 작은 포구에서 맛보는 싱싱한 해산물과 어촌 풍경입니다.

사천 앞바다의 작은 포구마을로 떠나 현지인들이 진짜 가는 해산물집을 방문합니다. 어부들이 직접 잡아온 싱싱한 해산물, 마을 할머니가 끓여주는 해물탕까지.

**일정**: 사천역 → 어촌마을 도착 → 포구 산책 → 현지인 해산물집 → 방파제 산책 → 마을 카페 → 사천역

관광지가 아닌, 진짜 어촌 사람들의 맛을 경험하는 하루입니다.`,
    hashtags: ["#사천", "#어촌마을", "#해산물", "#포구", "#로컬맛집"],
    rating: 4.8,
    reviews: 91,
  },
}

export default function CourseDetailPage() {
  const params = useParams()
  const id = params.id as string
  const course = courseData[id] || courseData["1"]

  const [liked, setLiked] = useState(false)
  const [review, setReview] = useState("")

  const priceData = {
    total: 50000,
    transport: 18000,
    accommodation: 0,
    tickets: 32000,
  }
  const difficulty = 2
  const transportation = ["KTX", "버스"]
  const petFriendly = true
  const likes = 678
  const comments = 123

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden relative gradient-overlay">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-white/90 backdrop-blur-sm text-foreground hover:bg-white/90">
                {course.category}
              </Badge>
              {petFriendly && (
                <Badge className="bg-[#FF6F42]/90 backdrop-blur-sm text-white hover:bg-[#FF6F42]/90">
                  <PawPrint className="w-3 h-3 mr-1" />
                  반려동물 동반 가능
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{course.region}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{course.days}일</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{course.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Stats & Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Price Card */}
            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3A9CFD]/20 to-[#FF6F42]/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">예상 가격</h3>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{priceData.total.toLocaleString()}원</div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>교통비</span>
                    <span>{priceData.transport.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>입장료</span>
                    <span>{priceData.tickets.toLocaleString()}원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Difficulty Card */}
            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6F42]/20 to-[#3A9CFD]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold">난이도</h3>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg ${
                        i < difficulty ? "bg-gradient-to-br from-[#FF6F42] to-[#FF6F42]/70" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {difficulty === 1 && "매우 쉬움"}
                  {difficulty === 2 && "쉬움"}
                  {difficulty === 3 && "보통"}
                  {difficulty === 4 && "어려움"}
                  {difficulty === 5 && "매우 어려움"}
                </p>
              </CardContent>
            </Card>

            {/* Transportation Card */}
            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9C9C9]/30 to-[#3A9CFD]/20 flex items-center justify-center">
                    <Train className="w-5 h-5 text-[#C9C9C9]" />
                  </div>
                  <h3 className="font-bold">이동수단</h3>
                </div>
                <div className="flex gap-2">
                  {transportation.map((transport, index) => {
                    const Icon = transport === "KTX" ? Train : transport === "버스" ? Bus : Subway
                    return (
                      <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{transport}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement Stats */}
          <Card className="soft-shadow mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Heart className="w-5 h-5 text-[#FF6F42]" />
                    <span className="text-2xl font-bold">{likes}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">좋아요</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Star className="w-5 h-5 text-[#FF6F42] fill-[#FF6F42]" />
                    <span className="text-2xl font-bold">{course.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">평점</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-2xl font-bold">{comments}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">댓글</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="soft-shadow mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD]">
                여행 소개
              </h2>
              <div className="prose prose-sm max-w-none whitespace-pre-line text-foreground/90 leading-relaxed">
                {course.description}
              </div>
            </CardContent>
          </Card>

          {/* Hashtags */}
          <Card className="soft-shadow mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">해시태그</h2>
              <div className="flex flex-wrap gap-2">
                {course.hashtags.map((tag: string) => (
                  <Badge
                    key={tag}
                    className="bg-gradient-to-r from-[#3A9CFD]/10 to-[#FF6F42]/10 text-foreground hover:from-[#3A9CFD]/20 hover:to-[#FF6F42]/20 border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Like & Review */}
          <Card className="soft-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">이 코스가 마음에 드시나요?</h2>
                <Button
                  variant={liked ? "default" : "outline"}
                  size="lg"
                  onClick={() => setLiked(!liked)}
                  className={`gap-2 ${liked ? "bg-gradient-to-r from-[#FF6F42] to-[#3A9CFD] hover:opacity-90" : ""}`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                  찜하기
                </Button>
              </div>

              <div>
                <h3 className="font-semibold mb-3">후기 작성</h3>
                <Textarea
                  placeholder="이 여행 코스에 대한 후기를 남겨주세요..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mb-3 min-h-[120px]"
                />
                <Button
                  onClick={() => {
                    alert("후기가 등록되었습니다!")
                    setReview("")
                  }}
                  className="bg-gradient-to-r from-[#3A9CFD] to-[#FF6F42] hover:opacity-90"
                >
                  후기 등록
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
