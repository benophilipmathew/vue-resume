<template>
  <div id="app" class="root-app-container">
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
