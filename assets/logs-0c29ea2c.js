import{r as i,j as a,h as o,c as r,R as d}from"./Home-b0c5077f.js";import"./ProductModal-852b5cc5.js";function v({downloadCount:t,shareCount:n}){const[s,l]=i.useState("logs"),e=c=>{l(c)};return console.log(t),console.log(n),a.jsxs(a.Fragment,{children:[a.jsx("nav",{class:"nav navbar navbar-expand-lg navbar-light bg-light py-0",children:a.jsxs("div",{class:"nav container-fluid",children:[a.jsxs("a",{class:"navbar-brand",href:"https://www.tysonfoods.com/",target:"_blank",children:[" ",a.jsx("img",{src:o,class:"logo img-fluid rounded-top",alt:"tyson logo"})]}),a.jsx("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{class:"navbar-toggler-icon"})}),a.jsx("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:a.jsxs("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[a.jsx("li",{class:"nav-item",children:a.jsx("a",{className:`nav-link mt-2 mx-5 ${s==="landscape"?"active":""}`,onClick:()=>e("landscape"),"aria-current":"page",href:"/landscape",children:"SAP Landscape"})}),a.jsx("li",{class:"nav-item",children:a.jsx("a",{className:`nav-link mt-2 mx-5 ${s==="statistics"?"active":""}`,onClick:()=>e("statistics"),href:"../statistics/index.html",children:"Statistics"})}),a.jsx("li",{class:"nav-item",children:a.jsx("a",{className:`nav-link mt-2 mx-5 ${s==="logs"?"active":""}`,onClick:()=>e("logs"),href:"../logs/index.html",children:"Logs"})})]})})]})}),a.jsxs("h1",{children:["Download Count: ",t]}),a.jsxs("h1",{children:["Download Share Count: ",n]})]})}r.createRoot(document.getElementById("root")).render(a.jsx(d.StrictMode,{children:a.jsx(v,{})}));
