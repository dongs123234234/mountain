export interface Mountain {
  id: string;
  name: string;
  location: string;
  height: string;
  latitude: number;
  longitude: number;
  weatherRegionCode: string; // 기상청 지역 코드
  locationDetail: string;
}

export const mountains: Mountain[] = [
  {
    id: "bukhansan",
    name: "북한산",
    location: "서울 은평구",
    height: "836m",
    latitude: 37.6602,
    longitude: 126.9770,
    weatherRegionCode: "11B00000", // 서울특별시
    locationDetail: "서울특별시 은평구"
  },
  {
    id: "seoraksan",
    name: "설악산",
    location: "강원도 속초/인제/양양",
    height: "1,708m",
    latitude: 38.1196,
    longitude: 128.4655,
    weatherRegionCode: "11D20000", // 강원도영동
    locationDetail: "강원특별자치도 속초시"
  },
  {
    id: "gwanaksan",
    name: "관악산",
    location: "경기 과천시",
    height: "632m",
    latitude: 37.4525,
    longitude: 126.9816,
    weatherRegionCode: "11B00000", // 서울특별시
    locationDetail: "서울특별시 관악구"
  },
  {
    id: "jirisan",
    name: "지리산",
    location: "전라남도 구례군",
    height: "1,915m",
    latitude: 35.3380,
    longitude: 127.7311,
    weatherRegionCode: "11F20000", // 전라남도
    locationDetail: "전라남도 구례군"
  },
  {
    id: "hallasan",
    name: "한라산",
    location: "제주도",
    height: "1,947m",
    latitude: 33.3622,
    longitude: 126.5292,
    weatherRegionCode: "11G00000", // 제주특별자치도
    locationDetail: "제주특별자치도 제주시"
  },
  {
    id: "taebaeksan",
    name: "태백산",
    location: "강원도 태백",
    height: "1,567m",
    latitude: 37.0951,
    longitude: 128.9184,
    weatherRegionCode: "11D10000", // 강원도영서
    locationDetail: "강원특별자치도 태백시"
  },
  {
    id: "deoguysan",
    name: "덕유산",
    location: "전북 무주",
    height: "1,614m",
    latitude: 35.8515,
    longitude: 127.7446,
    weatherRegionCode: "11F10000", // 전라북도
    locationDetail: "전북특별자치도 무주군"
  },
  {
    id: "odaesan",
    name: "오대산",
    location: "강원도 평창",
    height: "1,563m",
    latitude: 37.7971,
    longitude: 128.5436,
    weatherRegionCode: "11D10000", // 강원도영서
    locationDetail: "강원특별자치도 평창군"
  },
  {
    id: "sobaeksan",
    name: "소백산",
    location: "충북 단양, 경북 영주",
    height: "1,439m",
    latitude: 36.9565,
    longitude: 128.4395,
    weatherRegionCode: "11C10000", // 충청북도
    locationDetail: "충청북도 단양군"
  },
  {
    id: "dobongsan",
    name: "도봉산",
    location: "서울, 경기",
    height: "740m",
    latitude: 37.6893,
    longitude: 127.0464,
    weatherRegionCode: "11B00000", // 서울특별시
    locationDetail: "서울특별시 도봉구"
  }
];

// 기상청 API 지역 코드 매핑
export const weatherRegionCodes = {
  "11B00000": "서울특별시",
  "11B10000": "인천광역시", 
  "11B20000": "경기도",
  "11C00000": "대전광역시",
  "11C10000": "충청북도",
  "11C20000": "충청남도",
  "11D10000": "강원도영서",
  "11D20000": "강원도영동",
  "11E00000": "대구광역시",
  "11E10000": "경상북도",
  "11E20000": "경상남도",
  "11F00000": "광주광역시",
  "11F10000": "전라북도",
  "11F20000": "전라남도",
  "11G00000": "제주특별자치도",
  "11H10000": "울산광역시",
  "11H20000": "부산광역시"
}; 