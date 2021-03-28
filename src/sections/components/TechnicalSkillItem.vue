<template>
  <div v-if="data && data.skills" class="technical-skills-container">
    <p v-if="data.header" class="technical-skills--header" v-html="data.header" />
    <ul class="technical-skills-list">
      <li v-for="(skill, index) in data.skills" :key="index">
        <p class="technical-skill--title" v-html="skill.title"></p>
        <ul class="technical-skill--rating">
          <li v-for="(r, i) in ratings" :key="i">
            <i v-bind:class="{ 'fa fa-circle':r <= skill.rating, 'fa fa-circle-o': r > skill.rating }" aria-hidden="true"></i>
          </li>
        </ul>
      </li>
    </ul>
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
<style>
  .technical-skills-container {
    margin: 15px 0 0 0;
    padding-left: 3px;
  }
  .technical-skills--header {
    padding: 0 0 8px 0;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: #1f820c9e;
  }
  ul.technical-skills-list {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }
  ul.technical-skills-list > li {
    display: inline-block;
    padding: 0 15px 20px 0;
    width: 30%;
  }
  .technical-skill--title {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #353563;
  }
  .technical-skill--rating {
    list-style: none;
    padding: 0;
    margin-left: 1px;
  }
  .technical-skill--rating li {
    display: inline-block;
    padding: 0 5px 0 0;
    color: #1f820c;
    font-size: 10px;
  }
</style>
