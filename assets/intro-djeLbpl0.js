import{u as i,j as e}from"./index-D3OdXp73.js";const a={title:"Crosschain Bridge Analysis - An Introduction",description:"undefined"};function s(t){const r={a:"a",blockquote:"blockquote",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.header,{children:e.jsxs(r.h1,{id:"crosschain-bridge-analysis---an-introduction",children:["Crosschain Bridge Analysis - An Introduction",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#crosschain-bridge-analysis---an-introduction",children:e.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"date: 2023-02-04"}),`
`,e.jsx(r.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsx(r.p,{children:"Here we present a survey of existing bridge designs, historical security incidents, and a brief discussion of common components and where ZKP may be used."}),`
`,e.jsxs(r.h2,{id:"bridge-taxonomy",children:["Bridge Taxonomy",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-taxonomy",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:["Bridge designs evolved as DeFi and multi-chain paradigm gained popularity. Our summary is inspired by prior taxonomy work by ",e.jsx(r.a,{href:"https://twitter.com/gupadhyaya",children:"Ganesha Upadhyaya"})," in ",e.jsx(r.a,{href:"https://medium.com/harmony-one/harmonys-cross-chain-future-41d02d53b10",children:"A Classification of Various Bridging Technologies"}),", ",e.jsx(r.a,{href:"https://twitter.com/dberenzon",children:"Dmitriy Berenzon"})," in ",e.jsx(r.a,{href:"https://medium.com/1kxnetwork/blockchain-bridges-5db6afac44f8",children:"Blockchain Bridges: Building Networks of Cryptonetworks"}),", and by multiple researchers from Jump Crypto in ",e.jsx(r.a,{href:"https://jumpcrypto.com/security-stack-up-how-bridges-compare/",children:"Security Stack-Up: How Bridges Compare"})]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"At a very high level, there are two types of bridging solutions: 1) proof-based and 2) committee-based. The proof-based solutions entail cryptographic proving of the validity of any transaction of one chain in the other, whereas the committee-based solution relies on the social consensus of the bridge validators to attest for the transaction validity, which often involves no cryptographic proving."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:'Ganesha Upadhyaya in "A Classification of Various Bridging Technologies"'}),`
`]}),`
`]}),`
`,e.jsxs(r.h3,{id:"proof-based",children:["Proof Based",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proof-based",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.h4,{id:"validity-proofs",children:["Validity Proofs",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validity-proofs",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Validity-proof based bridges prioritize security, trustlessness, permissionlessness, and delay minimization"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Design"}),e.jsx(r.th,{children:"Code"}),e.jsx(r.th,{children:"UI"}),e.jsx(r.th,{children:"Note"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"ZKP"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/uploads/paper.pdf",children:"zkBridge"})}),e.jsx(r.td,{children:"TBD"}),e.jsx(r.td,{children:"TBD"}),e.jsxs(r.td,{children:["By Berkeley researcehrs (",e.jsx(r.a,{href:"https://twitter.com/zkcollective",children:"Twitter"}),")"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"ZKP"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://docs.telepathy.xyz/protocol/overview",children:"Telepathy"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/succinctlabs?q=telepathy&type=all&language=&sort=",children:"Telepathy"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://demo.telepathy.xyz/",children:"Demo"})}),e.jsxs(r.td,{children:["By ",e.jsx(r.a,{href:"https://succinct.xyz",children:"Succint Labs"})]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Native"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://arxiv.org/pdf/2101.06000.pdf",children:"Horizon"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/harmony-one/horizon",children:"Horizon"})}),e.jsx(r.td,{children:"TBD"}),e.jsx(r.td,{children:"Inactive. By Harmony"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Native"}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://github.com/cosmos/ibc",children:"IBC"})," (",e.jsx(r.a,{href:"https://tutorials.cosmos.network/academy/3-ibc/1-what-is-ibc.html",children:"Intro"}),")"]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/cosmos/ibc-go",children:"ibc-go"})}),e.jsxs(r.td,{children:["Various / ",e.jsx(r.a,{href:"https://hub.mintscan.io/chains/ibc-network",children:"Explorer"})]}),e.jsx(r.td,{children:"Within Cosmos Network"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Native"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/docs/design/overview.mdx",children:"Gravity"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/Gravity-Bridge/Gravity-Bridge",children:"Gravity"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://bridge.blockscape.network/",children:"Gravity"})}),e.jsx(r.td,{children:"Ethereum and Cosmos"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Native"}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://github.com/ava-labs/xsvm",children:"AWM"})," (",e.jsx(r.a,{href:"https://medium.com/avalancheavax/avalanche-warp-messaging-awm-launches-with-the-first-native-subnet-to-subnet-message-on-avalanche-c0ceec32144a",children:"Intro"}),")"]}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://github.com/ava-labs/avalanchego/tree/master/vms/platformvm/warp",children:"Wrap"})," / ",e.jsx(r.a,{href:"https://github.com/ava-labs/xsvm",children:"XSVM"})]}),e.jsxs(r.td,{children:["TBD / ",e.jsx(r.a,{href:"https://subnets.avax.network/subnets",children:"Explorer"})]}),e.jsx(r.td,{children:"Within Avalanche Subnets"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Native"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://docs.snowbridge.network/architecture/overview",children:"Snowbridge"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge",children:"snowbridge"})}),e.jsx(r.td,{children:"TBD"}),e.jsx(r.td,{})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"LCP"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://medium.com/lcp-network/lcp-a-proxy-for-light-client-verification-to-realize-trust-minimized-and-gas-efficient-f7d5868e4b0",children:"Datachain LCP"})}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://github.com/datachainlab/lcp",children:"LCP"})," / ",e.jsx(r.a,{href:"https://github.com/datachainlab/harmony-cosmos-bridge-demo",children:"Demo"})]}),e.jsx(r.td,{children:"TBD"}),e.jsx(r.td,{children:"Relies on TEE enclave"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"LCP"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://medium.com/avalancheavax/avalanche-bridge-secure-cross-chain-asset-transfers-using-intel-sgx-b04f5a4c7ad1",children:"Avalanche"})}),e.jsxs(r.td,{children:["TBD / ",e.jsx(r.a,{href:"https://github.com/ava-labs/audits/blob/main/bridge/Avalanche_Bridge_Security_Audit_Report_Halborn_v1_1.pdf",children:"Audit"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://core.app/bridge/",children:"core.app"})}),e.jsx(r.td,{children:"Relies on TEE enclave (Intel SGX)"})]})]})]}),`
`,e.jsxs(r.h4,{id:"fraud-proofs",children:["Fraud Proofs",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fraud-proofs",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Fraud-proof based bridges assume all participants are truthful unless someone presents a proof showing otherwise. As a result, they must leave a wide fraud-proof time window and carefully design economic incentives for such. This limitation inevitably incurs much higher delay, but makes implementation substantially easier and costs significantly less to operate and maintain. Fraud-proof based bridges face more security risks due to reliance on fraud-prover and economic incentives, but still far less risky than committee-based bridges."}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Design"}),e.jsx(r.th,{children:"Code"}),e.jsx(r.th,{children:"UI"}),e.jsx(r.th,{children:"Note"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"Rainbow"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"rainbow-bridge"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://rainbowbridge.app/transfer",children:"rainbowbridge.app"})}),e.jsx(r.td,{children:"By NEAR"})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://docs.nomad.xyz/governance-bridge/architecture",children:"Nomad"})," (",e.jsx(r.a,{href:"https://medium.com/nomad-xyz-blog/the-nomad-design-philosophy-6fc0eacf3263",children:"Intro"}),")"]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/nomad-xyz/monorepo",children:"monorepo"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://app.nomad.xyz/",children:"app.nomad.xyz"})}),e.jsx(r.td,{children:"Hacked $200M (engineering flaw)"})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://docs.darwinia.network/",children:"Darwinia"})," (",e.jsx(r.a,{href:"https://darwinia.network/itering_io_optimistic_bridge_technical_paper_en.pdf",children:"Paper"}),")"]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/darwinia-network/darwinia",children:"darwinia"})}),e.jsxs(r.td,{children:["TBD / ",e.jsx(r.a,{href:"https://darwinia.subscan.io/",children:"Explorer"})]}),e.jsx(r.td,{})]})]})]}),`
`,e.jsxs(r.h3,{id:"committee-based",children:["Committee Based",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#committee-based",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Sub Category"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Design/Docs"}),e.jsx(r.th,{children:"Implementation"}),e.jsx(r.th,{children:"Frontend"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Protocol Validators"}),e.jsx(r.td,{}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://www.gravitybridge.net/faq",children:"Cosmos Gravity Bridge"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/cosmos/gravity-bridge",children:"gravity-bridge"})}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://bridge.blockscape.network/",children:"https://bridge.blockscape.network/"})," ",e.jsx(r.a,{href:"https://emeris.com/",children:"https://emeris.com/ (ON HOLD)"})]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Proof of Stake Chain"}),e.jsx(r.td,{}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://axelar.network/axelar_whitepaper.pdf",children:"Axelar"})," ",e.jsx(r.a,{href:"https://docs.axelar.dev/",children:"docs"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/axelarnetwork/axelar-core",children:"axelar-core"})}),e.jsx(r.td,{children:"TBD"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Proof of Stake Chain"}),e.jsx(r.td,{}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://cbridge-docs.celer.network/",children:"Celer cBridge"})," ",e.jsx(r.a,{href:"https://celer.network/doc/CelerNetwork-Whitepaper.pdf",children:"Celer Network Whitepaper"})]}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://github.com/celer-network/cBridge-node",children:"cBridge-node"}),", ",e.jsx(r.a,{href:"https://github.com/celer-network/cBridge-contracts",children:"cBridge-contracts"}),", ",e.jsx(r.a,{href:"https://github.com/celer-network/cbridge-cowa",children:"cBridge-cowa"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://cbridge.celer.network/",children:"https://cbridge.celer.network/"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Multisig"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://medium.com/harmony-one/introducing-horizon-an-ethereum-harmony-cross-chain-bridge-2f56ed7214b3",children:"Horizon 1.0"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/harmony-one/horizon",children:"github"})}),e.jsx(r.td,{children:"OBSOLETE"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Multisig"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://book.wormhole.com/wormhole/2_architectureOverview.html",children:"Wormhole"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/wormhole-foundation/wormhole",children:"wormhole"})}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://wormhole.com/network/",children:"network"})," ",e.jsx(r.a,{href:"https://wormhole.com/ecosystem/",children:"ecosystem"})]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Decentralized Oracle Network (DON)"}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://blog.chain.link/introducing-the-cross-chain-interoperability-protocol-ccip/",children:"Chainlink (CCIP)"}),", ",e.jsx(r.a,{href:"https://chain.link/cross-chain",children:"web"})," ",e.jsx(r.a,{href:"https://research.chain.link/whitepaper-v2.pdf?_ga=2.40239147.884807142.1677705772-204109244.1677705772",children:"Chainlink Whitepaper"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/smartcontractkit/ccip-read",children:"ccip-read"})}),e.jsx(r.td,{children:"N/A"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Decentralized Oracle Network (DON)"}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://layerzero.network/pdf/LayerZero_Whitepaper_Release.pdf",children:"LayerZero"}),", ",e.jsx(r.a,{href:"https://layerzero.gitbook.io/docs/",children:"docs"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/LayerZero-Labs/LayerZero",children:"LayerZero"})}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://theaptosbridge.com/bridge",children:"https://theaptosbridge.com/bridge"})," ",e.jsx(r.a,{href:"https://bitcoinbridge.network/bridge",children:"https://bitcoinbridge.network/bridge"})," ",e.jsx(r.a,{href:"https://bridge.harmony.one/one",children:"https://bridge.harmony.one/one"})]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Multi-Party Communication (MPC)"}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://docs.multichain.org/getting-started/introduction",children:"Multichain bridge"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/anyswap/CrossChain-Bridge",children:"Cross-Chain-Bridge"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://bsc.anyswap.exchange/bridge#/router",children:"https://bsc.anyswap.exchange/"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"External Networks"}),e.jsx(r.td,{children:"Multi-Party Communication (MPC)"}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://medium.com/synapse-protocol/introducing-synapse-protocol-2af926143deb",children:"Synapse Protocol"}),", ",e.jsx(r.a,{href:"https://docs.synapseprotocol.com/",children:"docs"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/orgs/synapsecns/repositories",children:"synapsecns"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://synapseprotocol.com/",children:"https://synapseprotocol.com/"})})]})]})]}),`
`,e.jsxs(r.h3,{id:"others",children:["Others",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#others",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Sub Category"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Design/Docs"}),e.jsx(r.th,{children:"Implementation"}),e.jsx(r.th,{children:"Frontend"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"rollup-to-rollup"}),e.jsx(r.td,{}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://hop.exchange/whitepaper.pdf",children:"Hop Protocol"}),", ",e.jsx(r.a,{href:"https://docs.hop.exchange/basics/a-short-explainer",children:"docs"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/hop-protocol/contracts",children:"contracts"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://app.hop.exchange/",children:"https://app.hop.exchange/"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"mesh-network"}),e.jsx(r.td,{}),e.jsxs(r.td,{children:[e.jsx(r.a,{href:"https://docs.routerprotocol.com/whitepaper/introducing-router-protocol/architecture",children:"Router Protocol"}),", ",e.jsx(r.a,{href:"https://dev.routerprotocol.com/",children:"docs"})]}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/orgs/router-protocol/repositories",children:"Router Protocol"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://app.thevoyager.io/swap",children:"https://app.thevoyager.io/swap"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Bridge Components"}),e.jsx(r.td,{}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/paritytech/parity-bridges-common#high-level-architecture",children:"Parity Bridges Common"})}),e.jsx(r.td,{children:e.jsx(r.a,{href:"https://github.com/paritytech/parity-bridges-common",children:"parity-bridges-common"})}),e.jsx(r.td,{children:"TBD"})]})]})]}),`
`,e.jsxs(r.h3,{id:"miscellaneous",children:["Miscellaneous",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#miscellaneous",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["TVL of bridges can be found on ",e.jsx(r.a,{href:"https://defillama.com/protocols/Bridge",children:"DeFi Llama"})]}),`
`,e.jsxs(r.li,{children:["Some tools and queries are already prepared on Dune Analytics for analysis of bridge volume. See for example: ",e.jsx(r.a,{href:"https://dune.com/queries/511393",children:"https://dune.com/queries/511393"}),"."]}),`
`]}),`
`,e.jsxs(r.h2,{id:"bridging-components",children:["Bridging Components",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridging-components",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Following are the main components for Cross-Chain Bridges we review"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Approach : The design approach for the bridge"}),`
`,e.jsxs(r.li,{children:["Proving Mechanisms: How do we ensure transactions are valid",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Transaction Proofs: How do we ensure a transacion was included in a valid block"}),`
`,e.jsx(r.li,{children:"Block Proofs: How do we ensure a block was included in the canonical chain"}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["Relayer Mechanisms",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Relaying: How do we relay messages (blocks and transactions) between chains"}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"Light Clients: What Light client approaches can we leverage"}),`
`,e.jsx(r.li,{children:"Token Lockers: How do we safely store bridged assets in a trustless cost effective way"}),`
`,e.jsx(r.li,{children:"Multi-chain support: What chains are supported and what is the proces to add additional chains."}),`
`,e.jsx(r.li,{children:"Economics: What are the costs for bridging between chains and how do we secure and incentivize validators and relayers."}),`
`]}),`
`,e.jsxs(r.h2,{id:"cross-chain-communication-protocols",children:["Cross Chain Communication Protocols",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cross-chain-communication-protocols",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://ibcprotocol.org/",children:"INTER‑BLOCKCHAINCOMMUNICATION PROTOCOL"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/cosmos/ibc",children:"Cosmos IBC: Interchain Standards"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://blog.cosmos.network/ibc-update-the-internet-of-blockchains-is-growing-fast-dae883228ebf",children:"IBC Update— The Internet of Blockchains Is Growing Fast"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/paritytech/xcm-format/blob/master/README.mdx",children:"Polkadot Cross-Consensus Message (XCM) Format"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://research.web3.foundation/en/latest/polkadot/XCMP/index.html",children:"XCMP Design"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://research.web3.foundation/en/latest/polkadot/XCMP/HRMP%20channels.html",children:"HRMP Channels"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://polkadot.network/blog/the-path-of-a-parachain-block/",children:"The Path of a Parachain Block"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/paritytech/parity-bridges-common/blob/master/README.mdx",children:"Parity Bridges Common"})}),`
`]}),`
`,e.jsxs(r.h2,{id:"bridge-attack-vectors-and-hacks",children:["Bridge Attack Vectors and Hacks",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-attack-vectors-and-hacks",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Following is an overview of some common bridge attack vectors."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://old.reddit.com/r/ethereum/comments/rwojtk/ama_we_are_the_efs_research_team_pt_7_07_january/hrngyk8/",children:"Vitalik; security limits of bridges"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Now, imagine what happens if you move 100 ETH onto a bridge on Solana to get 100 Solana-WETH, and then Ethereum gets 51% attacked. The attacker deposited a bunch of their own ETH into Solana-WETH and then reverted that transaction on the Ethereum side as soon as the Solana side confirmed it. The Solana-WETH contract is now no longer fully backed, and perhaps your 100 Solana-WETH is now only worth 60 ETH. Even if there's a perfect ZK-SNARK-based bridge that fully validates consensus, it's still vulnerable to theft through 51% attacks like this."}),`
`,e.jsx(r.p,{children:`It's always safer to hold Ethereum-native assets on Ethereum or Solana-native assets on Solana than it is to hold Ethereum-native assets on Solana or Solana-native assets on Ethereum. And in this context, "Ethereum" refers not just to the base chain, but also any proper L2 that is built on it. If Ethereum gets 51% attacked and reverts, Arbitrum and Optimism revert too, and so "cross-rollup" applications that hold state on Arbitrum and Optimism are guaranteed to remain consistent even if Ethereum gets 51% attacked. And if Ethereum does not get 51% attacked, there's no way to 51% attack Arbitrum and Optimism separately. Hence, holding assets issued on Optimism wrapped on Arbitrum is still perfectly safe.`}),`
`,e.jsx(r.p,{children:`Why a rollup can't just "go use another data layer". If a rollup stores its data on Celestia or BCH or whatever else but deals with assets on Ethereum, if that layer gets 51% attacked you're screwed. The DAS on Celestia providing 51% attack resistance doesn't actually help you because the Ethereum network isn't reading that DAS; it would be reading a bridge, which would be vulnerable to 51% attacks. To be a rollup that provides security to applications using Ethereum-native assets, you have to use the Ethereum data layer (and likewise for any other ecosystem).`}),`
`]}),`
`,e.jsx(r.p,{children:"Here are some sample hacks"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://blog.chainalysis.com/reports/cross-chain-bridge-hacks-2022/",children:"Vulnerabilities in Cross-chain Bridge Protocols Emerge as Top Security Risk"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Following last night’s exploit of the Nomad Bridge, Chainalysis estimates that $2 billion in cryptocurrency has been stolen across 13 separate cross-chain bridge hacks, the majority of which was stolen this year. Attacks on bridges account for 69% of total funds stolen in 2022 so far."}),`
`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://halborn.com/explained-the-qubit-hack-january-2022/",children:"EXPLAINED: THE QUBIT HACK (JANUARY 2022)"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"The exploited contract used a modified safeTransferFrom() function which instead of making use of functionCall() to verify that the target address contained contract code, used the call() function directly. As the 0 address has no code at all, no code is run, and the call is completed successfully without reverting. As a result, the deposit function executed successfully but no real tokens were deposited."}),`
`,e.jsx(r.p,{children:"The Ethereum QBridge caught the Deposit event and interpreted it as a valid deposit of ETH. As a result, qXETH tokens were minted for the attacker on BSC."}),`
`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://halborn.com/explained-the-wormhole-hack-february-2022/",children:"EXPLAINED: THE WORMHOLE HACK (FEBRUARY 2022)"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"The actual extraction of 120k ETH from the Wormhole bridge came at the end of a series of events. The actual flow of the attack was:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"The attacker creates a validator action approval (VAA) with a call to post_vaa"}),`
`,e.jsx(r.li,{children:"This VAA was used in a call to complete_wrapped to mint the 120,000 ETH extracted in the attack"}),`
`,e.jsx(r.li,{children:"The attacker “legitimately” extracted the minted tokens from the bridge"}),`
`]}),`
`,e.jsx(r.p,{children:"The vulnerability that made the attack possible was a failure to perform proper signature verification in the VAA creation process. The role of signature verification is delegated several times from post_vaa to verify_signatures to Secp256k1."}),`
`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://halborn.com/explained-the-ronin-hack-march-2022/",children:"EXPLAINED: THE RONIN HACK (MARCH 2022)"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"The Ronin Network attack was extremely stealthy. In fact, the hack wasn’t noticed until six days after it occurred when the project team was notified by a user that they couldn’t withdraw about 5k ETH from the project’s bridge. Further investigation discovered the largest hack in DeFi history to date."}),`
`,e.jsx(r.p,{children:"The Ronin Network hack was made possible by compromised private keys. The Ronin Network uses a set of nine validator nodes to approve transactions on the bridge, and a deposit or withdrawal requires approval by a majority of five of these nodes. The attacker gained control of four validators controlled by Sky Mavis and a third-party Axie DAO validator that signed their malicious transactions."}),`
`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://halborn.com/explained-the-harmony-horizon-bridge-hack/",children:"EXPLAINED: THE HARMONY HORIZON BRIDGE HACK"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Like most cross-chain bridges, the Harmony Horizon Bridge has a validation process for approving transactions being transferred over the bridge. In this case, the approvals process uses a multi-signature scheme with five validators."}),`
`,e.jsx(r.p,{children:"However, the bridge only used a 2 of 5 validation scheme. This means that only two blockchain accounts needed to be compromised for an attacker to approve any malicious transaction that they wished."}),`
`,e.jsx(r.p,{children:"The Harmony Horizon bridge was exploited via the theft of two private keys. These private keys were encrypted with both a passphrase and a key management service, and no system had access to multiple plaintext keys. However, the attacker managed to access and decrypt multiple keys."}),`
`,e.jsx(r.p,{children:"With access to two of the bridge’s private keys, the attacker could create a transaction extracting $100 million from the bridge and confirm it using two accounts under their control."}),`
`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://halborn.com/the-nomad-bridge-hack-a-deeper-dive/",children:"THE NOMAD BRIDGE HACK: A DEEPER DIVE"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"On August 1, DeFi bridge Nomad was hacked for over $190M."}),`
`,e.jsx(r.p,{children:`After a frenzied hack from hundreds of wallets, the bridge’s TVL dropped from $190,740,000 to $1,794 in mere hours. The hack involved a total of 960 transactions with 1,175 individual withdrawals from the bridge.
According to Nomad’s post-mortem, an implementation bug in a June 21 smart contract upgrade caused the Replica contract to fail to authenticate messages properly. This issue meant that any message could be forged as long as it had not already been processed.`}),`
`,e.jsx(r.p,{children:"As a result, contracts relying on the Replica for authentication of inbound messages suffered security failures. From there, this authentication failure resulted in fraudulent messages being passed to the Nomad BridgeRouter contract."}),`
`]}),`
`,e.jsxs(r.h2,{id:"references",children:["References",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Background and Overview"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://medium.com/harmony-one/harmonys-cross-chain-future-41d02d53b10",children:"Harmony’s Cross-Chain Future"})}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/nomad-xyz/awesome-interop",children:"Awesome Interoperability"}),": A curated list of awesome interoperability resources, libraries, tools and more."]}),`
`,e.jsx(r.li,{children:e.jsxs(r.a,{href:"https://twitter.com/vitalikbuterin/status/1479501366192132099?lang=en",children:["Vitalik: why the future will be ",e.jsx(r.em,{children:"multi-chain"}),", but it will not be ",e.jsx(r.em,{children:"cross-chain"})]})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://notes.ethereum.org/@vbuterin/SkeyEI3xv",children:"Vitalik’s Annotated Ethereum 2.0 Spec"})}),`
`]}),`
`,e.jsx(r.p,{children:"Background and Overview (Zero Knowledge Related)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://medium.com/@ingonyama/bridging-the-multichain-universe-with-zero-knowledge-proofs-6157464fbc86",children:"Bridging the Multichain Universe with Zero Knowledge Proofs"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/worldcoin/awesome-zkml",children:"awesome-zkml"})}),`
`]}),`
`,e.jsx(r.p,{children:"Mathematical Theory"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/",children:"Elliptic Curve Cryptography: a gentle introduction"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://vitalik.ca/general/2017/01/14/exploring_ecp.html",children:"Exploring Elliptic Curve Pairings"})}),`
`]}),`
`,e.jsx(r.p,{children:"Mathematical Theory (Zero Knowledge Related)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",children:"KZG polynomial commitments"})}),`
`]}),`
`,e.jsx(r.p,{children:"Research Papers"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://arxiv.org/pdf/1809.09044.pdf",children:"Fraud and Data Availability Proofs"}),": Maximising Light Client Security and Scaling Blockchains with Dishonest Majorities. ",e.jsx(r.em,{children:"Light clients, also known as Simple Payment Verification (SPV) clients, are nodes which only download a small portion of the data in a blockchain, and use indirect means to verify that a given chain is valid."})]}),`
`]}),`
`,e.jsx(r.p,{children:"Research Articles"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://notes.ethereum.org/@vbuterin/single_slot_finality",children:"Paths toward single-slot finality"}),": A look at how to improve Ethereum’s LMD GHOST + Casper FFG consensus."]}),`
`]}),`
`,e.jsx(r.p,{children:"Research Papers (Zero Knowledge Related)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/uploads/paper.pdf",children:"zkBridge: Trustless Cross-chain Bridges Made Practical"})}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://hyperoracle.medium.com/zkpos-end-to-end-trustless-65edccd87c5a",children:"zkPoS: End-to-End Trustless"}),": HyperOracle article on how zkPoS provides the ability of proving the consensus with ZK."]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://eprint.iacr.org/2022/621.pdf",children:"Caulk: Lookup Arguments in Sublinear Time"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://eprint.iacr.org/2022/1355.pdf",children:"HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates"})}),`
`]}),`
`,e.jsx(r.p,{children:"Research Articles (Zero Knowledge Related)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://ethresear.ch/t/slonk-a-simple-universal-snark/6420",children:"SLONK—a simple universal SNARK"}),": a simplification to PLONK called SLONK. We replace the permutation argument (the “P” in PLONK) in favour of a shift argument (the “S” in SLONK). We get a universal SNARK with the smallest known proof size and verification time."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://notes.ethereum.org/T0ZVaaywQAqP4jegqO3asg?view",children:"Kate commitments from the Lagrange basis without FFTs"}),": how to commit, evaluate and open polynomials in the Lagrange basis without FFTs. This is the first part in a series (see part 1, part 2, part 3) showing how to do PLONK-style universal SNARKs without FFTs"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://notes.ethereum.org/Il4z42lmQtaUYFigsjsk2Q?view",children:"Hadamard checks from the Lagrange basis without FFTs"}),": how to prove Hadamard relations between polynomials in the Lagrange basis without FFTs. This is the second part (see part 1, part 2, part 3) in a series showing how to do PLONK-style universal SNARKs without FFTs."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://notes.ethereum.org/DLRqK9V7RIOsTZkab8Hm_Q?view",children:"PLONK-style SNARKs without FFTs"}),": how to do PLONK-style universal SNARKs without FFTs. This is part 3 in a series (part 1, part 2, part 3)."]}),`
`]}),`
`,e.jsx(r.p,{children:"Implementation Articles"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/zkBridge.html",children:"zkBridge: Trustless Cross-chain Bridges Made Practical"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://blog.succinct.xyz/post/2022/09/20/proof-of-consensus",children:"Succinct Towards the endgame of blockchain interoperability with proof of consensus"})}),`
`]}),`
`,e.jsx(r.p,{children:"Implementations"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/wormhole-foundation/wormhole/blob/dev.v2/ethereum/contracts/Implementation.sol",children:"Wormhole ethereum contracts Implementaion.sol"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/semaraugusto/bls-verification-contract/blob/master/contracts/verifier.sol",children:"bls verification contract"})}),`
`]}),`
`,e.jsx(r.p,{children:"Documentation"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/",children:"ETHEREUM DEVELOPMENT DOCUMENTATION"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://docs.minaprotocol.com/",children:"MINA docs"})}),`
`]}),`
`,e.jsx(r.p,{children:"Additional References"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://minacrypto.com/2022/04/27/nil-foundation/",children:"nil-Foundation ETH-Mina bridge live on Ethereum testnet Ropsten"})}),`
`]}),`
`,e.jsxs(r.h2,{id:"bridge-implementation-references",children:["Bridge Implementation References",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-implementation-references",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"/harmony-horizon",children:"Harmony Horizon Bridge"}),": Detailed code review",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"Horizon"}),": javascript, solidity"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["Near Rainbow Bridge: Codebases",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"Near Rainbow Bridge"}),": rust, go, solidity, javascript"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"Near Rainbow Token Connector"}),": soldity"]}),`
`,e.jsxs(r.li,{children:["SDK",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client/tree/main/packages/client",children:"Near Rainbow Bridge Client"}),": typescript"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["Frontend",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-frontend",children:"NEAR Rainbow Bridge Frontend"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/nomad-xyz/monorepo",children:"Nomad monprepo"}),": Nomad is a cross-chain communication protocol. This repo contains the following: Smart contracts for the core Nomad protocol, Smart contracts for the Nomad token bridge SDKs for Nomad's core protocol, bridge, and governance systems, Tooling for local environment simulation and Smart contract deployment tooling.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/nomad-xyz/rust",children:"Nomad rust"}),": Nomad is a cross-chain communication standard that supports passing messages between blockchains easily and inexpensively. Like IBC light clients and similar systems, Nomad establishes message-passing channels between chains. Once a channel is established, any application on that chain can use it to send messages to others chains."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/nomad-xyz/gelato-sdk",children:"Nomad gelato-sdk"}),": This crate reimplements Gelato's Relay SDK in Rust. It simply wraps Gelato Relay requests and responses to/from Gelato endpoints with Rust types and methods."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"/succinct",children:"Succinct labs"}),": Deep dive on Succinct labs Proof of Consensus for Ethreum.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"Proof of Consensus for Ethereum"}),": contains both the zkSNARK circuits as well as the smart contracts needed for our succinct light client implementation, as well as prototype message passing contracts and bridge contracts."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/datachainlab/harmony-cosmos-bridge-demo",children:"Datachain lcp"}),"A proxy for light client verification executed in TEE."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/cosmos/ibc-go",children:"Cosmos ibc-go"}),": allows blockchains to talk to each other. This end-to-end, connection-oriented, stateful protocol provides reliable, ordered, and authenticated communication between heterogeneous blockchains.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/cosmos/ibc",children:"Cosmos ibc"}),": ibc specification"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/cosmos/gravity-bridge",children:"Cosmos gravity bridge"}),": Cosmos and Ethereum bridge designed to run on the Cosmos Hub focused on maximum design simplicity and efficiency."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/axelarnetwork/axelar-core",children:"Axelar"}),": based on the Cosmos SDK is the main application of the axelar network. ",e.jsx(r.a,{href:"https://axelar.network/axelar_whitepaper.pdf",children:"whitepaper"})," ",e.jsx(r.a,{href:"https://docs.axelar.dev/",children:"docs"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/celer-network/cBridge-node",children:"Celer cBridge-node"}),": Celer cBridge relay node implementation in Golang. (",e.jsx(r.a,{href:"https://cbridge-docs.celer.network/",children:"docs"}),")",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/celer-network/cBridge-contracts",children:"Celer cBridge-contracts"}),": Contracts for cBridge, cross-chain liquidity solution powered by Hashed-Timelock Transfers"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/celer-network/cbridge-cowa",children:"Celer cBridge-cowa"}),": CosmWasm Rust smart contracts for cbridge"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/wormhole-foundation/wormhole",children:"Wormhole"}),": the reference implementation of the Wormhole protocol. (",e.jsx(r.a,{href:"https://book.wormhole.com/introduction/introduction.html",children:"docs"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/LayerZero-Labs/LayerZero",children:"LayerZero Labs LayerZero"}),": contains the smart contracts for LayerZero Endpoints. (",e.jsx(r.a,{href:"https://layerzero.gitbook.io/docs/",children:"docs"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/anyswap/CrossChain-Bridge",children:"Multichain CrossChain-Bridge"}),": Cross-Chain bridge based on Anyswap MPC network. (",e.jsx(r.a,{href:"https://docs.multichain.org/getting-started/introduction",children:"docs"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/synapsecns",children:"Synapse Protocol"}),": a universal interoperability protocol that enables secure cross-chain communication.( ",e.jsx(r.a,{href:"https://docs.synapseprotocol.com/",children:"docs"}),")",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/synapsecns/synapse-contracts",children:"synapse-contracts"}),": smart contracts for Synapse Protocol."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/hop-protocol/contracts",children:"Hop Protocol contracts"}),": Hop is a scalable rollup-to-rollup general token bridge. Heare are the smart contracts that power the Hop Exchange. (",e.jsx(r.a,{href:"https://hop.exchange/whitepaper.pdf",children:"whitepaper"}),", ",e.jsx(r.a,{href:"https://docs.hop.exchange/basics/a-short-explainer",children:"docs"}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/orgs/router-protocol/repositories",children:"Router Protocol"}),": (",e.jsx(r.a,{href:"https://docs.routerprotocol.com/whitepaper/introducing-router-protocol",children:"whitepaper"}),", ",e.jsx(r.a,{href:"https://dev.routerprotocol.com/",children:"docs"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/parity-bridges-common",children:"Parity Bridges Common"}),": a collection of components for building bridges."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge",children:"Snowfork snowbridge"}),": A trustless bridge between Polkadot and Ethereum. (",e.jsx(r.a,{href:"https://docs.snowbridge.network/",children:"docs"}),")"]}),`
`]})]})}function o(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(s,{...t})}):s(t)}export{o as default,a as frontmatter};
