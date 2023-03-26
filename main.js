let listaDeItens = []  



let  cliente = {
    nome: 'Mariana', 
    idade: 35,
    genero: 'Feminino',
    estado: 'Pernambuco',

    mostrarCliente: function(){
        alert(`Olá, meu nome é Mariana e moro no estado de  ${cliente.estado}`)
    }
 }

 cliente.mostrarCliente()