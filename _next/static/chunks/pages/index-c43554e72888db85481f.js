(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),s=n(2441),d=n(5749),l={};function p(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var c=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",c=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),m=c.href,u=c.as,f=e.children,h=e.replace,x=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var y=o.Children.only(f),w=y&&"object"===typeof y&&y.ref,k=(0,d.useIntersection)({rootMargin:"200px"}),v=i(k,2),j=v[0],_=v[1],C=o.default.useCallback((function(e){j(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,j]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(m),i="undefined"!==typeof b?b:n&&n.locale,r=l[m+"%"+u+(i?"%"+i:"")];e&&!r&&p(n,m,u,{locale:i})}),[u,m,_,b,t,n]);var I={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:d,scroll:s}))}(e,n,m,u,h,x,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(m)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(n,m,u,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(u,S,n&&n.locales,n&&n.domainLocales);I.href=N||(0,a.addBasePath)((0,a.addLocale)(u,S,n&&n.defaultLocale))}return o.default.cloneElement(y,I)};t.default=c},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=(0,r.useRef)(),l=(0,r.useState)(!1),p=i(l,2),c=p[0],m=p[1],u=(0,r.useCallback)((function(e){d.current&&(d.current(),d.current=void 0),n||c||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[n,t,c]);return(0,r.useEffect)((function(){if(!a&&!c){var e=(0,o.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[c]),[u,c]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},6819:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var i=n(5893),r=n(7294),o=n(9163),a=o.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-1i9p3c7-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),s=o.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-1i9p3c7-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.66) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),d=o.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-1i9p3c7-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),l=o.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-1i9p3c7-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=(o.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-1i9p3c7-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-1i9p3c7-5"})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-1i9p3c7-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"100px":"202px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"}))),c=o.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-1i9p3c7-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:0.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),m=(o.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-1i9p3c7-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),o.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-1i9p3c7-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Boxes",componentId:"sc-1i2l04t-0"})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ","{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ","{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Box",componentId:"sc-1i2l04t-1"})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ","{height:210px;}@media ","{height:135px;padding:16px;}@media ","{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__BoxNum",componentId:"sc-1i2l04t-2"})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:28px;line-height:32px;}@media ","{font-size:24px;line-height:26px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"AcomplishmentsStyles__BoxText",componentId:"sc-1i2l04t-3"})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:20px;};@media ","{font-size:10px;line-height:14px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Join",componentId:"sc-1i2l04t-4"})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ","{display:flex;justify-content:center;padding-bottom:64px;}@media ","{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__JoinText",componentId:"sc-1i2l04t-5"})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ","{line-height:32px;font-size:20px;};@media ","{font-size:16px;line-height:24px;margin:0 0 16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__IconContainer",componentId:"sc-1i2l04t-6"})(["display:flex;@media ","{width:160px;justify-content:space-between;}"],(function(e){return e.theme.breakpoints.sm})),function(e){return(0,i.jsxs)(p,{alt:e.alt,form:e.form,disabled:e.disabled,children:[e.children,(0,i.jsx)(c,{alt:e.alt,onClick:e.onClick,disabled:e.disabled,children:e.children})]})}),u=o.default.div.withConfig({displayName:"MainStyles__LeftSection",componentId:"sc-5mbpsg-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),f=function(){return(0,i.jsx)(a,{row:!0,padding:!0,children:(0,i.jsxs)(u,{children:[(0,i.jsx)(s,{main:!0,center:!0,children:"Surya Prakash Akula"}),(0,i.jsx)(d,{}),(0,i.jsx)(m,{onClick:function(){return window.location="https://drive.google.com/file/d/1httn-f627taK0JQJFhgkEdygNFF2xCVE/view?usp=sharing"},children:"Resume"})]})})},h=o.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"sc-1tcu2iw-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]),x=o.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"sc-1tcu2iw-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),g=o.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"sc-1tcu2iw-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),b=o.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"sc-1tcu2iw-3"})(["text-align:center;z-index:20;width:100%;"]),y=o.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"sc-1tcu2iw-4"})(["font-weight:500;letter-spacing:2px;color:#b3ffff;padding:0.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),w=o.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"sc-1tcu2iw-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]),k=(o.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"sc-1tcu2iw-6"})(['width:170px;margin:0 auto;color:#dce3e7;font-family:"Droid Serif",serif;font-size:13px;font-style:italic;line-height:18px;']),o.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"sc-1tcu2iw-7"})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:0.3rem;}"],(function(e){return e.theme.breakpoints.sm}))),v=o.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"sc-1tcu2iw-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),j=o.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"sc-1tcu2iw-9"})(["color:",";font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"],(function(e){return e.empty?"red":"#d4c0c0"})),_=o.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"sc-1tcu2iw-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),C=o.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"sc-1tcu2iw-11"})(["color:#d5ff80;font-size:1.5rem;"]),I=n(3750),S=[{title:"Meebuddy App",description:"Developed this during my internship in Meebuddy",image:"/images/1.png",tags:["Mongo","Express","Ionic","Node"],source:"",visit:"",id:0},{title:"Sorting Algorithms Visualizer",description:"This project sorting visualizer is a very simple UI and it allows the users to select the sort algorithm, select the array size, and speed of the visualization.",image:"/images/2.png",tags:["Python","Tkinter"],source:"https://github.com/D4r3-D3v1L/Sorting-Algo-Visualizer",visit:"",id:1}],N=[{year:"Jan 2019-Present",text:["Active member of Invaders, one of India\u2019s top CTF team in 2019 and 2020","Solved Various Challenges in Forensics,Web Exploitation and Binary Exploitation category."]},{year:"April 2020 - Present",text:["Reported bugs to various public and private bug bounty programs including Crunchyroll,Facebook"]},{year:"Nov 2021 - May 2021",text:["Developed a E\u2010Commerce Mobile Application for the Startup Meebuddy that focuses on Rural India needs.","Developed a Full\u2010stack Android Application using Ionic, Angular,Node js and MongoDB as a team and I worked on Front\u2010end using Ionic Framework and Used Github for Code maintenance"]}],z=(I.KC7,I.KC7,I.KC7,I.KC7,I.KC7,I.KC7,function(){return(0,i.jsxs)(a,{nopadding:!0,id:"projects",children:[(0,i.jsx)(l,{}),(0,i.jsx)(s,{main:!0,children:"Projects"}),(0,i.jsx)(x,{children:S.map((function(e){var t=e.id,n=e.title,r=e.description,o=e.image,a=e.tags,s=e.source,d=e.visit;return(0,i.jsxs)(g,{children:[(0,i.jsx)(h,{src:o}),(0,i.jsxs)(b,{children:[(0,i.jsx)(y,{title:!0,children:n}),(0,i.jsx)(w,{})]}),(0,i.jsx)(k,{children:r}),(0,i.jsxs)("div",{children:[(0,i.jsx)(b,{children:"Tech Stack"}),(0,i.jsx)(_,{children:a.map((function(e,t){return(0,i.jsx)(C,{children:e},t)}))})]}),(0,i.jsxs)(v,{children:[s.length>0&&(0,i.jsx)(j,{href:s,children:"Code"}),d.length>0&&(0,i.jsx)(j,{href:d,children:"Source"})]})]},t)}))})]})}),E=(n(212),n(859)),L=(o.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-14p26t3-0"})(["text-align:center;background-image:radial-gradient( 50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100% );width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),o.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-14p26t3-1"})(["width:100%;"]),o.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-14p26t3-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px;}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),D=o.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-14p26t3-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),F=o.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-14p26t3-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#ffffff;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),T=o.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-14p26t3-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),P=o.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-14p26t3-6"})(["max-width:320px;display:flex;flex-direction:column;margin:0px auto 0px 0px;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),B=(o.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-14p26t3-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(a,{id:"skill",children:[(0,i.jsx)(l,{}),(0,i.jsx)("br",{}),(0,i.jsx)(s,{children:"Skills"}),(0,i.jsxs)(L,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(E.ePX,{size:"3rem"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(F,{children:"Languages/Databases"}),(0,i.jsxs)(T,{children:["Python ",(0,i.jsx)("br",{}),"Java ",(0,i.jsx)("br",{}),"Javascript",(0,i.jsx)("br",{}),"Typescript",(0,i.jsx)("br",{}),"C ",(0,i.jsx)("br",{}),"Bash",(0,i.jsx)("br",{}),"MySQL ",(0,i.jsx)("br",{}),"MongoDB",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(E.BwW,{size:"3rem"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(F,{children:"Frameworks/Libraries"}),(0,i.jsxs)(T,{children:["Nodejs ",(0,i.jsx)("br",{}),"Ionic ",(0,i.jsx)("br",{}),"Angular ",(0,i.jsx)("br",{}),"ReactJS ",(0,i.jsx)("br",{}),"Flask",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(E._3E,{size:"3rem"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(F,{children:"Other Technologies"}),(0,i.jsxs)(T,{children:["Git ",(0,i.jsx)("br",{}),"Web Security ",(0,i.jsx)("br",{}),"Wireshark",(0,i.jsx)("br",{}),"Linux ",(0,i.jsx)("br",{}),"BurpSuite",(0,i.jsx)("br",{})]})]})]})]})]})}),M=o.default.ul.withConfig({displayName:"ExperienceStyles__CarouselContainer",componentId:"utmjv7-0"})(["max-width:1040px;background:#0f1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ","{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),A=o.default.div.withConfig({displayName:"ExperienceStyles__CarouselMobileScrollNode",componentId:"utmjv7-1"})(["@media ","{display:flex;min-width:",";}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.final?"120%;":"min-content"})),O=o.default.div.withConfig({displayName:"ExperienceStyles__CarouselItem",componentId:"utmjv7-2"})(["background:#0f1624;border-radius:3px;max-width:296px;@media ","{max-width:124px;}@media ","{margin-left:32px;min-width:120px;background:#0e131f;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;",";}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.active===e.index?"opacity: 1":"opacity: 0.5"})),H=o.default.h4.withConfig({displayName:"ExperienceStyles__CarouselItemTitle",componentId:"utmjv7-3"})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;background:linear-gradient( 121.57deg,#ffffff 10%,rgba(255,255,255,0.66) 30.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ","{font-size:20px;line-height:28px;margin-bottom:4px;}@media ","{font-size:16px;line-height:24px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),G=(o.default.svg.withConfig({displayName:"ExperienceStyles__CarouselItemImg",componentId:"utmjv7-4"})(["margin-left:21px;-webkit-mask-image:linear-gradient( to right,rgba(0,0,0,1),rgba(0,0,0,0) );width:100%;@media ","{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"],(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"ExperienceStyles__CarouselItemText",componentId:"utmjv7-5"})(["font-size:18px;line-height:22px;letter-spacing:0.02em;color:#b3fff0;padding-right:16px;@media ","{font-size:12px;line-height:18px;padding-right:32px;}@media ","{font-size:10px;line-height:16px;padding-right:0;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),R=o.default.div.withConfig({displayName:"ExperienceStyles__CarouselButtons",componentId:"utmjv7-6"})(["width:288px;display:none;visibility:hidden;@media ","{display:flex;visibility:visible;margin-bottom:48px;}"],(function(e){return e.theme.breakpoints.sm})),K=(o.default.hr.withConfig({displayName:"ExperienceStyles__Hr",componentId:"utmjv7-7"})(["background:none;border:none;"]),o.default.button.withConfig({displayName:"ExperienceStyles__CarouselButton",componentId:"utmjv7-8"})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:",";transform:",";&:focus{outline:none;}"],(function(e){return e.active===e.index?"1":".33"}),(function(e){return e.active===e.index?"scale(1.6)":"scale(1)"}))),J=o.default.div.withConfig({displayName:"ExperienceStyles__CarouselButtonDot",componentId:"utmjv7-9"})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]),U=N.length,W=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],o=(0,r.useRef)(),d=function(e,t){return e.scrollTo({left:t,behavior:"smooth"})},p=function(e,t){if(e.preventDefault(),o.current){var n=Math.floor(.7*o.current.scrollWidth*(t/N.length));d(o.current,n)}};return(0,r.useEffect)((function(){window.addEventListener("resize",(function(){d(o.current,0)}))}),[]),(0,i.jsxs)(a,{id:"experience",children:[(0,i.jsx)(l,{}),(0,i.jsx)("br",{}),(0,i.jsx)(s,{children:"Experience"}),(0,i.jsx)(M,{ref:o,onScroll:function(){if(o.current){var e=Math.round(o.current.scrollLeft/(.7*o.current.scrollWidth)*N.length);n(e)}},children:(0,i.jsx)(i.Fragment,{children:N.map((function(e,n){return(0,i.jsx)(A,{final:n==U-1,children:(0,i.jsxs)(O,{i:"item_".concat(n),active:t,onClick:function(e){return p(e,n)},children:[(0,i.jsx)(H,{children:e.year}),e.text.map((function(e,t){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(G,{children:["* ",e]},t)})}))]},n)},n)}))})}),(0,i.jsx)(R,{children:N.map((function(e,n){return(0,i.jsx)(K,{index:n,active:t,onClick:function(e){return p(e,n)},type:"button",children:(0,i.jsx)(J,{active:t})},n)}))})]})},V=n(1664),Q=n(1649),X=o.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-12smpbe-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),Y=o.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-12smpbe-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;color:#d5ff80;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),q=o.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-12smpbe-2"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),Z=o.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-12smpbe-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),$=o.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-12smpbe-4"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),ee=(o.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-12smpbe-5"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,o.default)(Q.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-12smpbe-6"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),o.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-12smpbe-7"})(["font-size:2rem;"])),te=o.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-12smpbe-8"})(["transition:0.5s ease;color:#d5ff80;border-radius:25%;padding:8px;&:hover{background-color:black;transform:scale(1.2);cursor:pointer;}"]),ne=o.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1eh4ra0-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),ie=o.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1eh4ra0-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),re=(o.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1eh4ra0-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1eh4ra0-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1eh4ra0-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1eh4ra0-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),o.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1eh4ra0-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),oe=o.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1eh4ra0-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),ae=o.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1eh4ra0-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),se=function(){return(0,i.jsx)(ne,{children:(0,i.jsxs)(re,{children:[(0,i.jsxs)(oe,{children:[(0,i.jsx)(ae,{children:"Telegram"}),(0,i.jsx)(ie,{href:"https://t.me/D4r3_D3v1L",target:"_blank",children:"D4r3_D3v1L"})]}),(0,i.jsxs)(oe,{children:[(0,i.jsx)(ae,{children:"Email"}),(0,i.jsx)(ie,{href:"mailto:d4r3d3v1l.asp@gmail.com",target:"_blank",children:"d4r3d3v1l.asp@gmail.com"})]})]})})},de=n(2821),le=function(){return(0,i.jsxs)(X,{children:[(0,i.jsx)(Y,{children:(0,i.jsx)(V.default,{href:"/",children:(0,i.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"#d5ff80",marginBottom:"20px"},children:[(0,i.jsx)(E.QOs,{size:"3rem"})," ",(0,i.jsx)(ee,{children:"Portfolio"})]})})}),(0,i.jsxs)(q,{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://d4r3-d3v1l.github.io/Blogs/",target:"_blank",children:(0,i.jsx)($,{children:"Blogs"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#projects",children:(0,i.jsx)($,{children:"Projects"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#skill",children:(0,i.jsx)($,{children:"Skills"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#experience",children:(0,i.jsx)($,{children:"Experience"})})})]}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(te,{href:"https://github.com/D4r3-D3v1L",target:"_blank",children:(0,i.jsx)(de.RrF,{size:"3rem"})}),(0,i.jsx)(te,{href:"https://www.linkedin.com/in/surya-prakash-akula-44bbb5190/",target:"_blank",children:(0,i.jsx)(de._iD,{size:"3rem"})}),(0,i.jsx)(te,{href:"https://github.com/D4r3-D3v1L",target:"_blank",children:(0,i.jsx)(de.t0C,{size:"3rem"})})]})]})},pe=(o.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"ea3b0r-0"})(["max-width:1280px;width:100%;margin:auto;"]),function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(le,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(se,{})]})}),ce=function(){return(0,i.jsxs)(pe,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(B,{}),(0,i.jsx)(W,{}),(0,i.jsx)(z,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6819)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),d(e.child))}}function p(e){var t=function(t){var n,r=e.attr,o=e.size,d=e.title,l=s(e,["attr","size","title"]),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[866,921,13,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);