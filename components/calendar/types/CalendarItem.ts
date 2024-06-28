import type { Action, ChallengeData } from "@/app/models/ChallengeData";

export interface CalendarItemProps {
  status: string;
  action: Action;
  data: ChallengeData;
}


export interface StatusIconProps {
  status: string
}
