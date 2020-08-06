<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <v-row>
      <v-col cols="12" lg="6">
        <div style="margin-bottom: 1.625em;">
          <h1>
            {{ contact.title }}
          </h1>
          <br />
          <p>
            {{ contact.content }}
          </p>
        </div>
      </v-col>
      <v-col style="padding-top: 2.5em;" cols="12" lg="6">
        <v-form id="contact-form">
          <v-text-field label="Name" placeholder="Enter your full name" />
          <v-text-field label="Email" placeholder="Enter your email address" />
          <v-text-field
            label="Phone (optional)"
            placeholder="Enter your phone number"
          />
          <v-textarea label="Message" placeholder="Enter a message" />
          <div class="alert alert-success success-message hidden success--text">
            {{ contact.contact_form.success_message }}
          </div>
          <div class="alert alert-danger error-message hidden error--text">
            {{ contact.contact_form.error_message }}
          </div>
          <div style="margin-top: 1.625em;">
            <v-btn color="primary" lg>
              Submit
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['contact']),
  },
}
</script>
