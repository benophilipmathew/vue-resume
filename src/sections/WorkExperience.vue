<template>
  <section v-if="ExperienceData" class="bottom-pad">
    <p class="section--heading">Experience</p>
    <WorkExperienceItem v-for="(data, index) in ExperienceData" :key="index" :data="data" />
  </section>
</template>
<script>
import WorkExperienceItem from "@/sections/components/WorkExperienceItem";
import benoData from "@/fixtures/beno-data";

export default {
  components: {
    WorkExperienceItem
  },
  computed: {
    ExperienceData() {
      return benoData && benoData.Experience ? benoData.Experience : null;
    }
  }
}
</script>
