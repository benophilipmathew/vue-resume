<template>
  <div v-if="data && data.skills" class="technical-skills--container">
    <p v-if="data.header" class="technical-skills--header" v-html="data.header" />
    <ul class="technical-skills--list">
      <li class="technical-skills--list-item" v-for="(skill, index) in data.skills" :key="index">
        <p class="technical-skills--title" v-html="skill.title"></p>
        <ul class="technical-skills--rating">
          <li v-for="(r, i) in ratings" :key="i">
            <i v-bind:class="{ 'fa fa-circle':r <= skill.rating, 'fa fa-circle-o': r > skill.rating }" aria-hidden="true"></i>
          </li>
        </ul>
      </li>
    </ul>
    <div v-if="data.break && data.break > 0">
      <br v-for="i in data.break" :key="i" class="page-break" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ratings: [1, 2, 3, 4, 5]
    }
  },
  props: {
    data: Object
  }
}
</script>
<style lang="scss">
  .technical-skills {
    &--container {
      margin: 15px 0 0 0;
      padding-left: 3px;
    }

    &--header {
      font-family: $font-secondary;
      padding: 0 0 8px 0;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: $secondary-light;
    }

    &--list {
      list-style: none;
      padding: 0;
      margin: 10px 0 0 0;

      &-item {
        display: inline-block;
        padding: 0 15px 20px 0;
        width: 30%;
      }
    }

    &--title {
      margin: 0;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      color: $primary-dark;
    }

    &--rating {
      list-style: none;
      padding: 0;
      margin-left: 1px;

      li {
        display: inline-block;
        padding: 0 5px 0 0;
        color: $secondary-dark;
        font-size: 10px;
      }
    }
  }
</style>
