(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{354:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(72),n(22),n(9),n(68),n(79),n(69),{data:function(){return{isActive:!1,step:0,question_txt:" ",user_name:"",result_type:"",questions:[{desc:"<strong>나</strong>에게 더 <strong>중요</strong>한 것은",ques1:"<strong>가능성</strong>이 많은 아이디어",ques0:"<strong>실현 가능</strong>한 아이디어"},{desc:"<strong>문제</strong>가 생기면",ques1:"다양한 해결책을 고려",ques0:"익숙한 해결책을 고려"},{desc:"<strong>회의</strong>를 하면",ques1:"일단 아이디어를 <strong>많이</strong> 내",ques0:'아이디어는 <strong>양보다 질!</strong><br class="d-none d-md-block" /> 수에 연연하지 않아​'},{desc:"<strong>일</strong>을 할 때",ques1:'일의 진행사항, 세부계획, 일정 등을<br class="d-none d-md-block" /> <strong>꼼꼼히</strong> 짜는 것을 선호',ques0:'대략적인 진행사항을 정해두고<br class="d-none d-md-block" /> <strong>유연하게</strong> 대처하는 것을 선호​'},{desc:"<strong>판단</strong>할 때",ques1:"<strong>근거</strong>가 중요해",ques0:"<strong>느낌</strong>이 중요해​"},{desc:"<strong>결론</strong>을 낼 때",ques1:'최대한 많은 것을 <strong>본 이후에</strong><br class="d-none d-md-block" /> 결론을 내릴꺼야',ques0:'<strong>혼자 깊이</strong> 고민한 후에<br class="d-none d-md-block" /> 결론을 내릴꺼야​'},{desc:"생각의 <strong>정리</strong>가 필요 할 때",ques1:"<strong>말하면서</strong> 정리하는 편이야",ques0:"생각이 정리되지 않으면 <strong>말하지 않아​</strong>"},{desc:"생각을 <strong>표현</strong>할 때",ques1:"<strong>말</strong>이 편해",ques0:"<strong>글</strong>이 편해​"},{desc:"생각을 <strong>말</strong>할 때",ques1:'누가 뭐라고 해도 내가 맞다고 생각하면<br class="d-none d-md-block" /> <strong>주장할 꺼야</strong>',ques0:'내가 맞다고 생각해도 굳이 나서서<br class="d-none d-md-block" /> <strong>이야기하지는 않을래​</strong>'},{desc:"사람들은 <strong>내 아이디어</strong>를",ques1:"<strong>아마 기다릴꺼야</strong>",ques0:"<strong>기다릴 것 같지는 않아</strong>​"},{desc:"사람들은 <strong>내</strong>아이디어에",ques1:"쉽게 <strong>공감해</strong>",ques0:"<strong>질문이</strong> 많아​"},{desc:"나에게 더 <strong>중요</strong>한 것은",ques1:"<strong>유용한</strong> 아이디어",ques0:"<strong>새로운</strong> 아이디어"}],answers:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],sum:[0,0,0,0],ans_idx:["0","0","0","0"]}},mounted:function(){this.question_txt=this.questions[0].desc},methods:{set_answer:function(t){var e=this,n=this.step-1;if(this.answers[n]=t,12===this.step){this.answers.forEach((function(t,n){e.sum[Math.floor(n/3)]+=t})),this.sum.forEach((function(t,n){t>1&&(e.ans_idx[n]="1")}));var r=parseInt(this.ans_idx.join(""),2).toString(16);this.result_type="type_".concat(r),this.$router.push({path:"result/".concat(this.result_type),query:{nm:this.user_name}})}this.$forceUpdate(),setTimeout((function(){e.step+=1}),200)},start_test:function(){this.step=1,this.initLog()},initLog:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://asia-northeast3-crevate-lab.cloudfunctions.net/f_cstest_log");case 2:console.log("start");case 3:case"end":return e.stop()}}),e)})))()}}}),c=n(70),l=n(92),d=n.n(l),v=n(409),m=n(346),_=n(360),h=n(300),f=n(405),x=n(361),w=n(406),C=n(350),k=n(351),y=n(318),V=n(407),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0"},[t.step>0&&t.step<13?n("v-container",[n("v-row",{staticClass:"justify-space-between t-header"},[n("v-col",{staticClass:"text-left"},[t._v("\n        창의성 테스트\n      ")]),t._v(" "),n("v-spacer"),t._v(" "),t.step>0&&t.step<13?n("v-col",{staticClass:"text-right"},[t._v("\n        "+t._s(t.step)+" / "+t._s(t.questions.length)+"\n      ")]):t._e()],1)],1):t._e(),t._v(" "),t.step>0&&t.step<13?n("v-container",{staticClass:"pa-0"},[n("v-stepper",{staticClass:"elevation-0 mt-10 mt-5",model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-items",t._l(t.questions,(function(e,r){return n("v-stepper-content",{key:r,staticClass:"pa-0",attrs:{step:r+1}},[n("v-card",{staticClass:"mb-6 elevation-0 my-md-6"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-h4 q-title mt-2 mb-8",domProps:{innerHTML:t._s(e.desc)}})],1),t._v(" "),n("v-btn",{staticClass:"btn-question text-h5 q-example",class:{active:1===t.answers[r]},attrs:{color:"grey lighten-1",elevation:"0","max-width":"100%",block:"","x-large":"",outlined:"",rounded:"",ripple:!1},domProps:{innerHTML:t._s("<span>"+e.ques1+"</span>")},on:{click:function(e){return t.set_answer(1)}}})],1),t._v(" "),n("v-container",{staticClass:"text-h4 q-vs"},[t._v("\n              VS\n            ")]),t._v(" "),n("v-container",[n("v-btn",{staticClass:"btn-question text-h5 q-example",class:{active:0===t.answers[r]},attrs:{color:"grey lighten-1",elevation:"0","max-width":"100%",block:"","x-large":"",outlined:"",rounded:"",ripple:!1},domProps:{innerHTML:t._s("<span>"+e.ques0+"</span>")},on:{click:function(e){return t.set_answer(0)}}})],1)],1)],1)})),1)],1)],1):t.step<1?n("v-container",{staticClass:"start-page pt-4"},[n("v-row",[n("v-col",{staticClass:"text-center"},[n("v-img",{staticClass:"mx-auto",attrs:{"aspect-ratio":80/68,src:"img/main1.png","max-width":"360"}})],1)],1),t._v(" "),n("v-row",{staticClass:"justify-center"},[n("v-col",{staticClass:"col-md-8 col-sm-12 text-h4 main-title1 font-cs pl-16 text-left pt-0 pb-1"},[t._v("아이디어 회의 시간,")])],1),t._v(" "),n("v-row",{staticClass:"justify-center"},[n("v-col",{staticClass:"col-md-8 col-sm-12 text-h4 main-title2 font-cs pl-16 text-left pt-1"},[n("strong",[t._v("나는 어떤 유형?")])])],1),t._v(" "),n("v-row",{staticClass:"justify-center"},[n("v-col",{staticClass:"col-md-9 col-10"},[n("v-text-field",{attrs:{color:"orange darken-4",label:"이름을 입력해주세요."},model:{value:t.user_name,callback:function(e){t.user_name=e},expression:"user_name"}}),t._v(" "),n("v-btn",{staticClass:"btn-start py-8",attrs:{color:"orange darken-3",elevation:"2",dark:"","x-large":"",rounded:"",block:""},on:{click:function(e){return t.start_test()}}},[t._v("\n          창의성 테스트 시작\n        ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCol:_.a,VContainer:h.a,VImg:f.a,VRow:x.a,VSpacer:w.a,VStepper:C.a,VStepperContent:k.a,VStepperItems:y.a,VTextField:V.a})}}]);