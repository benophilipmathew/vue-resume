<template>
  <section v-if="educationData" class="bottom-pad bottom-border">
    <p class="section--heading">Education</p>
    <EducationItem v-for="(data, index) in educationData" :key="index" :data="data" />
  </section>
</template>
<script>
  import EducationItem from '@/sections/components/EducationItem';
  import benoData from '@/fixtures/beno-data';

  export default {
    components: {
      EducationItem
    },
    computed: {
      educationData() {
        return benoData && benoData.Education ? benoData.Education : null;
      }
    }
  }
</script>
