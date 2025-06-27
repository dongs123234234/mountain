'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-white">KOREA MOUNTAIN INFORMATION</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/popular-mountains" 
              className={`font-medium ${isActive('/popular-mountains') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              인기 산
            </Link>
            <Link 
              href="/trail-map" 
              className={`font-medium ${isActive('/trail-map') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              등산로 지도
            </Link>
            <Link 
              href="/weather" 
              className={`font-medium ${isActive('/weather') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              날씨 정보
            </Link>
            <Link 
              href="/safety" 
              className={`font-medium ${isActive('/safety') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              안전 수칙
            </Link>
            <Link 
              href="/my-team" 
              className={`font-medium ${isActive('/my-team') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              MY TEAM
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 