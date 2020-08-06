<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <v-row>
      <v-col style="margin-bottom: 2.5em;">
        <h1 style="margin: 1em 0;">
          {{ page.title }}
        </h1>
        <p>
          {{ page.content }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['page']),
  },
  mounted() {
    this.$store.dispatch('filterDynamicPages', this.$route.params.title)
  },
}
</script>
