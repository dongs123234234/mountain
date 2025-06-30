'use client';

import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

// 산 정보 타입 정의
interface Mountain {
  id: string;
  name: string;
  location: string;
  height: string;
  difficulty: string;
  mapUrl: string;
  description: string;
  x: number; // 지도상 X 좌표 (%)
  y: number; // 지도상 Y 좌표 (%)
}

// 한국의 주요 산 데이터 (지도 좌표 포함)
const mountains: Mountain[] = [
  {
    id: 'bukhansan',
    name: '북한산',
    location: '서울특별시 은평구, 경기도 고양시',
    height: '836m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50388.23081847293!2d126.9568!3d37.6581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e3c87f9e9a9%3A0x7635f8e9e9a94f42!2sBukhansan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '서울의 진산으로 백운대, 인수봉, 만경대가 유명합니다.',
    x: 45, y: 30
  },
  {
    id: 'seoraksan',
    name: '설악산',
    location: '강원도 속초시, 양양군, 인제군',
    height: '1,708m',
    difficulty: '고급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.32951680573!2d128.3912!3d38.1196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fd8b4b87e5f5555%3A0x5a9b6c5f7d6f6f6f!2sSeoraksan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '한국에서 세 번째로 높은 산으로, 대청봉이 최고봉입니다.',
    x: 75, y: 20
  },
  {
    id: 'gwanaksan',
    name: '관악산',
    location: '서울특별시 관악구, 경기도 과천시',
    height: '632m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50547.23081847293!2d126.9568!3d37.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1f6f4f4f4f4%3A0x4a4a4a4a4a4a4a4a!2sGwanaksan!5e0!3m2!1sen!2skr!4v1234567890',
    description: '서울의 남쪽을 지키는 산으로, 연주대가 유명합니다.',
    x: 42, y: 35
  },
  {
    id: 'jirisan',
    name: '지리산',
    location: '전라남도, 전라북도, 경상남도',
    height: '1,915m',
    difficulty: '고급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206729.23081847293!2d127.7305!3d35.3372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e5e5e5e5e5e5e%3A0x6b6b6b6b6b6b6b6b!2sJirisan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '한국에서 두 번째로 높은 산으로, 천왕봉이 최고봉입니다.',
    x: 50, y: 70
  },
  {
    id: 'hallasan',
    name: '한라산',
    location: '제주특별자치도 제주시, 서귀포시',
    height: '1,947m',
    difficulty: '고급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106568.23081847293!2d126.5329!3d33.3617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce3b3b3b3b3b3%3A0x7c7c7c7c7c7c7c7c!2sHallasan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '한국에서 가장 높은 산으로, 백록담이 유명합니다.',
    x: 28, y: 100
  },
  {
    id: 'dobongsan',
    name: '도봉산',
    location: '서울특별시 도봉구, 경기도 의정부시',
    height: '740m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50332.23081847293!2d127.0165!3d37.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cc9c9c9c9c9c9%3A0x8d8d8d8d8d8d8d8d!2sDobongsan!5e0!3m2!1sen!2skr!4v1234567890',
    description: '북한산 국립공원에 속하며, 기암괴석이 많습니다.',
    x: 47, y: 28
  },
  {
    id: 'mudeungsan',
    name: '무등산',
    location: '광주광역시, 전라남도 화순군',
    height: '1,187m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102765.23081847293!2d126.9888!3d35.1340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718e8e8e8e8e8e%3A0x9e9e9e9e9e9e9e9e!2sMudeungsan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '광주의 진산으로, 주상절리가 유명합니다.',
    x: 35, y: 75
  },
  {
    id: 'naejangsan',
    name: '내장산',
    location: '전라북도 정읍시, 전라남도 장성군',
    height: '763m',
    difficulty: '초급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102962.23081847293!2d126.8999!3d35.4918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357178d8d8d8d8d8%3A0xaeaeaeaeaeaeaeae!2sNaejangsan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '단풍으로 유명한 산으로, 가을 단풍 명소입니다.',
    x: 32, y: 65
  },
  {
    id: 'taebaeksan',
    name: '태백산',
    location: '강원도 태백시, 영월군, 정선군',
    height: '1,567m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100912.23081847293!2d128.9165!3d37.0957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fd2e2e2e2e2e2e2%3A0xbfbfbfbfbfbfbfbf!2sTaebaeksan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '한국의 영산으로, 천제단과 석탄박물관이 유명합니다.',
    x: 68, y: 40
  },
  {
    id: 'odaesan',
    name: '오대산',
    location: '강원도 평창군, 홍천군, 강릉시',
    height: '1,563m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100234.23081847293!2d128.5431!3d37.7986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3561e1e1e1e1e1e1%3A0xcfcfcfcfcfcfcfcf!2sOdaesan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '비로봉을 주봉으로 하며, 월정사와 상원사가 유명합니다.',
    x: 70, y: 25
  },
  {
    id: 'sokrisan',
    name: '속리산',
    location: '충청북도 보은군, 경상북도 상주시',
    height: '1,058m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101456.23081847293!2d127.8334!3d36.5423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565c5c5c5c5c5c5%3A0xdfdfdfdfdfdfdfdf!2sSongnisan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '문장대와 법주사로 유명하며, 정이품송이 있습니다.',
    x: 55, y: 50
  },
  {
    id: 'gayasan',
    name: '가야산',
    location: '경상남도 합천군, 경상북도 성주군',
    height: '1,430m',
    difficulty: '중급',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101789.23081847293!2d128.0987!3d35.8234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567a7a7a7a7a7a7%3A0xefefefefefefefefef!2sGayasan%20National%20Park!5e0!3m2!1sen!2skr!4v1234567890',
    description: '해인사 팔만대장경으로 유명한 불교 성지입니다.',
    x: 60, y: 65
  }
];

export default function TrailMap() {
  const [selectedMountain, setSelectedMountain] = useState<Mountain | null>(null);
  const [hoveredMountain, setHoveredMountain] = useState<string | null>(null);

  const selectMountain = (mountain: Mountain) => {
    setSelectedMountain(selectedMountain?.id === mountain.id ? null : mountain);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '초급':
        return '#10B981'; // green-500
      case '중급':
        return '#F59E0B'; // amber-500
      case '고급':
        return '#EF4444'; // red-500
      default:
        return '#6B7280'; // gray-500
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">등산로 지도</h2>
            <p className="text-gray-300">지도에서 산을 클릭하여 등산로 정보를 확인하세요</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 대한민국 지도 */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-white mb-4">🗺️ 대한민국 등산지도</h3>
              <p className="text-sm text-gray-300 mb-4">지도상의 산을 클릭하여 상세 정보를 확인하세요</p>
              <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg overflow-hidden" style={{ paddingBottom: '120%' }}>
                {/* 현실적인 한국 지도 SVG */}
                <svg
                  viewBox="0 0 100 120"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* 한반도 본토 - 실제 형태 반영 */}
                  <path
                    d="M35 5 Q40 3 45 5 Q50 4 55 6 Q60 5 65 8 Q70 7 75 12 Q78 15 76 20 Q80 25 82 30 Q85 35 83 40 Q86 45 84 50 Q87 55 85 60 Q88 65 86 70 Q84 75 80 78 Q75 82 70 80 Q65 85 60 83 Q55 88 50 86 Q45 90 40 88 Q35 92 30 90 Q25 88 22 83 Q20 78 18 73 Q15 68 17 63 Q12 58 15 53 Q10 48 13 43 Q8 38 11 33 Q6 28 9 23 Q4 18 7 13 Q10 8 15 10 Q20 5 25 7 Q30 2 35 5 Z"
                    fill="#2D3748"
                    stroke="#4A5568"
                    strokeWidth="0.3"
                  />
                  
                  {/* 서해안 주요 섬들 */}
                  <circle cx="12" cy="45" r="1.5" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  <circle cx="8" cy="52" r="1" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  <circle cx="15" cy="58" r="1.2" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  <circle cx="10" cy="35" r="0.8" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  
                  {/* 남해안 섬들 */}
                  <circle cx="35" cy="85" r="0.8" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  <circle cx="42" cy="88" r="1" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  <circle cx="48" cy="86" r="0.6" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  
                  {/* 제주도 - 실제 크기와 위치 반영 */}
                  <ellipse cx="28" cy="100" rx="6" ry="3" fill="#2D3748" stroke="#4A5568" strokeWidth="0.3" />
                  
                  {/* 울릉도 */}
                  <circle cx="88" cy="28" r="1.5" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  
                  {/* 독도 */}
                  <circle cx="92" cy="25" r="0.8" fill="#2D3748" stroke="#4A5568" strokeWidth="0.2" />
                  
                  {/* 주요 강 표시 (한강, 낙동강, 금강) */}
                  <path d="M25 35 Q35 38 45 35 Q55 32 65 35" stroke="#1E40AF" strokeWidth="0.8" fill="none" opacity="0.6" />
                  <path d="M30 50 Q40 53 50 50 Q60 47 70 50" stroke="#1E40AF" strokeWidth="0.6" fill="none" opacity="0.6" />
                  <path d="M65 40 Q68 50 70 60 Q72 70 75 80" stroke="#1E40AF" strokeWidth="0.8" fill="none" opacity="0.6" />
                  
                  {/* 태백산맥 표시 */}
                  <path d="M65 15 Q70 25 68 35 Q72 45 70 55 Q75 65 73 75" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="2,1" />

                  {/* 산 위치 포인트들 */}
                  {mountains.map((mountain) => (
                    <g key={mountain.id}>
                      {/* 산 포인트 */}
                      <circle
                        cx={mountain.x}
                        cy={mountain.y}
                        r={hoveredMountain === mountain.id ? "3" : "2.5"}
                        fill={getDifficultyColor(mountain.difficulty)}
                        stroke="#ffffff"
                        strokeWidth="1"
                        className="cursor-pointer transition-all duration-200 hover:brightness-110"
                        onClick={() => selectMountain(mountain)}
                        onMouseEnter={() => setHoveredMountain(mountain.id)}
                        onMouseLeave={() => setHoveredMountain(null)}
                      />
                      
                      {/* 산 이름 라벨 */}
                      <text
                        x={mountain.x}
                        y={mountain.y - 4}
                        textAnchor="middle"
                        className="fill-white text-xs font-medium pointer-events-none select-none"
                        style={{ fontSize: '3px' }}
                      >
                        {mountain.name}
                      </text>
                      
                      {/* 선택된 산 강조 효과 */}
                      {selectedMountain?.id === mountain.id && (
                        <circle
                          cx={mountain.x}
                          cy={mountain.y}
                          r="4"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  ))}
                </svg>

                {/* 범례 */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 rounded-lg p-4 max-w-xs">
                  <h4 className="text-white text-sm font-medium mb-3">지도 범례</h4>
                  
                  {/* 산 난이도 */}
                  <div className="mb-3">
                    <h5 className="text-white text-xs font-medium mb-1">산 난이도</h5>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-white text-xs">초급</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-white text-xs">중급</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-white text-xs">고급</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 지리적 요소 */}
                  <div>
                    <h5 className="text-white text-xs font-medium mb-1">지리 정보</h5>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-1 bg-blue-600 rounded"></div>
                        <span className="text-white text-xs">주요 강</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-1 bg-purple-500 rounded border-dashed border border-purple-300"></div>
                        <span className="text-white text-xs">태백산맥</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded bg-gray-600 border border-gray-500"></div>
                        <span className="text-white text-xs">섬</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 선택된 산 정보 */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-6">
              {selectedMountain ? (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {selectedMountain.name} 정보
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">높이</span>
                      <span className="text-white font-medium">{selectedMountain.height}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">위치</span>
                      <span className="text-white text-sm">{selectedMountain.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">난이도</span>
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: getDifficultyColor(selectedMountain.difficulty) + '20',
                          color: getDifficultyColor(selectedMountain.difficulty)
                        }}
                      >
                        {selectedMountain.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{selectedMountain.description}</p>
                  
                  {/* 지도 */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedMountain.mapUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-400 mb-2">산을 선택해주세요</h3>
                  <p className="text-gray-500">지도에서 산을 클릭하면 상세 정보와 등산로 지도를 볼 수 있습니다.</p>
                </div>
              )}
            </div>
          </div>

          {/* 통계 섹션 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">산별 주요 통계</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <h4 className="font-medium text-white mb-2">최고봉</h4>
                <p className="text-2xl font-bold text-blue-400">한라산</p>
                <p className="text-sm text-gray-300">1,947m</p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <h4 className="font-medium text-white mb-2">등록된 산</h4>
                <p className="text-2xl font-bold text-green-400">{mountains.length}개</p>
                <p className="text-sm text-gray-300">전국 주요 산</p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <h4 className="font-medium text-white mb-2">난이도 분포</h4>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="text-green-400">초급 1</span>
                  <span className="text-orange-400">중급 8</span>
                  <span className="text-red-400">고급 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* 등산로 이용 안내 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">등산로 이용 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">초급</span>
                </div>
                <h4 className="font-medium text-white mb-2">초급 코스</h4>
                <p className="text-sm text-gray-300">2시간 이내, 경사 완만</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">중급</span>
                </div>
                <h4 className="font-medium text-white mb-2">중급 코스</h4>
                <p className="text-sm text-gray-300">2-4시간, 적당한 경사</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">고급</span>
                </div>
                <h4 className="font-medium text-white mb-2">고급 코스</h4>
                <p className="text-sm text-gray-300">4시간 이상, 가파른 경사</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 