<template>
  <v-container fluid class="pt-3">
    <v-row id="main" tag="main" style="padding-top: 1.63em;">
      <v-col id="carousel" class="pa-0" tag="section">
        <div v-if="home.carousel">
          <v-carousel cycle height="400px" hide-delimiter-background>
            <v-carousel-item
              v-for="(slide, i) in home.carousel"
              :key="i"
              :src="`${baseUrl}${slide.path}`"
              transition="fade-transition"
              reverse-transition="fade-transition"
            />
          </v-carousel>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        id="headlines"
        class="text-center"
        style="padding: 2.5em 0;"
        tag="section"
      >
        <div>
          <h2 style="font-size: 2.25em;" class="primary--text">
            {{ home.headline }}
          </h2>
          <p style="font-size: 1.25em;">
            {{ home.subheadline }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row id="blurbs" style="padding: 2.53m 0 0 0;" tag="section">
      <v-row v-if="home.blurbs">
        <v-col
          v-for="(item, index) in home.blurbs"
          :key="index"
          cols="12"
          lg="4"
          class="text-center pa-0"
        >
          <p style="font-size: 1.625em; margin: 0 0 1.25em 0;">
            {{ item.value.title }}
          </p>
          <div style="margin-bottom: 1.25em;">
            <v-img
              class="img-circle center-block"
              :src="`${baseUrl}${item.value.image.path}`"
              height="300px"
              width="300px"
            />
          </div>
          <div class="text-center pa-3" style="margin-bottom: 1.25em;">
            {{ item.value.content }}
          </div>
        </v-col>
      </v-row>
      <div class="clearfix" />
      <div class="clearfix" />
    </v-row>
    <v-row>
      <v-col
        id="cta"
        class="text-center"
        style="padding: 2.5em 0;"
        tag="section"
      >
        <h2 style="font-size: 2.25em;" class="primary--text">
          {{ home.cta.text }}
        </h2>
        <p style="font-size: 1.25em; margin-bottom: 1.25em;">
          {{ home.cta.subtext }}
        </p>
        <div style="font-size: 1.25em;">
          <v-btn lg :to="home.cta.buttonLink">
            {{ home.cta.buttonText }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['home']),
    baseUrl() {
      return process.env.BASE_URL
    },
  },
}
</script>

<style scoped>
.img-circle {
  border-radius: 50%;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
