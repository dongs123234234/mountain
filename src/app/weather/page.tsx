"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface WeatherData {
  mountainName: string;
  location: string;
  temperature: string;
  condition: string;
  humidity?: string;
  windSpeed?: string;
  lastUpdated: string;
  status: 'success' | 'error';
  error?: string;
}

interface WeatherResponse {
  success: boolean;
  data: WeatherData[];
  lastUpdated: string;
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  // 모바일 슬라이드 관련 상태
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 슬라이드 변경 시 currentSlide 초기화
  useEffect(() => {
    setCurrentSlide(0);
  }, [weatherData.length]);

  // 날씨 정보 가져오기
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/weather');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: WeatherResponse = await response.json();
      
      if (result.success && result.data) {
        setWeatherData(result.data);
        setLastUpdated(result.lastUpdated);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Failed to fetch weather data:', err);
      setError(err instanceof Error ? err.message : '날씨 정보를 가져오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // 새로고침 함수
  const handleRefresh = () => {
    fetchWeatherData();
  };

  // 슬라이드 관련 함수들
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === weatherData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? weatherData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && weatherData.length > 0) {
      nextSlide();
    }
    if (isRightSwipe && weatherData.length > 0) {
      prevSlide();
    }
  };

  // 날씨 상태에 따른 아이콘 및 색상
  const getWeatherStyle = (condition: string) => {
    switch (condition) {
      case '맑음':
        return { icon: '☀️', color: 'text-yellow-400', bgColor: 'bg-yellow-100' };
      case '구름많음':
      case '구름조금':
        return { icon: '⛅', color: 'text-blue-400', bgColor: 'bg-blue-100' };
      case '흐림':
        return { icon: '☁️', color: 'text-gray-400', bgColor: 'bg-gray-100' };
      case '비':
        return { icon: '🌧️', color: 'text-blue-600', bgColor: 'bg-blue-100' };
      case '눈':
        return { icon: '❄️', color: 'text-blue-200', bgColor: 'bg-blue-50' };
      case '소나기':
        return { icon: '🌦️', color: 'text-blue-500', bgColor: 'bg-blue-100' };
      default:
        return { icon: '🌤️', color: 'text-gray-400', bgColor: 'bg-gray-100' };
    }
  };

  // 등산 적합도 계산
  const getHikingSuitability = (condition: string, temperature: string) => {
    const temp = parseInt(temperature.replace('°C', ''));
    
    if (condition === '비' || condition === '소나기') {
      return { text: '주의', color: 'bg-yellow-600 text-yellow-100' };
    }
    if (condition === '눈') {
      return { text: '위험', color: 'bg-red-600 text-red-100' };
    }
    if (temp < 0) {
      return { text: '주의', color: 'bg-yellow-600 text-yellow-100' };
    }
    if (temp > 30) {
      return { text: '주의', color: 'bg-orange-600 text-orange-100' };
    }
    
    return { text: '양호', color: 'bg-green-600 text-green-100' };
  };

  // 전체 평균 온도 계산
  const getAverageTemperature = () => {
    if (weatherData.length === 0) return '15°C';
    
    const temps = weatherData.map(w => parseInt(w.temperature.replace('°C', '')));
    const avg = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);
    return `${avg}°C`;
  };

  // 주요 날씨 상태 결정
  const getMainWeatherCondition = () => {
    if (weatherData.length === 0) return '정보 없음';
    
    const conditions = weatherData.map(w => w.condition);
    const conditionCount = conditions.reduce((acc, condition) => {
      acc[condition] = (acc[condition] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const mostCommon = Object.entries(conditionCount).reduce((a, b) => 
      conditionCount[a[0]] > conditionCount[b[0]] ? a : b
    )[0];
    
    return mostCommon;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">실시간 산악 날씨 정보</h2>
            <p className="text-gray-300">기상청에서 제공하는 최신 날씨 정보</p>
            {lastUpdated && (
              <p className="text-sm text-gray-400 mt-2">
                마지막 업데이트: {new Date(lastUpdated).toLocaleString('ko-KR')}
              </p>
            )}
          </div>

          {/* 새로고침 버튼 */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
            >
              <svg className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              {loading ? '업데이트 중...' : '날씨 새로고침'}
            </button>
          </div>

          {/* 에러 표시 */}
          {error && (
            <div className="bg-red-900 border border-red-600 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-red-100 font-medium">오류 발생</span>
              </div>
              <p className="text-red-200 text-sm mt-1">{error}</p>
            </div>
          )}

          {/* 오늘의 날씨 - 전체 평균 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">오늘의 전국 산악 기상</h3>
            <div className="bg-blue-900 rounded-lg p-6">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{getAverageTemperature()}</div>
                <div className="text-lg mb-4 flex items-center justify-center">
                  <span className="mr-2">{getWeatherStyle(getMainWeatherCondition()).icon}</span>
                  {getMainWeatherCondition()}
                </div>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getHikingSuitability(getMainWeatherCondition(), getAverageTemperature()).color}`}>
                  등산 적합도: {getHikingSuitability(getMainWeatherCondition(), getAverageTemperature()).text}
                </div>
              </div>
            </div>
          </div>

          {/* 주요 산별 날씨 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">주요 산별 실시간 날씨</h3>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4 animate-pulse">
                    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-8 bg-gray-600 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-600 rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : (
              isMobile ? (
                /* 모바일 슬라이드 뷰 */
                <div className="relative">
                  <div 
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div 
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {weatherData.map((weather, index) => {
                        const weatherStyle = getWeatherStyle(weather.condition);
                        const suitability = getHikingSuitability(weather.condition, weather.temperature);
                        
                        return (
                          <div key={index} className="w-full flex-shrink-0 px-3">
                            <div className="bg-gray-700 rounded-lg p-4">
                              {/* 상단: 산 이름과 온도/아이콘 */}
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-lg font-bold text-white truncate flex-1 mr-2">{weather.mountainName}</h4>
                                <div className="flex items-center flex-shrink-0">
                                  <span className="text-2xl mr-2">{weatherStyle.icon}</span>
                                  <span className="text-2xl font-bold text-blue-400">{weather.temperature}</span>
                                </div>
                              </div>
                              
                              {/* 중간: 위치와 날씨 상태 */}
                              <div className="mb-3">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm text-gray-300 truncate flex-1 mr-2">{weather.location}</span>
                                  <span className={`text-sm font-medium ${weatherStyle.color} flex-shrink-0`}>{weather.condition}</span>
                                </div>
                              </div>
                              
                              {/* 하단: 상태와 적합도 */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-center">
                                  <span className={`text-sm px-3 py-1 rounded-full ${suitability.color} font-medium`}>
                                    {suitability.text}
                                  </span>
                                </div>
                                
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-gray-400">
                                    {weather.status === 'error' ? '⚠️ 추정값' : '✅ 실시간'}
                                  </span>
                                  <span className="text-gray-500 truncate ml-2">
                                    {weather.lastUpdated}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 슬라이드 네비게이션 버튼 */}
                  {weatherData.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* 슬라이드 인디케이터 */}
                  {weatherData.length > 1 && (
                    <div className="flex justify-center mt-6 space-x-2">
                      {weatherData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* 슬라이드 카운터 */}
                  <div className="text-center mt-4">
                    <span className="text-gray-400 text-sm">
                      {currentSlide + 1} / {weatherData.length}
                    </span>
                  </div>
                </div>
              ) : (
                /* 데스크톱 그리드 뷰 */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weatherData.map((weather, index) => {
                    const weatherStyle = getWeatherStyle(weather.condition);
                    const suitability = getHikingSuitability(weather.condition, weather.temperature);
                    
                    return (
                      <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{weather.mountainName}</h4>
                          <div className="flex items-center">
                            <span className="text-2xl mr-2">{weatherStyle.icon}</span>
                            <span className="text-2xl font-bold text-blue-400">{weather.temperature}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300">{weather.location}</span>
                          <span className={`text-sm font-medium ${weatherStyle.color}`}>{weather.condition}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {weather.status === 'error' ? '⚠️ 추정값' : '✅ 실시간'}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${suitability.color}`}>
                            {suitability.text}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          업데이트: {weather.lastUpdated}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>

          {/* 기상 특보 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">기상 특보 및 주의사항</h3>
            <div className="space-y-3">
              <div className="bg-yellow-900 border-l-4 border-yellow-400 p-4">
                <h4 className="font-medium text-yellow-100">겨울철 산행 주의</h4>
                <p className="text-sm text-yellow-200 mt-2">기온이 영하로 떨어지는 지역에서는 방한용품과 아이젠을 준비하세요.</p>
              </div>
              
              <div className="bg-blue-900 border-l-4 border-blue-400 p-4">
                <h4 className="font-medium text-blue-100">실시간 업데이트</h4>
                <p className="text-sm text-blue-200 mt-2">날씨 정보는 기상청 데이터를 기반으로 1시간마다 자동 업데이트됩니다.</p>
              </div>

              <div className="bg-green-900 border-l-4 border-green-400 p-4">
                <h4 className="font-medium text-green-100">안전한 산행을 위한 팁</h4>
                <p className="text-sm text-green-200 mt-2">날씨가 급변할 수 있으니 출발 전 반드시 최신 기상정보를 확인하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 