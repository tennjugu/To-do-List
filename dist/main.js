(()=>{"use strict";(()=>{let t=document.createElement("table");t.id="taskTable";let o=document.createElement("thead"),c=document.createElement("tr"),d=["Title","Description","Due Date","Time","Priority","Status"];for(let e=0;e<d.length;e++){let t=document.createElement("th");t.textContent=d[e],c.appendChild(t),"Due Date"===d[e]&&(t.id="dueDateHeader"),"Priority"===d[e]&&(t.id="priorityHeader")}o.appendChild(c);let i=document.createElement("tbody");t.appendChild(o),t.appendChild(i),document.querySelector(".main").appendChild(t);let a=!1;document.querySelector("#dueDateHeader").addEventListener("click",(()=>{a=!a,a?(e.sort(((t,n)=>{const o=t.dueDate,r=n.dueDate;return o<r?-1:o>r?1:void(o===r&&e.sort(((t,n)=>{const o=t.time,r=n.time;return o<r?-1:o>r?1:void(o===r&&function(){const t={none:0,low:1,medium:2,high:3};e.sort(((e,n)=>{const o=t[e.priority],r=t[n.priority];return o<r?1:o>r?-1:0}))}())})))})),n()):(r(),n())}))})();let e=[];function t(e,t,n,o,r,c){this.title=e,this.description=t,this.dueDate=n,this.time=o,this.priority=r,this.status=c}function n(){let t=document.querySelector("tbody");t.innerHTML="";for(let r=0;r<e.length;r++){const c=e[r],d=document.createElement("tr");d.classList.add("todo-details");const i=document.createElement("td");i.classList.add("todo-title"),i.textContent=`${c.title}`,d.appendChild(i);const a=document.createElement("td");a.classList.add("todo-Description"),a.textContent=`${c.description}`,d.appendChild(a);const l=document.createElement("td");l.classList.add("todo-DueDate"),l.textContent=new Date(`${c.dueDate}`).toDateString(),d.appendChild(l);const u=document.createElement("td");u.classList.add("todo-Time"),u.textContent=`${c.time}`,d.appendChild(u);const m=document.createElement("td");m.classList.add("todo-Priority"),m.textContent=`${c.priority}`,d.appendChild(m);const s=document.createElement("td");s.classList.add("todo-Status");const p=document.createElement("input");p.type="checkbox",p.id="completed",p.checked=!1,p.addEventListener("click",(()=>{p.checked=!0,setTimeout((()=>{var t;confirm("Task has been completed. Confirm to remove.")?(t=r,e.splice(t,1),o(),n(),setTimeout((()=>{alert("Task removed.")}),2)):p.checked=!1}),1)})),s.appendChild(p),d.appendChild(s),t.appendChild(d)}}function o(){localStorage.setItem("allTasks",JSON.stringify(e))}function r(){const t=JSON.parse(localStorage.getItem("allTasks"))||[];e=t}r(),n();r(),document.querySelector(".addtask").addEventListener("click",(()=>{const r=document.querySelector(".sidebar"),c=document.getElementById("taskForm");r.contains(c)?c.reset():(()=>{const r=document.querySelector(".sidebar"),c=document.createElement("form");c.id="taskForm";const d=function(){const e=document.createElement("span");return e.id="cancel",e.innerText="✖",e}(),i=[d,function(){const e=document.createElement("label");return e.htmlFor="title",e.textContent="Title:",e}(),function(){const e=document.createElement("input");return e.type="text",e.id="title",e.name="title",e.required=!0,e}(),function(){const e=document.createElement("label");return e.htmlFor="description",e.textContent="Description:",e}(),function(){const e=document.createElement("textarea");return e.id="description",e.name="description",e.rows="4",e.maxLength="200",e.required=!0,e}(),function(){const e=document.createElement("label");return e.htmlFor="dueDate",e.textContent="Due Date:",e}(),function(){const e=document.createElement("input");return e.type="date",e.id="dueDate",e.name="dueDate",e.required=!0,e}(),function(){const e=document.createElement("label");return e.htmlFor="time",e.textContent="Time:",e}(),function(){const e=document.createElement("input");return e.type="time",e.id="time",e.name="time",e.required=!0,e}(),function(){const e=document.createElement("label");return e.htmlFor="priority",e.textContent="Priority:",e}(),function(){const e=document.createElement("select");e.id="priority",e.name="priority",e.required=!0;const t=["High","Medium","Low","None"];for(let n=0;n<t.length;n++){let o=document.createElement("option");o.value=t[n].toLocaleLowerCase(),o.textContent=t[n],o.selected=t[3],e.appendChild(o)}return e}(),function(){const e=document.createElement("button");return e.id="formBtn",e.type="submit",e.textContent="Add",e}()];for(let e=0;e<i.length;e++)c.appendChild(i[e]);r.appendChild(c),c.addEventListener("submit",(function(r){r.preventDefault(),function(){let r=new t(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#time").value,document.querySelector("#priority").value,document.querySelector("input").checked);e.push(r),o(),n()}(),c.reset()})),d.addEventListener("click",(()=>{r.removeChild(c),c.reset()}))})()}))})();