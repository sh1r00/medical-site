<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <v-row>
      <v-col>
        <h1>
          {{ faqs.title }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div v-for="(item, index) in faqs.questions" :key="index">
          <v-row style="margin-bottom: 2.5em;">
            <v-col>
              <h3>
                {{ item.value.question }}
              </h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>
                {{ item.value.answer }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['faqs']),
  },
}
</script>
