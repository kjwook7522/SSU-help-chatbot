/* global User */

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

declare interface NoDataResponse {
  detail: string;
}