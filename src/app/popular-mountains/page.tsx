import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PopularMountains() {
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
    },
    {
      name: "용문산",
      location: "경기 양평군",
      height: "1,157m",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      name: "지리산",
      location: "전라남도 구례군",
      height: "1,915m",
      gradient: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-4">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          {mountains.map((mountain, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-12 bg-gradient-to-br ${mountain.gradient} rounded-lg`}></div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{mountain.name}</h3>
                  <p className="text-sm text-gray-300">{mountain.location}</p>
                  <p className="text-xs text-gray-400">높이: {mountain.height}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
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