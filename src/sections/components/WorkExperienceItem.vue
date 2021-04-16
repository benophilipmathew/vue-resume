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
      <p class="section-item--content-heading" v-html="data.designation" />
      <p class="section-item--content-sub-heading-large" v-html="data.company" />
      <ul v-if="data.work && data.work.length > 0">
        <li v-for="(value, index) in data.work" :key="index" v-html="value" />
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
<style lang="scss">
.experience-item-head {
  min-width: 190px;
}
.section-item--content ul {
  list-style: circle;
  margin: 5px 0 10px 15px;
  color: #436e88;
  padding: 2px 0 5px 0;

  li {
    font-size: 14px;
    padding: 5px 0;
    line-height: 20px;
  }
}
</style>
