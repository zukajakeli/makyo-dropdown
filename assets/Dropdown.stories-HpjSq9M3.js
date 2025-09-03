import{r as o}from"./index-BwDkhjyp.js";import{r as He}from"./index-aS4jWOJ1.js";/* empty css                */import"./_commonjsHelpers-BosuxZz1.js";var Ee={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=o,Ke=Symbol.for("react.element"),Ue=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,Je=$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function Ie(n,e,t){var a,l={},c=null,h=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(h=e.ref);for(a in e)Ge.call(e,a)&&!Xe.hasOwnProperty(a)&&(l[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)l[a]===void 0&&(l[a]=e[a]);return{$$typeof:Ke,type:n,key:c,ref:h,props:l,_owner:Je.current}}j.Fragment=Ue;j.jsx=Ie;j.jsxs=Ie;Ee.exports=j;var ze=Ee.exports;const r=ze.jsx,p=ze.jsxs;function Re(n){var e,t,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(e=0;e<l;e++)n[e]&&(t=Re(n[e]))&&(a&&(a+=" "),a+=t)}else for(t in n)n[t]&&(a&&(a+=" "),a+=t);return a}function K(){for(var n,e,t=0,a="",l=arguments.length;t<l;t++)(n=arguments[t])&&(e=Re(n))&&(a&&(a+=" "),a+=e);return a}const Ye=(n,e)=>{const t=e.toLowerCase().trim();return t?n.filter(a=>a.label.toLowerCase().includes(t)||a.description&&a.description.toLowerCase().includes(t)):n},Qe=(n,e)=>{if(!e)return[];const t=Array.isArray(e)?e:[e];return n.filter(a=>t.includes(a.value))},Ze=(n,e,t)=>{const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=window.innerHeight,h=window.innerWidth,k=c-a.bottom,B=a.top;let v=k>=l.height+t||k>=B?a.bottom+t:a.top-l.height-t,b=a.left;return b+l.width>h&&(b=h-l.width-8),b<8&&(b=8),v+l.height>c&&(v=c-l.height-8),v<8&&(v=8),{top:Math.max(0,v),left:Math.max(0,b),width:a.width}},ee=(n,e,t)=>t==="down"?n<e-1?n+1:0:n>0?n-1:e-1,en=(n,e)=>{const t=n.offsetTop,a=t+n.offsetHeight,l=e.scrollTop,c=l+e.offsetHeight;t<l?e.scrollTop=t:a>c&&(e.scrollTop=a-e.offsetHeight)},nn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),rn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),tn=()=>r("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),an=()=>r("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),ne=()=>p("svg",{className:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[r("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m=({options:n,value:e,onChange:t,placeholder:a="Select...",disabled:l=!1,multiple:c=!1,searchable:h=!1,searchPlaceholder:k="Search...",usePortal:B=!0,className:v,style:b,zIndex:Te=1e3,loading:U=!1,loadingText:G="Loading..."})=>{const[u,J]=o.useState(!1),[X,Y]=o.useState(""),[f,N]=o.useState(-1),[q,We]=o.useState({top:0,left:0,width:0}),x=o.useRef(null),w=o.useRef(null),M=o.useRef(null),F=o.useRef([]),C=Qe(n,e),y=Ye(n,X),S=o.useCallback(()=>{if(x.current&&w.current&&u){const s=Ze(x.current,w.current,4);We(s)}},[u]);o.useEffect(()=>{if(u)return S(),window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[u,S]),o.useEffect(()=>{u&&h&&M.current&&M.current.focus()},[u,h]);const V=o.useCallback(()=>{l||(J(!0),N(-1))},[l]),g=o.useCallback(()=>{J(!1),Y(""),N(-1)},[]),je=o.useCallback(()=>{u?g():V()},[u,V,g]),H=o.useCallback(s=>{if(!s.disabled)if(c){const i=Array.isArray(e)?e:e?[e]:[],d=i.includes(s.value)?i.filter(P=>P!==s.value):[...i,s.value];t(d)}else t(s.value),g()},[c,e,t,g]),Be=o.useCallback((s,i)=>{if(i.stopPropagation(),c&&Array.isArray(e)){const d=e.filter(P=>P!==s);t(d)}},[c,e,t]),Q=o.useCallback(s=>{var i;switch(s.key){case"Enter":case" ":u?f>=0&&f<y.length&&(s.preventDefault(),H(y[f])):(s.preventDefault(),V());break;case"Escape":s.preventDefault(),g(),(i=x.current)==null||i.focus();break;case"ArrowDown":if(s.preventDefault(),!u)V();else{const d=ee(f,y.length,"down");N(d)}break;case"ArrowUp":if(s.preventDefault(),u){const d=ee(f,y.length,"up");N(d)}break;case"Tab":u&&g();break}},[u,f,y,V,g,H]);o.useEffect(()=>{f>=0&&F.current[f]&&w.current&&en(F.current[f],w.current)},[f]),o.useEffect(()=>{const s=i=>{u&&x.current&&w.current&&!x.current.contains(i.target)&&!w.current.contains(i.target)&&g()};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[u,g]);const qe=()=>{if(U)return p("div",{className:"flex items-center space-x-2",children:[r(ne,{}),r("span",{className:"text-gray-600",children:G})]});if(C.length===0)return r("span",{className:"text-gray-500",children:a});if(c&&C.length>1)return r("div",{className:"flex flex-wrap gap-1",children:C.map(i=>p("span",{className:"inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full",children:[i.icon&&r("span",{className:"mr-1",children:i.icon}),i.label,r("button",{type:"button",onClick:d=>Be(i.value,d),className:"ml-1 p-0.5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none transition-colors",children:r(an,{})})]},i.value))});const s=C[0];return p("div",{className:"flex items-center",children:[s.icon&&r("span",{className:"mr-2",children:s.icon}),r("span",{children:s.label})]})},Me=(s,i)=>{const d=C.some($=>$.value===s.value);return p("div",{ref:$=>F.current[i]=$,className:K("px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors",{"bg-blue-50":i===f&&!d,"bg-blue-100":d&&!c,"bg-green-100":d&&c,"opacity-50 cursor-not-allowed":s.disabled}),onClick:()=>!s.disabled&&H(s),onMouseEnter:()=>N(i),children:[p("div",{className:"flex items-center flex-1",children:[s.icon&&r("span",{className:"mr-2",children:s.icon}),p("div",{children:[r("div",{className:"font-medium",children:s.label}),s.description&&r("div",{className:"text-sm text-gray-500",children:s.description})]})]}),c&&d&&r(tn,{})]},s.value)},Fe=()=>U?p("div",{className:"px-3 py-2 text-center text-gray-500",children:[r(ne,{}),r("span",{className:"ml-2",children:G})]}):y.length===0?r("div",{className:"px-3 py-2 text-center text-gray-500",children:"No results found"}):y.map((s,i)=>Me(s,i)),Z=p("div",{ref:w,className:"absolute bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in",style:{top:q.top,left:q.left,minWidth:q.width,zIndex:Te},children:[h&&r("div",{className:"p-2 border-b border-gray-200",children:p("div",{className:"relative",children:[r("div",{className:"absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none",children:r(rn,{})}),r("input",{ref:M,type:"text",className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none",placeholder:k,value:X,onChange:s=>Y(s.target.value),onKeyDown:Q})]})}),r("div",{className:"max-h-48 overflow-y-auto dropdown-scrollbar",children:Fe()})]});return p("div",{className:K("relative",v),style:b,children:[r("button",{ref:x,type:"button",className:K("w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none transition-colors",{"cursor-not-allowed opacity-50":l}),onClick:je,onKeyDown:Q,disabled:l,"aria-expanded":u,"aria-haspopup":"listbox",children:p("div",{className:"flex items-center justify-between",children:[r("div",{className:"flex-1 min-w-0",children:qe()}),r(nn,{})]})}),u&&(B?He.createPortal(Z,document.body):Z)]})};try{m.displayName="Dropdown",m.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[] | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number | (string | number)[]) => void"}},placeholder:{defaultValue:{value:"Select..."},description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean | undefined"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"",name:"searchPlaceholder",required:!1,type:{name:"string | undefined"}},usePortal:{defaultValue:{value:"true"},description:"",name:"usePortal",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},zIndex:{defaultValue:{value:"1000"},description:"",name:"zIndex",required:!1,type:{name:"number | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string | undefined"}}}}}catch{}const D=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],sn=[{value:"home",label:"Home",icon:r("span",{children:"🏠"})},{value:"profile",label:"Profile",icon:r("span",{children:"👤"})},{value:"settings",label:"Settings",icon:r("span",{children:"⚙️"})},{value:"logout",label:"Logout",icon:r("span",{children:"🚪"})}],on=[{value:"basic",label:"Basic Plan",description:"Perfect for individuals"},{value:"pro",label:"Pro Plan",description:"Great for small teams"},{value:"enterprise",label:"Enterprise Plan",description:"For large organizations"}],Ae=Array.from({length:100},(n,e)=>({value:`option-${e}`,label:`Option ${e+1}`,description:`Description for option ${e+1}`})),pn={title:"Components/Dropdown",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{options:{control:!1},value:{control:!1},onChange:{control:!1},multiple:{control:"boolean"},searchable:{control:"boolean"},disabled:{control:"boolean"},usePortal:{control:"boolean"},loading:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"},loadingText:{control:"text"},zIndex:{control:"number"}}},L={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:D,placeholder:"Select a fruit..."}},O={render:n=>{const[e,t]=o.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t,multiple:!0})})},args:{options:D,placeholder:"Select fruits...",multiple:!0}},_={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:Ae,placeholder:"Search for an option...",searchable:!0,searchPlaceholder:"Type to search..."}},E={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:sn,placeholder:"Select an action..."}},I={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:on,placeholder:"Choose a plan..."}},z={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:[],placeholder:"Loading...",loading:!0,loadingText:"Loading options..."}},R={render:n=>{const[e,t]=o.useState("apple");return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:D,placeholder:"Select a fruit...",disabled:!0}},A={render:n=>{const[e,t]=o.useState(void 0);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:D,placeholder:"Custom styled dropdown...",className:"border-purple-500 rounded-xl bg-purple-50"}},T={render:n=>{const[e,t]=o.useState(void 0);return p("div",{className:"relative",children:[r("div",{className:"absolute inset-0 bg-blue-500 opacity-20 z-50 pointer-events-none",children:r("div",{className:"p-4 text-blue-900 font-semibold",children:"High z-index element (z-50)"})}),p("div",{className:"w-full relative z-10 bg-white p-4 rounded border",children:[r("h3",{className:"mb-2 font-semibold",children:"Dropdown with Portal"}),r(m,{...n,value:e,onChange:t})]})]})},args:{options:D,placeholder:"Select with portal...",usePortal:!0,zIndex:9999}},W={render:n=>{const[e,t]=o.useState([]);return r("div",{className:"w-full",children:r(m,{...n,value:e,onChange:t})})},args:{options:Ae.map((n,e)=>({...n,icon:e%3===0?"🎯":e%3===1?"⭐":"🚀"})),placeholder:"All features enabled...",multiple:!0,searchable:!0,searchPlaceholder:"Search options...",usePortal:!0,zIndex:1e3}};var re,te,ae;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,le;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,ue;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,he,ge;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,be,we;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(be=z.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ye,xe,Se;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Se=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ne,Ce,Ve;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ve=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var De,ke,Pe;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Pe=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Le,Oe,_e;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(_e=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};const mn=["Basic","MultipleSelection","Searchable","WithIcons","WithDescriptions","Loading","Disabled","CustomStyling","WithPortal","AllFeatures"];export{W as AllFeatures,L as Basic,A as CustomStyling,R as Disabled,z as Loading,O as MultipleSelection,_ as Searchable,I as WithDescriptions,E as WithIcons,T as WithPortal,mn as __namedExportsOrder,pn as default};
