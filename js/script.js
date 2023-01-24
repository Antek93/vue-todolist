console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return {
            newDo: '',
            toDo: [ {
                text: "Fare l'esercizio",
                done: false
            },{
                text: "Rifare il letto",
                done: false
            },{
                text: "Lavare la macchina",
                done: false
            },
        ]
        }
    },
    methods: {
        cross: function (index) {

            this.toDo[index].done = !this.toDo[index].done

            //this.toDo[index].done        ↑
            //ogni elemento done è         ↑
            //impostato su false           ↑
                             
            //quando si attiva             ↑
            //la funzione cross            ↑
            //scambiamo il valore di       ↑
            //done con il suo opposto      ↑
            //utilizzando la negazione !   ↑

            //cosi facendo, ogni qualvolta attiviamo la funzione, i due valori vengono scambiati

            return

        },
        addElement: function () {
            if (this.newDo != 0)  {

                this.toDo.push({text: this.newDo, done: false});
                this.newDo = '';
            } else {
                alert('Cannot insert empty content')
            }
           

            return ;
        },
        removeElement: function (index) {

            this.toDo.splice(index, 1)
        }
        
    }
}).mount('#app');