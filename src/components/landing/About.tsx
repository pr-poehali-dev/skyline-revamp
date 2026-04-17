import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const advantages = [
    {
      icon: "Shield",
      title: "Полная безопасность",
      desc: "Наш софт использует передовые методы сокрытия. Обновляемся быстрее, чем работает античит.",
    },
    {
      icon: "Zap",
      title: "Нулевой фпс-дроп",
      desc: "Оптимизированный инжектор — ты не почувствуешь разницы в производительности.",
    },
    {
      icon: "Settings",
      title: "Гибкая настройка",
      desc: "Кастомизируй каждый параметр под свой стиль. Встроенный GUI прямо в игре.",
    },
    {
      icon: "RefreshCw",
      title: "Частые обновления",
      desc: "Выходит обновление игры — обновление от нас уже через несколько часов.",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      desc: "Помогаем с установкой, настройкой и любыми вопросами в любое время суток.",
    },
    {
      icon: "Users",
      title: "Закрытое сообщество",
      desc: "Доступ в приватный Discord с 12 000+ пользователей, гайдами и конфигами.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="spider-web opacity-50" />
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
            Почему Red4n
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            ПРЕВОСХОДСТВО <span className="text-primary">НА КАЖДОМ</span> СЕРВЕРЕ
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              variants={fadeIn}
            >
              <div className="bg-card border border-border card-hover rounded-sm p-6 h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-sm flex items-center justify-center mb-4 border border-primary/20">
                  <Icon name={item.icon} className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-black mb-2 text-foreground uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
