import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const plans = [
    {
      id: "day",
      name: "День",
      price: "99",
      period: "/ 24 часа",
      desc: "Попробуй перед покупкой",
      features: [
        "Полный доступ к CS2",
        "Полный доступ к Standoff 2",
        "Поддержка в чате",
        "Обновления включены",
      ],
      popular: false,
      color: "border-border",
    },
    {
      id: "month",
      name: "Месяц",
      price: "599",
      period: "/ 30 дней",
      desc: "Самый популярный вариант",
      features: [
        "Полный доступ к CS2",
        "Полный доступ к Standoff 2",
        "Приоритетная поддержка",
        "Обновления включены",
        "Доступ к приватному Discord",
        "Готовые конфиги от топ-игроков",
      ],
      popular: true,
      color: "border-primary",
    },
    {
      id: "forever",
      name: "Навсегда",
      price: "2499",
      period: "/ бессрочно",
      desc: "Один раз — и навсегда",
      features: [
        "Полный доступ к CS2",
        "Полный доступ к Standoff 2",
        "VIP поддержка 24/7",
        "Все обновления пожизненно",
        "Доступ к приватному Discord",
        "Эксклюзивные конфиги",
        "Ранний доступ к новым функциям",
      ],
      popular: false,
      color: "border-border",
    },
  ]

  return (
    <section id="products" className="py-24 bg-secondary relative overflow-hidden">
      <div className="spider-web" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
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
            Тарифы
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            ВЫБЕРИ <span className="text-primary">СВОЙ ПЛАН</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              variants={fadeIn}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1">
                    Хит продаж
                  </span>
                </div>
              )}
              <div className={`bg-card border-2 ${plan.color} rounded-sm p-6 h-full flex flex-col crack-border ${plan.popular ? "nen-glow" : ""}`}>
                <div className="mb-6">
                  <h3 className="font-black uppercase tracking-widest text-lg text-foreground mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-black text-primary nen-text">
                    {plan.price}₽
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-bold uppercase tracking-widest ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white red-glow"
                      : "bg-transparent border border-primary/40 hover:bg-primary/5 text-foreground"
                  }`}
                >
                  Купить
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="text-center text-muted-foreground text-xs mt-8"
        >
          Оплата через Telegram-бота. После оплаты ключ приходит автоматически.
        </motion.p>
      </div>
    </section>
  )
}