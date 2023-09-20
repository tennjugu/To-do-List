(()=>{"use strict";const e=()=>{let t=document.createElement("table");t.id="taskTable";let n=document.createElement("thead"),o=document.createElement("tr"),d=document.createElement("th");d.textContent="Title",o.appendChild(d);let i=document.createElement("th");i.textContent="Description",o.appendChild(i);let c=document.createElement("th");c.textContent="Date",o.appendChild(c);let l=document.createElement("th");l.textContent="Time",o.appendChild(l);let r=document.createElement("th");r.textContent="Priority",o.appendChild(r),n.appendChild(o);let a=document.createElement("tbody");return t.appendChild(n),t.appendChild(a),document.querySelector(".main").appendChild(t),e};e();let t=[];function n(e,t,n,o,d){this.title=e,this.description=t,this.dueDate=n,this.time=o,this.priority=d}function o(){let e=document.querySelector("tbody");e.innerHTML="";for(let n=0;n<t.length;n++){const o=t[n],d=document.createElement("tr");d.classList.add("todo-details");const i=document.createElement("td");i.classList.add("todo-title"),i.textContent=`${o.title}`,d.appendChild(i);const c=document.createElement("td");c.classList.add("todo-Description"),c.textContent=`${o.description}`,d.appendChild(c);let l=document.createElement("td");l.classList.add("todo-DueDate"),l.textContent=`${o.dueDate}`,d.appendChild(l);const r=document.createElement("td");r.classList.add("todo-Time"),r.textContent=`${o.time}`,d.appendChild(r);const a=document.createElement("td");a.classList.add("todo-Priority"),a.textContent=`${o.priority}`,d.appendChild(a),e.appendChild(d)}}function d(){const e=JSON.parse(localStorage.getItem("allTasks"))||[];t=e}d(),o();const i=()=>{const e=document.querySelector(".main"),d=document.querySelector("#taskTable"),i=document.createElement("form");i.id="taskForm";const c=function(){const e=document.createElement("h3");return e.id="cancel",e.innerText="✖",e}(),l=function(){const e=document.createElement("label");return e.for="title",e.textContent="Title:",e}(),r=function(){const e=document.createElement("input");return e.type="text",e.id="title",e.name="title",e.required=!0,e}(),a=function(){const e=document.createElement("label");return e.for="description",e.textContent="Description:",e}(),u=function(){const e=document.createElement("textarea");return e.id="description",e.name="description",e.rows="4",e.maxLength="200",e.required=!0,e}(),m=function(){const e=document.createElement("label");return e.for="dueDate",e.textContent="Due Date:",e}(),s=function(){const e=document.createElement("input");return e.type="date",e.id="dueDate",e.name="dueDate",e.required=!0,e}(),p=function(){const e=document.createElement("label");return e.for="time",e.textContent="Time:",e}(),h=function(){const e=document.createElement("input");return e.type="time",e.id="time",e.name="time",e.required=!0,e}(),C=function(){const e=document.createElement("label");return e.for="priority",e.textContent="Priority:",e}(),E=function(){const e=document.createElement("select");e.id="priority",e.name="priority",e.required=!0;const t=document.createElement("option");t.value="high",t.textContent="High";const n=document.createElement("option");n.value="medium",n.textContent="Medium";const o=document.createElement("option");o.value="low",o.textContent="Low";const d=document.createElement("option");return d.value="none",d.textContent="none",d.selected="true",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),e}(),y=function(){const e=document.createElement("button");return e.id="formBtn",e.type="submit",e.textContent="Add Task",e}();i.appendChild(c),i.appendChild(l),i.appendChild(r),i.appendChild(a),i.appendChild(u),i.appendChild(m),i.appendChild(s),i.appendChild(p),i.appendChild(h),i.appendChild(C),i.appendChild(E),i.appendChild(y),e.appendChild(i),i.addEventListener("submit",(function(c){c.preventDefault(),function(){let e=new n(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#time").value,document.querySelector("#priority").value);t.push(e),localStorage.setItem("allTasks",JSON.stringify(t)),o()}(),d.style.display="block",i.reset(),e.removeChild(i)})),c.addEventListener("click",(()=>{e.removeChild(i),d.style.display="inline-table",i.reset()}))};d(),function(){const e=document.querySelector(".main"),t=document.querySelector("#taskTable");document.querySelector(".addtask").addEventListener("click",(()=>{const n=document.getElementById("taskForm");n&&(e.removeChild(n),console.log("hi")),e.contains(t)&&(t.style.display="none",i(),console.log("hello"))}))}()})();