console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return { 
            active: 0,
            
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

            return

        },
        addElement: function () {

            this.toDo.push({text: this.newDo, done: false});
            this.newDo = '';

            return ;
        },
        removeElement: function () {

            this.toDo.splice(1, )
        }
        
    }
}).mount('#app');