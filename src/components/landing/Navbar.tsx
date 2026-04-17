import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset, behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Главная", href: "home" },
    { name: "О нас", href: "about" },
    { name: "Функции", href: "features" },
    { name: "Продукты", href: "products" },
    { name: "Отзывы", href: "testimonials" },
    { name: "Контакты", href: "contact" },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/98 backdrop-blur-md border-b border-primary/30 shadow-[0_1px_20px_rgba(180,0,0,0.2)]" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest text-foreground nen-text">
              RED<span className="text-primary">4</span>N
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase"
              >
                {link.name}
              </button>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wider uppercase text-sm red-glow">
              Купить
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/98 border-b border-primary/20 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-left font-semibold tracking-wider uppercase"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full bg-primary text-white font-bold">Купить</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}