import{a as w,i as c,S}from"./assets/vendor-09d7c26e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();async function f(e,a){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"43479786-9f1318bdfd325e0623d2d394a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a})}`;try{return(await w.get(n)).data}catch(t){console.log(t),c.error({message:"An error occurred. Please try again later."})}}function M({webformatURL:e,largeImageURL:a,tags:l,likes:n,views:t,comments:r,downloads:d}){return`<li class="gallery-list-item">
        <a href="${a}" data-caption="${l}"><img class="gallery-img" src="${e}" alt="${l}" /></a>
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
            <p>${r}</p></span
          >
          <span class="downloads"
            ><p>Downloads</p>
            <p>${d}</p></span
          >
        </div>
      </li>`}function h(e){return e.map(M).join("")}const P=document.querySelector(".form"),i=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn");let g,u,o=1,p=0;const v=15;let s;P.addEventListener("submit",q);m.addEventListener("click",$);async function q(e){if(e.preventDefault(),u=e.target.elements.search.value.trim(),i.innerHTML="",o=1,u==="")c.error({message:"Please, fill out the field"}),i.innerHTML="";else try{if(y(),s=await f(u,o),s.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),s){p=Math.ceil(s.total/v);const a=h(s.hits);i.insertAdjacentHTML("beforeend",a),g=new S(".gallery a",{captionSelector:"self",captionType:"data",captionsData:"caption",captionDelay:250})}else i.innerHTML=""}catch{c.error({message:"An error occurred. Please try again later."})}L(),b(),e.target.reset()}async function $(){o+=1,y();try{const e=await f(u,o),a=h(e.hits);i.insertAdjacentHTML("beforeend",a)}catch{c.error({message:"An error occurred. Please try again later."})}g.refresh(),B(),b(),L()}function y(){const e=document.createElement("span");e.className="loader",document.querySelector(".container").appendChild(e)}function L(){const e=document.querySelector(".loader");e&&e.remove()}function T(){m.classList.remove("hidden")}function A(){m.classList.add("hidden")}async function b(){o>=p||!u||s.hits.length===0?A():T(),o>1&&o>=p&&c.info({message:"We're sorry, but you've reached the end of search results."})}function B(){const e=i.firstChild.getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
