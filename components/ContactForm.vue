<template>
  <div class="card">
    <h4 class="text-center mb-2">
      Si está interesado en saber más sobre nuestra franquicia, envíenos un
      mensaje llenando este formulario.
    </h4>
    <ff-spinner v-if="status === 'loading'"></ff-spinner>
    <form v-else @submit.prevent="submitContactForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre y Apellido"
          name="name"
          required
          autocomplete="name"
          v-model="contactForm.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="text"
          class="form-control"
          placeholder="nombre@dominio.com"
          name="email"
          required
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
          autocomplete="email"
          v-model="contactForm.email"
        />
      </div>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input
          type="text"
          class="form-control"
          name="phone"
          required
          pattern="[0-9]{8}"
          minlength="8"
          maxlength="8"
          placeholder="Ingrese su teléfono"
          autocomplete="tel-national"
          v-model="contactForm.phone"
        />
      </div>
      <div class="form-group">
        <label for="subject">Tema:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese tema del mensaje"
          name="subject"
          required
          minlength="8"
          v-model="contactForm.subject"
        />
      </div>
      <div class="form-group">
        <label for="body">Mensaje:</label>
        <textarea
          cols="30"
          rows="4"
          placeholder="Elabore sobre el tema del mensaje"
          class="form-control"
          name="body"
          required
          minlength="12"
          v-model="contactForm.body"
        ></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-1">enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      status: '',
      contactForm: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        body: ''
      }
    }
  },
  methods: {
    ...mapActions({
      alert: 'alert'
    }),
    contactRq() {
      this.alert({
        message: 'Gracias por contactarnos.',
        type: 'success',
        duration: 7500
      })
      return new Promise((resolve, reject) => {
        this.status = 'loading'
        axios
          .post(process.env.apiUrl + 'contact', this.contactForm)
          .then(res => {
            this.status = 'success'
            resolve(res)
          })
          .catch(err => {
            this.status = 'error'
            reject(err)
          })
      })
    },
    submitContactForm() {
      this.contactRq()
        .then(res => {
          this.alert({
            message: 'Gracias por contactarnos.',
            type: 'success',
            duration: 7500
          })
          this.resetForm()
        })
        .catch(err => {
          this.alert({
            message: 'Error. Favor verificar los datos ingresados.',
            type: 'success',
            duration: 7500
          })
        })
    },
    resetForm() {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        body: ''
      }
    }
  }
}
</script>
