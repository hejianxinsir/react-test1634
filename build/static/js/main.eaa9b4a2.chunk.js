(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(6),s=n.n(i),c=(n(12),n(1)),l=n(2),r=n(4),u=n(3),d=(n(13),n(14),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("input",{className:"TodoInput",type:"text",value:this.props.content,onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&(console.log("\u7528\u6237\u6309\u56de\u8f66\u4e86"),this.props.onSubmit(t))}},{key:"changeTitle",value:function(t){this.props.onChange(t)}}]),n}(a.a.Component)),h=(n(15),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"todoItem"},a.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),a.a.createElement("span",{className:"title"},this.props.todo.title),a.a.createElement("button",{onClick:this.delete.bind(this)},"x"))}},{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"delete",value:function(t){this.props.onDelete(t,this.props.todo)}}]),n}(o.Component)),p=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={newTodo:"",todoList:[]},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.todoList.filter((function(t){return!1===t.deleted})).map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(h,{todo:e,onToggle:t.toggle.bind(t),onDelete:t.delete.bind(t)}))}));return console.log("todos \u662f: ",e),a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"\u6211\u7684\u4ee3\u529e"),a.a.createElement(d,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)}),a.a.createElement("ol",null,e))}},{key:"addTodo",value:function(t){console.log("\u6211\u5f97\u6dfb\u52a0\u4e00\u4e2a todo \u4e86"),this.state.newTodo?(this.state.todoList.push({id:g(),title:t.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})):alert("\u8bf7\u8f93\u5165\u5185\u5bb9")}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state)}},{key:"delete",value:function(t,e){e.deleted=!0,this.setState(this.state)}}]),n}(a.a.Component),m=0;function g(){return m+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.eaa9b4a2.chunk.js.map