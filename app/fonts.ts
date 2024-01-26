import localFont from "next/font/local";

const Gordita = localFont({
  src: [
    {
      path: "../public/fonts/Gordita-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Gordita-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Gordita-Bold.otf",
      weight: "700",
    },
  ],
});

export default Gordita;
