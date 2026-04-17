import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Icon from "@/components/ui/icon"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "xXDarkSniperXx",
      game: "CS2 — 3000 часов",
      content: "Пользуюсь Red4n уже 4 месяца. Ни одного бана. Аим плавный, не режет глаза, выглядит натурально.",
      stars: 5,
    },
    {
      id: 2,
      name: "ProPlayerKZ",
      game: "Standoff 2 — Легенда",
      content: "Лучший ESP что я видел на Standoff. Всё чисто, никаких вылетов. Поддержка ответила за 5 минут.",
      stars: 5,
    },
    {
      id: 3,
      name: "GhostRifle",
      game: "CS2 — FaceIt Level 8",
      content: "No recoil на AK просто огонь. Поднялся с уровня 6 до 8 за неделю. Рекомендую.",
      stars: 5,
    },
    {
      id: 4,
      name: "Shadow_w",
      game: "CS2 — Premier 14k ELO",
      content: "Брал вечный тариф — ни разу не пожалел. Обновления приходят постоянно, не заброшен как конкуренты.",
      stars: 5,
    },
    {
      id: 5,
      name: "K1LLerSt4r",
      game: "Standoff 2 — Diamond",
      content: "Aimbot настраивается под любое оружие. На пистолетах тоже работает отлично. Советую брать месяц.",
      stars: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary uppercase tracking-widest text-xs">
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            ЧТО ГОВОРЯТ <span className="text-primary">ИГРОКИ</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-border card-hover rounded-sm">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">"{t.content}"</p>
                      <div className="border-t border-border pt-4">
                        <p className="font-black text-foreground uppercase tracking-wide text-sm">{t.name}</p>
                        <p className="text-xs text-primary">{t.game}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-y-0 border-primary/30 hover:bg-primary/10" />
              <CarouselNext className="relative static translate-y-0 border-primary/30 hover:bg-primary/10" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
