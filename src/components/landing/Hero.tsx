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
    <section id="home" className="blood-bg relative min-h-screen flex items-center overflow-hidden">
      <div className="blood-drip" />
      <div className="spider-web" />

      {/* HxH spider art background */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none z-0">
        <img
          src="https://cdn.poehali.dev/projects/624cb9fa-8145-4312-a462-40d3b85c601b/files/983dbb16-218b-4c07-81a4-ff71cebae0ef.jpg"
          alt=""
          className="w-[62vw] max-w-3xl opacity-25 object-contain blood-pulse"
          style={{ filter: "saturate(2.5) hue-rotate(-5deg)" }}
        />
      </div>

      {/* Left blood streak */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      <div className="absolute left-1.5 top-0 h-2/3 w-px bg-gradient-to-b from-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase opacity-80">
                CS2 · Standoff 2 · Phantom Troupe
              </span>
            </div>

            <div className="relative mb-6">
              <h1
                className="text-6xl md:text-9xl font-black leading-none text-foreground nen-text"
                style={{
                  filter: glitch ? 'hue-rotate(200deg) brightness(2)' : 'none',
                  transition: 'filter 0.08s',
                }}
              >
                RED<span className="text-primary">4</span>N
              </h1>
              <div className="absolute -bottom-2 left-0 h-0.5 w-2/3 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <p className="text-base md:text-lg text-muted-foreground font-semibold tracking-[0.2em] uppercase mb-3 mt-8">
              Нен-сила в каждом выстреле
            </p>
            <p className="text-sm text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Программное обеспечение уровня Phantom Troupe. Невидимо для античита,
              смертоносно на поле боя. Работает в CS2 и Standoff 2.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white font-bold tracking-[0.15em] uppercase nen-glow px-10 py-6 text-sm"
                onClick={() => scrollToSection("products")}
              >
                <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                Получить доступ
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/70 hover:bg-primary/5 font-bold tracking-[0.1em] uppercase px-10 py-6 text-sm"
                onClick={() => scrollToSection("features")}
              >
                <Icon name="Eye" className="mr-2 h-4 w-4 text-primary" />
                Смотреть функции
              </Button>
            </div>

            <div className="flex flex-wrap gap-10">
              {[
                { label: "Активных бойцов", value: "12K+" },
                { label: "Обновлений в месяц", value: "8–12" },
                { label: "Обход защиты", value: "∞" },
              ].map((stat) => (
                <div key={stat.label} className="relative">
                  <p className="text-4xl font-black text-primary nen-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}