<template>
  <div v-if="data" class="section-item--details">
    <div>
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
      <p class="section-item--content-heading" v-html="data.courseName" />
      <p class="section-item--content-sub-heading-small" v-html="data.institutionName" />
      <p class="section-item--content-sub-heading-small" v-if="data.university" v-html="data.university" />
      <p class="section-item--content-sub-heading-small" v-if="data.board" v-html="data.board" />
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
