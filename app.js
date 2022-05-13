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

// slider: on déclare i comme variable pour partir de cet élément (1ère image). On appelle la fonction carousel.
//  On déclare x pour selectionner les 4 images.
// Ensuite on lance une boucle qui de ajouter chaque Image en partant de 0, en les mettant en none/invisibles. Tant que c'est inferieur à 4.

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
//  Ensuite on déclare l'index à 1 au lieu de 0 (donc 2e image). La boucle se poursuit. Et par contre avec le index-1, on lui demande
// de repasser en block/visible l'image qui passe en premiere image (index 1 =2e image, donc index-1 = 1ere image)
// Enfin avec le settimeout on indique la fin de la boucle. Et sa relance toutes les 2 secondes, d'où le changement d'image toutes les 2 secondes.
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  // console.log(myIndex);  
  // console.log(x[myIndex-1]);
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}

// lightmode: Après avoir mis une classe light sur mon body.
// Après avoir dans le css, mis le dark sur mon body par defaut. J'ai mis toutes mes var mode clair dans la classe light.
// Et dans le js, je pointe vers mon bouton, et lui demande au clic de lancer la fonction change.
// La fonction change où je déclare la var blanc, qui pointe vers la classe du body. Et la fonction switch/toggle sur la classe light=mode clair
let couleur=document.getElementById('lightmode');
/**
 * premiere ligne
 * 
 */
couleur.addEventListener('click',change);
function change (){
  let blanc=document.body;
  blanc.classList.toggle('light');
}