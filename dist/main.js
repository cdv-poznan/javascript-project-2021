(()=>{let e,t,n,c,l,o,a,s,r,i,d,u,p,m,y,g,h,v,f,L,S,E,q,k,x;const T=[];let $,b=0;const C="https://api.nbp.pl/api/exchangerates/tables/a/last/1?format=json",B=(JSON.parse(localStorage.getItem("itemsStorage")),()=>{if(""!==e.value){b++;const n=[].filter.call(S.options,(e=>e.selected)).map((e=>e.text)),i=[].filter.call(E.options,(e=>e.selected)).map((e=>e.text)),d=[].filter.call(q.options,(e=>e.selected)).map((e=>e.text)),u=([].filter.call(k.options,(e=>e.selected)).map((e=>e.text)),{value:e.value,currency:n,tenor:i,margin:d});l=document.createElement("li"),l.innerText=` Twoja oferta to:  ${u.value}  ${u.currency}  na okres:  ${u.tenor}  z oprocentowaniem: ${u.margin}`,l.setAttribute("id",`todo-${b}`),c.appendChild(l),e.value="",t.innerText="",o=document.createElement("div"),o.classList.add("tools"),l.appendChild(o),a=document.createElement("button"),a.classList.add("complete"),a.innerHTML='<i class="fas fa-check"></i>',o.appendChild(a),s=document.createElement("button"),s.classList.add("edit"),s.innerHTML="EDIT",o.appendChild(s),r=document.createElement("button"),r.classList.add("delete"),r.innerHTML='<i class="fas fa-times"></i>',o.appendChild(r),$userBtn=document.createElement("button"),$userBtn.classList.add("userBtn"),$userBtn.innerHTML='<i class="far fa-user"></i>',o.appendChild($userBtn)}else t.innerText="Wpisz kwotę!"}),M=()=>{13===event.keyCode&&B()},w=e=>{e.target.closest("button").classList.contains("complete")?((e=>{g.style.display="flex";const t=e.target.closest("li").id;h=document.getElementById(t),v.innerHTML=h.firstChild.textContent})(e),console.log("okejkowo")):"edit"===e.target.closest("button").className?((e=>{const t=e.target.closest("li").id;u=document.getElementById(t),p.value=u.firstChild.textContent,console.log("ok edit"),i.style.display="flex"})(e),console.log("ok edit")):"delete"===e.target.closest("button").className&&((e=>{e.target.closest("li").remove(),0===$.lenght&&(t.innerText="Aktualnie brak ofert!")})(e),console.log("delete"))},H=()=>{""!==p.value?(u.firstChild.textContent=p.value,i.style.display="none",d.innerText="To się uda!"):d.innerText="Musisz dodać zadanie!"},I=()=>{i.style.display="none",d.innerText=""},j=()=>{c.classList.remove("completed"),g.style.display="none"},z=e=>{c.classList.add("completed"),g.style.display="none"};fetch(C),fetch(C).then((e=>e.json())).then((e=>T.push(...e)));const N=document.querySelector(".search"),P=document.querySelector(".suggestions");function O(){console.log(this.value);const e=(t=this.value,T[0].rates.filter((e=>{const n=new RegExp(t,"gi");return e.currency.match(n)||e.code.match(n)})));var t;console.log(e);const n=e.map((e=>{const t=new RegExp(this.value,"gi");return`\n          <li>\n            <span class="Waluta:">${e.currency.replace(t,`<span class="hlcurrencyarr">${this.value}</span>`)}, ${e.code.replace(t,`<span class="hlcurrencyarr">${this.value}</span>`)}</span>\n            <span class="Obecny kurs:">${e.mid}</span>\n          </li>\n        `})).join("");P.innerHTML=n}document.addEventListener("DOMContentLoaded",(()=>{e=document.querySelector(".todoinput"),t=document.querySelector(".alertinfo"),n=document.querySelector(".addbtn"),c=document.querySelector(".todolist ul"),i=document.querySelector(".popup"),d=document.querySelector(".popupinfo"),p=document.querySelector(".popupinput"),m=document.querySelector(".accept"),y=document.querySelector(".cancel"),$=c.getElementsByTagName("li"),g=document.querySelector(".acceptpanel"),v=document.querySelector(".acceptpanelinfo"),$acceptPanelInput=document.querySelector(".acceptPanelInput"),f=document.querySelector(".accPanel"),L=document.querySelector(".cancelPanel"),S=document.querySelector(".currency"),E=document.querySelector(".tenor"),q=document.querySelector(".margin"),k=document.querySelector(".percentage"),x=document.querySelector(".insurance input[type='checkbox']"),n.addEventListener("click",B),c.addEventListener("click",w),y.addEventListener("click",I),m.addEventListener("click",H),e.addEventListener("keyup",M),L.addEventListener("click",j),f.addEventListener("click",z),N.addEventListener("change",O),N.addEventListener("keyup",O)}))})();
//# sourceMappingURL=main.js.map