const app = new Vue({
    el: '#app',
    data: {
        lista: producto,
        nombreProducto: '',
       
        
    },
    methods:{
        
       
        darLike: function(produ){
            produ.like = !produ.like;
        },
        
        cargar: function(){
            // do{
                var id = prompt("Ingrese id producto");
            // }while(!isNaN(id))
        
            // do{
                var nombre = prompt("Ingrese nombre producto");
            // }while(isNaN(nombre))
    
            // do{
                var precio = prompt("Ingrese el precio");
            // }while(isNaN(precio))
        
            producto.push({
                id,
                nombre,
                precio
            });
        }

        // addCard: function(index){
  
        //     this.carrito.push({
        //         id: this.cursos[index].id,
        //         nombre: this.cursos[index].nombre
        //     })
        // }
        
    },

    computed: {
        buscarProducto(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.nombreProducto.toLowerCase());
            });
        }
    }
})
