(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{341:function(t,n,e){"use strict";e.r(n);e(22),e(9),e(67),e(79),e(69);var o={data:function(){return{isActive:!1,step:0,question_txt:" ",user_name:"",questions:[{desc:"<strong>나</strong>에게 더 <strong>중요</strong>한 것은",ques1:"<strong>가능성</strong>이 많은 아이디어",ques0:"<strong>실현 가능</strong>한 아이디어"},{desc:"<strong>음식</strong>을 먹을 때",ques1:'이것 저것 섞여 있는<br class="d-none d-md-block" /> <strong>비빕밥</strong>을 선호하는 스타일',ques0:'<strong>하나의 재료</strong>로 맛을 낸 걸<br class="d-none d-md-block" /> 선호하는 스타일​'},{desc:'클립으로 종이를 끼울 수 있고<br class="d-none d-md-block" /> <strong>또 뭘 할 수 있을지</strong>',ques1:"<strong>5개</strong> 이상은 생각나",ques0:"<strong>4개</strong>까지는 무리야​"},{desc:"<strong>일</strong>을 할 때",ques1:'일의 진행사항, 세부계획, 일정 등을<br class="d-none d-md-block" /> <strong>꼼꼼히</strong> 짜는 것을 선호',ques0:'대략적인 진행사항을 정해두고<br class="d-none d-md-block" /> <strong>유연하게</strong> 대처하는 것을 선호​'},{desc:"<strong>판단</strong>할 때",ques1:"<strong>근거</strong>가 중요해",ques0:"<strong>느낌</strong>이 중요해​"},{desc:"<strong>결론</strong>을 낼 때",ques1:'최대한 많은 것을 <strong>본 이후에</strong><br class="d-none d-md-block" /> 결론을 내릴꺼야',ques0:'<strong>혼자 깊이</strong> 고민한 후에<br class="d-none d-md-block" /> 결론을 내릴꺼야​'},{desc:"생각을 <strong>정리</strong>할 때",ques1:"<strong>말하면서</strong> 정리하는 편이야",ques0:"생각이 정리되지 않으면 <strong>말하지 않아​</strong>"},{desc:"생각을 <strong>표현</strong>할 때",ques1:"<strong>말</strong>이 편해",ques0:"<strong>글</strong>이 편해​"},{desc:"생각을 <strong>주장</strong>할 때",ques1:'누가 뭐라고 해도 내가 맞다고 생각하면<br class="d-none d-md-block" /> <strong>주장할 꺼야</strong>',ques0:'내가 맞다고 생각해도 굳이 나서서<br class="d-none d-md-block" /> <strong>이야기하지는 않을래​</strong>'},{desc:"사람들은 <strong>내 아이디어</strong>에",ques1:"<strong>쉽게 공감해</strong>",ques0:"<strong>질문</strong>이 많아​"},{desc:"사람들은 <strong>나</strong>에게",ques1:"아이디어를 달라고 <strong>요청한다</strong>",ques0:"아이디어를 달라고 <strong>요청하지 않는다</strong>​"},{desc:"나에게 더 <strong>중요</strong>한 것은",ques1:"<strong>유용한</strong> 아이디어",ques0:"<strong>새로운</strong> 아이디어"}],answers:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],sum:[0,0,0,0],ans_idx:["0","0","0","0"]}},mounted:function(){this.question_txt=this.questions[0].desc},methods:{set_answer:function(t){var n=this,e=this.step-1;if(this.answers[e]=t,12===this.step){this.answers.forEach((function(t,e){n.sum[Math.floor(e/3)]+=t})),this.sum.forEach((function(t,e){t>1&&(n.ans_idx[e]="1")}));var o=parseInt(this.ans_idx.join(""),2).toString(16);this.$router.push({path:"result/type_".concat(o),query:{nm:this.user_name}})}this.$forceUpdate(),setTimeout((function(){n.step+=1}),200)},start_test:function(){this.step=1}}},r=e(68),c=e(91),l=e.n(c),d=e(396),v=e(335),m=e(391),_=e(297),h=e(402),f=e(392),x=e(393),C=e(337),w=e(338),k=e(301),V=e(394),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"pa-0"},[t.step>0&&t.step<13?e("v-container",[e("v-row",{staticClass:"justify-space-between t-header"},[e("v-col",{staticClass:"text-left"},[t._v("\n        창의성 테스트\n      ")]),t._v(" "),e("v-spacer"),t._v(" "),t.step>0&&t.step<13?e("v-col",{staticClass:"text-right"},[t._v("\n        "+t._s(t.step)+" / "+t._s(t.questions.length)+"\n      ")]):t._e()],1)],1):t._e(),t._v(" "),t.step>0&&t.step<13?e("v-container",{staticClass:"pa-0"},[e("v-stepper",{staticClass:"elevation-0 mt-10 mt-5",model:{value:t.step,callback:function(n){t.step=n},expression:"step"}},[e("v-stepper-items",t._l(t.questions,(function(n,o){return e("v-stepper-content",{key:o,staticClass:"pa-0",attrs:{step:o+1}},[e("v-card",{staticClass:"mb-6 elevation-0 my-md-6"},[e("v-container",[e("v-row",[e("v-col",{staticClass:"text-h4 q-title mt-2 mb-8",domProps:{innerHTML:t._s(n.desc)}})],1),t._v(" "),e("v-btn",{staticClass:"btn-question text-h5 q-example",class:{active:1===t.answers[o]},attrs:{color:"grey lighten-1",elevation:"0","max-width":"100%",block:"","x-large":"",outlined:"",rounded:"",ripple:!1},domProps:{innerHTML:t._s("<span>"+n.ques1+"</span>")},on:{click:function(n){return t.set_answer(1)}}})],1),t._v(" "),e("v-container",{staticClass:"text-h4 q-vs"},[t._v("\n              VS\n            ")]),t._v(" "),e("v-container",[e("v-btn",{staticClass:"btn-question text-h5 q-example",class:{active:0===t.answers[o]},attrs:{color:"grey lighten-1",elevation:"0","max-width":"100%",block:"","x-large":"",outlined:"",rounded:"",ripple:!1},domProps:{innerHTML:t._s("<span>"+n.ques0+"</span>")},on:{click:function(n){return t.set_answer(0)}}})],1)],1)],1)})),1)],1)],1):t.step<1?e("v-container",{staticClass:"start-page pt-4"},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("v-img",{staticClass:"mx-auto",attrs:{"aspect-ratio":80/68,src:"img/main1.png","max-width":"360"}})],1)],1),t._v(" "),e("v-row",{staticClass:"justify-center"},[e("v-col",{staticClass:"col-md-8 col-sm-12 text-h4 main-title1 font-cs pl-16 text-left pt-0 pb-1"},[t._v("아이디어 회의 시간,")])],1),t._v(" "),e("v-row",{staticClass:"justify-center"},[e("v-col",{staticClass:"col-md-8 col-sm-12 text-h4 main-title2 font-cs pl-16 text-left pt-1"},[e("strong",[t._v("나는 어떤 유형?")])])],1),t._v(" "),e("v-row",{staticClass:"justify-center"},[e("v-col",{staticClass:"col-md-9 col-10"},[e("v-text-field",{attrs:{color:"orange darken-4",label:"이름을 입력해주세요."},model:{value:t.user_name,callback:function(n){t.user_name=n},expression:"user_name"}}),t._v(" "),e("v-btn",{staticClass:"btn-start py-8",attrs:{color:"orange darken-3",elevation:"2",dark:"","x-large":"",rounded:"",block:""},on:{click:function(n){return t.start_test()}}},[t._v("\n          창의성 테스트 시작\n        ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VContainer:_.a,VImg:h.a,VRow:f.a,VSpacer:x.a,VStepper:C.a,VStepperContent:w.a,VStepperItems:k.a,VTextField:V.a})}}]);