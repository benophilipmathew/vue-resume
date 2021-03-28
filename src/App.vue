<template>
  <div id="app">
    <div class="container is-fluid">
      <personal-info />
      <education />
      <technical-skills />
      <work-experience />
    </div>
  </div>
</template>

<script>
import PersonalInfo from "@/sections/PersonalInfo";
import Education from "@/sections/Education";
import TechnicalSkills from "@/sections/TechnicalSkills";
import WorkExperience from "@/sections/WorkExperience";

export default {
  name: 'App',
  components: {
    WorkExperience,
    TechnicalSkills,
    Education,
    PersonalInfo
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

#app {
  width: 670px;
  font-family: 'Ubuntu Condensed', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin: 40px 18px 18px 18px;
}
</style>
