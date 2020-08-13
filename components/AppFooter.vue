<template>
  <v-footer class="footer invisible pa-0">
    <v-row>
      <v-col sm="8">
        <div style="font-size: 1.25em; margin-bottom: 0.625em;">
          Contact Us
        </div>
        <br />
        <strong>
          Phone:
        </strong>
        <br />
        <v-btn :href="`tel:${globals.contact_info.phone}`" text>
          <h5
            style="font-family: Arial, Helvetica, sans-serif;"
            class="white--text"
          >
            {{ globals.contact_info.phone }}
          </h5>
        </v-btn>
      </v-col>
      <br />
      <v-col sm="8">
        <strong>
          Email:
        </strong>
        <br />
        <v-btn :href="`mailto:${globals.contact_info.email}`" text>
          <h5
            style="font-family: Arial, Helvetica, sans-serif;"
            class="white--text"
          >
            {{ globals.contact_info.email }}
          </h5>
        </v-btn>
      </v-col>
      <br />
      <v-col sm="8">
        <strong>
          Address:
        </strong>
        <br />
        <v-btn
          :href="`http://maps.google.com/?q=${globals.contact_info.address.street} ${globals.contact_info.address.city}`"
          target="blank"
          text
        >
          <v-col>
            <h5
              style="font-family: Arial, Helvetica, sans-serif;"
              class="white--text"
            >
              {{ globals.contact_info.address.street }}
            </h5>
            <h5
              style="font-family: Arial, Helvetica, sans-serif;"
              class="white--text"
            >
              {{ globals.contact_info.address.city }}
            </h5>
          </v-col>
        </v-btn>
      </v-col>
      <v-col>
        <v-col sm="4">
          <div style="font-style: 1.625em; margin-bottom: 1.625em;">
            Connect
          </div>
          <div style="margin-bottom: 1.625em;">
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.facebook"
              target="_blank"
              text
            >
              <v-icon class="fa fa-facebook" />
            </v-btn>
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.twitter"
              target="_blank"
              text
            >
              <v-icon class="fa fa-twitter font-26" />
            </v-btn>
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.google_plus"
              target="_blank"
              text
            >
              <v-icon class="fa fa-google-plus" />
            </v-btn>
          </div>
          <div style="margin-bottom: 1.625em;">
            &copy; {{ globals.footer.year }} {{ globals.footer.company_title }}
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['globals']),
  },
}
</script>
