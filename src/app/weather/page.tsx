import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Weather() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">산악 날씨 정보</h2>
            <p className="text-gray-300">등산하기 전 날씨를 확인하세요</p>
          </div>

          {/* 오늘의 날씨 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">오늘의 산악 기상</h3>
            <div className="bg-blue-900 rounded-lg p-6">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">15°C</div>
                <div className="text-lg mb-4">흐림</div>
                <div className="inline-flex items-center px-4 py-2 bg-green-700 text-green-100 rounded-full text-sm font-medium">
                  등산 적합도: 양호
                </div>
              </div>
            </div>
          </div>

          {/* 주요 산별 날씨 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">주요 산별 날씨</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">북한산</h4>
                  <span className="text-2xl font-bold text-blue-400">14°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">서울 은평구</span>
                  <span className="text-sm text-green-400 font-medium">맑음</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">설악산</h4>
                  <span className="text-2xl font-bold text-blue-400">8°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">강원 속초시</span>
                  <span className="text-sm text-gray-400 font-medium">흐림</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">관악산</h4>
                  <span className="text-2xl font-bold text-blue-400">16°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">경기 과천시</span>
                  <span className="text-sm text-green-400 font-medium">맑음</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">지리산</h4>
                  <span className="text-2xl font-bold text-blue-400">12°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">전라남도 구례군</span>
                  <span className="text-sm text-blue-400 font-medium">구름조금</span>
                </div>
              </div>
            </div>
          </div>

          {/* 기상 특보 */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-4">기상 특보</h3>
            <div className="space-y-3">
              <div className="bg-yellow-900 border-l-4 border-yellow-400 p-4">
                <h4 className="font-medium text-yellow-100">강풍 주의보</h4>
                <p className="text-sm text-yellow-200 mt-2">강원도 산간지역에 강풍 주의보가 발령되었습니다. 등산 시 각별한 주의가 필요합니다.</p>
              </div>
              
              <div className="bg-blue-900 border-l-4 border-blue-400 p-4">
                <h4 className="font-medium text-blue-100">한파 주의보</h4>
                <p className="text-sm text-blue-200 mt-2">중부 산간지역에 한파 주의보가 발령되었습니다. 방한용품을 충분히 준비하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 