export interface CricketRoot {
  typeMatches: TypeMatch[];
  filters: Filters;
  appIndex: AppIndex;
  responseLastUpdated: string;
}

export interface TypeMatch {
  matchType: string;
  seriesMatches: SeriesMatch[];
}

export interface SeriesMatch {
  seriesAdWrapper?: SeriesAdWrapper;
  adDetail?: AdDetail;
}

export interface SeriesAdWrapper {
  seriesId: number;
  seriesName: string;
  matches: Match[];
}

export interface Match {
  matchInfo: MatchInfo;
  matchScore?: MatchScore;
}

export interface MatchInfo {
  matchId: number;
  seriesId: number;
  seriesName: string;
  matchDesc: string;
  matchFormat: string;
  startDate: string;
  endDate: string;
  state: string;
  status: string;
  team1: Team1;
  team2: Team2;
  venueInfo: VenueInfo;
  currBatTeamId?: number;
  seriesStartDt: string;
  seriesEndDt: string;
  isTimeAnnounced: boolean;
  stateTitle: string;
}

export interface Team1 {
  teamId: number;
  teamName: string;
  teamSName: string;
  imageId: number;
}

export interface Team2 {
  teamId: number;
  teamName: string;
  teamSName: string;
  imageId: number;
}

export interface VenueInfo {
  id: number;
  ground: string;
  city: string;
  timezone: string;
  latitude: string;
  longitude: string;
}

export interface MatchScore {
  team1Score: Team1Score;
  team2Score?: Team2Score;
}

export interface Team1Score {
  inngs1: Inngs1;
}

export interface Inngs1 {
  inningsId: number;
  runs: number;
  wickets?: number;
  overs: number;
}

export interface Team2Score {
  inngs1: Inngs12;
}

export interface Inngs12 {
  inningsId: number;
  runs: number;
  wickets: number;
  overs: number;
}

export interface AdDetail {
  name: string;
  layout: string;
  position: number;
}

export interface Filters {
  matchType: string[];
}

export interface AppIndex {
  seoTitle: string;
  webURL: string;
}
