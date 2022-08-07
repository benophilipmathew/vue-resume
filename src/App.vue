<template>
  <div id="app" class="root-app-container">
    <div class="container is-fluid">
      <personal-info />
      <education-details />
      <technical-skills />
      <work-experience />
    </div>
  </div>
</template>

<script>
import PersonalInfo from "@/sections/PersonalInfo";
import EducationDetails from "@/sections/EducationDetails";
import TechnicalSkills from "@/sections/TechnicalSkills";
import WorkExperience from "@/sections/WorkExperience";

export default {
  name: 'App',
  components: {
    WorkExperience,
    TechnicalSkills,
    EducationDetails,
    PersonalInfo
  }
}
</script>
