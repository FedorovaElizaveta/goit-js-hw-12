import{a as L,i as d,S as b}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function u(e,r){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"43479786-9f1318bdfd325e0623d2d394a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r})}`;w();try{const o=(await L.get(n)).data;return f(),o}catch(t){console.log(t),f()}}function w(){const e=document.createElement("span");e.className="loader",document.body.appendChild(e)}function f(){const e=document.querySelector(".loader");e&&e.remove()}function M({webformatURL:e,largeImageURL:r,tags:s,likes:n,views:t,comments:o,downloads:l}){return`<li class="gallery-list-item">
        <a href="${r}" data-caption="${s}"><img class="gallery-img" src="${e}" alt="${s}" /></a>
        <div class="img-info">
          <span class="likes"
            ><p>Likes</p>
            <p>${n}</p></span
          >
          <span class="views"
            ><p>Views</p>
            <p>${t}</p></span
          >
          <span class="comments"
            ><p>Comments</p>
            <p>${o}</p></span
          >
          <span class="downloads"
            ><p>Downloads</p>
            <p>${l}</p></span
          >
        </div>
      </li>`}function h(e){return e.map(M).join("")}const S=document.querySelector(".form"),i=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn");let g,c,a=1,p=0;const v=15;S.addEventListener("submit",P);m.addEventListener("click",$);async function P(e){if(e.preventDefault(),c=e.target.elements.search.value.trim(),i.innerHTML="",a=1,c==="")d.error({message:"Please, fill out the field"}),i.innerHTML="";else try{const r=await u(c,a);if(r.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),r){p=Math.ceil(r.total/v);const s=h(r.hits);i.insertAdjacentHTML("beforeend",s),g=new b(".gallery a",{captionSelector:"self",captionType:"data",captionsData:"caption",captionDelay:250})}else i.innerHTML=""}catch(r){console.error(r)}y(),e.target.reset()}async function $(){a+=1;try{const e=await u(c,a),r=h(e.hits);i.insertAdjacentHTML("beforeend",r)}catch(e){console.log(e)}g.refresh(),B(),y()}function q(){m.classList.remove("hidden")}function T(){m.classList.add("hidden")}async function y(){const e=await u(c,a);a>=p||!c||e.hits.length===0?T():q(),a>1&&a>=p&&d.info({message:"We're sorry, but you've reached the end of search results."})}function B(){const e=i.firstChild.getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
