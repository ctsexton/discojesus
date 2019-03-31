<template lang="pug">
  fragment
    v-card.my-5.transparent.elevation-0(light tile)
      v-layout.ma-0.pa-0(wrap justify-center)
        v-flex.pa-0.ma-0(grow)
          v-layout.pa-0.ma-0(wrap justify-center)
            v-flex.pa-0(xs12 v-if="submitStatus != 'OK'")
              v-form.white--text.pa-3.transparent.standard-card(width="100%" left)
                v-text-field(
                  dark
                  v-model="name" 
                  :error-messages="nameErrors"
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  label="Name" 
                  required)
                v-text-field(
                  dark
                  v-model="email" 
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  label="Email" 
                  required)
                v-textarea(
                  dark
                  v-model="message" 
                  :error-messages="messageErrors"
                  @input="$v.message.$touch()"
                  @blur="$v.message.$touch()"
                  label="Message" 
                  required)
              v-btn.mx-0(@click="submit" left large color="success") Submit
            v-card-text.display-2.text-xs-center.white--text.py-5(v-else) Thanks, we'll get back to you ASAP!
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    message: { required, maxLength: maxLength(500) }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitStatus: null
    }
  },
  computed: {
    formUrl: function() {
      const apiUrl = 'https://admin.discojesus.wtf'
      const token = '7be69dab66baccbd24683cbc96f426'
      return `${apiUrl}/api/forms/submit/Contact?token=${token}`
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength && errors.push('500 characters max.')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    }
  },
  methods: {
    submit: function() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.$axios.$post(this.formUrl, {
          form: {
            Name: this.name,
            Email: this.email,
            Message: this.message
          }
        })
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>
