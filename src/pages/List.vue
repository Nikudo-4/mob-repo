<template>
<div class="list">
<q-markup-table :separator="separator" flat bordered dense
    
    >
      <thead >
        <tr>
          <th class="text-left"></th>
          <th class="text-right" v-for="(objectDay, index) in objectDays.date" :key="index"
          >{{objectDay.date}}</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="(subject, index) in subjects" :key="index">
          <td class="text-left" 
          >{{subject.name}}</td>
          <td class="text-right">{{subject.assessment}}</td>
          <td class="text-right">{{subject.assessment}}</td>
          <td class="text-right">{{subject.assessment}}</td>
          <td class="text-right">{{subject.assessment}}</td>
          <td class="text-right">{{subject.assessment}}</td>
          <td class="text-right">{{subject.assessment}}</td>
        </tr>
      </tbody>
    </q-markup-table>
</div>
</template>

<script>
import AppHelper from './AppHelper'
import moment, { locale } from 'moment'

export default {
    

    data(){
        return{
            date: AppHelper.date ,
            separator: 'vertical',
            subjects: AppHelper.subjects
        }
    },
computed:{
    objectDays() {
        return {
        date: [ 
        { id:1, date: moment(this.date).isoWeekday(1).locale('ru').format('D.MM')},
        { id:2, date: moment(this.date).isoWeekday(2).locale('ru').format('D.MM')},
        { id:3, date: moment(this.date).isoWeekday(3).locale('ru').format('D.MM')},
        { id:4, date: moment(this.date).isoWeekday(4).locale('ru').format('D.MM')},
        { id:5, date: moment(this.date).isoWeekday(5).locale('ru').format('D.MM')},
        { id:6, date: moment(this.date).isoWeekday(6).locale('ru').format('D.MM')}
        ]}
        },
    },
methods:{
    
  }
}
</script>

<style>
.list{
    height: 100%;
}
</style>