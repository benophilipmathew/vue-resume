<template>
  <section v-if="educationData" class="bottom-pad bottom-border">
    <p class="section--heading">Education</p>
    <education-item v-for="(data, index) in educationData" :key="index" :data="data" />
  </section>
</template>
<script>
  import EducationItem from '@/sections/components/EducationItem';
  import benoData from '@/fixtures/beno-data';

  export default {
    components: {
      EducationItem
    },
    setup() {
      return {
        educationData: benoData.Education
      }
    }
  }
</script>
