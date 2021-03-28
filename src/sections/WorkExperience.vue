<template>
  <section v-if="experienceData" class="bottom-pad">
    <p class="section--heading">Experience</p>
    <WorkExperienceItem v-for="(data, index) in experienceData" :key="index" :data="data" />
  </section>
</template>
<script>
import WorkExperienceItem from "@/sections/components/WorkExperienceItem";
import benoData from "@/fixtures/beno-data";

export default {
  components: {
    WorkExperienceItem
  },
  setup() {
    return {
      experienceData: benoData.Experience
    }
  }
}
</script>
