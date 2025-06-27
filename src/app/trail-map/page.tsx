import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TrailMap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">등산로 지도</h2>
            <p className="text-gray-300">전국 등산로 정보와 지도를 확인하세요</p>
          </div>

          {/* 지도 영역 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">인터랙티브 지도</h3>
            <div className="bg-gray-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-lg font-medium">지도 영역</p>
                <p className="text-sm">등산로와 산 위치 정보가 표시됩니다</p>
              </div>
            </div>
          </div>

          {/* 등산로 정보 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">추천 등산로</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">북한산 백운대 코스</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>구간: 북한산성입구 → 백운대 정상</p>
                  <p>거리: 3.2km</p>
                  <p>소요시간: 2시간 30분</p>
                  <p className="text-orange-400">난이도: 중급</p>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">설악산 대청봉 코스</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>구간: 소청입구 → 대청봉</p>
                  <p>거리: 7.8km</p>
                  <p>소요시간: 5시간</p>
                  <p className="text-red-400">난이도: 고급</p>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">관악산 연주대 코스</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>구간: 관악산입구 → 연주대</p>
                  <p>거리: 2.1km</p>
                  <p>소요시간: 1시간 30분</p>
                  <p className="text-green-400">난이도: 초급</p>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">지리산 천왕봉 코스</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>구간: 중산리 → 천왕봉</p>
                  <p>거리: 9.1km</p>
                  <p>소요시간: 6시간</p>
                  <p className="text-red-400">난이도: 고급</p>
                </div>
              </div>
            </div>
          </div>

          {/* 등산로 안내 */}
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