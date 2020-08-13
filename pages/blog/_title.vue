<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <v-row style="margin-bottom: 2.5em;">
      <v-col style="margin-bottom: 1.625e;">
        <h1>
          {{ blog.title }}
        </h1>
        <v-row style="padding: 1em;">
          <v-img
            class="img-circle"
            max-width="30px"
            height="30px"
            :src="`${process.env.BASE_URL}${blog.author.image.path}`"
            crossorigin="anonymous"
          />
          <p style="margin: 0 1em;">
            {{ blog.author.title }}
          </p>
          <p>
            {{ blog.timestamp }}
          </p>
        </v-row>
        <br />
        <div v-if="blog.hero">
          <div style="margin-bottom: 2.225em;">
            <v-img
              class="center-block"
              max-heigh="900px"
              max-width="900px"
              :src="`${process.env.BASE_URL}${blog.hero.path}`"
              crossorigin="anonymous"
            />
          </div>
        </div>
        {{ blog.content }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['blog']),
  },
  created() {
    this.$store.dispatch('getBlogs', 'blog')
  },
  mounted() {
    this.$store.dispatch('filterBlogs', this.$route.params.title)
  },
}
</script>
