import React from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <div className={mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {links.map(({ href, text }) => (
        <a
          key={href}
          href={href}
          onClick={onClick}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          {text}
        </a>
      ))}
    </div>
  );
}