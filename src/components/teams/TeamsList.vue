<template>
  <router-view></router-view>
    <button @click="dataSaved = ! dataSaved" v-show="dataSaved"> Saved</button>
    <button @click="dataSaved = ! dataSaved" v-show="!dataSaved"> not saved</button>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {

  beforeRouteLeave(_ , _2 ,next) {
    if (this.dataSaved) {
      next(true)
    } else {
      const yeap = confirm('sure to leave??')
      next(yeap)
    }
  } ,

  data(){
    return{
      dataSaved:false
    }
  } ,
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>