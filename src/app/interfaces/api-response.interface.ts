export interface ApiResponse<Data> {
  data: Data;
  support: {
    url: string;
    text: string;
  }
}
