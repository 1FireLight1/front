<template>
  <div class="twocardstwosouls">
    <InfoCard/>
    <form-card/>
  </div>

</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import FormCard from '@/components/FormCard.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components:{
    InfoCard,
    FormCard
  },

  methods:{
    // btnHandler($event){
    //   console.warn($event);  
    // },
    // onMouseover($event){
    //   console.warn($event);   
    // }
    onformSubmit(){
      //this.msg = null;
    },
    // sendFormData(){

    // }
  },
  data: () => ({
      counter:1
  }),
  mounted(){
    
    // const submitBtn = document.querySelector('#SubButton');
    // const mycard = document.querySelector('.first_card');
    //const form = document.querySelector('.form_action');
    // submitBtn.addEventListener('click', ($event) => {
    //   console.warn($event);
    // })

    // mycard.addEventListener('mouseover',($event) =>{
    //   console.warn($event);
    // })
    // form.addEventListener('submit',($event) =>{
    //   $event.preventDefault();
    //   console.warn($event);
    // })

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* * {
  outline: none;
}
@media handheld {
 .twocardstwosouls{
  flex-direction: column;
 }
}
@media screen {
  .twocardstwosouls{
    flex-direction:row;
  }
}
.twocardstwosouls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;  
    justify-content:center;  
}
.twocardstwosouls div{
  margin: 50px;
  padding: 10px; 
  border-radius: 7%;
}
#photo{
  height:auto;
  width: 155px;
  border-radius: 50%;
  border: 5px solid #072F66;
  text-align: center;
}
.card{
  background:linear-gradient(#123EAB,#2A4380,#06246F,#466FD5,#6C8AD5);
  box-shadow: 1px 1px 1px 1px 	#3BA3D0, 
    2px 2px 1px 1px 	#63AFD0,
    2px 2px 5px 5px lightgrey;
  min-height: 450px;
  min-width: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.card div{
  margin: 0 auto;
  padding: 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

h3 {
  color: #FF9A00;
  text-shadow: 1px 1px 1px black
}
li {
  color: #FF9A00;
  align-items: center;
  text-shadow: 1px 1px 1px black;
}
label {
  color: #FF9A00;
  text-shadow: 1px 1px 1px black
}
#SubButton {
  background-color: #6C8AD5;
  border-radius: 5%;
  color: #FF9A00;
  text-shadow: 1px 1px 1px black
}
#SubButton:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  cursor: pointer;
}
#SubButton:active{  
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}
#form_action{
  width:auto;
} */
</style>