"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[264],{3700:(e,r,o)=>{o.d(r,{F:()=>n,U:()=>c});var t=o(6540);const a=t.createContext(void 0),d={},n=a.Provider,c=()=>t.useContext(a)?t.useContext(a):d},4401:(e,r,o)=>{o.d(r,{q:()=>A});var t=o(6540),a=o.t(t,2),d=o(5900),n=o(2222),c=o(206),l=o(6004),s=o(7073);const u=t.createContext(void 0),i=u.Provider;var g=o(29),h=o(8909),b=o(2999),f=o(8631),B=o(3700);var k=o(7962),p=o(4607),N=o(6257),S=o(2416),v=o(5532),O=o(3808),m=o(3079);var F=o(8413),y=o(677);const P="fui-FluentProvider",H=(0,F.X)({root:{sj55zd:"f19n0e5",De3pzq:"fxugw4r",fsow6f:["f1o700av","fes3tcz"],Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"}},{d:[".f19n0e5{color:var(--colorNeutralForeground1);}",".fxugw4r{background-color:var(--colorNeutralBackground1);}",".f1o700av{text-align:left;}",".fes3tcz{text-align:right;}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".f1i3iumi{line-height:var(--lineHeightBase300);}"]}),I=a.useInsertionEffect?a.useInsertionEffect:O.E,$=e=>{const{targetDocument:r,theme:o,rendererAttributes:a}=e,d=t.useRef(),n=(0,m.Bi)(P),c=a,l=t.useMemo((()=>function(e,r){if(r)return`${e} { ${Object.keys(r).reduce(((e,o)=>`${e}--${o}: ${r[o]}; `),"")} }`;return`${e} {}`}(`.${n}`,o)),[o,n]);return function(e,r){t.useState((()=>{if(!e)return;const o=e.getElementById(r);o&&e.head.append(o)}))}(r,n),I((()=>{const e=null==r?void 0:r.getElementById(n);return e?d.current=e:(d.current=((e,r)=>{if(!e)return;const o=e.createElement("style");return Object.keys(r).forEach((e=>{o.setAttribute(e,r[e])})),e.head.appendChild(o),o})(r,{...c,id:n}),d.current&&((e,r)=>{const o=e.sheet;o&&(o.cssRules.length>0&&o.deleteRule(0),o.insertRule(r,0))})(d.current,l)),()=>{var e;null===(e=d.current)||void 0===e||e.remove()}}),[n,r,l,c]),{styleTagId:n,rule:l}};const x={},w=(e,r)=>{const o=(0,s.Y)(),a=t.useContext(u),d=(0,f.Pv)(),n=t.useContext(h.k7)||x,{applyStylesToPortals:c=!0,customStyleHooks_unstable:l,dir:i=o.dir,targetDocument:g=o.targetDocument,theme:b,overrides_unstable:B={}}=e,O=L(a,b),m=L(d,B),F=L(n,l),y=(0,k.J)();var P;const{styleTagId:H,rule:I}=$({theme:O,targetDocument:g,rendererAttributes:null!==(P=y.styleElementAttributes)&&void 0!==P?P:{}});return{applyStylesToPortals:c,customStyleHooks_unstable:F,dir:i,targetDocument:g,theme:O,overrides_unstable:m,themeClassName:H,components:{root:"div"},root:N.Gk((0,S.g)("div",{...e,dir:i,ref:(0,v.a)(r,(0,p.Y)({targetDocument:g}))}),{elementType:"div"}),serverStyleProps:{cssRule:I,attributes:{...y.styleElementAttributes,id:H}}}};function L(e,r){return e&&r?{...e,...r}:e||r}const A=t.forwardRef(((e,r)=>{const o=w(e,r);(e=>{const r=(0,k.J)(),o=H({dir:e.dir,renderer:r});e.root.className=(0,y.z)(P,e.themeClassName,o.root,e.root.className)})(o);const a=function(e){const{applyStylesToPortals:r,customStyleHooks_unstable:o,dir:a,root:d,targetDocument:n,theme:c,themeClassName:l,overrides_unstable:s}=e,u=t.useMemo((()=>({dir:a,targetDocument:n})),[a,n]),[i]=t.useState((()=>({}))),g=t.useMemo((()=>({textDirection:a})),[a]);return{customStyleHooks_unstable:o,overrides_unstable:s,provider:u,textDirection:a,iconDirection:g,tooltip:i,theme:c,themeClassName:r?d.className:l}}(o);return((e,r)=>((0,n.C)(e),(0,d.Y)(s.K,{value:r.provider,children:(0,d.Y)(i,{value:r.theme,children:(0,d.Y)(g.I,{value:r.themeClassName,children:(0,d.Y)(h.gH,{value:r.customStyleHooks_unstable,children:(0,d.Y)(b.J,{value:r.tooltip,children:(0,d.Y)(l.e,{dir:r.textDirection,children:(0,d.Y)(B.F,{value:r.iconDirection,children:(0,d.Y)(f.Nv,{value:r.overrides_unstable,children:(0,d.FD)(e.root,{children:[(0,c.S)()?null:(0,d.Y)("style",{dangerouslySetInnerHTML:{__html:e.serverStyleProps.cssRule},...e.serverStyleProps.attributes}),e.root.children]})})})})})})})})})))(o,a)}));A.displayName="FluentProvider"},3362:(e,r,o)=>{o.d(r,{V:()=>t});const t={borderRadiusNone:"0",borderRadiusSmall:"2px",borderRadiusMedium:"4px",borderRadiusLarge:"6px",borderRadiusXLarge:"8px",borderRadiusCircular:"10000px"}},5173:(e,r,o)=>{o.d(r,{U1:()=>t});const t={10:"#2b2b40",20:"#2f2f4a",30:"#333357",40:"#383966",50:"#3d3e78",60:"#444791",70:"#4f52b2",80:"#5b5fc7",90:"#7579eb",100:"#7f85f5",110:"#9299f7",120:"#aab1fa",130:"#b6bcfa",140:"#c5cbfa",150:"#dce0fa",160:"#e8ebfa"}},5392:(e,r,o)=>{o.d(r,{Ul:()=>n,cc:()=>d,yd:()=>a});var t=o(4118);const a={red:t.wv,green:t.wL,darkOrange:t.je,yellow:t.D9,berry:t.pT,lightGreen:t.EM,marigold:t.KK},d={darkRed:t.ik,cranberry:t.jF,pumpkin:t.Vv,peach:t.WB,gold:t.bK,brass:t.YA,brown:t.Xk,forest:t.CE,seafoam:t.$T,darkGreen:t.AV,lightTeal:t.JW,teal:t.$S,steel:t.s$,blue:t.z1,royalBlue:t.Os,cornflower:t.um,navy:t.Z,lavender:t.Us,purple:t.Zp,grape:t.QH,lilac:t.qn,pink:t.Vu,magenta:t.GC,plum:t.t1,beige:t.Zz,mink:t.QJ,platinum:t.X1,anchor:t.Y3},n={cranberry:t.jF,green:t.wL,orange:t.T_}},4118:(e,r,o)=>{o.d(r,{$S:()=>$,$T:()=>F,AV:()=>H,CE:()=>m,D9:()=>N,EM:()=>y,GC:()=>M,JW:()=>I,KK:()=>p,ON:()=>s,Oh:()=>t,Os:()=>L,Q1:()=>d,QH:()=>z,QJ:()=>V,Ql:()=>u,T_:()=>B,Us:()=>U,Vu:()=>X,Vv:()=>f,WB:()=>k,X1:()=>E,Xk:()=>O,Xv:()=>l,Y3:()=>K,YA:()=>v,Z:()=>C,Z1:()=>c,Zp:()=>D,Zz:()=>W,bK:()=>S,c8:()=>a,ik:()=>i,jF:()=>g,je:()=>b,pT:()=>T,qn:()=>R,s$:()=>x,t1:()=>Q,ti:()=>n,um:()=>A,wL:()=>P,wv:()=>h,z1:()=>w});const t={2:"#050505",4:"#0a0a0a",6:"#0f0f0f",8:"#141414",10:"#1a1a1a",12:"#1f1f1f",14:"#242424",16:"#292929",18:"#2e2e2e",20:"#333333",22:"#383838",24:"#3d3d3d",26:"#424242",28:"#474747",30:"#4d4d4d",32:"#525252",34:"#575757",36:"#5c5c5c",38:"#616161",40:"#666666",42:"#6b6b6b",44:"#707070",46:"#757575",48:"#7a7a7a",50:"#808080",52:"#858585",54:"#8a8a8a",56:"#8f8f8f",58:"#949494",60:"#999999",62:"#9e9e9e",64:"#a3a3a3",66:"#a8a8a8",68:"#adadad",70:"#b3b3b3",72:"#b8b8b8",74:"#bdbdbd",76:"#c2c2c2",78:"#c7c7c7",80:"#cccccc",82:"#d1d1d1",84:"#d6d6d6",86:"#dbdbdb",88:"#e0e0e0",90:"#e6e6e6",92:"#ebebeb",94:"#f0f0f0",96:"#f5f5f5",98:"#fafafa"},a={5:"rgba(255, 255, 255, 0.05)",10:"rgba(255, 255, 255, 0.1)",20:"rgba(255, 255, 255, 0.2)",30:"rgba(255, 255, 255, 0.3)",40:"rgba(255, 255, 255, 0.4)",50:"rgba(255, 255, 255, 0.5)",60:"rgba(255, 255, 255, 0.6)",70:"rgba(255, 255, 255, 0.7)",80:"rgba(255, 255, 255, 0.8)",90:"rgba(255, 255, 255, 0.9)"},d={5:"rgba(0, 0, 0, 0.05)",10:"rgba(0, 0, 0, 0.1)",20:"rgba(0, 0, 0, 0.2)",30:"rgba(0, 0, 0, 0.3)",40:"rgba(0, 0, 0, 0.4)",50:"rgba(0, 0, 0, 0.5)",60:"rgba(0, 0, 0, 0.6)",70:"rgba(0, 0, 0, 0.7)",80:"rgba(0, 0, 0, 0.8)",90:"rgba(0, 0, 0, 0.9)"},n={5:"rgba(26, 26, 26, 0.05)",10:"rgba(26, 26, 26, 0.1)",20:"rgba(26, 26, 26, 0.2)",30:"rgba(26, 26, 26, 0.3)",40:"rgba(26, 26, 26, 0.4)",50:"rgba(26, 26, 26, 0.5)",60:"rgba(26, 26, 26, 0.6)",70:"rgba(26, 26, 26, 0.7)",80:"rgba(26, 26, 26, 0.8)",90:"rgba(26, 26, 26, 0.9)"},c={5:"rgba(31, 31, 31, 0.05)",10:"rgba(31, 31, 31, 0.1)",20:"rgba(31, 31, 31, 0.2)",30:"rgba(31, 31, 31, 0.3)",40:"rgba(31, 31, 31, 0.4)",50:"rgba(31, 31, 31, 0.5)",60:"rgba(31, 31, 31, 0.6)",70:"rgba(31, 31, 31, 0.7)",80:"rgba(31, 31, 31, 0.8)",90:"rgba(31, 31, 31, 0.9)"},l={5:"rgba(36, 36, 36, 0.05)",10:"rgba(36, 36, 36, 0.1)",20:"rgba(36, 36, 36, 0.2)",30:"rgba(36, 36, 36, 0.3)",40:"rgba(36, 36, 36, 0.4)",50:"rgba(36, 36, 36, 0.5)",60:"rgba(36, 36, 36, 0.6)",70:"rgba(36, 36, 36, 0.7)",80:"rgba(36, 36, 36, 0.8)",90:"rgba(36, 36, 36, 0.9)"},s="#ffffff",u="#000000",i={shade50:"#130204",shade40:"#230308",shade30:"#420610",shade20:"#590815",shade10:"#690a19",primary:"#750b1c",tint10:"#861b2c",tint20:"#962f3f",tint30:"#ac4f5e",tint40:"#d69ca5",tint50:"#e9c7cd",tint60:"#f9f0f2"},g={shade50:"#200205",shade40:"#3b0509",shade30:"#6e0811",shade20:"#960b18",shade10:"#b10e1c",primary:"#c50f1f",tint10:"#cc2635",tint20:"#d33f4c",tint30:"#dc626d",tint40:"#eeacb2",tint50:"#f6d1d5",tint60:"#fdf3f4"},h={shade50:"#210809",shade40:"#3f1011",shade30:"#751d1f",shade20:"#9f282b",shade10:"#bc2f32",primary:"#d13438",tint10:"#d7494c",tint20:"#dc5e62",tint30:"#e37d80",tint40:"#f1bbbc",tint50:"#f8dadb",tint60:"#fdf6f6"},b={shade50:"#230900",shade40:"#411200",shade30:"#7a2101",shade20:"#a62d01",shade10:"#c43501",primary:"#da3b01",tint10:"#de501c",tint20:"#e36537",tint30:"#e9835e",tint40:"#f4bfab",tint50:"#f9dcd1",tint60:"#fdf6f3"},f={shade50:"#200d03",shade40:"#3d1805",shade30:"#712d09",shade20:"#9a3d0c",shade10:"#b6480e",primary:"#ca5010",tint10:"#d06228",tint20:"#d77440",tint30:"#df8e64",tint40:"#efc4ad",tint50:"#f7dfd2",tint60:"#fdf7f4"},B={shade50:"#271002",shade40:"#4a1e04",shade30:"#8a3707",shade20:"#bc4b09",shade10:"#de590b",primary:"#f7630c",tint10:"#f87528",tint20:"#f98845",tint30:"#faa06b",tint40:"#fdcfb4",tint50:"#fee5d7",tint60:"#fff9f5"},k={shade50:"#291600",shade40:"#4d2a00",shade30:"#8f4e00",shade20:"#c26a00",shade10:"#e67e00",primary:"#ff8c00",tint10:"#ff9a1f",tint20:"#ffa83d",tint30:"#ffba66",tint40:"#ffddb3",tint50:"#ffedd6",tint60:"#fffaf5"},p={shade50:"#251a00",shade40:"#463100",shade30:"#835b00",shade20:"#b27c00",shade10:"#d39300",primary:"#eaa300",tint10:"#edad1c",tint20:"#efb839",tint30:"#f2c661",tint40:"#f9e2ae",tint50:"#fcefd3",tint60:"#fefbf4"},N={primary:"#fde300",shade10:"#e4cc00",shade20:"#c0ad00",shade30:"#817400",shade40:"#4c4400",shade50:"#282400",tint10:"#fde61e",tint20:"#fdea3d",tint30:"#feee66",tint40:"#fef7b2",tint50:"#fffad6",tint60:"#fffef5"},S={shade50:"#1f1900",shade40:"#3a2f00",shade30:"#6c5700",shade20:"#937700",shade10:"#ae8c00",primary:"#c19c00",tint10:"#c8a718",tint20:"#d0b232",tint30:"#dac157",tint40:"#ecdfa5",tint50:"#f5eece",tint60:"#fdfbf2"},v={shade50:"#181202",shade40:"#2e2103",shade30:"#553e06",shade20:"#745408",shade10:"#89640a",primary:"#986f0b",tint10:"#a47d1e",tint20:"#b18c34",tint30:"#c1a256",tint40:"#e0cea2",tint50:"#efe4cb",tint60:"#fbf8f2"},O={shade50:"#170e07",shade40:"#2b1a0e",shade30:"#50301a",shade20:"#6c4123",shade10:"#804d29",primary:"#8e562e",tint10:"#9c663f",tint20:"#a97652",tint30:"#bb8f6f",tint40:"#ddc3b0",tint50:"#edded3",tint60:"#faf7f4"},m={shade50:"#0c1501",shade40:"#162702",shade30:"#294903",shade20:"#376304",shade10:"#427505",primary:"#498205",tint10:"#599116",tint20:"#6ba02b",tint30:"#85b44c",tint40:"#bdd99b",tint50:"#dbebc7",tint60:"#f6faf0"},F={shade50:"#002111",shade40:"#003d20",shade30:"#00723b",shade20:"#009b51",shade10:"#00b85f",primary:"#00cc6a",tint10:"#19d279",tint20:"#34d889",tint30:"#5ae0a0",tint40:"#a8f0cd",tint50:"#cff7e4",tint60:"#f3fdf8"},y={shade50:"#031a02",shade40:"#063004",shade30:"#0b5a08",shade20:"#0e7a0b",shade10:"#11910d",primary:"#13a10e",tint10:"#27ac22",tint20:"#3db838",tint30:"#5ec75a",tint40:"#a7e3a5",tint50:"#cef0cd",tint60:"#f2fbf2"},P={shade50:"#031403",shade40:"#052505",shade30:"#094509",shade20:"#0c5e0c",shade10:"#0e700e",primary:"#107c10",tint10:"#218c21",tint20:"#359b35",tint30:"#54b054",tint40:"#9fd89f",tint50:"#c9eac9",tint60:"#f1faf1"},H={shade50:"#021102",shade40:"#032003",shade30:"#063b06",shade20:"#085108",shade10:"#0a5f0a",primary:"#0b6a0b",tint10:"#1a7c1a",tint20:"#2d8e2d",tint30:"#4da64d",tint40:"#9ad29a",tint50:"#c6e7c6",tint60:"#f0f9f0"},I={shade50:"#001d1f",shade40:"#00373a",shade30:"#00666d",shade20:"#008b94",shade10:"#00a5af",primary:"#00b7c3",tint10:"#18bfca",tint20:"#32c8d1",tint30:"#58d3db",tint40:"#a6e9ed",tint50:"#cef3f5",tint60:"#f2fcfd"},$={shade50:"#001516",shade40:"#012728",shade30:"#02494c",shade20:"#026467",shade10:"#037679",primary:"#038387",tint10:"#159195",tint20:"#2aa0a4",tint30:"#4cb4b7",tint40:"#9bd9db",tint50:"#c7ebec",tint60:"#f0fafa"},x={shade50:"#000f12",shade40:"#001b22",shade30:"#00333f",shade20:"#004555",shade10:"#005265",primary:"#005b70",tint10:"#0f6c81",tint20:"#237d92",tint30:"#4496a9",tint40:"#94c8d4",tint50:"#c3e1e8",tint60:"#eff7f9"},w={shade50:"#001322",shade40:"#002440",shade30:"#004377",shade20:"#005ba1",shade10:"#006cbf",primary:"#0078d4",tint10:"#1a86d9",tint20:"#3595de",tint30:"#5caae5",tint40:"#a9d3f2",tint50:"#d0e7f8",tint60:"#f3f9fd"},L={shade50:"#000c16",shade40:"#00172a",shade30:"#002c4e",shade20:"#003b6a",shade10:"#00467e",primary:"#004e8c",tint10:"#125e9a",tint20:"#286fa8",tint30:"#4a89ba",tint40:"#9abfdc",tint50:"#c7dced",tint60:"#f0f6fa"},A={shade50:"#0d1126",shade40:"#182047",shade30:"#2c3c85",shade20:"#3c51b4",shade10:"#4760d5",primary:"#4f6bed",tint10:"#637cef",tint20:"#778df1",tint30:"#93a4f4",tint40:"#c8d1fa",tint50:"#e1e6fc",tint60:"#f7f9fe"},C={shade50:"#00061d",shade40:"#000c36",shade30:"#001665",shade20:"#001e89",shade10:"#0023a2",primary:"#0027b4",tint10:"#173bbd",tint20:"#3050c6",tint30:"#546fd2",tint40:"#a3b2e8",tint50:"#ccd5f3",tint60:"#f2f4fc"},U={shade50:"#120f25",shade40:"#221d46",shade30:"#3f3682",shade20:"#5649b0",shade10:"#6656d1",primary:"#7160e8",tint10:"#8172eb",tint20:"#9184ee",tint30:"#a79cf1",tint40:"#d2ccf8",tint50:"#e7e4fb",tint60:"#f9f8fe"},D={shade50:"#0f0717",shade40:"#1c0e2b",shade30:"#341a51",shade20:"#46236e",shade10:"#532982",primary:"#5c2e91",tint10:"#6b3f9e",tint20:"#7c52ab",tint30:"#9470bd",tint40:"#c6b1de",tint50:"#e0d3ed",tint60:"#f7f4fb"},z={shade50:"#160418",shade40:"#29072e",shade30:"#4c0d55",shade20:"#671174",shade10:"#7a1589",primary:"#881798",tint10:"#952aa4",tint20:"#a33fb1",tint30:"#b55fc1",tint40:"#d9a7e0",tint50:"#eaceef",tint60:"#faf2fb"},T={shade50:"#1f091d",shade40:"#3a1136",shade30:"#6d2064",shade20:"#932b88",shade10:"#af33a1",primary:"#c239b3",tint10:"#c94cbc",tint20:"#d161c4",tint30:"#da7ed0",tint40:"#edbbe7",tint50:"#f5daf2",tint60:"#fdf5fc"},R={shade50:"#1c0b1f",shade40:"#35153a",shade30:"#63276d",shade20:"#863593",shade10:"#9f3faf",primary:"#b146c2",tint10:"#ba58c9",tint20:"#c36bd1",tint30:"#cf87da",tint40:"#e6bfed",tint50:"#f2dcf5",tint60:"#fcf6fd"},X={shade50:"#24091b",shade40:"#441232",shade30:"#80215d",shade20:"#ad2d7e",shade10:"#cd3595",primary:"#e43ba6",tint10:"#e750b0",tint20:"#ea66ba",tint30:"#ef85c8",tint40:"#f7c0e3",tint50:"#fbddf0",tint60:"#fef6fb"},M={shade50:"#1f0013",shade40:"#390024",shade30:"#6b0043",shade20:"#91005a",shade10:"#ac006b",primary:"#bf0077",tint10:"#c71885",tint20:"#ce3293",tint30:"#d957a8",tint40:"#eca5d1",tint50:"#f5cee6",tint60:"#fcf2f9"},Q={shade50:"#13000c",shade40:"#240017",shade30:"#43002b",shade20:"#5a003b",shade10:"#6b0045",primary:"#77004d",tint10:"#87105d",tint20:"#98246f",tint30:"#ad4589",tint40:"#d696c0",tint50:"#e9c4dc",tint60:"#faf0f6"},W={shade50:"#141313",shade40:"#252323",shade30:"#444241",shade20:"#5d5958",shade10:"#6e6968",primary:"#7a7574",tint10:"#8a8584",tint20:"#9a9594",tint30:"#afabaa",tint40:"#d7d4d4",tint50:"#eae8e8",tint60:"#faf9f9"},V={shade50:"#0f0e0e",shade40:"#1c1b1a",shade30:"#343231",shade20:"#474443",shade10:"#54514f",primary:"#5d5a58",tint10:"#706d6b",tint20:"#84817e",tint30:"#9e9b99",tint40:"#cecccb",tint50:"#e5e4e3",tint60:"#f8f8f8"},E={shade50:"#111314",shade40:"#1f2426",shade30:"#3b4447",shade20:"#505c60",shade10:"#5f6d71",primary:"#69797e",tint10:"#79898d",tint20:"#89989d",tint30:"#a0adb2",tint40:"#cdd6d8",tint50:"#e4e9ea",tint60:"#f8f9fa"},K={shade50:"#090a0b",shade40:"#111315",shade30:"#202427",shade20:"#2b3135",shade10:"#333a3f",primary:"#394146",tint10:"#4d565c",tint20:"#626c72",tint30:"#808a90",tint40:"#bcc3c7",tint50:"#dbdfe1",tint60:"#f6f7f8"}},6546:(e,r,o)=>{o.d(r,{L:()=>t});const t={curveAccelerateMax:"cubic-bezier(0.9,0.1,1,0.2)",curveAccelerateMid:"cubic-bezier(1,0,1,1)",curveAccelerateMin:"cubic-bezier(0.8,0,0.78,1)",curveDecelerateMax:"cubic-bezier(0.1,0.9,0.2,1)",curveDecelerateMid:"cubic-bezier(0,0,0,1)",curveDecelerateMin:"cubic-bezier(0.33,0,0.1,1)",curveEasyEaseMax:"cubic-bezier(0.8,0,0.2,1)",curveEasyEase:"cubic-bezier(0.33,0,0.67,1)",curveLinear:"cubic-bezier(0,0,1,1)"}},4009:(e,r,o)=>{o.d(r,{S:()=>t});const t={durationUltraFast:"50ms",durationFaster:"100ms",durationFast:"150ms",durationNormal:"200ms",durationGentle:"250ms",durationSlow:"300ms",durationSlower:"400ms",durationUltraSlow:"500ms"}},2478:(e,r,o)=>{o.d(r,{GR:()=>t,NM:()=>d,aI:()=>n,lm:()=>a});const t={fontSizeBase100:"10px",fontSizeBase200:"12px",fontSizeBase300:"14px",fontSizeBase400:"16px",fontSizeBase500:"20px",fontSizeBase600:"24px",fontSizeHero700:"28px",fontSizeHero800:"32px",fontSizeHero900:"40px",fontSizeHero1000:"68px"},a={lineHeightBase100:"14px",lineHeightBase200:"16px",lineHeightBase300:"20px",lineHeightBase400:"22px",lineHeightBase500:"28px",lineHeightBase600:"32px",lineHeightHero700:"36px",lineHeightHero800:"40px",lineHeightHero900:"52px",lineHeightHero1000:"92px"},d={fontWeightRegular:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700},n={fontFamilyBase:"'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontFamilyMonospace:"Consolas, 'Courier New', Courier, monospace",fontFamilyNumeric:"Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"}},8336:(e,r,o)=>{o.d(r,{F:()=>f,b:()=>b});const t="0",a="2px",d="4px",n="6px",c="8px",l="10px",s="12px",u="16px",i="20px",g="24px",h="32px",b={spacingHorizontalNone:t,spacingHorizontalXXS:a,spacingHorizontalXS:d,spacingHorizontalSNudge:n,spacingHorizontalS:c,spacingHorizontalMNudge:l,spacingHorizontalM:s,spacingHorizontalL:u,spacingHorizontalXL:i,spacingHorizontalXXL:g,spacingHorizontalXXXL:h},f={spacingVerticalNone:t,spacingVerticalXXS:a,spacingVerticalXS:d,spacingVerticalSNudge:n,spacingVerticalS:c,spacingVerticalMNudge:l,spacingVerticalM:s,spacingVerticalL:u,spacingVerticalXL:i,spacingVerticalXXL:g,spacingVerticalXXXL:h}},119:(e,r,o)=>{o.d(r,{k:()=>t});const t={strokeWidthThin:"1px",strokeWidthThick:"2px",strokeWidthThicker:"3px",strokeWidthThickest:"4px"}},1888:(e,r,o)=>{o.d(r,{TQ:()=>t,dt:()=>a});const t=["red","green","darkOrange","yellow","berry","lightGreen","marigold"],a=["darkRed","cranberry","pumpkin","peach","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"]},7757:(e,r,o)=>{o.d(r,{s:()=>t});const t={success:"green",warning:"orange",danger:"cranberry"}},7829:(e,r,o)=>{o.d(r,{k:()=>p});var t=o(5392),a=o(1888),d=o(7757);const n=a.TQ.reduce(((e,r)=>{const o=r.slice(0,1).toUpperCase()+r.slice(1),a={[`colorPalette${o}Background1`]:t.yd[r].shade40,[`colorPalette${o}Background2`]:t.yd[r].shade30,[`colorPalette${o}Background3`]:t.yd[r].primary,[`colorPalette${o}Foreground1`]:t.yd[r].tint30,[`colorPalette${o}Foreground2`]:t.yd[r].tint40,[`colorPalette${o}Foreground3`]:t.yd[r].tint20,[`colorPalette${o}BorderActive`]:t.yd[r].tint30,[`colorPalette${o}Border1`]:t.yd[r].primary,[`colorPalette${o}Border2`]:t.yd[r].tint20};return Object.assign(e,a)}),{});n.colorPaletteRedForeground3=t.yd.red.tint30,n.colorPaletteRedBorder2=t.yd.red.tint30,n.colorPaletteGreenForeground3=t.yd.green.tint40,n.colorPaletteGreenBorder2=t.yd.green.tint40,n.colorPaletteDarkOrangeForeground3=t.yd.darkOrange.tint30,n.colorPaletteDarkOrangeBorder2=t.yd.darkOrange.tint30,n.colorPaletteRedForegroundInverted=t.yd.red.primary,n.colorPaletteGreenForegroundInverted=t.yd.green.primary,n.colorPaletteYellowForegroundInverted=t.yd.yellow.shade30;const c=a.dt.reduce(((e,r)=>{const o=r.slice(0,1).toUpperCase()+r.slice(1),a={[`colorPalette${o}Background2`]:t.cc[r].shade30,[`colorPalette${o}Foreground2`]:t.cc[r].tint40,[`colorPalette${o}BorderActive`]:t.cc[r].tint30};return Object.assign(e,a)}),{});c.colorPaletteDarkRedBackground2=t.cc.darkRed.shade20,c.colorPalettePlumBackground2=t.cc.plum.shade20;const l={...n,...c},s=Object.entries(d.s).reduce(((e,[r,o])=>{const a=r.slice(0,1).toUpperCase()+r.slice(1),d={[`colorStatus${a}Background1`]:t.Ul[o].shade40,[`colorStatus${a}Background2`]:t.Ul[o].shade30,[`colorStatus${a}Background3`]:t.Ul[o].primary,[`colorStatus${a}Foreground1`]:t.Ul[o].tint30,[`colorStatus${a}Foreground2`]:t.Ul[o].tint40,[`colorStatus${a}Foreground3`]:t.Ul[o].tint20,[`colorStatus${a}BorderActive`]:t.Ul[o].tint30,[`colorStatus${a}ForegroundInverted`]:t.Ul[o].shade10,[`colorStatus${a}Border1`]:t.Ul[o].primary,[`colorStatus${a}Border2`]:t.Ul[o].tint20};return Object.assign(e,d)}),{});s.colorStatusDangerForeground3=t.Ul[d.s.danger].tint30,s.colorStatusDangerBorder2=t.Ul[d.s.danger].tint30,s.colorStatusSuccessForeground3=t.Ul[d.s.success].tint40,s.colorStatusSuccessBorder2=t.Ul[d.s.success].tint40,s.colorStatusWarningForegroundInverted=t.Ul[d.s.warning].shade20;var u=o(4118);var i=o(3362),g=o(2478),h=o(119),b=o(4729),f=o(4009),B=o(6546),k=o(8336);const p=(e=>{const r=(e=>({colorNeutralForeground1:u.ON,colorNeutralForeground1Hover:u.ON,colorNeutralForeground1Pressed:u.ON,colorNeutralForeground1Selected:u.ON,colorNeutralForeground2:u.Oh[84],colorNeutralForeground2Hover:u.ON,colorNeutralForeground2Pressed:u.ON,colorNeutralForeground2Selected:u.ON,colorNeutralForeground2BrandHover:e[100],colorNeutralForeground2BrandPressed:e[90],colorNeutralForeground2BrandSelected:e[100],colorNeutralForeground3:u.Oh[68],colorNeutralForeground3Hover:u.Oh[84],colorNeutralForeground3Pressed:u.Oh[84],colorNeutralForeground3Selected:u.Oh[84],colorNeutralForeground3BrandHover:e[100],colorNeutralForeground3BrandPressed:e[90],colorNeutralForeground3BrandSelected:e[100],colorNeutralForeground4:u.Oh[60],colorNeutralForegroundDisabled:u.Oh[36],colorNeutralForegroundInvertedDisabled:u.c8[40],colorBrandForegroundLink:e[100],colorBrandForegroundLinkHover:e[110],colorBrandForegroundLinkPressed:e[90],colorBrandForegroundLinkSelected:e[100],colorNeutralForeground2Link:u.Oh[84],colorNeutralForeground2LinkHover:u.ON,colorNeutralForeground2LinkPressed:u.ON,colorNeutralForeground2LinkSelected:u.ON,colorCompoundBrandForeground1:e[100],colorCompoundBrandForeground1Hover:e[110],colorCompoundBrandForeground1Pressed:e[90],colorBrandForeground1:e[100],colorBrandForeground2:e[120],colorBrandForeground2Hover:e[130],colorBrandForeground2Pressed:e[160],colorNeutralForeground1Static:u.Oh[14],colorNeutralForegroundStaticInverted:u.ON,colorNeutralForegroundInverted:u.Oh[14],colorNeutralForegroundInvertedHover:u.Oh[14],colorNeutralForegroundInvertedPressed:u.Oh[14],colorNeutralForegroundInvertedSelected:u.Oh[14],colorNeutralForegroundInverted2:u.Oh[14],colorNeutralForegroundOnBrand:u.ON,colorNeutralForegroundInvertedLink:u.ON,colorNeutralForegroundInvertedLinkHover:u.ON,colorNeutralForegroundInvertedLinkPressed:u.ON,colorNeutralForegroundInvertedLinkSelected:u.ON,colorBrandForegroundInverted:e[80],colorBrandForegroundInvertedHover:e[70],colorBrandForegroundInvertedPressed:e[60],colorBrandForegroundOnLight:e[80],colorBrandForegroundOnLightHover:e[70],colorBrandForegroundOnLightPressed:e[50],colorBrandForegroundOnLightSelected:e[60],colorNeutralBackground1:u.Oh[16],colorNeutralBackground1Hover:u.Oh[24],colorNeutralBackground1Pressed:u.Oh[12],colorNeutralBackground1Selected:u.Oh[22],colorNeutralBackground2:u.Oh[14],colorNeutralBackground2Hover:u.Oh[22],colorNeutralBackground2Pressed:u.Oh[10],colorNeutralBackground2Selected:u.Oh[20],colorNeutralBackground3:u.Oh[12],colorNeutralBackground3Hover:u.Oh[20],colorNeutralBackground3Pressed:u.Oh[8],colorNeutralBackground3Selected:u.Oh[18],colorNeutralBackground4:u.Oh[8],colorNeutralBackground4Hover:u.Oh[16],colorNeutralBackground4Pressed:u.Oh[4],colorNeutralBackground4Selected:u.Oh[14],colorNeutralBackground5:u.Oh[4],colorNeutralBackground5Hover:u.Oh[12],colorNeutralBackground5Pressed:u.Ql,colorNeutralBackground5Selected:u.Oh[10],colorNeutralBackground6:u.Oh[20],colorNeutralBackgroundInverted:u.ON,colorNeutralBackgroundStatic:u.Oh[24],colorNeutralBackgroundAlpha:u.ti[50],colorNeutralBackgroundAlpha2:u.Z1[70],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:u.Oh[22],colorSubtleBackgroundPressed:u.Oh[18],colorSubtleBackgroundSelected:u.Oh[20],colorSubtleBackgroundLightAlphaHover:u.Xv[80],colorSubtleBackgroundLightAlphaPressed:u.Xv[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:u.Q1[10],colorSubtleBackgroundInvertedPressed:u.Q1[30],colorSubtleBackgroundInvertedSelected:u.Q1[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:u.Oh[8],colorNeutralBackgroundInvertedDisabled:u.c8[10],colorNeutralStencil1:u.Oh[34],colorNeutralStencil2:u.Oh[20],colorNeutralStencil1Alpha:u.c8[10],colorNeutralStencil2Alpha:u.c8[5],colorBackgroundOverlay:u.Q1[50],colorScrollbarOverlay:u.c8[60],colorBrandBackground:e[70],colorBrandBackgroundHover:e[80],colorBrandBackgroundPressed:e[40],colorBrandBackgroundSelected:e[60],colorCompoundBrandBackground:e[100],colorCompoundBrandBackgroundHover:e[110],colorCompoundBrandBackgroundPressed:e[90],colorBrandBackgroundStatic:e[80],colorBrandBackground2:e[20],colorBrandBackground2Hover:e[40],colorBrandBackground2Pressed:e[10],colorBrandBackgroundInverted:u.ON,colorBrandBackgroundInvertedHover:e[160],colorBrandBackgroundInvertedPressed:e[140],colorBrandBackgroundInvertedSelected:e[150],colorNeutralStrokeAccessible:u.Oh[68],colorNeutralStrokeAccessibleHover:u.Oh[74],colorNeutralStrokeAccessiblePressed:u.Oh[70],colorNeutralStrokeAccessibleSelected:e[100],colorNeutralStroke1:u.Oh[40],colorNeutralStroke1Hover:u.Oh[46],colorNeutralStroke1Pressed:u.Oh[42],colorNeutralStroke1Selected:u.Oh[44],colorNeutralStroke2:u.Oh[32],colorNeutralStroke3:u.Oh[24],colorNeutralStrokeSubtle:u.Oh[4],colorNeutralStrokeOnBrand:u.Oh[16],colorNeutralStrokeOnBrand2:u.ON,colorNeutralStrokeOnBrand2Hover:u.ON,colorNeutralStrokeOnBrand2Pressed:u.ON,colorNeutralStrokeOnBrand2Selected:u.ON,colorBrandStroke1:e[100],colorBrandStroke2:e[50],colorBrandStroke2Hover:e[50],colorBrandStroke2Pressed:e[30],colorBrandStroke2Contrast:e[50],colorCompoundBrandStroke:e[90],colorCompoundBrandStrokeHover:e[100],colorCompoundBrandStrokePressed:e[80],colorNeutralStrokeDisabled:u.Oh[26],colorNeutralStrokeInvertedDisabled:u.c8[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:u.c8[10],colorNeutralStrokeAlpha2:u.c8[20],colorStrokeFocus1:u.Ql,colorStrokeFocus2:u.ON,colorNeutralShadowAmbient:"rgba(0,0,0,0.24)",colorNeutralShadowKey:"rgba(0,0,0,0.28)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.12)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.40)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.48)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}))(e);return{...i.V,...g.GR,...g.lm,...g.aI,...g.NM,...h.k,...k.b,...k.F,...f.S,...B.L,...r,...l,...s,...(0,b.t)(r.colorNeutralShadowAmbient,r.colorNeutralShadowKey),...(0,b.t)(r.colorBrandShadowAmbient,r.colorBrandShadowKey,"Brand")}})(o(5173).U1)},9196:(e,r,o)=>{o.d(r,{u:()=>p});var t=o(5392),a=o(1888),d=o(7757);const n=a.TQ.reduce(((e,r)=>{const o=r.slice(0,1).toUpperCase()+r.slice(1),a={[`colorPalette${o}Background1`]:t.yd[r].tint60,[`colorPalette${o}Background2`]:t.yd[r].tint40,[`colorPalette${o}Background3`]:t.yd[r].primary,[`colorPalette${o}Foreground1`]:t.yd[r].shade10,[`colorPalette${o}Foreground2`]:t.yd[r].shade30,[`colorPalette${o}Foreground3`]:t.yd[r].primary,[`colorPalette${o}BorderActive`]:t.yd[r].primary,[`colorPalette${o}Border1`]:t.yd[r].tint40,[`colorPalette${o}Border2`]:t.yd[r].primary};return Object.assign(e,a)}),{});n.colorPaletteYellowForeground1=t.yd.yellow.shade30,n.colorPaletteRedForegroundInverted=t.yd.red.tint20,n.colorPaletteGreenForegroundInverted=t.yd.green.tint20,n.colorPaletteYellowForegroundInverted=t.yd.yellow.tint40;const c=a.dt.reduce(((e,r)=>{const o=r.slice(0,1).toUpperCase()+r.slice(1),a={[`colorPalette${o}Background2`]:t.cc[r].tint40,[`colorPalette${o}Foreground2`]:t.cc[r].shade30,[`colorPalette${o}BorderActive`]:t.cc[r].primary};return Object.assign(e,a)}),{}),l={...n,...c},s=Object.entries(d.s).reduce(((e,[r,o])=>{const a=r.slice(0,1).toUpperCase()+r.slice(1),d={[`colorStatus${a}Background1`]:t.Ul[o].tint60,[`colorStatus${a}Background2`]:t.Ul[o].tint40,[`colorStatus${a}Background3`]:t.Ul[o].primary,[`colorStatus${a}Foreground1`]:t.Ul[o].shade10,[`colorStatus${a}Foreground2`]:t.Ul[o].shade30,[`colorStatus${a}Foreground3`]:t.Ul[o].primary,[`colorStatus${a}ForegroundInverted`]:t.Ul[o].tint30,[`colorStatus${a}BorderActive`]:t.Ul[o].primary,[`colorStatus${a}Border1`]:t.Ul[o].tint40,[`colorStatus${a}Border2`]:t.Ul[o].primary};return Object.assign(e,d)}),{});s.colorStatusWarningForeground1=t.Ul[d.s.warning].shade20,s.colorStatusWarningForeground3=t.Ul[d.s.warning].shade20,s.colorStatusWarningBorder2=t.Ul[d.s.warning].shade20;var u=o(4118);var i=o(3362),g=o(2478),h=o(119),b=o(4729),f=o(4009),B=o(6546),k=o(8336);const p=(e=>{const r=(e=>({colorNeutralForeground1:u.Oh[14],colorNeutralForeground1Hover:u.Oh[14],colorNeutralForeground1Pressed:u.Oh[14],colorNeutralForeground1Selected:u.Oh[14],colorNeutralForeground2:u.Oh[26],colorNeutralForeground2Hover:u.Oh[14],colorNeutralForeground2Pressed:u.Oh[14],colorNeutralForeground2Selected:u.Oh[14],colorNeutralForeground2BrandHover:e[80],colorNeutralForeground2BrandPressed:e[70],colorNeutralForeground2BrandSelected:e[80],colorNeutralForeground3:u.Oh[38],colorNeutralForeground3Hover:u.Oh[26],colorNeutralForeground3Pressed:u.Oh[26],colorNeutralForeground3Selected:u.Oh[26],colorNeutralForeground3BrandHover:e[80],colorNeutralForeground3BrandPressed:e[70],colorNeutralForeground3BrandSelected:e[80],colorNeutralForeground4:u.Oh[44],colorNeutralForegroundDisabled:u.Oh[74],colorNeutralForegroundInvertedDisabled:u.c8[40],colorBrandForegroundLink:e[70],colorBrandForegroundLinkHover:e[60],colorBrandForegroundLinkPressed:e[40],colorBrandForegroundLinkSelected:e[70],colorNeutralForeground2Link:u.Oh[26],colorNeutralForeground2LinkHover:u.Oh[14],colorNeutralForeground2LinkPressed:u.Oh[14],colorNeutralForeground2LinkSelected:u.Oh[14],colorCompoundBrandForeground1:e[80],colorCompoundBrandForeground1Hover:e[70],colorCompoundBrandForeground1Pressed:e[60],colorBrandForeground1:e[80],colorBrandForeground2:e[70],colorBrandForeground2Hover:e[60],colorBrandForeground2Pressed:e[30],colorNeutralForeground1Static:u.Oh[14],colorNeutralForegroundStaticInverted:u.ON,colorNeutralForegroundInverted:u.ON,colorNeutralForegroundInvertedHover:u.ON,colorNeutralForegroundInvertedPressed:u.ON,colorNeutralForegroundInvertedSelected:u.ON,colorNeutralForegroundInverted2:u.ON,colorNeutralForegroundOnBrand:u.ON,colorNeutralForegroundInvertedLink:u.ON,colorNeutralForegroundInvertedLinkHover:u.ON,colorNeutralForegroundInvertedLinkPressed:u.ON,colorNeutralForegroundInvertedLinkSelected:u.ON,colorBrandForegroundInverted:e[100],colorBrandForegroundInvertedHover:e[110],colorBrandForegroundInvertedPressed:e[100],colorBrandForegroundOnLight:e[80],colorBrandForegroundOnLightHover:e[70],colorBrandForegroundOnLightPressed:e[50],colorBrandForegroundOnLightSelected:e[60],colorNeutralBackground1:u.ON,colorNeutralBackground1Hover:u.Oh[96],colorNeutralBackground1Pressed:u.Oh[88],colorNeutralBackground1Selected:u.Oh[92],colorNeutralBackground2:u.Oh[98],colorNeutralBackground2Hover:u.Oh[94],colorNeutralBackground2Pressed:u.Oh[86],colorNeutralBackground2Selected:u.Oh[90],colorNeutralBackground3:u.Oh[96],colorNeutralBackground3Hover:u.Oh[92],colorNeutralBackground3Pressed:u.Oh[84],colorNeutralBackground3Selected:u.Oh[88],colorNeutralBackground4:u.Oh[94],colorNeutralBackground4Hover:u.Oh[98],colorNeutralBackground4Pressed:u.Oh[96],colorNeutralBackground4Selected:u.ON,colorNeutralBackground5:u.Oh[92],colorNeutralBackground5Hover:u.Oh[96],colorNeutralBackground5Pressed:u.Oh[94],colorNeutralBackground5Selected:u.Oh[98],colorNeutralBackground6:u.Oh[90],colorNeutralBackgroundInverted:u.Oh[16],colorNeutralBackgroundStatic:u.Oh[20],colorNeutralBackgroundAlpha:u.c8[50],colorNeutralBackgroundAlpha2:u.c8[80],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:u.Oh[96],colorSubtleBackgroundPressed:u.Oh[88],colorSubtleBackgroundSelected:u.Oh[92],colorSubtleBackgroundLightAlphaHover:u.c8[70],colorSubtleBackgroundLightAlphaPressed:u.c8[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:u.Q1[10],colorSubtleBackgroundInvertedPressed:u.Q1[30],colorSubtleBackgroundInvertedSelected:u.Q1[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:u.Oh[94],colorNeutralBackgroundInvertedDisabled:u.c8[10],colorNeutralStencil1:u.Oh[90],colorNeutralStencil2:u.Oh[98],colorNeutralStencil1Alpha:u.Q1[10],colorNeutralStencil2Alpha:u.Q1[5],colorBackgroundOverlay:u.Q1[40],colorScrollbarOverlay:u.Q1[50],colorBrandBackground:e[80],colorBrandBackgroundHover:e[70],colorBrandBackgroundPressed:e[40],colorBrandBackgroundSelected:e[60],colorCompoundBrandBackground:e[80],colorCompoundBrandBackgroundHover:e[70],colorCompoundBrandBackgroundPressed:e[60],colorBrandBackgroundStatic:e[80],colorBrandBackground2:e[160],colorBrandBackground2Hover:e[150],colorBrandBackground2Pressed:e[130],colorBrandBackgroundInverted:u.ON,colorBrandBackgroundInvertedHover:e[160],colorBrandBackgroundInvertedPressed:e[140],colorBrandBackgroundInvertedSelected:e[150],colorNeutralStrokeAccessible:u.Oh[38],colorNeutralStrokeAccessibleHover:u.Oh[34],colorNeutralStrokeAccessiblePressed:u.Oh[30],colorNeutralStrokeAccessibleSelected:e[80],colorNeutralStroke1:u.Oh[82],colorNeutralStroke1Hover:u.Oh[78],colorNeutralStroke1Pressed:u.Oh[70],colorNeutralStroke1Selected:u.Oh[74],colorNeutralStroke2:u.Oh[88],colorNeutralStroke3:u.Oh[94],colorNeutralStrokeSubtle:u.Oh[88],colorNeutralStrokeOnBrand:u.ON,colorNeutralStrokeOnBrand2:u.ON,colorNeutralStrokeOnBrand2Hover:u.ON,colorNeutralStrokeOnBrand2Pressed:u.ON,colorNeutralStrokeOnBrand2Selected:u.ON,colorBrandStroke1:e[80],colorBrandStroke2:e[140],colorBrandStroke2Hover:e[120],colorBrandStroke2Pressed:e[80],colorBrandStroke2Contrast:e[140],colorCompoundBrandStroke:e[80],colorCompoundBrandStrokeHover:e[70],colorCompoundBrandStrokePressed:e[60],colorNeutralStrokeDisabled:u.Oh[88],colorNeutralStrokeInvertedDisabled:u.c8[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:u.Q1[5],colorNeutralStrokeAlpha2:u.c8[20],colorStrokeFocus1:u.ON,colorStrokeFocus2:u.Ql,colorNeutralShadowAmbient:"rgba(0,0,0,0.12)",colorNeutralShadowKey:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.06)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.07)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.20)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.24)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}))(e);return{...i.V,...g.GR,...g.lm,...g.aI,...g.NM,...h.k,...k.b,...k.F,...f.S,...B.L,...r,...l,...s,...(0,b.t)(r.colorNeutralShadowAmbient,r.colorNeutralShadowKey),...(0,b.t)(r.colorBrandShadowAmbient,r.colorBrandShadowKey,"Brand")}})(o(5173).U1)},4729:(e,r,o)=>{function t(e,r,o=""){return{[`shadow2${o}`]:`0 0 2px ${e}, 0 1px 2px ${r}`,[`shadow4${o}`]:`0 0 2px ${e}, 0 2px 4px ${r}`,[`shadow8${o}`]:`0 0 2px ${e}, 0 4px 8px ${r}`,[`shadow16${o}`]:`0 0 2px ${e}, 0 8px 16px ${r}`,[`shadow28${o}`]:`0 0 8px ${e}, 0 14px 28px ${r}`,[`shadow64${o}`]:`0 0 8px ${e}, 0 32px 64px ${r}`}}o.d(r,{t:()=>t})}}]);