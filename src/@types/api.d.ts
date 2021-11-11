/* global User, BookInfromation */

declare interface SignUpBody {
  studentId: string;
  password: string;
  name: string;
  email: string;
  phone: string;
}

declare interface SignUpResponse {
  detail: string;
  user?: User;
}

declare interface SignInBody {
  studentId: string;
  password: string;
}

declare interface SignInResponse {
  detail?: string;
  token?: string;
  user?: User;
}

declare interface NoDataResponse {
  detail: string;
}

declare interface SearchBookBody {
  text: string;
  option: string;
}

// declare interface SearchBookResponse {

// }

declare interface RecommendBookBody {
  text: string;
  option: string;
}

// declare interface RecommendBookResponse {
  
// }