<template>
  <v-toolbar
    style="margin-bottom: 2.25em 0; padding-top: 0.4em;"
    flat
    color="#90CAF9"
    dense
  >
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <div v-for="item in nav.single" :key="item.value.title">
        <v-btn text :to="item.value.content[0].value" link exact>
          {{ item.value.title }}
        </v-btn>
      </div>
      <div v-for="item in nav.dropdown" :key="item.value.title">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on"> {{ item.value.title }} &darr; </v-btn>
          </template>
          <v-list
            v-for="dropItem in item.value.content"
            :key="dropItem.value.title"
          >
            <v-list-item :to="`/page/${dropItem.value.title}`" link exact>
              <v-list-item-content>
                <v-list-item-title>
                  {{ dropItem.value.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-for="item in nav.permanent" :key="item.value.title">
        <v-btn text :to="item.value.content[0].value" link exact>
          {{ item.value.title }}
        </v-btn>
      </div>
    </v-toolbar-items>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleNavDrawer" />
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['nav']),
  },
  methods: {
    toggleNavDrawer() {
      this.$emit('toggle-nav-drawer')
    },
  },
}
</script>
