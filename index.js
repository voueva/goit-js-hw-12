import{a as w,S as L}from"./assets/vendor-DdMkFUeo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const _="49650376-6654a0e8c93b5d9da070a04be",b="horizontal",$="true",q="photo",u=15;async function S(i,t){const o=`https://pixabay.com/api/?key=${_}&q=${i}&image_type=${q}&orientation=${b}&safesearch=${$}&page=${t}&per_page=${u}`;try{return await w.get(o)}catch(l){throw l}}const m=document.querySelector(".gallery"),g=document.querySelector(".load-button"),y=document.querySelector(".loader"),T=new L(".gallery a",{captionsData:"alt",captionDelay:250});function B(i){const t=i.map(({previewURL:o,largeImageURL:l,likes:e,views:a,comments:r,downloads:h})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${o}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${e}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${a}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${r}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${h}</div>
                </div>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),T.refresh()}function I(){m.innerHTML=""}function p(){y.style.display="block"}function d(){y.style.display="none"}function M(){g.style.display="block"}function s(){g.style.display="none"}function f(){const i=document.querySelector(".gallery-item:last-child");if(!i)return;const t=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t-150,behavior:"smooth"})}const O=document.querySelector("#searchInput"),z=document.querySelector("#searchForm"),x=document.querySelector(".load-button");let n=1,c="";async function v(i,t){try{const o=await S(i,t),l=o.data.hits;if(l.length===0&&t===1){iziToast.info({title:"Немає результатів",message:"Спробуйте інший запит."}),s(),d();return}B(l),o.data.total>t*u?M():iziToast.info({title:"Більше зображень немає",message:"Ви переглянули всі результати."})}catch{iziToast.error({title:"Помилка",message:"Не вдалося завантажити зображення."}),s()}finally{d()}}z.addEventListener("submit",async i=>{i.preventDefault();const t=O.value.trim();if(t===""){iziToast.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит"});return}s(),I(),p(),c=t.replace(/\s+/g,"+"),n=1,await v(c,n),f()});x.addEventListener("click",async()=>{s(),p(),n++,await v(c,n),f()});
//# sourceMappingURL=index.js.map
