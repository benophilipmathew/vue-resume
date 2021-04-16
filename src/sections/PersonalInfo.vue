<template v-if="personalInfo">
  <section class="bottom-pad bottom-border">
    <h1 class="personal-info--name" v-html="personalInfo.FullName" />
    <h2 class="personal-info--professional-title" v-html="personalInfo.ProfessionalTitle" />
    <div class="personal-info--details">
      <div>
        <span><i class="fa fa-map-marker" aria-hidden="true"></i>{{ personalInfo.PersonalDetails.currentLocation }}</span>
        <span><i class="fa fa-street-view" aria-hidden="true"></i>{{ personalInfo.PersonalDetails.nationality }}</span>
        <span><i class="fa fa-info-circle" aria-hidden="true"></i>{{ personalInfo.PersonalDetails.DOB }}</span>
        <span><i class="fa fa-briefcase" aria-hidden="true"></i>{{ personalInfo.PersonalDetails.totalExperience }}</span>
      </div>
      <div>
        <span>
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <a :href="mobileHref">{{ personalInfo.PersonalDetails.mobile }}</a>
        </span>
        <span>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a :href="emailHref">{{ personalInfo.PersonalDetails.email }}</a>
        </span>
      </div>
      <div>
        <span class="handle">
          <a :href="linkedInHref"><i class="fa fa-linkedin" aria-hidden="true"></i>/{{ personalInfo.PersonalDetails.handles.linkedIn }}</a>
        </span>
        <span class="handle">
          <a :href="githubHref"><i class="fa fa-github" aria-hidden="true"></i>/{{ personalInfo.PersonalDetails.handles.github }}</a>
        </span>
        <span class="handle">
          <a :href="facebookHref"><i class="fa fa-facebook" aria-hidden="true"></i>/{{ personalInfo.PersonalDetails.handles.facebook }}</a>
        </span>
      </div>
    </div>
    <div class="personal-info--about-me">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <span v-html="personalInfo.BriefAboutMe.trim()" />
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </div>
    <div class="personal-info--languages" v-if="personalInfo.Languages && personalInfo.Languages.length > 0">
      <p class="personal-info--languages-heading"><i class="fa fa-language" aria-hidden="true" />I SPEAK</p>
      <span class="personal-info--languages-list-item" v-for="(lang, index) in personalInfo.Languages" :key="index"
         v-html="lang">
      </span>
    </div>
  </section>
</template>
<script>
import benoData from '@/fixtures/beno-data';
import { computed } from 'vue';

export default {
  setup() {
    const personalInfo = benoData.PersonalInfo;
    return {
      personalInfo,
      mobileHref: computed(() => `tel:${personalInfo.PersonalDetails.mobile}`),
      emailHref: computed(() => `mailto:${personalInfo.PersonalDetails.email}`),
      linkedInHref: computed(() => `https://linkedin.com/in/${personalInfo.PersonalDetails.handles.linkedIn}/`),
      facebookHref: computed(() => `https://facebook.com/${personalInfo.PersonalDetails.handles.facebook}/`),
      githubHref: computed(() => `https://github.com/${personalInfo.PersonalDetails.handles.github}/`)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet">

.personal-info {
  &--name {
    color: $primary-dark;
    font-size: 26px;
    margin: 0;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
  }

  &--professional-title {
    color: $secondary-dark;
    font-size: 17px;
    text-transform: uppercase;
    padding: 8px 0 10px 0;
    margin: 0;
  }

  &--details {
    margin-left: 1px;
    font-family: $font-secondary;

    div {
      padding-bottom: 6px;
    }
    span {
      text-transform: uppercase;
      font-size: 15px;
      color: $primary-dark;

      a {
        font-size: 15px;
        cursor: pointer;
        text-decoration: none;
        text-transform: lowercase;
        color: $primary-dark;
      }

      i {
        color: $secondary-dark;
        padding: 0 3px 0 10px;

        &.fa-mobile { font-weight: bold; }
      }

      &:first-child {
        i { padding: 0 3px 0 0; }
      }

      &.handle {
        a, i {
          color: $primary-dark;
        }

        a {
          border: 1px solid $grey-light;
          padding: 1px 4px;
          margin: 0 10px 0 0;
          border-radius: 3px;
          font-size: 14px;
        }
        i {
          padding: 0 1px 0 0;
          font-size: 13px;
        }
      }
    }
  }

  &--languages {
    &-heading, &-list-item {
      margin: 8px 0;

      i { font-size: 18px; padding-right: 5px; }
    }

    &-heading {
      display: inline-block;
      margin: 10px 10px 0 0;
      font-size: 14px;
      font-weight: bold;
      color: $primary-dark;
    }

    &-list-item {
      font-family: $font-secondary;
      font-size: 14px;
      background-color: $secondary-light;
      color: #ffffff;
      text-transform: uppercase;
      padding: 2px 6px;
      margin-right: 8px;
      border-radius: 2px;
    }
  }

  &--about-me {
    margin-top: 8px;

    span {
      font-family: $font-secondary;
      color: $grey-dark;
      font-size: 15px;
      margin: 5px 0;
      line-height: 25px;
    }
    i {
      color: $grey-light;
      padding: 5px;
      font-size: 16px;
    }
  }
}
</style>
