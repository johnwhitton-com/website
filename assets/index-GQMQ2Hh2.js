import{j as e,L as v,c as t,b,a as _,d as H,e as w,R as P,f as y,T as l,C as p,u as f}from"./index-Dsty2DMj.js";function N({children:o,className:n,href:c,variant:j}){return e.jsx(v,{className:t(n,b,j==="accent"&&_),href:c,variant:"styleless",children:o})}var L="vocs_HomePage",R="vocs_HomePage_logo",k="vocs_HomePage_title",B="vocs_HomePage_tagline",C="vocs_HomePage_description",M="vocs_HomePage_buttons",D="vocs_HomePage_button",E="vocs_HomePage_tabs",I="vocs_HomePage_tabsList",m="vocs_HomePage_tabsContent",d="vocs_HomePage_packageManager";function r({children:o,className:n}){return e.jsx("div",{className:t(n,L),children:o})}function u({className:o}){const{logoUrl:n,title:c}=H();return n?e.jsx("div",{className:t(o,R),children:e.jsx(w,{})}):e.jsx("h1",{className:t(o,k),children:c})}function h({children:o,className:n}){return e.jsx("div",{className:t(n,B),children:o})}function i({children:o,className:n}){return e.jsx("div",{className:t(n,C),children:o})}function x({children:o,className:n}){return e.jsx("div",{className:t(n,M),children:o})}function a(o){return e.jsx(N,{...o,className:t(D,o.className)})}function T({name:o,type:n="install"}){return e.jsxs(P,{className:E,defaultValue:"npm",children:[e.jsxs(y,{className:I,children:[e.jsx(l,{value:"npm",children:"npm"}),e.jsx(l,{value:"pnpm",children:"pnpm"}),e.jsx(l,{value:"yarn",children:"yarn"})]}),e.jsxs(p,{className:m,value:"npm",children:[e.jsx("span",{className:d,children:"npm"})," ",n==="init"?"init":"install"," ",o]}),e.jsxs(p,{className:m,value:"pnpm",children:[e.jsx("span",{className:d,children:"pnpm"})," ",n==="init"?"create":"add"," ",o]}),e.jsxs(p,{className:m,value:"yarn",children:[e.jsx("span",{className:d,children:"yarn"})," ",n==="init"?"create":"add"," ",o]})]})}const $=Object.freeze(Object.defineProperty({__proto__:null,Button:a,Buttons:x,Description:i,InstallPackage:T,Logo:u,Root:r,Tagline:h},Symbol.toStringTag,{value:"Module"})),F={layout:"landing"};function g(o){const n={p:"p",...f(),...o.components};return $||s("HomePage",!1),a||s("HomePage.Button",!0),x||s("HomePage.Buttons",!0),i||s("HomePage.Description",!0),u||s("HomePage.Logo",!0),r||s("HomePage.Root",!0),h||s("HomePage.Tagline",!0),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
.portfolioHomeIntro {
  padding-top: 40px;
  gap: 24px;
}

.portfolioHomeButtons {
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(100%, 720px);
}

.portfolioHomeButtons a {
  white-space: nowrap;
}

.portfolioHomeFollowup {
  padding-top: 0;
  gap: 24px;
}
`}),`
`,e.jsxs(r,{className:"portfolioHomeIntro",children:[e.jsx(u,{}),e.jsx(h,{children:"John Whitton"}),e.jsx(i,{children:"Engineer. Architect. Leader."})]}),`
`,e.jsx("a",{href:"https://portfolio.johnwhitton.com",target:"_blank",rel:"noopener noreferrer","aria-label":"View John Whitton portfolio slideshow",style:{width:"min(clamp(620px, 58vw, 1000px), calc(100vw - 32px))",margin:"24px auto 24px",marginLeft:"50%",display:"block",transform:"translateX(-50%)"},children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/images/john-portfolio-hero.webp",type:"image/webp"}),e.jsx("img",{src:"/images/john-portfolio-hero.png",alt:"John Whitton portfolio: Engineer. Architect. Leader.",style:{width:"100%",display:"block",borderRadius:"16px",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.35)"}})]})}),`
`,e.jsxs(r,{className:"portfolioHomeFollowup",children:[e.jsx(i,{children:e.jsx(n.p,{children:`I design, build, and scale systems across trading systems, financial
infrastructure, DeFi protocol engineering, distributed systems, and AI
engineering.`})}),e.jsxs(x,{className:"portfolioHomeButtons",children:[e.jsx(a,{href:"https://portfolio.johnwhitton.com",variant:"accent",children:e.jsx(n.p,{children:"View Portfolio"})}),e.jsx(a,{href:"/about",children:e.jsx(n.p,{children:"About John"})}),e.jsx(a,{href:"/resume",children:e.jsx(n.p,{children:"Resume"})}),e.jsx(a,{href:"https://www.jincubator.com/research/intro",children:e.jsx(n.p,{children:"Research"})})]})]})]})}function J(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(g,{...o})}):g(o)}function s(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{J as default,F as frontmatter};
