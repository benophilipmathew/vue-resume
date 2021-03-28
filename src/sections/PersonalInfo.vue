<template v-if="data && data.PersonalInfo">
  <section class="bottom-pad bottom-border">
    <h1 class="personal-info--name" v-html="data.PersonalInfo.FullName" />
    <h2 class="personal-info--professional-title" v-html="data.PersonalInfo.ProfessionalTitle" />
    <div class="personal-info--details">
      <div>
        <span><i class="fa fa-map-marker" aria-hidden="true"></i>{{ data.PersonalInfo.PersonalDetails.currentLocation }}</span>
        <span><i class="fa fa-street-view" aria-hidden="true"></i>{{ data.PersonalInfo.PersonalDetails.nationality }}</span>
        <span><i class="fa fa-info-circle" aria-hidden="true"></i>{{ data.PersonalInfo.PersonalDetails.DOB }}</span>
        <span><i class="fa fa-briefcase" aria-hidden="true"></i>{{ data.PersonalInfo.PersonalDetails.totalExperience }}</span>
      </div>
      <div>
        <span>
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <a :href="mobileHref">{{ data.PersonalInfo.PersonalDetails.mobile }}</a>
        </span>
        <span>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a :href="emailHref">{{ data.PersonalInfo.PersonalDetails.email }}</a>
        </span>
      </div>
    </div>
    <div class="personal-info--about-me">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <span v-html="data.PersonalInfo.BriefAboutMe.trim()" />
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </div>
  </section>
</template>
<script>
import benoData from '@/fixtures/beno-data';
export default {
  computed: {
    data() {
      return benoData;
    },
    mobileHref() {
      return 'tel:' + this.data.PersonalInfo.PersonalDetails.mobile;
    },
    emailHref() {
      return 'mailto:' + this.data.PersonalInfo.PersonalDetails.email;
    }
  }
}
</script>
<style lang="scss" rel="stylesheet">
.personal-info--name {
  color: $primary-dark;
  font-size: 26px;
  margin: 0;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
}
.personal-info--professional-title {
  color: #1f820c;
  font-size: 17px;
  text-transform: uppercase;
  padding: 8px 0 10px 0;
  margin: 0;
}
.personal-info--details {
  margin-left: 1px;
}
.personal-info--details > div {
  padding-bottom: 6px;
}
.personal-info--details span {
  text-transform: uppercase;
  font-size: 15px;
  color: #353563;
}
.personal-info--details span > a {
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  text-transform: lowercase;
  color: #353563;
}
.personal-info--details span > i {
  color: #1f820c;
  padding: 0 3px 0 10px;
}
.personal-info--details span > i.fa-mobile { font-weight: bold; }
.personal-info--details span:first-child > i { padding: 0 3px 0 0; }
.personal-info--about-me { margin-top: 8px; }
.personal-info--about-me span {
  color: #53654f;
  font-size: 15px;
  margin: 5px 0;
  line-height: 25px;
}
.personal-info--about-me i {
  color: #a5afa3;
  padding: 5px;
  font-size: 16px;
}

</style>
