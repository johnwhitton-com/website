import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export default defineConfig({
  title: "John Whitton",
  description: "John Whitton's personal website",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  basePath: "/",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  topNav: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About John",
      link: "/about",
    },
    {
      text: "Resume",
      link: "/resume",
    },
    {
      text: "References",
      link: "/references/intro",
    },
    {
      text: "Research",
      link: "https://jincubator.com",
    },
    {
      text: "GitHub",
      link: "https://github.com/johnwhitton",
    },
  ],
  sidebar: {
    "/references": [
      {
        text: "Testimonials & References",
        link: "/references/intro",
      },
      {
        text: "Andy",
        link: "/references/andy",
      },
      {
        text: "Ganesha",
        link: "/references/ganesha",
      },
      {
        text: "Janet",
        link: "/references/janet",
      },
      {
        text: "Li",
        link: "/references/li",
      },
      {
        text: "Matt",
        link: "/references/matt",
      },
      {
        text: "Nick",
        link: "/references/nick",
      },
      {
        text: "Olivier",
        link: "/references/olivier",
      },
      {
        text: "Yishuang",
        link: "/references/yishuang",
      },
    ],
  },
  // Vocs v1.0.13 supports discord, github, telegram, warpcast, and x.
  // LinkedIn is provided as a footer text link until Vocs supports a LinkedIn social icon.
  // socials: [
  //   {
  //     icon: "github",
  //     link: "https://github.com/johnwhitton",
  //   },
  //   {
  //     icon: "x",
  //     link: "https://x.com/john_a_whitton",
  //   },
  //   { icon: "telegram", link: "https://t.me/john_whitton" },
  // ],
});
