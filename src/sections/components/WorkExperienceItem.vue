<template>
  <div v-if="data" class="section-item--details">
    <div class="experience-item-head">
      <p class="section-item--duration">
        <i class="fa fa-calendar-o" aria-hidden="true" />
        {{ `${ data.duration.start } - ${ data.duration.end }` }}
      </p>
      <p class="section-item--location">
        <i class="fa fa-map-marker" aria-hidden="true" />
        {{ data.location }}
      </p>
    </div>
    <div class="section-item--content">
      <p class="section-item--content-heading" v-html="data.company" />
      <ul>
        <li>Worked on Web & Windows Application, WCF,
          WPF, Silverlight, CMS, CRM, MVC, Web API, UI,
          Angular 4</li>
        <li>Currently working on angular which is a CRM
          Based Project</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
<style>
.experience-item-head {
  width: 180px;
}
.section-item--content ul {
  list-style: inside;
  margin: 5px 0 20px 0;
  color: #436e88;
  padding: 2px 0 5px 0;
}
.section-item--content ul > li {
  font-size: 14px;
  padding: 3px 0;
}
</style>
