import localFont from "next/font/local";

const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default lato;
