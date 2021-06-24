function mostra(msg){
    console.log(msg);
}

var destinos = ['Amazonas', 'São Paulo', 'Ceará', 'Rio de Janeiro'];
var destino = 'Rio de Janeiro';
var existe = false;
var cont = 0;

while(cont < 4){
    if(destinos[cont] == destino){
        mostra('Destino existe')
        existe = true;
        break
    }
    cont += 1;
}
if(existe == false){
    mostra('Destino inexistente');
}