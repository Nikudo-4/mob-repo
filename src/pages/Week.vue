  <template>
<div class="q-pa-md">
    <div class="q-pb-ms row" style="align-items: center;">
      <div class="col-1">
        <q-btn class="float-left q-pr-sn"  icon="keyboard_arrow_left"  flat
        dense @click="minusWeek()" />
      </div>
      <div class="col-10" id="butt">
        <q-btn class="dateFond" @click="()=>{vision = !vision;}" >
          {{formatBtn}}
        </q-btn>
      </div>
      <div class="col-1">
        <q-btn class="float-right q-pl-sn"  icon="keyboard_arrow_right"  flat
        dense @click="plusWeek()" />
      </div>
    <div class="q-mt-sm row justify-center items-center"  id="picker" 
      :style="vision? 'display:block!important' : 'display:none!important'"
    >
      <!-- @click="()=>{vision = !vision;}" 
       @change="closePicker"
       -->
      <q-date class="col"
        v-model="date" 
        minimal
        v-touch-swipe.mouse.right="handleSwipeR"
        v-touch-swipe.mouse.left="handleSwipeL"
        v-touch-swipe.mouse.up="handleSwipeT"
        />
        
    </div>
    <q-card
      class="q-mt-sm my-card"
      bordered
    >
      <q-card-section class="text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        v-touch-swipe.mouse.right="handleSwipeWeekR"
        v-touch-swipe.mouse.left="handleSwipeWeekL"
        >
        <div class="text-h6"  v-for="(objectDay, index) in objectDays.date" :key="index" >
          {{objectDay.date}}
          <q-card-section class="" v-for="subject in subjects" :key="subject.name">
            {{subject.name}}: {{subject.assessment}}
          </q-card-section>
        </div>
      </q-card-section>
    </q-card>
  </div>
</div>
</template>

<style>
 
.dateFond{
 background: white;
 width: 100%;
}
.my-card{
  width: 100%;
}


</style>


<script>
import moment, { locale } from 'moment'
import AppHelper from './AppHelper'


export default {
  
  data () {
    return {
    date: AppHelper.date,
    n:'',
    vision: false,
    subjects: AppHelper.subjects
    }
  },
  computed:{
    formatBtn(date){
      this.n = new Date(this.date)
      let startw = moment(this.n).startOf('isoWeeks'); //начало недели 
      let endw = moment(this.n).endOf('isoWeeks');//конец недели
      let stroka = `${moment(startw).format('DD')}-${moment(endw).format('DD')} ${moment(this.date).locale('ru').format('MMMM YYYY')}`
      return stroka
    },
    objectDays() {
    return {
      date: [ 
      { id:1, date: moment(this.date).isoWeekday(1).locale('ru').format('dddd, D MMM')},
      { id:2, date: moment(this.date).isoWeekday(2).locale('ru').format('dddd, D MMM')},
      { id:3, date: moment(this.date).isoWeekday(3).locale('ru').format('dddd, D MMM')},
      { id:4, date: moment(this.date).isoWeekday(4).locale('ru').format('dddd, D MMM')},
      { id:5, date: moment(this.date).isoWeekday(5).locale('ru').format('dddd, D MMM')},
      { id:6, date: moment(this.date).isoWeekday(6).locale('ru').format('dddd, D MMM')}
      ]}
      },

    // не пойму как привязать текущий день к нужному ему массиву рассписания

    

  },
  methods:{
      plusWeek(date){
        let t = this.date
        t = moment(t).add(1,'isoWeek')
        this.date = t
        return this.date
        alert(this.date.day)
      },
      minusWeek(date){
        let t = this.date
        t = moment(t).add(-1,'isoWeek')
        this.date = t
        return this.date
      },
      events(date){
        return moment(date).locale("ru").format('')
      },
      handleSwipeR(date){
        let t = this.date
        t = moment(t).add(1,'months')
        this.date = t
        return this.date
      },
      handleSwipeL(date){
        let t = this.date
        t = moment(t).add(-1,'months')
        this.date = t
        return this.date
      },
      handleSwipeWeekR(date){
        let t = this.date
        t = moment(t).add(1,'isoWeek')
        this.date = t
        return this.date
      },
      handleSwipeWeekL(date){
        let t = this.date
        t = moment(t).add(-1,'isoWeek')
        this.date = t
        return this.date
      },
      handleSwipeT(){
        return this.vision=!this.vision
      }
    },
  
}
</script>