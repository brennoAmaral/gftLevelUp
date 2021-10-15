const topGames = [
    'god of war',
    'dark souls III',
    'blood borne',
    'sekiro',
    'the last of us',
    'DOOM',
    'dishonored',
    'shadow of the colossus',
    'detroid become human',
    'the witcher III',
    'bioshock infite',
    'skyrim',
    'borderlands',
    'league of legends',
    'portal II',
    'horizon zero down',
    'marvels spiderman',
    'deathloop',
    'death strangind',
    'the last guardian']

console.log('\n===utilizando for each===\n');
topGames.forEach((game, i)=>{
    console.log(`${i+1}° ${game} \n`)
});

console.log('\n===utilizando for in===\n');
for(let prop in topGames){
    console.log(`index: `,prop);
}

console.log('\n===utilizando for of===\n');
for(let prop of topGames){
    console.log(prop);
}


console.log('\n===utilizando map===\n')
const upperCaseAll = topGames.map( p => p.toUpperCase());
/** 
 * tentei ocm o bloco de codigo abaixo mas não tive sucesso e n entendi porque,
 * achei esse modo acima e achei estranho apenas a seta funcionar, qual a diferença para arrowfunction? 
const upperCaseAll = topGames.map(function(elemento){
    return  elemento.toUpperCase;
});
*/
console.log(upperCaseAll);

