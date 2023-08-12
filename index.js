function wakati(){ var day;
 var mois;
switch (new Date().getDay()) {
case 0:
day = "Dimanche";
break;
case 1:
day ="lundi";
    break;
case 2:
day = "Mardi";
break;
case 3:
day = "Mercredi";
break;
case 4:
day = "Jeudi";
break;
case 5:
day = "Vendredi";
break;
case 6:
day="samedi";
}
switch (new Date().getMonth()) {
case 11:
mois = "Decembre";
break;
case 0:
 mois= "Janvier";
break
case 1:
mois = "Fevrier";
break;
case 2:
mois = "Mars";
break;
case 3:
mois = "Avril";
break;
case 4:
mois = "Mai";
break;
case 5:
mois = "Juin";
break;
case 6:
    mois = "Juillet";
break;
case 7:
mois = "Aout";
break;
case 8:
mois = "Septembre";
break;
case 9:
mois = "Octobre";
break;
case 10:
mois = "Novembre";
break;
}

var heure=new Date().getHours();
var minute= new Date().getMinutes();
var seconde= new Date().getSeconds();

document.getElementById("date").innerHTML=day+",le"+new Date().getDate()+mois+new Date().getFullYear()+"<br/>"+heure+":"+minute+":"+seconde+"<style>#date{ color:#02ff02;border:3px groove #ffffff;border-radius: 10%;font-size: 1.5em;background-color: #582492ce;width: 210px;height: 60px; position:absolue;right:0px;}</style>";
}


setInterval(wakati,1000);