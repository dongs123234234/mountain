import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Team Hero Section */}
          <div className="team-bg rounded-lg overflow-hidden">
            <div className="p-8 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">STRANGER</h2>
              <p className="text-xl mb-2">산악동호회</p>
              <p className="text-lg opacity-90">&quot;낯선 산, 새로운 도전, 함께하는 모험&quot;</p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-sm">회원수</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-sm">완주산</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm">활동년수</div>
                </div>
              </div>
            </div>
          </div>

          {/* 동호회 소개 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              동호회 소개
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-3">STRANGER는</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  2009년에 창설된 STRANGER 산악동호회는 &quot;낯선 산, 새로운 도전&quot;이라는 모토 하에 
                  전국 각지의 명산을 탐험하며 서로의 우정을 쌓아가는 산악동호회입니다. 
                  초보자부터 베테랑까지 모든 수준의 등산객이 함께 즐길 수 있는 
                  다양한 프로그램을 운영하고 있습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">우리의 가치</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>안전한 산행을 최우선으로</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>자연 보호와 환경 사랑</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>서로 돕고 배려하는 마음</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>새로운 도전에 대한 열정</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 임원진 소개 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              임원진 소개
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="member-card bg-gray-700 rounded-lg p-4 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white">김산악</h4>
                <p className="text-sm text-blue-400 mb-2">회장</p>
                <p className="text-xs text-gray-300">등산경력 20년</p>
                <p className="text-xs text-gray-400">백두대간 완주</p>
              </div>
              
              <div className="member-card bg-gray-700 rounded-lg p-4 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white">이트레킹</h4>
                <p className="text-sm text-green-400 mb-2">부회장</p>
                <p className="text-xs text-gray-300">등산경력 15년</p>
                <p className="text-xs text-gray-400">응급처치 전문가</p>
              </div>
              
              <div className="member-card bg-gray-700 rounded-lg p-4 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white">박정상</h4>
                <p className="text-sm text-purple-400 mb-2">총무</p>
                <p className="text-xs text-gray-300">등산경력 12년</p>
                <p className="text-xs text-gray-400">사진작가</p>
              </div>
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              최근 활동
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-gray-700 rounded-lg p-4">
                <div className="w-16 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">지리산 종주 (1박 2일)</h4>
                  <p className="text-sm text-gray-300 mt-1">성삼재 → 천왕봉 → 중산리 코스</p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                    2024.01.20-21
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    참가인원 24명
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 