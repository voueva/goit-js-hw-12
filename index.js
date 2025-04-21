import{a as h,S as L}from"./assets/vendor-DdMkFUeo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w="49650376-6654a0e8c93b5d9da070a04be",_="horizontal",$="true",b="photo",u=15;async function T(r,t){const a=`https://pixabay.com/api/?key=${w}&q=${r}&image_type=${b}&orientation=${_}&safesearch=${$}&page=${t}&per_page=${u}`;try{return await h.get(a)}catch(i){throw i}}const m=document.querySelector(".gallery"),g=document.querySelector(".load-button"),y=document.querySelector(".loader"),q=new L(".gallery a",{captionsData:"alt",captionDelay:250});function z(r){const t=r.map(({previewURL:a,largeImageURL:i,likes:e,views:s,comments:o,downloads:v})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img class="gallery-image" src="${a}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${e}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${s}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${o}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${v}</div>
                </div>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function S(){m.innerHTML=""}function f(){y.style.display="block"}function d(){y.style.display="none"}function x(){g.style.display="block"}function l(){g.style.display="none"}function B(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const I=document.querySelector("#searchInput"),M=document.querySelector("#searchForm"),O=document.querySelector(".load-button");let n=1,c="";async function p(r,t){try{const a=await T(r,t),i=a.data.hits;if(i.length===0&&t===1){iziToast.info({title:"Немає результатів",message:"Спробуйте інший запит."}),l(),d();return}z(i),a.data.total>t*u?x():iziToast.info({title:"Більше зображень немає",message:"Ви переглянули всі результати."})}catch(a){if(l(),axios.isAxiosError(a))if(a.response){const i=a.response.status;i===403?iziToast.error({title:"Доступ заборонено",message:"Можливо, ваш API ключ недійсний або вичерпано ліміт."}):i===404?iziToast.warning({title:"Не знайдено",message:"Ресурс не існує. Спробуйте змінити запит."}):i>=500?iziToast.error({title:"Серверна помилка",message:"Сервер не відповідає. Спробуйте пізніше."}):iziToast.error({title:`Помилка ${i}`,message:a.response.statusText||"Невідома помилка"})}else a.request?iziToast.error({title:"Немає відповіді від сервера",message:"Перевірте інтернет-з’єднання або спробуйте ще раз."}):iziToast.error({title:"Налаштування запиту",message:"Щось пішло не так при налаштуванні запиту."});else iziToast.error({title:"Неочікувана помилка",message:"Щось пішло не так. Спробуйте ще раз."})}finally{d()}}M.addEventListener("submit",async r=>{r.preventDefault();const t=I.value.trim();if(t===""){iziToast.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит"});return}l(),S(),f(),c=t.replace(/\s+/g,"+"),n=1,await p(c,n)});O.addEventListener("click",async()=>{l(),f(),n++,await p(c,n),B()});
//# sourceMappingURL=index.js.map
