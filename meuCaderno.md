# Aula01 - Introdução a Linguagem
- Apenas instalação de programas.  
# Aula02 - Tipos de variáveis
## Boas práticas com variáveis:
```console.log();``` Faz o output sair no console.
## Conversão de tipos:
```parseInt();``` Converte para um valor inteiro.  
```parseFloat();``` Converte para um valor float.  
## Atribuição e imutabilidade:  
- O uso de crase no lugar de aspas junto com ```${}``` traz um resultado parecido com o ```format(f'{nome} {lastName}') em python```.  
```
const nome = 'Renan';  
const lastName = 'Souza';  
console.log(`${nome} ${lastName}`);
```
- Variáveis constantes ```const``` não podem ser alteradas, diferente de ```var``` e ```let```.

# aula03 - Trabalhando com muitos elementos
## Criando listas:  
```let lista = [];``` Forma de criar um array.  
```lista.push(item);``` Forma de incluir um item a um array.  
```lista.splice(1,1);``` Forma de excluir itens da lista onde ```x``` é a posição e ```y``` é a quantidade de itens ```(x, y)```.  
