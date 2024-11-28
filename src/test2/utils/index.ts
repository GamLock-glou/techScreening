import { ProfilePath, FeaturesPath, Model } from "../types";

const model: Model = {
  link: "/game",
  additionalLinks: {
    lobby: "/lobby",
    statistics: "/statistics",
  },
  getLink: function (additionalLink: string | null = null) {
    if (!additionalLink) {
      return this.link;
    }
    return this.additionalLinks[additionalLink];
  },
};

const profileModel = {
  link: "/profile",
  additionalLinks: {
    me: "/me",
    user: "/user/:user_id",
  },
};

export const PATH = {
  home: "/",
  notFound: "/notFound",
  game: (additionalLink: FeaturesPath | null = null) =>
    model.getLink(additionalLink),
  profile: (additionalLink: ProfilePath | null = null) =>
    model.getLink.apply(profileModel, [additionalLink]),
};
