import Header from "@/components/header"
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import BannerSlider from "@/components/banner-slider"
import CategoryButtons from "@/components/category-buttons"
import TravelCard from "@/components/travel-card"
import Footer from "@/components/footer"

const courses = [
  {
    id: 1,
    title: "순천 골목 속 감성 산책 하루",
    region: "순천",
    category: "로컬",
    description: "현지인만 아는 순천 구도심 골목길과 전통시장을 따라 걷는 하루",
    image: "/suncheon-old-town-alley-with-traditional-market.jpg",
    days: 1,
    price: { total: 45000, transport: 15000, accommodation: 0, tickets: 30000 },
    difficulty: 2,
    transportation: ["버스", "지하철"],
    petFriendly: true,
    likes: 234,
    rating: 4.8,
    comments: 45,
  },
  {
    id: 2,
    title: "강릉 로컬 로스터리 카페 투어",
    region: "강릉",
    category: "카페",
    description: "관광지를 벗어나 현지인이 사랑하는 작은 로스터리 카페 탐방",
    image: "/gangneung-local-coffee-roastery-with-beans.jpg",
    days: 1,
    price: { total: 65000, transport: 25000, accommodation: 0, tickets: 40000 },
    difficulty: 1,
    transportation: ["KTX", "버스"],
    petFriendly: false,
    likes: 567,
    rating: 4.9,
    comments: 89,
  },
  {
    id: 3,
    title: "경주 구도심 골목 맛집 탐방",
    region: "경주",
    category: "맛집",
    description: "황리단길 너머, 경주 사람들이 진짜 가는 골목 맛집 투어",
    image: "/gyeongju-old-downtown-alley-restaurant.jpg",
    days: 1,
    price: { total: 55000, transport: 20000, accommodation: 0, tickets: 35000 },
    difficulty: 2,
    transportation: ["KTX", "버스"],
    petFriendly: false,
    likes: 423,
    rating: 4.7,
    comments: 67,
  },
  {
    id: 4,
    title: "여수 작은 섬마을 하루 여행",
    region: "여수",
    category: "로컬",
    description: "관광객 없는 조용한 섬마을에서 느리게 보내는 하루",
    image: "/yeosu-small-island-village-with-fishing-boats.jpg",
    days: 1,
    price: { total: 70000, transport: 30000, accommodation: 0, tickets: 40000 },
    difficulty: 3,
    transportation: ["KTX", "버스"],
    petFriendly: true,
    likes: 345,
    rating: 4.6,
    comments: 52,
  },
  {
    id: 5,
    title: "전주 구도심 로컬 맛집 탐방 1일 코스",
    region: "전주",
    category: "맛집",
    description: "한옥마을 대신 전주 사람들이 진짜 가는 구도심 맛집 투어",
    image: "/jeonju-old-downtown-local-restaurant-street.jpg",
    days: 1,
    price: { total: 50000, transport: 18000, accommodation: 0, tickets: 32000 },
    difficulty: 1,
    transportation: ["KTX", "버스"],
    petFriendly: false,
    likes: 678,
    rating: 4.9,
    comments: 123,
  },
  {
    id: 6,
    title: "통영 골목 시장과 감성 카페",
    region: "통영",
    category: "로컬",
    description: "중앙시장 골목 깊숙이, 현지인 단골 해산물집과 숨은 카페",
    image: "/tongyeong-alley-market-with-seafood-stalls.jpg",
    days: 1,
    price: { total: 60000, transport: 22000, accommodation: 0, tickets: 38000 },
    difficulty: 2,
    transportation: ["버스"],
    petFriendly: true,
    likes: 456,
    rating: 4.8,
    comments: 78,
  },
  {
    id: 7,
    title: "포항 구룡포 어촌마을 산책",
    region: "포항",
    category: "로컬",
    description: "일본인 가옥거리를 벗어나 진짜 어촌 사람들의 일상 속으로",
    image: "/pohang-guryongpo-fishing-village-with-boats.jpg",
    days: 1,
    price: { total: 48000, transport: 20000, accommodation: 0, tickets: 28000 },
    difficulty: 2,
    transportation: ["KTX", "버스"],
    petFriendly: true,
    likes: 289,
    rating: 4.5,
    comments: 43,
  },
  {
    id: 8,
    title: "진주 남강변 로컬 카페 투어",
    region: "진주",
    category: "카페",
    description: "진주성 대신 남강변 작은 카페들에서 여유롭게 보내는 오후",
    image: "/jinju-namgang-riverside-small-cafe.jpg",
    days: 1,
    price: { total: 42000, transport: 16000, accommodation: 0, tickets: 26000 },
    difficulty: 1,
    transportation: ["버스"],
    petFriendly: false,
    likes: 312,
    rating: 4.6,
    comments: 56,
  },
  {
    id: 9,
    title: "보성 작은 다원과 마을 산책",
    region: "보성",
    category: "로컬",
    description: "대한다원 대신 현지인이 운영하는 작은 차밭과 시골 마을",
    image: "/boseong-small-tea-farm-with-village.jpg",
    days: 1,
    price: { total: 52000, transport: 24000, accommodation: 0, tickets: 28000 },
    difficulty: 2,
    transportation: ["버스"],
    petFriendly: true,
    likes: 398,
    rating: 4.7,
    comments: 61,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Banner Slider */}
            <div className="mb-8">
              <BannerSlider />
            </div>

            {/* Category Buttons */}
            <div className="mb-8">
              <CategoryButtons />
            </div>

            {/* Travel Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <TravelCard key={course.id} {...course} />
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>

      <Footer />
    </div>
  )
}
