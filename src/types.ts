export interface IData {
  key: string;
  value: string;
}

export interface ILink {
  href: string;
  id: string;
  label: string;
}

export interface IPage {
  bg: string;
  data: IData[];
  id: string;
  slogans: string[];
  title: string;
}


