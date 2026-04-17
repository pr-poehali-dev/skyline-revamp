import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function TechStack() {
  const [active, setActive] = useState<string | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cs2Features = [
    { name: "Aimbot", desc: "Плавный или жёсткий. Настраиваемый FOV, скорость, кости.", icon: "Crosshair" },
    { name: "Wallhack (ESP)", desc: "Видишь врагов сквозь стены — модели, кости, дистанция, HP.", icon: "Eye" },
    { name: "Triggerbot", desc: "Автовыстрел при наведении на врага. Задержка настраивается.", icon: "Target" },
    { name: "No Recoil", desc: "Полное подавление отдачи для любого оружия.", icon: "Minus" },
    { name: "Radar Hack", desc: "Показывает всех врагов на миникарте в реальном времени.", icon: "Map" },
    { name: "Bhop / Speed", desc: "Автоматический банни-хоп и ускорение передвижения.", icon: "Wind" },
  ]

  const so2Features = [
    { name: "Aimbot", desc: "Точный наводчик для любого оружия в Standoff 2.", icon: "Crosshair" },
    { name: "ESP / Box", desc: "Видимость врагов через препятствия с бокс-оверлеем.", icon: "Eye" },
    { name: "No Recoil", desc: "Стабильный прицел без разброса — убиваешь быстрее.", icon: "Minus" },
    { name: "Speed Hack", desc: "Увеличение скорости движения персонажа.", icon: "Wind" },
    { name: "Anti Ban", desc: "Встроенная защита от бана системы античита Standoff.", icon: "Shield" },
    { name: "Skin Changer", desc: "Меняй скины оружий без реальной покупки.", icon: "Palette" },
  ]

  return (
    <section id="features" className="py-24 relative overflow-hidden">
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
            Функционал
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            ЧТО <span className="text-primary">ВХОДИТ</span> В СОФТ
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { id: "cs2", label: "CS2", color: "#e8a000", features: cs2Features },
            { id: "so2", label: "Standoff 2", color: "#cc0000", features: so2Features },
          ].map((game) => (
            <motion.div
              key={game.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="border border-border rounded-sm overflow-hidden">
                <div
                  className="px-6 py-4 flex items-center gap-3 border-b border-border"
                  style={{ background: `linear-gradient(90deg, ${game.color}15, transparent)` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: game.color }} />
                  <h3 className="font-black uppercase tracking-widest text-lg text-foreground">{game.label}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  {game.features.map((feat, i) => (
                    <button
                      key={feat.name}
                      onClick={() => setActive(active === `${game.id}-${i}` ? null : `${game.id}-${i}`)}
                      className="text-left p-4 border-b border-r border-border hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <Icon name={feat.icon} className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-bold text-sm uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                          {feat.name}
                        </span>
                      </div>
                      <AnimatePresence>
                        {active === `${game.id}-${i}` && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-muted-foreground leading-relaxed mt-1"
                          >
                            {feat.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Нажми на функцию, чтобы узнать подробнее
        </motion.p>
      </div>
    </section>
  )
}
