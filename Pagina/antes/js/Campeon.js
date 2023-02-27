const randomItem = (list) => {
    return list[Math.floor(Math.random() * list.length)]
};

function Campeon(Num) {
    console.clear()

    var Champ = Campeones[Num]
    var ChampAlias = CampeonesAlias[Num]

    var H2 = Hechizo2[Num]

    var StartItem = StartItems[Num]
    var Botas = BotasItem[Num]
    var EpicItem = EpicItems[Num]
    var LegendItem = LegendItems[Num]
 
    document.getElementById('Champ').src="img/Campeones/"+Champ+"/Icon.png";
    document.getElementById('ChampName').innerHTML = Champ
    document.getElementById('ChampAlias').innerHTML = ChampAlias

    document.getElementById('Q').src="img/Campeones/"+Champ+"/Q.png";
    document.getElementById('W').src="img/Campeones/"+Champ+"/W.png";
    document.getElementById('E').src="img/Campeones/"+Champ+"/E.png";
    document.getElementById('R').src="img/Campeones/"+Champ+"/R.png";

    document.getElementById('H2').src="img/Hechizos/"+H2+".png";

    document.getElementById('StartItem').src="img/Items/Iniciales/"+StartItem+".png";
    document.getElementById('Botas').src="img/Items/Botas/"+Botas+".png";
    document.getElementById('EpicItem').src="img/Items/Epicos/"+EpicItem+".png";
    document.getElementById('LegendItem').src="img/Items/Legendarios/"+LegendItem+".png";

    document.getElementById('ChampRunas').src="img/Campeones/"+Champ+"/Runas.png";
}