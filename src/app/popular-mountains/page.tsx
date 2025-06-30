"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PopularMountains() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const searchParams = useSearchParams();

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // URL 파라미터에서 검색어 읽어오기
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchTerm(decodeURIComponent(searchQuery));
    }
  }, [searchParams]);

  // 슬라이드 변경 시 currentSlide 초기화
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedDifficulty, searchTerm]);

  const mountains = [
    {
      id: 1,
      name: "설악산",
      location: "강원도 속초/인제/양양",
      height: "1,708m",
      features: "국내 3대 명산, 암릉·계곡, 사계절 풍광",
      difficulty: "중~상",
      duration: "3~10시간 (코스 다양)",
      restrictions: "봄·가을 산불조심기간 일부 통제",
      equipment: "방풍의, 스틱, 아이젠(겨울), 간식",
      gradient: "from-blue-400 to-blue-600",
      image: "/images/mountains/seorak.jpg"
    },
    {
      id: 2,
      name: "지리산",
      location: "전남·전북·경남",
      height: "1,915m",
      features: "남한 최고봉 천왕봉, 종주코스 유명",
      difficulty: "상",
      duration: "당일/2박3일 종주",
      restrictions: "동절기 야간출입금지",
      equipment: "방한복, 스틱, 헤드랜턴",
      gradient: "from-emerald-400 to-emerald-600",
      image: "/images/mountains/jiri.jpg"
    },
    {
      id: 3,
      name: "한라산",
      location: "제주도",
      height: "1,947m",
      features: "화산지형, 백록담",
      difficulty: "중",
      duration: "4~9시간",
      restrictions: "기상악화 시 입산 제한",
      equipment: "방풍자켓, 모자, 식수",
      gradient: "from-orange-400 to-orange-600",
      image: "/images/mountains/halla.jpg"
    },
    {
      id: 4,
      name: "태백산",
      location: "강원도 태백",
      height: "1,567m",
      features: "눈꽃명소, 천제단",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "산불예방기간 통제",
      equipment: "아이젠, 방한복",
      gradient: "from-indigo-400 to-indigo-600",
      image: "/images/mountains/taebaek.jpg"
    },
    {
      id: 5,
      name: "덕유산",
      location: "전북 무주",
      height: "1,614m",
      features: "향적봉, 겨울설경",
      difficulty: "중",
      duration: "4~8시간",
      restrictions: "일부구간 계절제한",
      equipment: "방한, 스틱",
      gradient: "from-purple-400 to-purple-600",
      image: "/images/mountains/deogu.jpg"
    },
    {
      id: 6,
      name: "오대산",
      location: "강원도 평창",
      height: "1,563m",
      features: "월정사, 전나무숲길",
      difficulty: "중",
      duration: "4~8시간",
      restrictions: "",
      equipment: "방풍의, 간식",
      gradient: "from-green-400 to-green-600",
      image: "/images/mountains/odae.jpg"
    },
    {
      id: 7,
      name: "소백산",
      location: "충북 단양, 경북 영주",
      height: "1,439m",
      features: "철쭉군락, 겨울풍경",
      difficulty: "중",
      duration: "4~7시간",
      restrictions: "봄철 제한",
      equipment: "방풍, 식수",
      gradient: "from-pink-400 to-pink-600",
      image: "/images/mountains/sobaek.jpg"
    },
    {
      id: 8,
      name: "가리왕산",
      location: "강원도 정선",
      height: "1,561m",
      features: "야생화 서식지",
      difficulty: "중",
      duration: "4~7시간",
      restrictions: "",
      equipment: "간식, 방풍의",
      gradient: "from-yellow-400 to-yellow-600",
      image: "/images/mountains/gariwang.jpg"
    },
    {
      id: 9,
      name: "속리산",
      location: "충북 보은",
      height: "1,058m",
      features: "법주사, 문장대",
      difficulty: "중",
      duration: "3~6시간",
      restrictions: "",
      equipment: "간식, 스틱",
      gradient: "from-teal-400 to-teal-600",
      image: "/images/mountains/sogri.jpg"
    },
    {
      id: 10,
      name: "월악산",
      location: "충북 제천",
      height: "1,097m",
      features: "영봉, 암릉",
      difficulty: "중~상",
      duration: "4~6시간",
      restrictions: "",
      equipment: "스틱, 식수",
      gradient: "from-red-400 to-red-600",
      image: "/images/mountains/worak.jpg"
    },
    {
      id: 11,
      name: "북한산",
      location: "서울, 경기",
      height: "836m",
      features: "백운대, 서울 전망",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "일부 예약구간",
      equipment: "등산화, 식수",
      gradient: "from-blue-500 to-blue-700",
      image: "/images/mountains/bukhan.jpg"
    },
    {
      id: 12,
      name: "도봉산",
      location: "서울, 경기",
      height: "740m",
      features: "암릉코스 인기",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "장갑, 등산화",
      gradient: "from-gray-400 to-gray-600",
      image: "/images/mountains/dobong.jpg"
    },
    {
      id: 13,
      name: "수락산",
      location: "서울, 경기",
      height: "638m",
      features: "바위능선",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "등산화",
      gradient: "from-cyan-400 to-cyan-600",
      image: "/images/mountains/surak.jpg"
    },
    {
      id: 14,
      name: "관악산",
      location: "서울 관악구",
      height: "632m",
      features: "서울대 인근, 암릉",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "장갑",
      gradient: "from-violet-400 to-violet-600",
      image: "/images/mountains/gwanak.jpg"
    },
    {
      id: 15,
      name: "청계산",
      location: "경기 성남",
      height: "620m",
      features: "접근성 좋음",
      difficulty: "하~중",
      duration: "2~3시간",
      restrictions: "",
      equipment: "식수",
      gradient: "from-lime-400 to-lime-600",
      image: "/images/mountains/cheonggye.jpg"
    },
    {
      id: 16,
      name: "계룡산",
      location: "충남 공주",
      height: "845m",
      features: "삼불봉, 계룡팔경",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "간식, 스틱",
      gradient: "from-amber-400 to-amber-600",
      image: "/images/mountains/gyeryong.jpg"
    },
    {
      id: 17,
      name: "팔공산",
      location: "대구",
      height: "1,192m",
      features: "갓바위",
      difficulty: "중",
      duration: "3~6시간",
      restrictions: "",
      equipment: "스틱",
      gradient: "from-rose-400 to-rose-600",
      image: "/images/mountains/palgong.jpg"
    },
    {
      id: 18,
      name: "무등산",
      location: "광주",
      height: "1,187m",
      features: "주상절리",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "등산화",
      gradient: "from-emerald-500 to-emerald-700",
      image: "/images/mountains/mudeung.jpg"
    },
    {
      id: 19,
      name: "내장산",
      location: "전북 정읍",
      height: "763m",
      features: "단풍명소",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-orange-500 to-red-500",
      image: "/images/mountains/naejang.jpg"
    },
    {
      id: 20,
      name: "마이산",
      location: "전북 진안",
      height: "686m",
      features: "두 봉우리",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-stone-400 to-stone-600",
      image: "/images/mountains/mai.jpg"
    },
    {
      id: 21,
      name: "치악산",
      location: "강원 원주",
      height: "1,288m",
      features: "비로봉",
      difficulty: "중~상",
      duration: "4~8시간",
      restrictions: "",
      equipment: "스틱, 식수",
      gradient: "from-sky-400 to-sky-600",
      image: "/images/mountains/chiak.jpg"
    },
    {
      id: 22,
      name: "금정산",
      location: "부산",
      height: "801m",
      features: "금샘, 전망대",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-yellow-500 to-orange-500",
      image: "/images/mountains/geumjeong.jpg"
    },
    {
      id: 23,
      name: "장산",
      location: "부산 해운대",
      height: "634m",
      features: "해운대 전경",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "식수",
      gradient: "from-blue-300 to-blue-500",
      image: "/images/mountains/jang.jpg"
    },
    {
      id: 24,
      name: "가지산",
      location: "울산",
      height: "1,240m",
      features: "영남알프스 최고봉",
      difficulty: "중",
      duration: "4~6시간",
      restrictions: "",
      equipment: "방풍의",
      gradient: "from-green-500 to-green-700",
      image: "/images/mountains/gaji.jpg"
    },
    {
      id: 25,
      name: "신불산",
      location: "울산",
      height: "1,159m",
      features: "억새밭",
      difficulty: "중",
      duration: "4~6시간",
      restrictions: "",
      equipment: "방풍, 간식",
      gradient: "from-yellow-300 to-yellow-500",
      image: "/images/mountains/sinbul.jpg"
    },
    {
      id: 26,
      name: "화왕산",
      location: "경남 창녕",
      height: "756m",
      features: "억새",
      difficulty: "중",
      duration: "3~4시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-amber-300 to-amber-500",
      image: "/images/mountains/hwawang.jpg"
    },
    {
      id: 27,
      name: "황매산",
      location: "경남 합천",
      height: "1,108m",
      features: "철쭉군락",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-pink-300 to-pink-500",
      image: "/images/mountains/hwangmae.jpg"
    },
    {
      id: 28,
      name: "무학산",
      location: "경남 창원",
      height: "761m",
      features: "마산 전경",
      difficulty: "중",
      duration: "3~5시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-purple-300 to-purple-500",
      image: "/images/mountains/muhak.jpg"
    },
    {
      id: 29,
      name: "송악산",
      location: "제주 서귀포",
      height: "104m",
      features: "해안산책로",
      difficulty: "하",
      duration: "1~2시간",
      restrictions: "",
      equipment: "식수",
      gradient: "from-emerald-300 to-blue-400",
      image: "/images/mountains/songak.jpg"
    },
    {
      id: 30,
      name: "성산일출봉",
      location: "제주",
      height: "182m",
      features: "분화구, 일출",
      difficulty: "하",
      duration: "1~2시간",
      restrictions: "",
      equipment: "간식",
      gradient: "from-orange-300 to-yellow-400",
      image: "/images/mountains/seongsan.jpg"
    }
  ];

  const difficulties = ["전체", "하", "하~중", "중", "중~상", "상"];

  const filteredMountains = mountains.filter(mountain => {
    const matchesDifficulty = selectedDifficulty === "전체" || mountain.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === "" || 
      mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mountain.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mountain.features.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDifficulty && matchesSearch;
  });

  // 슬라이드 관련 함수들
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredMountains.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredMountains.length - 1 : prev - 1
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

    if (isLeftSwipe && filteredMountains.length > 0) {
      nextSlide();
    }
    if (isRightSwipe && filteredMountains.length > 0) {
      prevSlide();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "하": return "text-green-400";
      case "하~중": return "text-yellow-400";
      case "중": return "text-orange-400";
      case "중~상": return "text-red-400";
      case "상": return "text-red-600";
      default: return "text-gray-400";
    }
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* 페이지 제목 */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">인기 산 정보</h1>
            <p className="text-gray-300">대한민국 주요 산 30곳의 상세 정보를 확인하세요</p>
          </div>

          {/* 검색창 */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="산 이름, 지역, 특징으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-gray-400 hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* 난이도 필터 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">난이도별 필터</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDifficulty === difficulty
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* 검색 결과 표시 */}
          {searchTerm && (
            <div className="mb-4">
              <p className="text-gray-300">
                <span className="font-semibold text-blue-400">'{searchTerm}'</span> 검색 결과: {filteredMountains.length}개
              </p>
            </div>
          )}

          {/* 산 목록 */}
          {filteredMountains.length > 0 ? (
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
                    {filteredMountains.map((mountain) => (
                      <div key={mountain.id} className="w-full flex-shrink-0 px-4">
                        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                          {/* 산 이미지 */}
                          <div className="h-64 relative overflow-hidden">
                            <img 
                              src={mountain.image} 
                              alt={`${mountain.name} 풍경`}
                              className="w-full h-full object-cover"
                              onLoad={(e) => {
                                console.log(`이미지 로드 성공: ${mountain.name}`);
                              }}
                              onError={(e) => {
                                console.log(`이미지 로드 실패: ${mountain.name} - ${mountain.image}`);
                                const container = e.currentTarget.parentElement!;
                                e.currentTarget.style.display = 'none';
                                container.classList.add('bg-gradient-to-br');
                                container.classList.add(...mountain.gradient.split(' '));
                              }}
                            />
                            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(mountain.difficulty)} bg-black bg-opacity-70`}>
                              {mountain.difficulty}
                            </div>
                          </div>

                          <div className="p-6">
                            {/* 산 기본 정보 */}
                            <div className="mb-4">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {highlightSearchTerm(mountain.name, searchTerm)}
                              </h3>
                              <p className="text-sm text-gray-300 mb-2">
                                {highlightSearchTerm(mountain.location, searchTerm)}
                              </p>
                              <p className="text-xl font-semibold text-blue-400">{mountain.height}</p>
                            </div>

                            {/* 특징 */}
                            <div className="mb-4">
                              <p className="text-sm text-gray-300 leading-relaxed">{mountain.features}</p>
                            </div>

                            {/* 소요시간 */}
                            <div className="mb-4">
                              <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-400">{mountain.duration}</span>
                              </div>
                            </div>

                            {/* 준비물 */}
                            <div className="mb-4">
                              <div className="flex items-start space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <span className="text-sm text-gray-400 leading-relaxed">{mountain.equipment}</span>
                              </div>
                            </div>

                            {/* 입산 제한 정보 */}
                            {mountain.restrictions && (
                              <div className="mb-4">
                                <div className="flex items-start space-x-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                  </svg>
                                  <span className="text-sm text-yellow-400 leading-relaxed">{mountain.restrictions}</span>
                                </div>
                              </div>
                            )}

                            {/* 상세 정보 버튼 */}
                            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                              상세 정보 보기
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 슬라이드 네비게이션 버튼 */}
                {filteredMountains.length > 1 && (
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
                {filteredMountains.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {filteredMountains.map((_, index) => (
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
                    {currentSlide + 1} / {filteredMountains.length}
                  </span>
                </div>
              </div>
            ) : (
              /* 데스크톱 그리드 뷰 */
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMountains.map((mountain) => (
                <div key={mountain.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* 산 이미지 */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={mountain.image} 
                      alt={`${mountain.name} 풍경`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onLoad={(e) => {
                        console.log(`이미지 로드 성공: ${mountain.name}`);
                      }}
                      onError={(e) => {
                        console.log(`이미지 로드 실패: ${mountain.name} - ${mountain.image}`);
                        // 이미지 로드 실패 시 그라데이션 배경으로 폴백
                        const container = e.currentTarget.parentElement!;
                        e.currentTarget.style.display = 'none';
                        container.classList.add('bg-gradient-to-br');
                        container.classList.add(...mountain.gradient.split(' '));
                      }}
                    />
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(mountain.difficulty)} bg-black bg-opacity-50`}>
                      {mountain.difficulty}
                    </div>
                  </div>

                  <div className="p-5">
                    {/* 산 기본 정보 */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {highlightSearchTerm(mountain.name, searchTerm)}
                      </h3>
                      <p className="text-sm text-gray-300 mb-1">
                        {highlightSearchTerm(mountain.location, searchTerm)}
                      </p>
                      <p className="text-lg font-semibold text-blue-400">{mountain.height}</p>
                    </div>

                    {/* 특징 */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-300 leading-relaxed">{mountain.features}</p>
                    </div>

                    {/* 소요시간 */}
                    <div className="mb-3">
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-gray-400">{mountain.duration}</span>
                      </div>
                    </div>

                    {/* 준비물 */}
                    <div className="mb-4">
                      <div className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-xs text-gray-400 leading-relaxed">{mountain.equipment}</span>
                      </div>
                    </div>

                    {/* 입산 제한 정보 */}
                    {mountain.restrictions && (
                      <div className="mb-4">
                        <div className="flex items-start space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="text-xs text-yellow-400 leading-relaxed">{mountain.restrictions}</span>
                        </div>
                      </div>
                    )}

                    {/* 상세 정보 버튼 */}
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      상세 정보 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
            )
          ) : (
            <div className="text-center py-12">
              <div className="flex flex-col items-center">
                <svg className="h-16 w-16 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.44.993-5.936 2.578L3 21l8.64-8.64a7.956 7.956 0 00-2.304-5.532L12 4.172l2.664 2.663A7.956 7.956 0 0012.36 12.36L21 21l-3.064-3.063A7.962 7.962 0 0112 15z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-400 mb-4">
                  {searchTerm ? `'${searchTerm}'에 해당하는 산을 찾을 수 없습니다` : '해당 조건에 맞는 산을 찾을 수 없습니다'}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDifficulty("전체");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  전체 목록 보기
                </button>
              </div>
            </div>
          )}

          {/* 등산 기본 준비물 안내 */}
          <div className="mt-12 bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">등산 기본 준비물</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">필수 장비</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 등산화, 스틱, 방풍/방한복</li>
                  <li>• 식수와 간식</li>
                  <li>• 헤드랜턴(장시간 산행)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">기타 준비물</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 구급약, 비상식량</li>
                  <li>• 지도/앱</li>
                  <li>• 쓰레기봉투</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link href="/" className="flex flex-col items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs mt-1">홈</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3l6 6 6-6M5 21l6-6 6 6" />
              </svg>
              <span className="text-xs mt-1">인기</span>
            </a>
            <Link href="/weather" className="flex flex-col items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-xs mt-1">날씨</span>
            </Link>
            <Link href="/safety" className="flex flex-col items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-xs mt-1">안전</span>
            </Link>
          </div>
        </div>
      </nav>

      <Footer />
    </div>
  );
} 