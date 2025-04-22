import{a as L,S as w,i as l}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const _="49650376-6654a0e8c93b5d9da070a04be",$="horizontal",b="true",q="photo",m=15;async function S(r,t){const s=`https://pixabay.com/api/?key=${_}&q=${r}&image_type=${q}&orientation=${$}&safesearch=${b}&page=${t}&per_page=${m}`;try{return await L.get(s)}catch(a){throw a}}const g=document.querySelector(".gallery"),y=document.querySelector(".load-button"),f=document.querySelector(".loader"),x=new w(".gallery a",{captionsData:"alt",captionDelay:250});function B(r){const t=r.map(({previewURL:s,largeImageURL:a,likes:e,views:i,comments:o,downloads:h})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img class="gallery-image" src="${s}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${e}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${i}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${o}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${h}</div>
                </div>
            </div>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}function I(){g.innerHTML=""}function p(){f.style.display="block"}function u(){f.style.display="none"}function M(){y.style.display="block"}function n(){y.style.display="none"}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const A=document.querySelector("#searchInput"),D=document.querySelector("#searchForm"),E=document.querySelector(".load-button");let c=1,d="";async function v(r,t){try{const s=await S(r,t),a=s.data.hits;if(a.length===0&&t===1){l.info({title:"Немає результатів",message:"Спробуйте інший запит."}),n(),u();return}B(a),s.data.total>t*m?M():l.info({title:"Більше зображень немає",message:"Ви переглянули всі результати."})}catch(s){if(n(),axios.isAxiosError(s))if(s.response){const a=s.response.status;a===403?l.error({title:"Доступ заборонено",message:"Можливо, ваш API ключ недійсний або вичерпано ліміт."}):a===404?l.warning({title:"Не знайдено",message:"Ресурс не існує. Спробуйте змінити запит."}):a>=500?l.error({title:"Серверна помилка",message:"Сервер не відповідає. Спробуйте пізніше."}):l.error({title:`Помилка ${a}`,message:s.response.statusText||"Невідома помилка"})}else s.request?l.error({title:"Немає відповіді від сервера",message:"Перевірте інтернет-з’єднання або спробуйте ще раз."}):l.error({title:"Налаштування запиту",message:"Щось пішло не так при налаштуванні запиту."});else l.error({title:"Неочікувана помилка",message:"Щось пішло не так. Спробуйте ще раз."})}finally{u()}}D.addEventListener("submit",async r=>{r.preventDefault();const t=A.value.trim();if(t===""){l.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит"});return}n(),I(),p(),d=t.replace(/\s+/g,"+"),c=1,await v(d,c)});E.addEventListener("click",async()=>{n(),p(),c++,await v(d,c),O()});
//# sourceMappingURL=index.js.map
