import{j as e,L as f,c as t,b as j,a as v,d as _,e as b,R as H,f as w,T as l,C as c,u as x}from"./index-j8blFw1x.js";function y({children:n,className:o,href:i,variant:h}){return e.jsx(f,{className:t(o,j,h==="accent"&&v),href:i,variant:"styleless",children:n})}var P="vocs_HomePage",N="vocs_HomePage_logo",L="vocs_HomePage_title",k="vocs_HomePage_tagline",C="vocs_HomePage_description",M="vocs_HomePage_buttons",R="vocs_HomePage_button",D="vocs_HomePage_tabs",B="vocs_HomePage_tabsList",p="vocs_HomePage_tabsContent",m="vocs_HomePage_packageManager";function a({children:n,className:o}){return e.jsx("div",{className:t(o,P),children:n})}function d({className:n}){const{logoUrl:o,title:i}=_();return o?e.jsx("div",{className:t(n,N),children:e.jsx(b,{})}):e.jsx("h1",{className:t(n,L),children:i})}function u({children:n,className:o}){return e.jsx("div",{className:t(o,k),children:n})}function r({children:n,className:o}){return e.jsx("div",{className:t(o,C),children:n})}function E({children:n,className:o}){return e.jsx("div",{className:t(o,M),children:n})}function I(n){return e.jsx(y,{...n,className:t(R,n.className)})}function T({name:n,type:o="install"}){return e.jsxs(H,{className:D,defaultValue:"npm",children:[e.jsxs(w,{className:B,children:[e.jsx(l,{value:"npm",children:"npm"}),e.jsx(l,{value:"pnpm",children:"pnpm"}),e.jsx(l,{value:"yarn",children:"yarn"})]}),e.jsxs(c,{className:p,value:"npm",children:[e.jsx("span",{className:m,children:"npm"})," ",o==="init"?"init":"install"," ",n]}),e.jsxs(c,{className:p,value:"pnpm",children:[e.jsx("span",{className:m,children:"pnpm"})," ",o==="init"?"create":"add"," ",n]}),e.jsxs(c,{className:p,value:"yarn",children:[e.jsx("span",{className:m,children:"yarn"})," ",o==="init"?"create":"add"," ",n]})]})}const $=Object.freeze(Object.defineProperty({__proto__:null,Button:I,Buttons:E,Description:r,InstallPackage:T,Logo:d,Root:a,Tagline:u},Symbol.toStringTag,{value:"Module"})),S={layout:"landing"};function g(n){const o={p:"p",...x(),...n.components};return $||s("HomePage",!1),r||s("HomePage.Description",!0),d||s("HomePage.Logo",!0),a||s("HomePage.Root",!0),u||s("HomePage.Tagline",!0),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsxs(a,{className:"portfolioHomeIntro",children:[e.jsx(d,{}),e.jsx(u,{children:"John Whitton"}),e.jsx(r,{children:"Engineer. Architect. Leader."})]}),`
`,e.jsx("a",{href:"https://portfolio.johnwhitton.com",target:"_blank",rel:"noopener noreferrer","aria-label":"View John Whitton portfolio slideshow",style:{width:"min(clamp(620px, 58vw, 1000px), calc(100vw - 32px))",margin:"24px auto 24px",marginLeft:"50%",display:"block",transform:"translateX(-50%)"},children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/images/john-portfolio-hero.webp",type:"image/webp"}),e.jsx("img",{src:"/images/john-portfolio-hero.png",alt:"John Whitton portfolio: Engineer. Architect. Leader.",style:{width:"100%",display:"block",borderRadius:"16px",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.35)"}})]})}),`
`,e.jsx(a,{className:"portfolioHomeFollowup",children:e.jsx(r,{children:e.jsx(o.p,{children:`I design, build, and scale systems across trading systems, financial
infrastructure, DeFi protocol engineering, distributed systems, and AI
engineering.`})})})]})}function X(n={}){const{wrapper:o}={...x(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(g,{...n})}):g(n)}function s(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default,S as frontmatter};
