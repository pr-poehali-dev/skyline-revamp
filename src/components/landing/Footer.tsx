export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-primary/20 py-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-black tracking-widest text-foreground nen-text">
            RED<span className="text-primary">4</span>N
          </span>
          <p className="text-xs text-muted-foreground text-center">
            Только для CS2 и Standoff 2. Использование на свой страх и риск.
          </p>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Red4n. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}