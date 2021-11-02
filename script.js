Vue.config.devtools = true

new Vue({
    el: "#root",
    data: {
        welcome: "Hello Vueoolean - Todolist",
        newDoText: "",
        doList: [
            "Comprare i biscotti",
            "Comprare il gelato",
        ],

    },
    methods: {
        onAddClick() {
            //Controllo che non sia una stringa vuota 
            if (this.newDoText.trim() === "") {
                return alert("Prego inserire del testo");
            }
            //Controllo se il mio elemento c'è già
            const foundElement = this.doList.find((element) => {
                return element.toLowerCase() === this.newDoText.trim().toLowerCase()

            });

            if (foundElement) {
                return
            }
            //Stampo il mio nuovo elemento
            this.doList.push(this.newDoText.trim());
            //Svuoto il box dove scrivere l'elemento
            this.newDoText = "";
        },

        //Cancello un'elemento premendo sulla x
        deleteClick(elementoDaRimuovere) {
            this.doList.splice(elementoDaRimuovere, 1)
        }
    },

});


