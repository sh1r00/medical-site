<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <div v-if="blogs">
      <v-row
        v-for="(item, index) in blogs"
        :key="index"
        style="margin-bottom: 3.8em;"
      >
        <v-col style="margin-bottom: 1.625em;">
          <v-btn :to="`/blog/${item.value.title}`" text>
            <h3 style="margin-bottom: 1.625em;">
              {{ item.value.title }}
            </h3>
          </v-btn>
          <v-row>
            <v-img
              class="img-circle"
              max-width="30px"
              height="30px"
              :src="`${process.env.BASE_URL}${item.value.author.image.path}`"
            />
            <p style="margin: 0 1em;">
              {{ item.value.author.title }}
            </p>
            <span>
              {{ item.value.timestamp }}
            </span>
          </v-row>
        </v-col>
        <v-row>
          <p>
            {{ item.value.teaser }}
          </p>
          <div>
            <v-btn :to="`/blog/${item.value.title}`" text>
              Read More...
            </v-btn>
          </div>
        </v-row>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['blogs']),
  },
  mounted() {
    this.$store.dispatch('getBlogs', 'blog')
  },
}
</script>

<style scoped>
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
