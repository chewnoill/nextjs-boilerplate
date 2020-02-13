export const theme = {
  colors: {
    black: "#202020",
    white: "#FFFFFF",
    gray: [
      "#202020",
      "#404040",
      "#606060",
      "#808080",
      "#9F9F9F",
      "#BFBFBF",
      "#DFDFDF",
      "#FFFFFF",
    ],
    bg: "#FFFFFF",
  },
  spaces: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, "100%", 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [
    { alias: "sm", value: 12 },
    { alias: "md", value: 16 },
    { alias: "lg", value: 24 },
    { alias: "xl", value: 32 },
    { alias: "xxl", value: 64 },
    { alias: "xxxl", value: 128 },
  ],
  textStyles: {
    h1: {
      fontSize: "xxxl",
      fontFamily: "Lato",
      my: 4,
    },
    h2: {
      fontSize: "xxl",
      fontFamily: "Lato",
      my: 4,
    },
    h3: {
      fontSize: "xl",
      fontFamily: "Montserrat",
    },
    h4: {
      fontSize: "lg",
      fontFamily: "Montserrat",
    },
    text: {
      fontSize: "md",
      fontFamily: "Montserrat",
    },
    label: {
      fontSize: "md",
      fontWeight: "bold",
      fontFamily: "Lato",
    },
    quote: {
      color: "gray.1",
      fontSize: "md",
      fontFamily: "Montserrat",
    },
    code: {
      fontFamily: "IBM Plex Mono",
      fontSize: "md",
      whiteSpace: "pre-wrap",
    },
  },
  borders: {
    solid: "2px solid",
  },
  borderStyles: {
    card: {
      border: "2px solid",
      borderColor: "gray.4",
      borderRadius: "3",
      bg: "gray.6",
    },
    quote: {
      borderLeft: "2px solid",
      borderColor: "gray.2",
    },
  },
};
