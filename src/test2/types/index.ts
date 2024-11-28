export type FeaturesPath = "statistics" | "lobby";

export type ProfilePath = "me" | "user";

export type Model = {
  link: string;
  additionalLinks: Record<string, string>;
  getLink: (v?: string | null) => string;
};
