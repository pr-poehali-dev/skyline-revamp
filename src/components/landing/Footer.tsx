export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-black tracking-widest text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
