'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white" onClick={closeMobileMenu}>
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
            <Link 
              href="/community" 
              className={`font-medium ${isActive('/community') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              커뮤니티
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label="메뉴 열기/닫기"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/popular-mountains" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/popular-mountains') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                인기 산
              </Link>
              <Link 
                href="/trail-map" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/trail-map') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                등산로 지도
              </Link>
              <Link 
                href="/weather" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/weather') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                날씨 정보
              </Link>
              <Link 
                href="/safety" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/safety') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                안전 수칙
              </Link>
              <Link 
                href="/my-team" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/my-team') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                MY TEAM
              </Link>
              <Link 
                href="/community" 
                onClick={closeMobileMenu}
                className={`font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive('/community') 
                    ? 'text-blue-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                커뮤니티
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 