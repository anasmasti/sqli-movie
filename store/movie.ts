import { defineStore } from "pinia";

export const movieStore = defineStore("movie", {
  state: () => ({
    movies: [
      {
        id: 1,
        title: "Harry Potter",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2static.fjcdn.com%2Flarge%2Fpictures%2Ff4%2F45%2Ff445e7_5594274.jpg&f=1&nofb=1&ipt=7e22ea6fa07fcf9cfcdc1c07fe6386d9309773e226a58fa83a2ace1232733de6&ipo=images",
        fav: false,
        note: 4,
      },
      {
        id: 2,
        title: "1917",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2F1917-dvd-cover-56.jpg&f=1&nofb=1&ipt=2dbe77121353533ac15498f62ec5e1218ecb8945d6e23df915118d2027f260e3&ipo=images",
        fav: false,
        note: 4,
      },
      {
        id: 3,
        title: "Thor",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2Fthor-dvd-cover-48.jpg&f=1&nofb=1&ipt=65513601b56e805afcfce5f8ee5ce10b9075f79f4b795eb6b3a66e6e3a771b63&ipo=images",
        fav: false,
        note: 4,
      },
      {
        id: 4,
        title: "RED",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2Fred-dvd-cover-90.jpg&f=1&nofb=1&ipt=eab7b40d70e2a782cb507324cbca1f5fd40454e0b33364a5151b60b3732404c1&ipo=images",
        fav: false,
        note: 4,
      },
      {
        id: 5,
        title: "Avengers",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc04.deviantart.net%2Ffs71%2Ff%2F2012%2F069%2Fa%2F6%2Fthe_avengers_dvd_cover_by_stephencanlas-d4sa9vx.jpg&f=1&nofb=1&ipt=e1533f116282a987c55fd9e58e6fed02bd2fd89849c28a15f4b31c93b7a6042f&ipo=images",
        fav: false,
        note: 4,
      },
    ],
  }),
  actions: {},
  getters: {
    getMovies(): any {
      return this.movies;
    },
  },
});
