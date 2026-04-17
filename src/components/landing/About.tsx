import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Обо мне
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто я</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Fullstack-разработчик с опытом 5+ лет</h3>
            <p className="text-muted-foreground mb-6">
              Меня зовут Алексей, я специализируюсь на создании веб-приложений «под ключ» —
              беру проект от первых требований до финального запуска на продакшен.
              Работаю как с молодыми стартапами, так и с устоявшимся бизнесом.
            </p>
            <p className="text-muted-foreground mb-6">
              Главный принцип — код должен решать бизнес-задачу, а не просто работать.
              Пишу чистую, понятную архитектуру, которую легко поддерживать и масштабировать.
              За плечами — 40+ завершённых проектов в e-commerce, SaaS и корпоративном секторе.
            </p>
            <p className="text-muted-foreground">
              В свободное время участвую в open-source, веду технический блог
              и помогаю начинающим разработчикам войти в профессию.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Чистый код</h4>
                      <p className="text-muted-foreground">
                        Пишу поддерживаемый, масштабируемый код. Документирую API,
                        соблюдаю code review и стандарты индустрии.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Результат, а не процесс</h4>
                      <p className="text-muted-foreground">
                        Ориентируюсь на бизнес-результат: сроки, бюджет, рост конверсии.
                        Предлагаю решения — не просто выполняю задачи.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Запуск в срок</h4>
                      <p className="text-muted-foreground">
                        Слежу за дедлайнами и прозрачно веду коммуникацию на всех этапах.
                        Заказчик всегда знает статус проекта.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}