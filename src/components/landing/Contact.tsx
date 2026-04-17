import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contacts = [
    {
      icon: "Send",
      title: "Telegram-бот",
      desc: "Купить ключ, получить помощь",
      value: "@red4n_bot",
      link: "https://t.me/red4n_bot",
      cta: "Открыть бота",
    },
    {
      icon: "MessageCircle",
      title: "Discord сообщество",
      desc: "12 000+ игроков, конфиги, гайды",
      value: "discord.gg/red4n",
      link: "https://discord.gg",
      cta: "Войти в сервер",
    },
    {
      icon: "AtSign",
      title: "Telegram канал",
      desc: "Новости, обновления, акции",
      value: "@red4n_official",
      link: "https://t.me/red4n_official",
      cta: "Подписаться",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
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
            Контакты
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            СВЯЗАТЬСЯ <span className="text-primary">С НАМИ</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Покупка, вопросы по установке, поддержка — всё через Telegram. Отвечаем быстро.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contacts.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              variants={fadeIn}
            >
              <Card className="border-border card-hover rounded-sm text-center h-full">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-sm flex items-center justify-center mb-4 border border-primary/20">
                    <Icon name={c.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-black uppercase tracking-wide text-sm text-foreground mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                  <p className="text-primary font-bold text-sm mb-4 flex-grow">{c.value}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/5 font-bold uppercase tracking-wider text-xs"
                    asChild
                  >
                    <a href={c.link} target="_blank" rel="noopener noreferrer">
                      {c.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card border border-primary/20 rounded-sm p-8 nen-glow crack-border">
            <img
              src="https://cdn.poehali.dev/projects/624cb9fa-8145-4312-a462-40d3b85c601b/files/ad015d0d-247b-494b-ae78-db5802fe4f54.jpg"
              alt="Red4n Spider"
              className="w-24 h-24 object-contain mx-auto mb-4 opacity-80"
            />
            <h3 className="font-black text-2xl text-foreground mb-2 uppercase tracking-wide">
              Готов доминировать?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Начни с дневного тарифа — убедись сам, потом бери навсегда.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest red-glow"
              asChild
            >
              <a href="https://t.me/red4n_bot" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Купить в Telegram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}