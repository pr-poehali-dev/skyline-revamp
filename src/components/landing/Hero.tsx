import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export default function Hero() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 150)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-background">
      <div className="spider-web" />
      <div className="scanlines absolute inset-0" />

      {/* Big spider background */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
        <img
          src="https://cdn.poehali.dev/projects/624cb9fa-8145-4312-a462-40d3b85c601b/files/ad015d0d-247b-494b-ae78-db5802fe4f54.jpg"
          alt=""
          className="w-[55vw] max-w-3xl opacity-10 object-contain"
        />
      </div>

      {/* Vertical red accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-bold tracking-widest uppercase">CS2 / Standoff 2</span>
            </div>

            <h1
              className="text-5xl md:text-8xl font-black mb-4 leading-none tracking-tight text-foreground"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                filter: glitch ? 'hue-rotate(180deg)' : 'none',
                transition: 'filter 0.1s',
              }}
            >
              RED<span className="text-primary">4</span>N
            </h1>

            <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-2 tracking-wide uppercase">
              Мощный софт для настоящих игроков
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Непробиваемый обход античита. Работает на CS2 и Standoff 2.
              Регулярные обновления — твой аккаунт в безопасности.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase red-glow px-10 py-6 text-base"
                onClick={() => scrollToSection("products")}
              >
                <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                Купить сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:border-primary hover:bg-primary/5 font-bold tracking-wider uppercase px-10 py-6 text-base"
                onClick={() => scrollToSection("features")}
              >
                <Icon name="Play" className="mr-2 h-5 w-5 text-primary" />
                Смотреть функции
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { label: "Пользователей", value: "12,000+" },
                { label: "Обновлений в месяц", value: "8–12" },
                { label: "Обход античита", value: "100%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-primary red-glow-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
