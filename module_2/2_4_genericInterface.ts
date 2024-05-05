{
  // interface generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const developer1: Developer<EmilabWatch> = {
    name: "X",
    computer: {
      brand: "A",
      model: "P",
      releaseYear: 2010,
    },
    smartWatch: {
      brand: "a",
      model: "b",
      display: "LED",
    },
  };

  interface NewEmilabWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
  }

  const developer2: Developer<NewEmilabWatch> = {
    name: "X",
    computer: {
      brand: "A",
      model: "P",
      releaseYear: 2010,
    },
    smartWatch: {
      brand: "a",
      model: "b",
      display: "LED",
      heartTrack: true,
    },
  };
}
