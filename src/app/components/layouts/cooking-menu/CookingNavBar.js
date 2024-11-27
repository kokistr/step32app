import Link from 'next/link';

export default function CookingNavBar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Suggest', href: '/suggest' },
    { name: 'Calendar', href: '/calendar' },
  ];

  return (
    <nav className="w-full flex items-center px-4 py-2 border-b border-gray-200 bg-white-50">
      {/* 左寄せ: アイコンとナビゲーション */}
      <div className="flex items-center gap-6">
        {/* アイコン */}
        <img
          src="/icons/cooking.png"
          alt="Cooking Icon"
          className="w-6 h-6"
        />

        {/* ナビゲーション */}
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-gray-600 hover:text-black px-3 py-2 text-sm font-medium"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
