<template>
  <section v-if="technicalSkillsData" class="bottom-pad bottom-border">
    <p class="section--heading">Technical Skills</p>
    <TechnicalSkillItem v-for="(data, index) in technicalSkillsData" :key="index" :data="data" />
  </section>
</template>
<script>
import benoData from "@/fixtures/beno-data";
import TechnicalSkillItem from "@/sections/components/TechnicalSkillItem";

export default {
  components: {
    TechnicalSkillItem
  },
  computed: {
    technicalSkillsData() {
      return benoData && benoData.TechnicalSkills ? benoData.TechnicalSkills : null;
    }
  }
}
</script>
<style>

</style>
