import Link from "next/link"
import { MapPin, Calendar, Heart, Star, MessageCircle, Train, Bus, BugPlay as Subway, PawPrint } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TravelCardProps {
  id: number
  title: string
  region: string
  category: string
  description: string
  image: string
  days: number
  price: {
    total: number
    transport: number
    accommodation: number
    tickets: number
  }
  difficulty: number
  transportation: string[]
  petFriendly: boolean
  likes: number
  rating: number
  comments: number
}

const transportIcons: Record<string, any> = {
  KTX: Train,
  버스: Bus,
  지하철: Subway,
}

export default function TravelCard({
  id,
  title,
  region,
  category,
  description,
  image,
  days,
  price,
  difficulty,
  transportation,
  petFriendly,
  likes,
  rating,
  comments,
}: TravelCardProps) {
  return (
    <Link href={`/course/${id}`}>
      <div className="group rounded-2xl overflow-hidden soft-shadow bg-white hover:soft-shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden gradient-overlay">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {petFriendly && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <PawPrint className="w-4 h-4 text-[#FF6F42]" />
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <Badge className="bg-white/90 backdrop-blur-sm text-foreground hover:bg-white/90">{category}</Badge>
            <div className="flex items-center gap-1">
              {transportation.slice(0, 2).map((transport, index) => {
                const Icon = transportIcons[transport]
                return Icon ? (
                  <div
                    key={index}
                    className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                ) : null
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title & Region */}
          <div className="mb-3">
            <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{region}</span>
              <span className="mx-1">•</span>
              <Calendar className="w-4 h-4" />
              <span>{days}일</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

          {/* Price & Difficulty */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <div>
              <div className="text-xs text-muted-foreground mb-1">예상 가격</div>
              <div className="font-bold text-lg text-primary">{price.total.toLocaleString()}원</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground mb-1">난이도</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-4 rounded-full ${i < difficulty ? "bg-secondary" : "bg-muted"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#FF6F42] text-[#FF6F42]" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
