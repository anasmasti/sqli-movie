import { defineStore } from "pinia";
import IMovie from "@/models/IMovie";

export const useMovieStore = defineStore("movie", {
  state: () => {
    const movies: IMovie[] = [
      {
        id: 1,
        title: "Harry Potter",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2static.fjcdn.com%2Flarge%2Fpictures%2Ff4%2F45%2Ff445e7_5594274.jpg&f=1&nofb=1&ipt=7e22ea6fa07fcf9cfcdc1c07fe6386d9309773e226a58fa83a2ace1232733de6&ipo=images",
        fav: false,
        note: 4.4,
        release: 2003,
        description:
          "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles. The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy. A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story, the world of Harry Potter explores numerous themes and includes many cultural meanings and references. According to Rowling, the main theme is death.",
      },
      {
        id: 2,
        title: "1917",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2F1917-dvd-cover-56.jpg&f=1&nofb=1&ipt=2dbe77121353533ac15498f62ec5e1218ecb8945d6e23df915118d2027f260e3&ipo=images",
        fav: false,
        note: 4.8,
        release: 2019,
        description:
          "1917 in film was a particularly fruitful year for the art form, and is often cited as one of the years in the decade which contributed to the medium the most, along with 1913. Secondarily the year saw a limited global embrace of narrative film-making and featured innovative techniques such as continuity cutting. Primarily, the year is an American landmark, as 1917 is the first year where the narrative and visual style is typified as.",
      },
      {
        id: 3,
        title: "Thor",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2Fthor-dvd-cover-48.jpg&f=1&nofb=1&ipt=65513601b56e805afcfce5f8ee5ce10b9075f79f4b795eb6b3a66e6e3a771b63&ipo=images",
        fav: false,
        note: 4.3,
        description:
          "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders. Director Kenneth Branagh Writers Ashley Miller (screenplay) Zack Stentz (screenplay) Don Payne (screenplay) Stars Chris Hemsworth Anthony Hopkins Natalie Portman",
        release: 2011,
      },
      {
        id: 4,
        title: "RED",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dvdsreleasedates.com%2Fcovers%2Fred-dvd-cover-90.jpg&f=1&nofb=1&ipt=eab7b40d70e2a782cb507324cbca1f5fd40454e0b33364a5151b60b3732404c1&ipo=images",
        fav: false,
        note: 4.2,
        release: 2010,
        description:
          "Action Comedy Crime When his peaceful life is threatened by a high-tech assassin, former black-ops agent Frank Moses reassembles his old team in a last-ditch effort to survive and uncover his assailants. Director Robert Schwentke Writers Jon Hoeber (screenplay) Erich Hoeber (screenplay) Warren Ellis (graphic novel) Stars Bruce Willis Helen Mirren",
      },
      {
        id: 5,
        title: "Avengers",
        cover:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc04.deviantart.net%2Ffs71%2Ff%2F2012%2F069%2Fa%2F6%2Fthe_avengers_dvd_cover_by_stephencanlas-d4sa9vx.jpg&f=1&nofb=1&ipt=e1533f116282a987c55fd9e58e6fed02bd2fd89849c28a15f4b31c93b7a6042f&ipo=images",
        fav: false,
        note: 4.7,
        release: 2012,
        description:
          "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe. Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth. The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005",
      },
    ];
    return { movies };
  },
  actions: {
    editMovieById(id: number, favMovie: IMovie) {
      this.movies.forEach((movie, index) => {
        if (movie.id == id) {
          Object.assign(this.movies[index], favMovie);
        }
      });
    },
    editMovieNote(id: number, favMovie: IMovie) {
      this.movies.forEach((movie, index) => {
        if (movie.id == id) {
          Object.assign(this.movies[index], favMovie);
        }
      });
    },
  },
  getters: {
    getMovies(): IMovie[] {
      return this.movies;
    },
    getMovieById(): (movieId: number) => IMovie | undefined {
      return (movieId: number): IMovie | undefined => {
        return this.movies.find((movie) => movie.id == movieId);
      };
    },
    getMoviesByTitle(): (movieTitle: string) => IMovie[] | undefined {
      return (movieTitle: string): IMovie[] | undefined => {
        if (movieTitle != "") {
          return this.movies.filter((movies) =>
            movies.title.toLowerCase().match(movieTitle)
          );
        } else {
          return [];
        }
      };
    },
    getFavMovies(): IMovie[] {
      return this.movies.filter((movies) => movies.fav == true);
    },
    getMostPopularMovies(): IMovie[] {
      return this.movies.filter((movies) => movies.note > 4.5);
    },
    getJumbotronMovie(): IMovie | undefined {
      return this.movies.find((movie) => movie.title == "Avengers");
    },
    getFavMoviesCount(): number {
      let favMovies = this.movies.filter((movies) => movies.fav == true);
      return favMovies.length;
    },
  },
});
