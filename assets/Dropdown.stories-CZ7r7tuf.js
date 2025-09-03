import{r as l}from"./index-BwDkhjyp.js";import{r as He}from"./index-aS4jWOJ1.js";/* empty css                */import"./_commonjsHelpers-BosuxZz1.js";var Te={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=l,$e=Symbol.for("react.element"),Ke=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,Je=Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function Ie(n,e,t){var s,i={},c=null,f=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(f=e.ref);for(s in e)Ge.call(e,s)&&!Xe.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:$e,type:n,key:c,ref:f,props:i,_owner:Je.current}}j.Fragment=Ke;j.jsx=Ie;j.jsxs=Ie;Te.exports=j;var We=Te.exports;const r=We.jsx,p=We.jsxs;function Ae(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Ae(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function K(){for(var n,e,t=0,s="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Ae(n))&&(s&&(s+=" "),s+=e);return s}const Ye=(n,e,t=!0)=>{const s=e.toLowerCase().trim();return s?n.filter(i=>i.label.toLowerCase().includes(s)||t&&i.description&&i.description.toLowerCase().includes(s)):n},Qe=(n,e)=>{if(!e)return[];const t=Array.isArray(e)?e:[e];return n.filter(s=>t.includes(s.value))},Ze=(n,e,t)=>{const s=n.getBoundingClientRect(),i=window.innerHeight,c=window.innerWidth,f=e.offsetHeight||200,L=Math.max(s.width,200),g=i-s.bottom-t,q=s.top-t;let b=g<f&&q>g?s.top-f-t:s.bottom+t,w=s.left;return w+L>c-8&&(w=Math.max(8,c-L-8)),w<8&&(w=8),b+f>i-8&&(b=Math.max(8,i-f-8)),b<8&&(b=8),{top:Math.round(b),left:Math.round(w),width:s.width}},ne=(n,e,t)=>t==="down"?n<e-1?n+1:0:n>0?n-1:e-1,en=(n,e)=>{const t=n.offsetTop,s=t+n.offsetHeight,i=e.scrollTop,c=i+e.offsetHeight;t<i?e.scrollTop=t:s>c&&(e.scrollTop=s-e.offsetHeight)},nn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),rn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),tn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),an=()=>r("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),re=()=>p("svg",{className:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[r("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m=({options:n,value:e,onChange:t,placeholder:s="Select...",disabled:i=!1,multiple:c=!1,searchable:f=!1,searchPlaceholder:L="Search...",usePortal:g=!0,className:q,style:G,zIndex:b=1e3,loading:w=!1,loadingText:J="Loading..."})=>{const[u,X]=l.useState(!1),[Y,Q]=l.useState(""),[h,N]=l.useState(-1),[B,Re]=l.useState({top:0,left:0,width:0}),S=l.useRef(null),y=l.useRef(null),F=l.useRef(null),H=l.useRef([]),C=Qe(n,e),x=Ye(n,Y,!1),V=l.useCallback(()=>{if(S.current&&y.current&&u&&g){const a=Ze(S.current,y.current,4);Re(o=>Math.abs(o.top-a.top)>2||Math.abs(o.left-a.left)>2||Math.abs(o.width-a.width)>2?a:o)}},[u,g]);l.useEffect(()=>{if(u&&g){requestAnimationFrame(V);let a;const o=()=>{clearTimeout(a),a=setTimeout(V,16)};return window.addEventListener("scroll",o,!0),window.addEventListener("resize",V),()=>{clearTimeout(a),window.removeEventListener("scroll",o,!0),window.removeEventListener("resize",V)}}},[u,g,V]),l.useEffect(()=>{u&&f&&F.current&&F.current.focus()},[u,f]);const D=l.useCallback(()=>{i||(X(!0),N(-1))},[i]),v=l.useCallback(()=>{X(!1),Q(""),N(-1)},[]),Me=l.useCallback(()=>{u?v():D()},[u,D,v]),U=l.useCallback(a=>{if(!a.disabled)if(c){const o=Array.isArray(e)?e:e?[e]:[],d=o.includes(a.value)?o.filter(O=>O!==a.value):[...o,a.value];t(d)}else t(a.value),v()},[c,e,t,v]),je=l.useCallback((a,o)=>{if(o.stopPropagation(),c&&Array.isArray(e)){const d=e.filter(O=>O!==a);t(d)}},[c,e,t]),Z=l.useCallback(a=>{var o;switch(a.key){case"Enter":case" ":u?h>=0&&h<x.length&&(a.preventDefault(),U(x[h])):(a.preventDefault(),D());break;case"Escape":a.preventDefault(),v(),(o=S.current)==null||o.focus();break;case"ArrowDown":if(a.preventDefault(),!u)D();else{const d=ne(h,x.length,"down");N(d)}break;case"ArrowUp":if(a.preventDefault(),u){const d=ne(h,x.length,"up");N(d)}break;case"Tab":u&&v();break}},[u,h,x,D,v,U]);l.useEffect(()=>{h>=0&&H.current[h]&&y.current&&en(H.current[h],y.current)},[h]),l.useEffect(()=>{const a=o=>{u&&S.current&&y.current&&!S.current.contains(o.target)&&!y.current.contains(o.target)&&v()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[u,v]);const qe=()=>{if(w)return p("div",{className:"flex items-center space-x-2",children:[r(re,{}),r("span",{className:"text-gray-600",children:J})]});if(C.length===0)return r("span",{className:"text-gray-500",children:s});if(c&&C.length>1)return r("div",{className:"flex flex-wrap gap-1",children:C.map(o=>p("span",{className:"inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full",children:[o.icon&&r("span",{className:"mr-1",children:o.icon}),o.label,r("button",{type:"button",onClick:d=>je(o.value,d),className:"ml-1 p-0.5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none transition-colors",children:r(an,{})})]},o.value))});const a=C[0];return p("div",{className:"flex items-center",children:[a.icon&&r("span",{className:"mr-2",children:a.icon}),r("span",{children:a.label})]})},Be=(a,o)=>{const d=C.some($=>$.value===a.value);return p("div",{ref:$=>H.current[o]=$,className:K("px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-gray-900",{"bg-blue-50 text-blue-900":o===h&&!d,"bg-blue-100 text-blue-900":d&&!c,"bg-green-100 text-green-900":d&&c,"opacity-50 cursor-not-allowed":a.disabled}),onClick:()=>!a.disabled&&U(a),onMouseEnter:()=>N(o),children:[p("div",{className:"flex items-center flex-1",children:[a.icon&&r("span",{className:"mr-2",children:a.icon}),p("div",{children:[r("div",{className:"font-medium text-gray-900",children:a.label}),a.description&&!f&&r("div",{className:"text-sm text-gray-600",children:a.description})]})]}),c&&d&&r(tn,{})]},a.value)},Fe=()=>w?p("div",{className:"px-3 py-2 text-center text-gray-600",children:[r(re,{}),r("span",{className:"ml-2",children:J})]}):x.length===0?r("div",{className:"px-3 py-2 text-center text-gray-600",children:"No results found"}):x.map((a,o)=>Be(a,o)),ee=p("div",{ref:y,className:"absolute bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in text-gray-900",style:g?{top:B.top,left:B.left,minWidth:B.width,zIndex:b,maxWidth:"320px"}:{top:"100%",left:0,right:0,zIndex:b,maxWidth:"320px",marginTop:"4px"},children:[f&&r("div",{className:"p-2 border-b border-gray-200",children:p("div",{className:"relative",children:[r("div",{className:"absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400",children:r(rn,{})}),r("input",{ref:F,type:"text",className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none text-gray-900 placeholder-gray-500",placeholder:L,value:Y,onChange:a=>Q(a.target.value),onKeyDown:Z})]})}),r("div",{className:"max-h-48 overflow-y-auto dropdown-scrollbar",children:Fe()})]});return p("div",{className:K("relative",q),style:G,children:[r("button",{ref:S,type:"button",className:K("w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none transition-colors",{"cursor-not-allowed opacity-50":i}),onClick:Me,onKeyDown:Z,disabled:i,"aria-expanded":u,"aria-haspopup":"listbox",children:p("div",{className:"flex items-center justify-between",children:[r("div",{className:"flex-1 min-w-0",children:qe()}),r(nn,{})]})}),u&&(g?He.createPortal(ee,document.body):ee)]})};try{m.displayName="Dropdown",m.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[] | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number | (string | number)[]) => void"}},placeholder:{defaultValue:{value:"Select..."},description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean | undefined"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"",name:"searchPlaceholder",required:!1,type:{name:"string | undefined"}},usePortal:{defaultValue:{value:"true"},description:"",name:"usePortal",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},zIndex:{defaultValue:{value:"1000"},description:"",name:"zIndex",required:!1,type:{name:"number | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string | undefined"}}}}}catch{}const k=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],sn=[{value:"home",label:"Home",icon:r("span",{children:"🏠"})},{value:"profile",label:"Profile",icon:r("span",{children:"👤"})},{value:"settings",label:"Settings",icon:r("span",{children:"⚙️"})},{value:"logout",label:"Logout",icon:r("span",{children:"🚪"})}],on=[{value:"basic",label:"Basic Plan",description:"Perfect for individuals"},{value:"pro",label:"Pro Plan",description:"Great for small teams"},{value:"enterprise",label:"Enterprise Plan",description:"For large organizations"}],ze=Array.from({length:100},(n,e)=>({value:`option-${e}`,label:`Option ${e+1}`,description:`Description for option ${e+1}`})),pn={title:"Components/Dropdown",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{options:{control:!1},value:{control:!1},onChange:{control:!1},multiple:{control:"boolean"},searchable:{control:"boolean"},disabled:{control:"boolean"},usePortal:{control:"boolean"},loading:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"},loadingText:{control:"text"},zIndex:{control:"number"}}},P={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Select a fruit..."}},_={render:n=>{const[e,t]=l.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t,multiple:!0})})},args:{options:k,placeholder:"Select fruits...",multiple:!0}},E={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:ze,placeholder:"Search for an option...",searchable:!0,searchPlaceholder:"Type to search..."}},T={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:sn,placeholder:"Select an action..."}},I={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:on,placeholder:"Choose a plan..."}},W={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:[],placeholder:"Loading...",loading:!0,loadingText:"Loading options..."}},A={render:n=>{const[e,t]=l.useState("apple");return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Select a fruit...",disabled:!0}},z={render:n=>{const[e,t]=l.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Custom styled dropdown...",className:"border-purple-500 rounded-xl bg-purple-50"}},R={render:n=>{const[e,t]=l.useState(void 0);return p("div",{className:"relative",children:[r("div",{className:"absolute inset-0 bg-blue-500 opacity-20 z-50 pointer-events-none",children:r("div",{className:"p-4 text-blue-900 font-semibold",children:"High z-index element (z-50)"})}),p("div",{className:"w-full relative z-10 bg-white p-4 rounded border",children:[r("h3",{className:"mb-2 font-semibold",children:"Dropdown with Portal"}),r(m,{...n,value:e,onChange:t})]})]})},args:{options:k,placeholder:"Select with portal...",usePortal:!0,zIndex:9999}},M={render:n=>{const[e,t]=l.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:ze.map((n,e)=>({...n,icon:e%3===0?"🎯":e%3===1?"⭐":"🚀"})),placeholder:"All features enabled...",multiple:!0,searchable:!0,searchPlaceholder:"Search options...",usePortal:!0,zIndex:1e3}};var te,ae,se;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...'
  }
}`,...(se=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[]>([]);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} multiple={true} />
      </div>;
  },
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    multiple: true
  }
}`,...(ie=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: longOptionsList,
    placeholder: 'Search for an option...',
    searchable: true,
    searchPlaceholder: 'Type to search...'
  }
}`,...(de=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action...'
  }
}`,...(fe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: optionsWithDescriptions,
    placeholder: 'Choose a plan...'
  }
}`,...(ve=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,we,ye;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: [],
    placeholder: 'Loading...',
    loading: true,
    loadingText: 'Loading options...'
  }
}`,...(ye=(we=W.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var xe,Se,Ne;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>('apple');
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
    disabled: true
  }
}`,...(Ne=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ce,Ve,De;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: basicOptions,
    placeholder: 'Custom styled dropdown...',
    className: 'border-purple-500 rounded-xl bg-purple-50'
  }
}`,...(De=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var ke,Le,Oe;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[] | undefined>(undefined);
    return <div className='relative'>
        <div className='absolute inset-0 bg-blue-500 opacity-20 z-50 pointer-events-none'>
          <div className='p-4 text-blue-900 font-semibold'>
            High z-index element (z-50)
          </div>
        </div>
        <div className='w-full relative z-10 bg-white p-4 rounded border'>
          <h3 className='mb-2 font-semibold'>Dropdown with Portal</h3>
          <Dropdown {...args} value={value} onChange={setValue} />
        </div>
      </div>;
  },
  args: {
    options: basicOptions,
    placeholder: 'Select with portal...',
    usePortal: true,
    zIndex: 9999
  }
}`,...(Oe=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Pe,_e,Ee;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[]>([]);
    return <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    options: longOptionsList.map((opt, index) => ({
      ...opt,
      icon: index % 3 === 0 ? '🎯' : index % 3 === 1 ? '⭐' : '🚀'
    })),
    placeholder: 'All features enabled...',
    multiple: true,
    searchable: true,
    searchPlaceholder: 'Search options...',
    usePortal: true,
    zIndex: 1000
  }
}`,...(Ee=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};const mn=["Basic","MultipleSelection","Searchable","WithIcons","WithDescriptions","Loading","Disabled","CustomStyling","WithPortal","AllFeatures"];export{M as AllFeatures,P as Basic,z as CustomStyling,A as Disabled,W as Loading,_ as MultipleSelection,E as Searchable,I as WithDescriptions,T as WithIcons,R as WithPortal,mn as __namedExportsOrder,pn as default};
