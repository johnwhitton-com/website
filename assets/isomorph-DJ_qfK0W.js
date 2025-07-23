import{u as a,j as e}from"./index-3h4G9oO6.js";const l={title:"Isomorph",description:"undefined"};function s(i){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",sup:"sup",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"isomorph",children:["Isomorph",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isomorph",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-24"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Isomorph is a Zero Knowledge trustless multichain bridge."}),`
`,e.jsxs(n.h2,{id:"approach",children:["Approach",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#approach",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"sample-process-flow",children:["Sample Process Flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-process-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"At a high level when an event happens on chain 1 we want to trigger a corresponding action on chain 2."}),`
`,e.jsx(n.p,{children:"For a simple bridging of funds this looks as follows"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Alice deposits 100 TokenX into TokenLocker on Chain 1 (which are locked) **a1"}),`
`,e.jsx(n.li,{children:"A transaction t1 is triggered in Block b1 and an event e1 is sent"}),`
`,e.jsx(n.li,{children:"The relayer listens to event e1 and relays the transaction receipt information to Chain 2."}),`
`,e.jsx(n.li,{children:"Verifier verifies that t1 is in block b1"}),`
`,e.jsx(n.li,{children:"Verifier verifies that block b1 is a valid block"}),`
`,e.jsx(n.li,{children:"Verifier verifies that b1 is in Chain1 canoninical chain"}),`
`,e.jsx(n.li,{children:"Executor1 triggers a minting of corresponding 100 TokenX∆ on TokenLocker∆ on Chain 2"}),`
`,e.jsx(n.li,{children:"A transaction t2 is triggered in Block b2 and an event e2 is sent"}),`
`,e.jsx(n.li,{children:"The relayer listens to event e2 and relays the transaction receipt information to Chain 1."}),`
`,e.jsx(n.li,{children:"Verifier verifies that t2 is in block b2"}),`
`,e.jsx(n.li,{children:"Verifier verifies that block b2 is a valid block"}),`
`,e.jsx(n.li,{children:"Verifier verifies that b2 is in Chain2 canoninical chain"}),`
`,e.jsx(n.li,{children:"Executor2 marks the bridge transaction as complete"}),`
`]}),`
`,e.jsxs(n.h2,{id:"proof-components",children:["Proof Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proof-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Valid Signers : Who are eligible to sign"}),`
`,e.jsx(n.li,{children:"Valid Signature:"}),`
`,e.jsx(n.li,{children:"Valid Block : (Epoch)"}),`
`]}),`
`,e.jsxs(n.h2,{id:"technology",children:["Technology",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technology",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["TokenLocker: ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/txProof.js",children:"horizon txProof.js"})," ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm EthProof"})]}),`
`,e.jsxs(n.li,{children:["TransactionVerify: Proves a ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"Merkle Patricia Trie"})," using ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.mdx",children:"merkle Proof"})," which verifies the ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/transaction.go#L44",children:"Transaction.Hash"})," against ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L77",children:"Header.txHash"}),". Here is an example from horizon using ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/txProof.js",children:"horizon txProof.js"})," which calls ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm EthProof"}),"."]}),`
`,e.jsxs(n.li,{children:["BlockSignatureVerification",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On Chain Verification : example is Near Rainbow Bridge Fraud Proof"}),`
`,e.jsx(n.li,{children:"Optimistic"}),`
`,e.jsx(n.li,{children:"Secure Enclave"}),`
`,e.jsxs(n.li,{children:["Zero Knowledge",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prover"}),`
`,e.jsx(n.li,{children:"Verification"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["BlockCanonicalVerification",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wait Number of Blocks"}),`
`,e.jsx(n.li,{children:"Optimistic"}),`
`,e.jsx(n.li,{children:"Light Client (Finality Gadgets)"}),`
`,e.jsx(n.li,{children:"Finalized Epoch"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"EventLister"}),`
`,e.jsx(n.li,{children:"Executor"}),`
`]}),`
`,e.jsxs(n.h2,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"avalanche",children:["Avalanche",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#avalanche",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"binance",children:["Binance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"cosmos",children:["Cosmos",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cosmos",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"ethereum",children:["Ethereum",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"near",children:["NEAR",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The leading NEAR Ethereum Bridge today Near Rainbow Bridge uses an optimistic approach. Following is an excerpt from NearOnEthClient ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-near-1",id:"user-content-fnref-near-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["we adopt the optimistic ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-near-2",id:"user-content-fnref-near-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," approach where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible)."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"harmony",children:["Harmony",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"polygon",children:["Polygon",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polygon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"polkadot",children:["Polkadot",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polkadot",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Previous proving mechanisms for Polkadot leverage BEEFY (Bridge Effiency Enabling Finality Yielder) ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-3",id:"user-content-fnref-dot-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," an example is Snowbridge ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-1",id:"user-content-fnref-dot-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," which developed their own Interactive Update Protocol ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-2",id:"user-content-fnref-dot-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),"."]}),`
`,e.jsxs(n.h2,{id:"verification-mechanism",children:["Verification Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verification-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"token-lockers",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"appendices",children:["Appendices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"appendix-f-data-structures",children:["Appendix F: Data Structures",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-f-data-structures",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Block Structure from ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L72",children:"go-ethereum"})]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SealHash returns the hash of a block prior to it being sealed."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"func (ethash *Ethash) SealHash(header *types.Header) (hash common.Hash) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher := sha3.NewLegacyKeccak256()"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" rlp.Encode(hasher, []interface{}{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ParentHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.UncleHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Coinbase,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Root,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.TxHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ReceiptHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Bloom,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Difficulty,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Number,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasLimit,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasUsed,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Time,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Extra,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" })"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher.Sum(hash["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:":0"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" return hash"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Transaction structure from ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/transaction.go#LL39-L64C2",children:"go-ethereum"})]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Transaction struct {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data txdata    // Consensus contents of a transaction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" time time.Time // Time first seen locally (spam avoidance)"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // caches"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hash atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" size atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" from atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type txdata struct {"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" AccountNonce uint64          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"nonce"    gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Price        *big.Int        "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"gasPrice" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" GasLimit     uint64          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"gas"      gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Recipient    *common.Address "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"to"       rlp:"nil"`'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // nil means contract creation"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Amount       *big.Int        "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"value"    gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Payload      []byte          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"input"    gencodec:"required"`'})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // Signature values"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" V *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"v" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" R *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"r" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" S *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"s" gencodec:"required"`'})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // This is only used when marshaling to JSON."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Hash *common.Hash "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"hash" rlp:"-"`'})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.h2,{id:"footnotes",children:["FootNotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnotes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"NEAR"}),`
`,e.jsx(n.p,{children:"Polkadot"}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-near-1",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"NEAR: ETH-NEAR Rainbow Bridge"}),": a bridge, called Rainbow Bridge, to connect the Ethereum and NEAR blockchains. ",e.jsx(n.a,{href:"#user-content-fnref-near-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-near-2",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"Optimistic Contracts"}),": contracts that accept all information as fact until proven to be non-factual. This allows for a reduction in the cost of verifying data, as on-chain verification would only be necessary when one is sure that the data is false. ",e.jsx(n.a,{href:"#user-content-fnref-near-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-3",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://spec.polkadot.network/#sect-grandpa-beefy",children:"Polkadot: BEEFY"}),": The BEEFY (Bridge Effiency Enabling Finality Yielder) is a secondary protocol to GRANDPA to support efficient bridging between the Polkadot network (relay chain) and remote, segregated blockchains, such as Ethereum, which were not built with the Polkadot interchain operability in mind. ",e.jsx(n.a,{href:"#user-content-fnref-dot-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-1",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/polkadot",children:"SnowBridge: Polkadot Verification"}),": use Polkadot’s BEEFY gadget to implement an efficient light client that only needs to verify a very small subset of relay chain validator signatures. ",e.jsx(n.a,{href:"#user-content-fnref-dot-1","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-2",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/polkadot/interactive-update-protocol",children:"Snowbridge: Interactive Update Protocol"}),": A prover wants to convince a light client that at least $$1/3$$ of validators signed a statement, which they claim that a specific set of at least $$2/3$$ of validators do. ",e.jsx(n.a,{href:"#user-content-fnref-dot-2","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function t(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{t as default,l as frontmatter};
