export interface IStudent {
  _id: string;
  mssv: string;
  name: string;
  age: string;
  gender: string;
  address: string;
  Nganh: string;
  TableResult: {
    Toan: {
      KT_15p: string;
      KT_1T: string;
      KT_CK: string;
      Tong: string;
    };
    Ly: {
      KT_15p: string;
      KT_1T: string;
      KT_CK: string;
      Tong: string;
    };
    Hoa: {
      KT_15p: string;
      KT_1T: string;
      KT_CK: string;
      Tong: string;
    };
    Van: {
      KT_15p: string;
      KT_1T: string;
      KT_CK: string;
      Tong: string;
    };
    TA: {
      KT_15p: string;
      KT_1T: string;
      KT_CK: string;
      Tong: string;
    };
  };

  BDT: string;
  createdAt: string;
  updatedAt: string;
  q: string;
}

export interface IStudentState {
  students: IStudent[];
  loading: boolean;
  error: string;
  searchState: string;
}
