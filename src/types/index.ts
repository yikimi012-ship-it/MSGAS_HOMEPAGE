export type PageType = 
  | 'home'
  | 'company-overview'
  | 'products-catalog'
  | 'technical-services'
  | 'production-facilities'
  | 'esg-management'
  | 'customer-support';

export interface GasProduct {
  id: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard';
  categoryLabel: string;
  badge: string;
  nameKo: string;
  nameEn: string;
  chemicalFormula: string;
  purity: string;
  description: string;
  applications: string[];
  specs: {
    state: string; // e.g. 액화가스 (Cryogenic Liquid), 압축가스 (Compressed Gas)
    boilingPoint?: string;
    fillingPressure?: string;
    supplyTypes: ('초저온 벌크 탱크로리' | '초저온용기 (LGC)' | '고압 실린더 봄베' | '튜브 트레일러' | 'Y실린더' | '벌크 저장탱크')[];
    purityGrade: string;
    impurityLevels?: string;
  };
  features: string[];
  imageUrl: string;
  casNo: string;
  hazardClass: string;
}

export interface NoticeItem {
  id: string;
  category: '입찰공고' | '고지안내' | '보도자료' | '수상소식';
  categoryColor: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  hasAttachment?: boolean;
  attachmentName?: string;
  tenderDeadline?: string;
  tenderBudget?: string;
  isImportant?: boolean;
}

export interface NetworkBranch {
  id: string;
  name: string;
  region: '영남권' | '수도권' | '충청권' | '호남권';
  isHQ?: boolean;
  address: string;
  tel: string;
  fax: string;
  manager: string;
  facilities: string[];
  fleetCount: number;
  tankCapacity: string;
}

export interface MsdsDoc {
  id: string;
  casNo: string;
  nameKo: string;
  nameEn: string;
  formula: string;
  unNumber: string;
  hazardGrade: string;
  flammability: string;
  updatedAt: string;
  pdfUrl: string;
}

export interface TelemetryTanker {
  id: string;
  vehicleNo: string;
  driver: string;
  gasType: string;
  volume: string;
  pressure: string;
  temperature: string;
  departure: string;
  destination: string;
  eta: string;
  status: '정상 운행중' | '도착 완료' | '충전 대기' | '긴급 관제중';
  gps: {
    lat: number;
    lng: number;
    locationName: string;
  };
  speed: number;
}
