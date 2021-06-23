console.log('Trabalhando com listas');
var estados = ['Amazonas', 'Pará', 'São Paulo'];
console.log(estados);

estados.push('Rio de Janeiro'); //método push serve para incluir um item alista, semelhante ao .append() do pyton
console.log(estados);

estados.splice(1,1); //Se não colocar a vírgula e a quantidade ele irá limpar o array
console.log(estados);
