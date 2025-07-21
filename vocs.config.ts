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
    {
      text: "Writing",
      link: "/writing/writing",
    },
    {
      text: "Research",
      link: "/research/research",
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
    "/writing": [
      { text: "John's Writing", link: "/writing/intro" },
      {
        text: "Ethereum Bridging using Light Clients - Rainbow Costing",
        link: "/writing/2023-02-23-rainbow-costs",
      },
      { text: "Draft EAVE Whitepaper", link: "/writing/2021-12-01-eave-defi" },
      { text: "Kanga Protocol Whitepaper", link: "/writing/2021-05-01-kanga" },
      {
        text: "EAVE Parachain Design",
        link: "/writing/2021-04-01-eave-parachain",
      },
      {
        text: "Lessons Learned from Devcon5",
        link: "/writing/2019-10-16-devcon5",
      },
      {
        text: "Project-X Technical White Paper",
        link: "/writing/2018-07-17-projectx",
      },
    ],
    "/research": [{ text: "John's Research", link: "/research/intro" }],
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
