import{r as o}from"./index-BwDkhjyp.js";import{r as He}from"./index-aS4jWOJ1.js";/* empty css                */import"./_commonjsHelpers-BosuxZz1.js";var Ie={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=o,$e=Symbol.for("react.element"),Ke=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,Je=Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function Ae(n,e,t){var a,l={},c=null,f=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(f=e.ref);for(a in e)Ge.call(e,a)&&!Xe.hasOwnProperty(a)&&(l[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)l[a]===void 0&&(l[a]=e[a]);return{$$typeof:$e,type:n,key:c,ref:f,props:l,_owner:Je.current}}B.Fragment=Ke;B.jsx=Ae;B.jsxs=Ae;Ie.exports=B;var We=Ie.exports;const r=We.jsx,p=We.jsxs;function Te(n){var e,t,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(e=0;e<l;e++)n[e]&&(t=Te(n[e]))&&(a&&(a+=" "),a+=t)}else for(t in n)n[t]&&(a&&(a+=" "),a+=t);return a}function P(){for(var n,e,t=0,a="",l=arguments.length;t<l;t++)(n=arguments[t])&&(e=Te(n))&&(a&&(a+=" "),a+=e);return a}const Ye=(n,e,t=!0)=>{const a=e.toLowerCase().trim();return a?n.filter(l=>l.label.toLowerCase().includes(a)||t&&l.description&&l.description.toLowerCase().includes(a)):n},Qe=(n,e)=>{if(!e)return[];const t=Array.isArray(e)?e:[e];return n.filter(a=>t.includes(a.value))},Ze=(n,e,t)=>{const a=n.getBoundingClientRect(),l=window.innerHeight,c=window.innerWidth,f=e.offsetHeight||200,L=Math.max(a.width,200),g=l-a.bottom-t,M=a.top-t;let b=g<f&&M>g?a.top-f-t:a.bottom+t,w=a.left;return w+L>c-8&&(w=Math.max(8,c-L-8)),w<8&&(w=8),b+f>l-8&&(b=Math.max(8,l-f-8)),b<8&&(b=8),{top:Math.round(b),left:Math.round(w),width:a.width}},ne=(n,e,t)=>t==="down"?n<e-1?n+1:0:n>0?n-1:e-1,en=(n,e)=>{const t=n.offsetTop,a=t+n.offsetHeight,l=e.scrollTop,c=l+e.offsetHeight;t<l?e.scrollTop=t:a>c&&(e.scrollTop=a-e.offsetHeight)},nn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),rn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),tn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),an=()=>r("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),re=()=>p("svg",{className:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[r("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m=({options:n,value:e,onChange:t,placeholder:a="Select...",disabled:l=!1,multiple:c=!1,searchable:f=!1,searchPlaceholder:L="Search...",usePortal:g=!0,className:M,style:G,zIndex:b=1e3,loading:w=!1,loadingText:J="Loading..."})=>{const[u,X]=o.useState(!1),[Y,Q]=o.useState(""),[h,N]=o.useState(-1),[F,Re]=o.useState({top:0,left:0,width:0}),S=o.useRef(null),y=o.useRef(null),H=o.useRef(null),U=o.useRef([]),C=Qe(n,e),x=Ye(n,Y,!1),V=o.useCallback(()=>{if(S.current&&y.current&&u&&g){const s=Ze(S.current,y.current,4);Re(s)}},[u,g]);o.useEffect(()=>{if(u&&g){requestAnimationFrame(V);const s=()=>{requestAnimationFrame(V)};return window.addEventListener("scroll",s,!0),window.addEventListener("resize",V),()=>{window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",V)}}},[u,g,V]),o.useEffect(()=>{u&&f&&H.current&&H.current.focus()},[u,f]);const D=o.useCallback(()=>{l||(X(!0),N(-1))},[l]),v=o.useCallback(()=>{X(!1),Q(""),N(-1)},[]),qe=o.useCallback(()=>{u?v():D()},[u,D,v]),$=o.useCallback(s=>{if(!s.disabled)if(c){const i=Array.isArray(e)?e:e?[e]:[],d=i.includes(s.value)?i.filter(O=>O!==s.value):[...i,s.value];t(d)}else t(s.value),v()},[c,e,t,v]),je=o.useCallback((s,i)=>{if(i.stopPropagation(),c&&Array.isArray(e)){const d=e.filter(O=>O!==s);t(d)}},[c,e,t]),Z=o.useCallback(s=>{var i;switch(s.key){case"Enter":case" ":u?h>=0&&h<x.length&&(s.preventDefault(),$(x[h])):(s.preventDefault(),D());break;case"Escape":s.preventDefault(),v(),(i=S.current)==null||i.focus();break;case"ArrowDown":if(s.preventDefault(),!u)D();else{const d=ne(h,x.length,"down");N(d)}break;case"ArrowUp":if(s.preventDefault(),u){const d=ne(h,x.length,"up");N(d)}break;case"Tab":u&&v();break}},[u,h,x,D,v,$]);o.useEffect(()=>{h>=0&&U.current[h]&&y.current&&en(U.current[h],y.current)},[h]),o.useEffect(()=>{const s=i=>{u&&S.current&&y.current&&!S.current.contains(i.target)&&!y.current.contains(i.target)&&v()};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[u,v]);const Be=()=>{if(w)return p("div",{className:"flex items-center space-x-2",children:[r(re,{}),r("span",{className:"text-gray-600",children:J})]});if(C.length===0)return r("span",{className:"text-gray-500",children:a});if(c&&C.length>1)return r("div",{className:"flex flex-wrap gap-1",children:C.map(i=>p("span",{className:"inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full",children:[i.icon&&r("span",{className:"mr-1",children:i.icon}),i.label,r("button",{type:"button",onClick:d=>je(i.value,d),className:"ml-1 p-0.5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none transition-colors",children:r(an,{})})]},i.value))});const s=C[0];return p("div",{className:"flex items-center",children:[s.icon&&r("span",{className:"mr-2",children:s.icon}),r("span",{children:s.label})]})},Me=(s,i)=>{const d=C.some(K=>K.value===s.value);return p("div",{ref:K=>U.current[i]=K,className:P("px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-gray-900",{"bg-blue-50 text-blue-900":i===h&&!d,"bg-blue-100 text-blue-900":d&&!c,"bg-green-100 text-green-900":d&&c,"opacity-50 cursor-not-allowed":s.disabled}),onClick:()=>!s.disabled&&$(s),onMouseEnter:()=>N(i),children:[p("div",{className:"flex items-center flex-1",children:[s.icon&&r("span",{className:"mr-2",children:s.icon}),p("div",{children:[r("div",{className:"font-medium text-gray-900",children:s.label}),s.description&&!f&&r("div",{className:"text-sm text-gray-600",children:s.description})]})]}),c&&d&&r(tn,{})]},s.value)},Fe=()=>w?p("div",{className:"px-3 py-2 text-center text-gray-600",children:[r(re,{}),r("span",{className:"ml-2",children:J})]}):x.length===0?r("div",{className:"px-3 py-2 text-center text-gray-600",children:"No results found"}):x.map((s,i)=>Me(s,i)),ee=p("div",{ref:y,className:P("bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in text-gray-900",g?"fixed":"absolute"),style:g?{top:F.top,left:F.left,minWidth:F.width,zIndex:b,maxWidth:"320px"}:{top:"100%",left:0,right:0,zIndex:b,maxWidth:"320px",marginTop:"4px"},children:[f&&r("div",{className:"p-2 border-b border-gray-200",children:p("div",{className:"relative",children:[r("div",{className:"absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400",children:r(rn,{})}),r("input",{ref:H,type:"text",className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none text-gray-900 placeholder-gray-500",placeholder:L,value:Y,onChange:s=>Q(s.target.value),onKeyDown:Z})]})}),r("div",{className:"max-h-48 overflow-y-auto dropdown-scrollbar",children:Fe()})]});return p("div",{className:P("relative",M),style:G,children:[r("button",{ref:S,type:"button",className:P("w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none transition-colors",{"cursor-not-allowed opacity-50":l}),onClick:qe,onKeyDown:Z,disabled:l,"aria-expanded":u,"aria-haspopup":"listbox",children:p("div",{className:"flex items-center justify-between",children:[r("div",{className:"flex-1 min-w-0",children:Be()}),r(nn,{})]})}),u&&(g?He.createPortal(ee,document.body):ee)]})};try{m.displayName="Dropdown",m.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[] | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number | (string | number)[]) => void"}},placeholder:{defaultValue:{value:"Select..."},description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean | undefined"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"",name:"searchPlaceholder",required:!1,type:{name:"string | undefined"}},usePortal:{defaultValue:{value:"true"},description:"",name:"usePortal",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},zIndex:{defaultValue:{value:"1000"},description:"",name:"zIndex",required:!1,type:{name:"number | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string | undefined"}}}}}catch{}const k=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],sn=[{value:"home",label:"Home",icon:r("span",{children:"🏠"})},{value:"profile",label:"Profile",icon:r("span",{children:"👤"})},{value:"settings",label:"Settings",icon:r("span",{children:"⚙️"})},{value:"logout",label:"Logout",icon:r("span",{children:"🚪"})}],on=[{value:"basic",label:"Basic Plan",description:"Perfect for individuals"},{value:"pro",label:"Pro Plan",description:"Great for small teams"},{value:"enterprise",label:"Enterprise Plan",description:"For large organizations"}],ze=Array.from({length:100},(n,e)=>({value:`option-${e}`,label:`Option ${e+1}`,description:`Description for option ${e+1}`})),pn={title:"Components/Dropdown",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{options:{control:!1},value:{control:!1},onChange:{control:!1},multiple:{control:"boolean"},searchable:{control:"boolean"},disabled:{control:"boolean"},usePortal:{control:"boolean"},loading:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"},loadingText:{control:"text"},zIndex:{control:"number"}}},_={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Select a fruit..."}},E={render:n=>{const[e,t]=o.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t,multiple:!0})})},args:{options:k,placeholder:"Select fruits...",multiple:!0}},I={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:ze,placeholder:"Search for an option...",searchable:!0,searchPlaceholder:"Type to search..."}},A={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:sn,placeholder:"Select an action..."}},W={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:on,placeholder:"Choose a plan..."}},T={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:[],placeholder:"Loading...",loading:!0,loadingText:"Loading options..."}},z={render:n=>{const[e,t]=o.useState("apple");return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Select a fruit...",disabled:!0}},R={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:k,placeholder:"Custom styled dropdown...",className:"border-purple-500 rounded-xl bg-purple-50"}},q={render:n=>{const[e,t]=o.useState(void 0);return p("div",{className:"relative",children:[r("div",{className:"absolute inset-0 bg-blue-500 opacity-20 z-50 pointer-events-none",children:r("div",{className:"p-4 text-blue-900 font-semibold",children:"High z-index element (z-50)"})}),p("div",{className:"w-full relative z-10 bg-white p-4 rounded border",children:[r("h3",{className:"mb-2 font-semibold",children:"Dropdown with Portal"}),r(m,{...n,value:e,onChange:t})]})]})},args:{options:k,placeholder:"Select with portal...",usePortal:!0,zIndex:9999}},j={render:n=>{const[e,t]=o.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:ze.map((n,e)=>({...n,icon:e%3===0?"🎯":e%3===1?"⭐":"🚀"})),placeholder:"All features enabled...",multiple:!0,searchable:!0,searchPlaceholder:"Search options...",usePortal:!0,zIndex:1e3}};var te,ae,se;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,ie;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,we,ye;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var xe,Se,Ne;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ne=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ce,Ve,De;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(De=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var ke,Le,Oe;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Oe=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Pe,_e,Ee;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ee=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};const mn=["Basic","MultipleSelection","Searchable","WithIcons","WithDescriptions","Loading","Disabled","CustomStyling","WithPortal","AllFeatures"];export{j as AllFeatures,_ as Basic,R as CustomStyling,z as Disabled,T as Loading,E as MultipleSelection,I as Searchable,W as WithDescriptions,A as WithIcons,q as WithPortal,mn as __namedExportsOrder,pn as default};
