import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Safety() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">등산 안전 수칙</h2>
            <p className="text-gray-300">안전한 산행을 위한 필수 정보</p>
          </div>

          {/* 기본 안전 수칙 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">기본 안전 수칙</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">등산 계획 수립</h4>
                  <p className="text-sm text-gray-300">출발 전 등산 코스, 소요 시간, 날씨를 확인하고 가족에게 알려주세요.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">적절한 장비 준비</h4>
                  <p className="text-sm text-gray-300">등산화, 배낭, 스틱 등 기본 장비와 응급용품을 준비하세요.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">체력에 맞는 코스 선택</h4>
                  <p className="text-sm text-gray-300">자신의 체력과 경험에 맞는 난이도의 등산로를 선택하세요.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">일출 전 하산</h4>
                  <p className="text-sm text-gray-300">해가 지기 전에 하산을 완료할 수 있도록 시간을 계획하세요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 필수 장비 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              필수 장비
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-3">기본 장비</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    등산화 (미끄럼 방지)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    등산복 (레이어링)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    배낭 (적절한 크기)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    등산 스틱
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">응급 장비</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    휴대폰 (완전 충전)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    호루라기
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    구급약품
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    손전등
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 계절별 주의사항 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              계절별 주의사항
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-white">봄 / 가을</h4>
                  <p className="text-sm text-gray-300">일교차가 크므로 보온용품 준비. 낙엽으로 인한 미끄러짐 주의</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-medium text-white">여름</h4>
                  <p className="text-sm text-gray-300">열사병 예방, 충분한 수분 섭취, 벌레 기피제 준비</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-white">겨울</h4>
                  <p className="text-sm text-gray-300">체온 유지, 아이젠 착용, 눈사태 위험 지역 피하기</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-medium text-white">장마철</h4>
                  <p className="text-sm text-gray-300">우비 준비, 계곡 근처 피하기, 낙석 주의</p>
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