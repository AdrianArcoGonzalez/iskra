export interface MeetUp {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
  isFavorite?: boolean;
}

export interface Page {
  name: string;
  path: string;
  badge?: boolean;
}
