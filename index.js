import{a as v,S as h}from"./assets/vendor-DdMkFUeo.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="49650376-6654a0e8c93b5d9da070a04be",_="horizontal",b="true",$="photo",c=15;function w(l,a){const i=`https://pixabay.com/api/?key=${L}&q=${l}&image_type=${$}&orientation=${_}&safesearch=${b}&page=${a}&per_page=${c}`;return v.get(i)}const d=document.querySelector(".gallery"),u=document.querySelector(".load-button"),m=document.querySelector(".loader"),q=new h(".gallery a",{captionsData:"alt",captionDelay:250});function S(l){const a=l.map(({previewURL:i,largeImageURL:r,likes:e,views:t,comments:o,downloads:f})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${i}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${e}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${t}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${o}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${f}</div>
                </div>
            </div>
        </li>
    `).join("");d.insertAdjacentHTML("beforeend",a),q.refresh()}function B(){d.innerHTML=""}function y(){m.style.display="block"}function M(){m.style.display="none"}function O(){u.style.display="block"}function I(){u.style.display="none"}function g(){const{height:l}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"})}const k=document.querySelector("#searchInput"),x=document.querySelector("#searchButton"),P=document.querySelector(".load-button");let n=1,s="";async function p(l,a){const i=await w(l,a);S(i.data.hits),i.data.total>a*c&&O(),M()}x.addEventListener("click",async()=>{y(),B(),s=k.value.trim().replace(" ","+"),n=1,await p(s,n),g()});P.addEventListener("click",async()=>{I(),y(),n++,await p(s,n),g()});
//# sourceMappingURL=index.js.map
