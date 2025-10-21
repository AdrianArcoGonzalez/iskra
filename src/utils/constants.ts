export const ALL_MEETUP_PAGE = 1;
export const FAVORITES_PAGE = 2;
export const NEW_MEETUP_PAGE = 3;

export type PageType =
  | typeof ALL_MEETUP_PAGE
  | typeof FAVORITES_PAGE
  | typeof NEW_MEETUP_PAGE;
