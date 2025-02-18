let not = prompt("Lütfen Notunuzu Giriniz:")
let info = document.querySelector("#info")

const SMILE = ` 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
 ` 

 const SAD = `
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
 `

if(not >=90 && not <=100){
    info.innerHTML = `AA ${SMILE} --> ${not}`;
    info.classList.add("text-primary")
}
else if(not >=85 && not <=89){
    info.innerHTML = "BA --> " + not;
    info.classList.add("text-primary")
}
else if(not >=80 && not <=84){
    info.innerHTML = "BB --> " + not;
    info.classList.add("text-primary")
}
else if(not >=75 && not <=79){
    info.innerHTML = "CB --> " + not;
    info.classList.add("text-primary")
}
else if(not >=70 && not <=74){
    info.innerHTML = "CC --> " + not;
    info.classList.add("text-primary")
}
else if(not >=65 && not <=65){
    info.innerHTML = "DC --> " + not;
    info.classList.add("text-primary")
}
else if(not >=60 && not <=64){
    info.innerHTML = "DD --> " + not;
    info.classList.add("text-primary")
}
else if(not >=50 && not <=59){
    info.innerHTML = "FD --> " + not;
    info.classList.add("text-primary")
}
else if(not >=0 && not <=49){
    info.innerHTML = `FF ${SAD} --> ${not}`;
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
}
else{
    info.innerHTML = "0-100 Araliginda Bir Bilgi Giriniz!"
}