(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),i=a.n(r),o=a(13),s=a(2),u=a(15),l=a(16),m=a(14),p=a.n(m),h=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={image:[]},n.state={image:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://dog.ceo/api/breeds/image/random").then((function(t){e.setState({image:t.data.message})})).catch((function(e){console.log(e)}))}}]),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.image;return c.a.createElement("picture",null,c.a.createElement("img",{alt:"",width:"300",height:"300",src:e}))}}]),a}(c.a.Component));i.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.18b26e2b.chunk.js.map