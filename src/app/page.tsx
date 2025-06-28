"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  // 캐러셀 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 산 데이터
  const mountains = [
    {
      name: "북한산",
      location: "서울 은평구",
      height: "836.5m",
      gradient: "from-green-400 to-green-600"
    },
    {
      name: "설악산", 
      location: "강원 속초시",
      height: "1,708m",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "관악산",
      location: "경기 과천시", 
      height: "632m",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mountains.length);
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mountains.length) % mountains.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">한국의 아름다운 산을 탐험하세요</h2>
              <p className="text-lg text-gray-300 mb-6">전국 명산 정보와 등산로를 한눈에</p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="산 이름 또는 지역을 검색하세요"
                    className="w-full px-4 py-3 pr-12 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">등산의 즐거움을 영상으로 만나보세요</h3>
              <p className="text-gray-300">아름다운 산의 모습과 등산의 매력을 담은 영상</p>
            </div>
            
            {/* YouTube Video Embed - 16:9 Aspect Ratio */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/ieWZuAxxKLU?autoplay=1&loop=1&playlist=ieWZuAxxKLU&mute=1"
                title="등산 관련 영상"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Featured Mountains Carousel */}
        <section className="py-8 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">추천 산</h3>
              <Link href="/popular-mountains" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                더보기
              </Link>
            </div>
            
            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Wrapper */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {mountains.map((mountain, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="max-w-md mx-auto">
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                          <div className={`h-64 bg-gradient-to-br ${mountain.gradient}`}></div>
                          <div className="p-6 text-center">
                            <h4 className="text-xl font-medium text-white mb-2">{mountain.name}</h4>
                            <p className="text-gray-300 mb-1">{mountain.location}</p>
                            <p className="text-sm text-gray-400">높이: {mountain.height}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="이전 산"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="다음 산"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {mountains.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`${index + 1}번째 산으로 이동`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Information */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold text-white mb-6">최신 정보</h3>
            
            <div className="bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">겨울철 등산 안전수칙 안내</h4>
                      <p className="text-sm text-gray-300 mt-1">겨울 산행 시 주의사항과 필수 장비를 확인하세요.</p>
                      <p className="text-xs text-gray-400 mt-2">2024.01.15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">북한산 일부 구간 출입 통제</h4>
                      <p className="text-sm text-gray-300 mt-1">보수 공사로 인한 임시 출입 통제 구간 안내</p>
                      <p className="text-xs text-gray-400 mt-2">2024.01.12</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">주말 산악 기상 특보</h4>
                      <p className="text-sm text-gray-300 mt-1">강풍과 한파 주의보 발령</p>
                      <p className="text-xs text-gray-400 mt-2">2024.01.10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
