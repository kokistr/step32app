export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white-50">
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>
      <nav className="flex gap-4">
        <img
          src="/icons/cooking.png"
          alt="Cooking Icon"
          className="w-6 h-6"
        />
        <img
          src="/icons/health.png"
          alt="Health Icon"
          className="w-6 h-6"
        />
        <img
          src="/icons/shopping.png"
          alt="Shopping Icon"
          className="w-6 h-6"
        />
        <img
          src="/icons/menu.png"
          alt="Menu Icon"
          className="w-6 h-6"
        />
      </nav>
    </header>
  )
}