(this["webpackJsonpdva-boot-admin"]=this["webpackJsonpdva-boot-admin"]||[]).push([[8],{1113:function(e,t,a){},1141:function(e,t,a){"use strict";a.r(t);var r,n=a(67),s=a(32),c=a(14),o=a(15),u=a(20),i=a(19),l=a(0),p=a.n(l),m=a(88),f=a(416),d=a(191),g=a(859),b=a(852),h=a(837),v=a(864),y=a(55),w=a.n(y),x=a(127),O=a(922),j=a(1124),E=a(162),k=a.n(E),M=a(6),D=a.n(M),N=a(865),I=a(881),S=a(839),C=a(304),P=(a(1113),f.a.Content),_=f.a.Header,Y=f.a.Footer,q=h.a.Pagination,T=Object(m.c)((function(e){return{page:e.page,loading:e.loading.models.page}}))(r=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleDelete=function(e){var t=r.state.rows;(0,r.props.dispatch)({type:"page/remove",payload:{records:e,success:function(){r.setState({rows:t.filter((function(t){return!e.some((function(e){return e.rowKey===t.rowKey}))}))})}}})},r.state={record:null,visible:!1,visibleDragMenu:!1,visibleDragSlide:!1,rows:[]},r}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,r=a.page,c=a.loading,o=a.dispatch,u=a.history,i=a.location,l=r.pageData,m=r.menus,g=r.pages,y=r.slides,E=(e=this,[{name:"id",formItem:{type:"hidden"}},{title:D.a.formatMessage(C.a.name),name:"name",tableItem:{filterType:"input",sorter:!0},formItem:{onBlur:function(e,t){var a=t.refs.form,r=a.getFieldValue,n=a.setFieldsValue,s=a.validateFields;r("slug")||(n({slug:Object(I.a)(e.currentTarget.value)}),s(["slug"]))},rules:[{required:!0,message:D.a.formatMessage(C.a.pleaseEnterName)}]}},{title:D.a.formatMessage(C.a.slug),name:"slug",tableItem:{filterType:"input",sorter:!0},formItem:{rules:[function(e){var t=e.getFieldValue;return{validator:function(){var e=Object(x.a)(w.a.mark((function e(a,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r&&""===r.trim()){e.next=11;break}return e.next=3,Object(S.e)({id:t("id"),slug:r,model:"pages"});case 3:if(!e.sent){e.next=8;break}return e.abrupt("return",Promise.resolve());case 8:return e.abrupt("return",Promise.reject(D.a.formatMessage(C.a.theSlugHasAlreadyBeenTaken)));case 9:e.next=12;break;case 11:return e.abrupt("return",Promise.resolve());case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}},{required:!0,message:D.a.formatMessage(C.a.pleaseEnterSlug)}]}},{title:D.a.formatMessage(C.a.body),name:"body",formItem:{type:"editor"}},{title:D.a.formatMessage(C.a.createdAt),name:"created_at",tableItem:{filterType:"datetime",sorter:!0,render:function(e){return k()(e).format("DD/MM/YYYY")}},searchItem:{type:"datetime"}},{title:D.a.formatMessage(C.a.updatedAt),name:"updated_at",tableItem:{filterType:"datetime",sorter:!0,render:function(e){return k()(e).format("DD/MM/YYYY")}},searchItem:{type:"datetime"}},{title:D.a.formatMessage(C.a.operating),tableItem:{width:180,render:function(t,a){return p.a.createElement(h.a.Oper,null,p.a.createElement(O.a,null,p.a.createElement(N.a,{tooltip:D.a.formatMessage(C.a.modify),onClick:function(){return e.onUpdate(a)}},p.a.createElement("i",{className:"las la-edit"})),p.a.createElement(j.a,{title:D.a.formatMessage(C.a.areYouSure),icon:p.a.createElement("i",{className:"las la-question-circle"}),onConfirm:function(){return e.handleDelete([a])}},p.a.createElement(N.a,{tooltip:D.a.formatMessage(C.a.delete)},p.a.createElement("i",{className:"las la-trash-alt"})))))}}}]),M=this.state,T=M.rows,z=M.record,F=M.visible,V=M.visibleDragMenu,A=M.visibleDragSlide;(Object.keys(l.sorts).length||Object.keys(l.filters).length)&&E.map((function(e){return(l.sorts[e.name]||l.filters[e.name])&&(e.tableItem=Object(s.a)(Object(s.a)({},e.tableItem),{},{sortOrder:l.sorts[e.name],filteredValue:l.filters[e.name]})),e}));var K={loading:c,columns:E,rowKey:"id",dataItems:l,selectType:"checkbox",showNum:!1,isScroll:!0,selectedRowKeys:T.map((function(e){return e.id})),onChange:function(e){return u.replace(i.pathname+l.toParams(e))},onSelect:function(e,a){return t.setState({rows:a})}},L={loading:c,record:z,visible:F,columns:E,modalOpts:{width:700},onCancel:function(){t.setState({record:null,visible:!1})},onSubmit:function(e){e=z?Object(s.a)(Object(s.a)({},e),{},{id:z.id}):e,o({type:"page/save",payload:{values:e,success:function(){t.setState({record:null,visible:!1})}}})}},B=function(e,a,r,s,u,i,l,p){return{loading:c,columns:e,data:a,visible:s,title:i,maxDepth:l,modalOpts:{width:700},onSubmit:function(e,t){o(t?{type:"page/change".concat(p),payload:{value:t,data:e}}:{type:"page/@change",payload:Object(n.a)({},r,e)})},onDrag:function(e){o({type:"page/@change",payload:Object(n.a)({},r,e)})},onCancel:function(){t.setState(Object(n.a)({},u,!1))},onSave:function(){o({type:"page/change".concat(p),payload:{value:null,data:a}}),t.setState(Object(n.a)({},u,!1))},onDelete:function(e){if(e>0)o({type:"page/remove".concat(p),payload:e});else{o({type:"page/@change",payload:function t(a){for(var r=0;r<a.length;r++)a[r].id===e?(a.splice(r,1),r--):a[r].children&&(a[r].children=t(a[r].children));return a}(a)})}}}},H=B(function(e){return[{name:"id",formItem:{type:"hidden"}},{title:D.a.formatMessage(C.a.name),name:"name",formItem:{rules:[{required:!0,message:D.a.formatMessage(C.a.pleaseEnterName)}]}},{title:D.a.formatMessage(C.a.page),name:"page_slug",dict:e,formItem:{type:"select"}},{title:D.a.formatMessage(C.a.isHomepage),name:"is_homepage",formItem:{type:"switch"}},{title:D.a.formatMessage(C.a.status),name:"status",formItem:{type:"switch",initialValue:!0}}]}(g.map((function(e){return{code:e.slug,codeName:e.name}}))),m,"menus",V,"visibleDragMenu",D.a.formatMessage(C.a.menu),1,"Menu"),R=B([{name:"id",formItem:{type:"hidden"}},{title:D.a.formatMessage(C.a.name),name:"name",formItem:{rules:[{required:!0,message:D.a.formatMessage(C.a.pleaseEnterName)}]}},{title:D.a.formatMessage(C.a.body),name:"body",formItem:{type:"textarea"}},{title:D.a.formatMessage(C.a.media),name:"image",formItem:{type:"media",rules:[{required:!0,message:D.a.formatMessage(C.a.pleaseEnterImage)}]}},{title:D.a.formatMessage(C.a.link),name:"url",formItem:{}},{title:D.a.formatMessage(C.a.buttonText),name:"button",formItem:{}},{title:D.a.formatMessage(C.a.position),name:"position",dict:[{code:"left",codeName:D.a.formatMessage(C.a.left)},{code:"center",codeName:D.a.formatMessage(C.a.center)},{code:"right",codeName:D.a.formatMessage(C.a.right)}],formItem:{type:"radio",buttonStyle:"solid",initialValue:"left"}},{title:D.a.formatMessage(C.a.status),name:"status",formItem:{type:"switch",initialValue:!0}}],y,"slides",A,"visibleDragSlide",D.a.formatMessage(C.a.slide),1,"Slide");return p.a.createElement(f.a,{className:"full-layout page-page"},p.a.createElement(_,null,p.a.createElement(b.a,{appendLeft:p.a.createElement(d.a.Group,null,p.a.createElement(d.a,{type:"primary",icon:p.a.createElement("i",{className:"las la-plus"}),onClick:this.onAdd},D.a.formatMessage(C.a.addNew)),p.a.createElement(d.a,{type:"primary",disabled:!T.length,onClick:function(e){return t.onDelete(T)},icon:p.a.createElement("i",{className:"las la-trash-alt"})},D.a.formatMessage(C.a.delete)))},p.a.createElement(d.a.Group,null,p.a.createElement(d.a,{type:"primary",icon:p.a.createElement("i",{className:"las la-bars"}),onClick:function(){return t.setState({visibleDragMenu:!0})}},D.a.formatMessage(C.a.menu)),p.a.createElement(d.a,{type:"primary",icon:p.a.createElement("i",{className:"las la-images"}),onClick:function(){return t.setState({visibleDragSlide:!0})}},D.a.formatMessage(C.a.slide))))),p.a.createElement(P,{className:"has-footer"},p.a.createElement(h.a,K)),p.a.createElement(Y,null,p.a.createElement(q,K)),p.a.createElement(v.c,L),p.a.createElement(v.b,H),p.a.createElement(v.b,R))}}]),a}(g.a))||r;t.default=T},836:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return p}));var r=a(32),n=a(55),s=a.n(n),c=a(127),o=a(84),u=a.n(o),i=a(75),l=function(){var e=Object(c.a)(s.a.mark((function e(t,a){var r,n,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t);case 2:for(r=e.sent,n=r.data,c=function e(t,a){if(t.children&&t.children.length>0){for(var r=0;r<t.children.length;r++){if(t.id===a.parent_id)return t.children.push(a),t.children;t.children[r].children=e(t.children[r],a)}return t.children}if(t.id===a.parent_id)return[a]},o=[],i=0;i<n[a].length;i++)n[a][i].parent_id&&null!==n[a][i].parent_id?o[o.length-1].children=c(o[o.length-1],n[a][i]):(n[a][i].children=[],o.push(n[a][i]));return n[a]=o,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.value,o=a.data,l=function(){var e=Object(c.a)(s.a.mark((function e(a,c){var o,p,m,f,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<a.length)){e.next=21;break}if(a[o].parent_id=c,p=Object(r.a)({},a[o]),n&&n.id!==a[o].id){e.next=14;break}return n&&(p=n),m=p.id>0?"put":"post",delete p.children,e.next=10,u.a[m](t+("put"===m?p.id:""),p);case 10:f=e.sent,(d=f.data).message&&i.a.notice.success(d.message),a[o]=Object(r.a)(Object(r.a)({},a[o]),d.data);case 14:if(!a[o].children){e.next=18;break}return e.next=17,l(a[o].children,a[o].id);case 17:a[o].children=e.sent;case 18:o++,e.next=1;break;case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.next=4,l(o,null);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},839:function(e,t,a){"use strict";a.d(t,"k",(function(){return p})),a.d(t,"p",(function(){return m})),a.d(t,"q",(function(){return f})),a.d(t,"i",(function(){return d})),a.d(t,"o",(function(){return g})),a.d(t,"n",(function(){return b})),a.d(t,"c",(function(){return h})),a.d(t,"h",(function(){return v})),a.d(t,"l",(function(){return y})),a.d(t,"a",(function(){return w})),a.d(t,"f",(function(){return x})),a.d(t,"m",(function(){return O})),a.d(t,"b",(function(){return j})),a.d(t,"g",(function(){return E})),a.d(t,"d",(function(){return k})),a.d(t,"j",(function(){return M})),a.d(t,"e",(function(){return D}));var r=a(55),n=a.n(r),s=a(127),c=a(84),o=a.n(c),u=a(834),i=a(836),l=a(75),p=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/product",{params:u.a.requestFormat(t)});case 2:return a=e.sent,r=a.data,e.abrupt("return",u.a.responseFormat(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/product",t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("/product/"+t.id,t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=10;break}return e.next=4,o.a.delete("/product/"+t[a]);case 4:r=e.sent,(s=r.data).message&&l.a.notice.success(s.message);case 7:a++,e.next=1;break;case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=10;break}return e.next=4,o.a.patch("/product/"+t[a].id,t[a]);case 4:r=e.sent,(s=r.data).message&&l.a.notice.success(s.message);case 7:a++,e.next=1;break;case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.a)("/category/","categorys"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.b)("/category/",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/category/"+t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.a)("/attribute/","attributes"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.b)("/attribute/",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/attribute/"+t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.a)("/brand/","brands"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.b)("/brand/",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/brand/"+t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=0;case 2:if(!(r<t.length)){e.next=13;break}return s=t[r].id>0?"put":"post",a=a.concat(t[r].attributes_ids),e.next=7,o.a[s]("/product-attribute/"+("put"===s?t[r].id:""),t[r]);case 7:c=e.sent,(u=c.data).message&&l.a.notice.success(u.message);case 10:r++,e.next=2;break;case 13:return a=a.filter((function(e,t,a){return a.indexOf(e)===t})),e.next=16,o.a.put("/product/"+t[0].product_id,{attributes_ids:a});case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/product-attribute/"+t);case 2:return a=e.sent,(r=a.data).message&&l.a.notice.success(r.message),e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/check-slug/",t);case 2:return a=e.sent,r=a.data,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},849:function(e,t,a){},852:function(e,t,a){"use strict";var r=a(14),n=a(15),s=a(20),c=a(19),o=a(0),u=a.n(o),i=a(191),l=a(1),p=a.n(l),m=(a(849),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).togglePullDown=function(t){t.stopPropagation(),t.preventDefault(),e.setState({openPullDown:!e.state.openPullDown})},e.state={openPullDown:!1},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCls,r=t.className,n=t.appendLeft,s=t.pullDownExclude,c=t.childrenClassName,o=t.children,l=t.pullDown;return u.a.createElement("div",{className:p()(a,r)},u.a.createElement("div",{className:"content-box"},u.a.createElement("div",{className:"top-panel"},u.a.createElement("div",{className:"left-btn-div"},n),u.a.createElement("div",{className:p()(c,{"toolbar-right-out":s&&this.state.openPullDown})},o),u.a.createElement("div",{className:"pulldown-handle-small"},l?u.a.createElement(i.a,{onClick:function(t){return e.togglePullDown(t)}},u.a.createElement("i",{type:this.state.openPullDown?"las la-angle-up":"las la-angle-down"}),this.state.openPullDown?"Collapse":"Expand"):null)),l?u.a.createElement("div",{className:p()("pulldown-panel",{open:this.state.openPullDown})},u.a.createElement("span",{className:"pulldown-handle",title:this.state.openPullDown?"Collapse":"Expand",onClick:function(t){return e.togglePullDown(t)}},u.a.createElement("i",{className:this.state.openPullDown?"las la-angle-up":"las la-angle-down"}),this.state.openPullDown?"Collapse":"Expand"),u.a.createElement("div",{className:"pulldown-body"},l)):null))}}]),a}(u.a.Component));m.defaultProps={pullDownExclude:!0,childrenClassName:"toolbar-right",prefixCls:"antui-toolbar-box"};var f=m;t.a=f},881:function(e,t,a){"use strict";t.a=function(e){e=e.toString().toLowerCase().trim();return[{to:"a",from:"[\xc0\xc1\xc2\xc3\xc4\xc5\xc6\u0100\u0102\u0104\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1f00]"},{to:"c",from:"[\xc7\u0106\u0108\u010c]"},{to:"d",from:"[\xd0\u010e\u0110\xde]"},{to:"e",from:"[\xc8\xc9\xca\xcb\u0112\u0114\u0116\u0118\u011a\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6]"},{to:"g",from:"[\u011c\u011e\u0122\u01f4]"},{to:"h",from:"[\u0124\u1e26]"},{to:"i",from:"[\xcc\xcd\xce\xcf\u0128\u012a\u012e\u0130\u1ec8\u1eca]"},{to:"j",from:"[\u0134]"},{to:"ij",from:"[\u0132]"},{to:"k",from:"[\u0136]"},{to:"l",from:"[\u0139\u013b\u013d\u0141]"},{to:"m",from:"[\u1e3e]"},{to:"n",from:"[\xd1\u0143\u0145\u0147]"},{to:"o",from:"[\xd2\xd3\xd4\xd5\xd6\xd8\u014c\u014e\u0150\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u01ea\u01ec\u01a0]"},{to:"oe",from:"[\u0152]"},{to:"p",from:"[\u1e55]"},{to:"r",from:"[\u0154\u0156\u0158]"},{to:"s",from:"[\xdf\u015a\u015c\u015e\u0160\u0218]"},{to:"t",from:"[\u0162\u0164]"},{to:"u",from:"[\xd9\xda\xdb\xdc\u0168\u016a\u016c\u016e\u0170\u0172\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u01af]"},{to:"w",from:"[\u1e82\u0174\u1e80\u1e84]"},{to:"x",from:"[\u1e8d]"},{to:"y",from:"[\xdd\u0176\u0178\u1ef2\u1ef4\u1ef6\u1ef8]"},{to:"z",from:"[\u0179\u017b\u017d]"},{to:"-",from:"[\xb7/_,:;']"}].forEach((function(t){e=e.replace(new RegExp(t.from,"gi"),t.to)})),e.replace(/\s+/g,"-").replace(/[^-a-z\u0430-\u044f\u0370-\u03ff\u1f00-\u1fff]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},922:function(e,t,a){"use strict";var r=a(2),n=a.n(r),s=a(5),c=a.n(s),o=a(0),u=a(1),i=a.n(u),l=a(68),p=a(62),m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},f={small:8,middle:16,large:24};t.a=function(e){var t,a=o.useContext(p.b),r=a.getPrefixCls,s=a.space,u=a.direction,d=e.size,g=void 0===d?(null===s||void 0===s?void 0:s.size)||"small":d,b=e.align,h=e.className,v=e.children,y=e.direction,w=void 0===y?"horizontal":y,x=e.prefixCls,O=m(e,["size","align","className","children","direction","prefixCls"]),j=Object(l.a)(v),E=j.length;if(0===E)return null;var k=void 0===b&&"horizontal"===w?"center":b,M=r("space",x),D=i()(M,"".concat(M,"-").concat(w),(t={},c()(t,"".concat(M,"-rtl"),"rtl"===u),c()(t,"".concat(M,"-align-").concat(k),k),t),h),N="".concat(M,"-item"),I="rtl"===u?"marginLeft":"marginRight";return o.createElement("div",n()({className:D},O),j.map((function(e,t){return o.createElement("div",{className:N,key:"".concat(N,"-").concat(t),style:t===E-1?{}:c()({},"vertical"===w?"marginBottom":I,"string"===typeof g?f[g]:g)},e)})))}}}]);
//# sourceMappingURL=8.b1d838ce.chunk.js.map