import { defineConfig } from "vocs";

export default defineConfig({
  title: "John Whitton",
  description: "John Whitton's personal website",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
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
      link: "/references",
    },
  ],
  sidebar: {
    "/references": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
      {
        text: "Andy",
        link: "/colleagues/andy",
      },
      {
        text: "Ganesha",
        link: "/colleagues/ganesha",
      },
      {
        text: "Janet",
        link: "/colleagues/janet",
      },
      {
        text: "Li",
        link: "/colleagues/li",
      },
      {
        text: "Nick",
        link: "/colleagues/nick",
      },
      {
        text: "Olivier",
        link: "/colleagues/olivier",
      },
      {
        text: "Yishuang",
        link: "/colleagues/yishuang",
      },
    ],
    "/colleagues/andy": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/ganesha": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/janet": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/li": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/nick": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/olivier": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
    "/colleagues/yishuang": [
      {
        text: "John's Colleagues",
        link: "/references",
      },
    ],
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/johnwhitton",
    },
    {
      icon: "x",
      link: "https://twitter.com/johnwhitton",
    },
    { icon: "telegram", link: "https://t.me/john_whitton" },
  ],
});
