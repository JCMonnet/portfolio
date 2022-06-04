// modal1: Je déclare mes 2 variables, cv pour l'image en petit. Big pour l'image en grand.
// Je lance le event sur l'image en petit. Et lui demande d'ouvrir, au clic, la #modal1 et son content, donc l'image en grand. 
let cv=document.getElementById('imgprojet4');
let cvBig=document.getElementById('modal1');
cv.addEventListener ('click', apparait);
 console.log(cvBig); 
function apparait (){
  cvBig.style.display='flex';
}
// Pour sortir de la modal, click sur background la referme. Même chose en sens inverse.
cvBig.addEventListener ('click',fermeture);
function fermeture (){
  cvBig.style.display='none';
}

// menu caché, apparait. Cible btn, event au click => lance deplacement horizontal de 30vw (width bloc)
const btnHobby = document.getElementById('hobby')
const bloc = document.querySelector('.cache')

btnHobby.addEventListener('click', function () {
  bloc.classList.toggle('cache')
})

// lightmode: ciblage btn + event au click + switch class sur variables css.
let couleur=document.getElementById('lightmode');
couleur.addEventListener('click',change);
function change (){
  let blanc=document.body;
  blanc.classList.toggle('light');
}

// galerie
let nature=document.getElementById('liengalerie');
let decor=document.getElementById('conteneurgalerie');
nature.addEventListener('click', spawn);
function spawn () {
  decor.style.display='block';
}

decor.addEventListener('click', hidden);
function hidden () {
  decor.style.display='none';
}

// modal cuisine
let cuisine=document.getElementById('liencuisine');
let plats=document.getElementById('slider_container');
cuisine.addEventListener('click', popup);
function popup () {
  plats.style.display='block';
}

plats.addEventListener('click', popdown);
function popdown () {
  plats.style.display='none';
}