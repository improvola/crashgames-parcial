const app = new Vue({
    el: '#app',
    data: {
        lista: producto,
        nombreProductos: '',
       
        
    },
    methods:{
        
       
        darLike: function(produ){
            produ.like = !produ.like;
        },

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