declare interface BookInfromation {
  title: string;
  author: string;
  date: string;
  rating: number;
  review: string;
  year: number[];
  rank: number[];
  publisher: string;
  image: string;
  price: string;
  keyword: string[];
  barcode: string;
  success: boolean;
  kor: boolean;
}

declare interface BookQuery {
  search?: string;
  barcode?: string;
}