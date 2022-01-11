let frutas = ['banana', 'uva', 'maracuja', 'morango'];

frutas.forEach((fruta, index) => console.log(index + ' ' + fruta))

let pedidos = [
    {id: 420, nome: 'Denver', alimento: 'Podrão de Bacon', bebida: 'Suco de Limão', preco: 80},
    {id: 421, nome: 'Chaulim', alimento: 'Shawarma', bebida: 'Suco de Batata', preco: 80},
    {id: 422, nome: 'Marcio', alimento: 'Coxinha', bebida: 'Suco de Peroba', preco: 80},
    {id: 423, nome: 'Nadia', alimento: 'Podrão de Vegano', bebida: 'Suco de Peroba', preco: 80}
];

/*pedidos.forEach((pedido , index)=>{
let {nome, alimento, bebida} = pedido;
console.log(`${index} - O Cliente: ${nome} faz o pedido do alimento: ${alimento} e a bebida: ${bebida}`)
})
pedidos.map(pedido =>{
    if (pedido.alimento == 'Coxinha'){
        return(pedido.alimento = 'Não temos')
    }});
console.log(pedidos)
let filter = pedidos.filter(pedido=> {
    return pedido.bebida == 'Suco de Peroba';
})
console.log(filter);
let find = pedidos.find(pedido=> {
    return pedido.bebida == 'Suco de Peroba';
})
console.log(find);
let pedido = pedidos.every(pedido=> {
    let {bebida} = pedido;
    return bebida == 'Suco de Peroba';
})
console.log(pedido);
let pedido = pedidos.some(pedido=> {
    let {alimento} = pedido;
    return alimento == 'Alfafa';
})
console.log(pedido);*/
let pedido = pedidos.reduce((total,pedido) => {
    let {preco} = pedido;
    return (total + preco);
}, 0)
console.log(pedido);