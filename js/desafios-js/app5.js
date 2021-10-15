let levelUp = JSON.parse('{"empresa":"GFT","projeto":"Treinamento","tecnologias":[{"id":1,"nome":"NodeJS"},{"id":2,"nome":"ReactJS"}]}');
const tec1 = levelUp.tecnologias[0];
const tec2 = levelUp.tecnologias[1];
console.log(`\nempresa: ${levelUp.empresa} \nprojeto: ${levelUp.projeto} `);
console.log(`tecnologias: id ${tec1.id} | nome ${tec1.nome}\n             id ${tec2.id} | nome ${tec2.nome}\n`);