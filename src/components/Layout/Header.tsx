import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { title: 'ראשי', href: '/' },
    { title: 'אודות', href: '/about' },
    { title: 'טיפולים', href: '/services' },
    { title: 'צור קשר', href: '/contact' },
    { title: 'המלצות', href: '/testimonials' },
  ];

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-mint-100 dark:border-mint-900">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-mint-50 dark:hover:bg-mint-900/50"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-gold-600" />
              )}
            </button>
            <a href="/" className="text-2xl font-serif font-bold text-gold-600 dark:text-gold-400">
              מדואלה
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-mint-600 dark:hover:text-mint-400 transition-colors"
                >
                  {item.title}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-mint-50 dark:hover:bg-mint-900/50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-mint-100 dark:border-mint-900">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-mint-600 dark:hover:text-mint-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;