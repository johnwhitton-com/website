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
      link: "/references/intro",
    },
    {
      text: "Writing",
      link: "/writing/intro",
    },
    {
      text: "Research",
      link: "/research/intro",
    },
  ],
  sidebar: {
    "/references": [
      {
        text: "John's Colleagues",
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
    "/research": [
      { text: "John's Research", link: "/research/intro" },
      {
        text: "Primitives",
        items: [
          {
            text: "Primitives Intro",
            link: "/research/primitives/intro",
          },
          {
            text: "Fraud Proofs",
            link: "/research/primitives/fraud-proofs",
          },
          {
            text: "Light Clients",
            link: "/research/primitives/light-clients",
          },
          {
            text: "Cryptogaphic Primitives",
            link: "/research/primitives/primitives",
          },
          {
            text: "Weak Subjectivity",
            link: "/research/primitives/weak-subjectivity",
          },
          {
            text: "Signature Schemes",
            link: "/research/primitives/signatures",
          },
        ],
      },
      {
        text: "Zero Knowledge",
        items: [
          {
            text: "Zero Knowledge Intro",
            link: "/research/zk/intro",
          },
          {
            text: "ZK Proof of Stake",
            link: "/research/zk/zkpos",
          },
          {
            text: "zk-Snarks",
            link: "/research/zk/zksnarks",
          },
          {
            text: "Axiom",
            link: "/research/zk/axiom",
          },
        ],
      },
      {
        text: "Cross Chain Bridges",
        items: [
          {
            text: "Bridging Intro",
            link: "/research/bridge/intro",
          },
          {
            text: "Cosmos IBC",
            link: "/research/bridge/cosmos-ibc",
          },
          {
            text: "Harmony Horizon",
            link: "/research/bridge/harmony-horizon",
          },
          {
            text: "Isomorph",
            link: "/research/bridge/isomorph",
          },
          {
            text: "Near Rainbow Bridge",
            link: "/research/bridge/near-rainbow",
          },
          {
            text: "Polymer Labs",
            link: "/research/bridge/polymerlabs",
          },
          {
            text: "Snowbridge",
            link: "/research/bridge/snowbridge",
          },
          {
            text: "Succint",
            link: "/research/bridge/succinct",
          },
        ],
      },
      {
        text: "Layer 1 Platforms",
        items: [
          {
            text: "Layer 1 Intro",
            link: "/research/chains/intro",
          },
          {
            text: "Avalanche",
            link: "/research/chains/avalanche",
          },
          {
            text: "Binance Smart Chain",
            link: "/research/chains/binance",
          },
          {
            text: "Cosmos",
            link: "/research/chains/cosmos",
          },
          {
            text: "Ethereum 1.0",
            link: "/research/chains/ethereum-1-0",
          },
          {
            text: "Ethereum",
            link: "/research/chains/ethereum",
          },
          {
            text: "NEAR",
            link: "/research/chains/NEAR",
          },
          {
            text: "Harmony",
            link: "/research/chains/harmony",
          },
          {
            text: "Polkadot",
            link: "/research/chains/polkadot",
          },
          {
            text: "Polygon",
            link: "/research/chains/polygon",
          },
        ],
      },
      {
        text: "Code Reviews",
        items: [
          {
            text: "Code Review Intro",
            link: "/research/code/intro",
          },
          {
            text: "Horizon Bridge",
            link: "/research/code/horizon",
          },
          {
            text: "Ethereum Near Bridge",
            link: "/research/code/ethereum-near",
          },
          {
            text: "Ethereum",
            link: "/research/code/ethereum",
          },
        ],
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
