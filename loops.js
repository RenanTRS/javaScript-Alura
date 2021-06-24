function mostra(msg){
    console.log(msg);
}

var destinos = ['Amazonas', 'São Paulo', 'Ceará', 'Rio de Janeiro'];
var destino = 'Ceará';
var existe = false;
var cont = 0;

while(cont < destinos.length){
    if(destinos[cont] == destino){
        mostra('Destino existe')
        existe = true;
        destinos.splice(cont,1);
        break
    }
    cont += 1;
}

if(existe == false){
    mostra('Destino inexistente');
}
mostra(destinos);