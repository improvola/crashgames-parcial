const appWeb = new Vue({
    el: '#appWeb',
    data:{
        listados: app.agregarCarrito()
    },
    methods:{
        mostrar:function(){
            console.log("Este es el listado: "+this.listados);
        }
    }
})