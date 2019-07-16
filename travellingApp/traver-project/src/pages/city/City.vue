<template>
    <div>
         <cityHeader></cityHeader>
         <citySearch :cities="allCities"></citySearch>
         <cityList 
         :cities="allCities" 
         :hotCities="allHotCities"
         :letter="letter"></cityList>
        <!--监听Alphabet.vue组件传递过来的值  -->
         <cityAlphabet 
         :cities="allCities"
         @change="handleLetterChange"
         >
         </cityAlphabet>
      
    </div>
</template>
<script>
import cityHeader from './commponents/header'
import citySearch from './commponents/search'
import cityList from './commponents/list'
import cityAlphabet from './commponents/Alphabet'
export default {
    name:"city",
    data(){
        return{
           allCities:{},
           allHotCities:[],
           letter:''
        }
    },
    components:{
         cityHeader,
         citySearch,
         cityList,
         cityAlphabet
    },
    methods:{
          getCityInfo(){
               this.$axios.get('/api/city.json')
               .then((res)=>{
                    //  console.log(res.data)
                     res = res.data
                     console.log(res)
                     if(res.ret && res.data){
                        const data = res.data  
                        this.allCities = data.cities
                        this.allHotCities = data.hotCities
                     }
               })
          },
          handleLetterChange(letter){
                // console.log(letter)
                this.letter = letter
          }
    },
    mounted(){
          this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>
