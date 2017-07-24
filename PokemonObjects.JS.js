var myPokemon = [];
function printRoster(name,type,hp,def,atk,legend)
{
 this.name = name;
 this.type = type;
 this.hp = hp;
 this.def = def;
 this.atk = atk;
 this.legend = legend;
}

var pikachu = new printRoster("Pikachu", "Electric", 35, 40, 55, false);

var snorlax = new printRoster("Snorlax", "Normal", 160, 110, 90, true);

var mewtwo = new printRoster("Mewtwo", "Psychic", 106, 110, 90, true);

var dragonite = new printRoster("Dragonite", "Dragon/Flying", 91, 134, 95, true);

var pichu = new printRoster("Pichu", "Electric", 20,40,15,false);

var slowking = new printRoster("Slowking", "Psychic/Water", 95, 75, 80, true)

 myPokemon.push(pikachu,snorlax,mewtwo,dragonite,pichu,slowking)

 console.log(myPokemon)

for (var i=8; i<=9; i++){
    console.log(myPokemon[i])
}
