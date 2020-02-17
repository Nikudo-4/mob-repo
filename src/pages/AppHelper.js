import Vue from 'vue'

export default new Vue({
    data:{
        date: new Date(Date.now()),

        subjects: [{
            name: 'Алгебра',
            assessment:[ 5 , 4 , 3 , 2, 2, 2, 2, 2, 2, 2, 2 ]
          }, {
            name: 'Русский язык',
            assessment:[ 5 , 4 , 3 , 3]
          }, {
            name: 'Иностранный',
            assessment:[5 , 4 , 3 , 2 ]
          }, {
            name: 'География',
            assessment:[4 , 4 , 3 , 2 ]
          }, {
            name: 'История',
            assessment:[5 , 4 , 3 , 2 ]
          }, {
            name: 'Физика',
            assessment:[5 , 4 , 3 , 2 ]
          }, {
            name: 'Физкультура',
            assessment:[5 , 4 , 3 , 2 ]
        }],
    },
    computed:{

    },
    
})

