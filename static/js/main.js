function gram(e){"use strict";if(200===e.meta.code&&document.querySelector&&window.addEventListener){var t=e.data[0];if("image"!==t.type)return;var n=t.images.standard_resolution.url,a=t.link,r=t.caption.text,i=document.querySelector("aside"),d=i.querySelector("a");d.href=a,d.title=d.innerText,d.innerHTML="";var c=document.createElement("figure"),o=document.createElement("figcaption");o.innerText=r;var l=new Image;l.alt=r,l.addEventListener("load",function(){c.appendChild(l),c.appendChild(o),d.appendChild(c),i.className="active"},!1),l.src=n}}