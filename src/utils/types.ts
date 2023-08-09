export interface menuOptionsTypes {
  id: number;
  label: string;
  link: string;
}

export interface designsTypes {
  id: number;
  image: any;
}

export interface sectionTypes {
  id: number;
  sectionId: string,
  css: string,
  component: JSX.Element,
}
