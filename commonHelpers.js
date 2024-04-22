import{a as b,i as d,S as w}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();async function h(e,o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"43479786-9f1318bdfd325e0623d2d394a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o})}`;M();try{const r=(await b.get(s)).data;return f(),r}catch(t){console.log(t),f()}}function M(){const e=document.createElement("span");e.className="loader",document.body.appendChild(e)}function f(){const e=document.querySelector(".loader");e&&e.remove()}function S({webformatURL:e,largeImageURL:o,tags:c,likes:s,views:t,comments:r,downloads:l}){return`<li class="gallery-list-item">
        <a href="${o}" data-caption="${c}"><img class="gallery-img" src="${e}" alt="${c}" /></a>
        <div class="img-info">
          <span class="likes"
            ><p>Likes</p>
            <p>${s}</p></span
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
            <p>${l}</p></span
          >
        </div>
      </li>`}function g(e){return e.map(S).join("")}const v=document.querySelector(".form"),i=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn");let y,p,a=1,u=0;const P=15;let n;v.addEventListener("submit",$);m.addEventListener("click",q);async function $(e){if(e.preventDefault(),p=e.target.elements.search.value.trim(),i.innerHTML="",a=1,p==="")d.error({message:"Please, fill out the field"}),i.innerHTML="";else try{if(n=await h(p,a),n.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n){u=Math.ceil(n.total/P);const o=g(n.hits);i.insertAdjacentHTML("beforeend",o),y=new w(".gallery a",{captionSelector:"self",captionType:"data",captionsData:"caption",captionDelay:250})}else i.innerHTML=""}catch{d.error({message:"An error occurred. Please try again later."})}L(),e.target.reset()}async function q(){a+=1;try{const e=await h(p,a),o=g(e.hits);i.insertAdjacentHTML("beforeend",o)}catch{d.error({message:"An error occurred. Please try again later."})}y.refresh(),O(),L()}function T(){m.classList.remove("hidden")}function B(){m.classList.add("hidden")}async function L(){a>=u||!p||n.hits.length===0?B():T(),a>1&&a>=u&&d.info({message:"We're sorry, but you've reached the end of search results."})}function O(){const e=i.firstChild.getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
