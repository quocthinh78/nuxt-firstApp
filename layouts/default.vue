<template>
  <div>
    <Header />
    <Nuxt />
    <AlertComponent />
    <Footer />
    <v-modal v-slot="payload" name="userFormModal">
      <h2>{{payload && payload.payload ? "Edit User" : "Create a new User"}}</h2>
      <user-form :author="payload.payload" @submit="onSubmit($event)" />
    </v-modal>

  </div>
</template>
<script>

import UserForm from "@/components/UserForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  components : {
    Header,
    Footer,
    UserForm
  },
  methods:{
    onSubmit(dataAuthor){
      if(dataAuthor && !dataAuthor.id){
        this.$store.dispatch("addUser", dataAuthor)
        .then(() => this.$modal.closes({name : 'userFormModal'}))
      }else {
        this.$store.dispatch("editUser" , dataAuthor)
        .then(() => {
          this.$modal.closes({name : 'userFormModal'})
          this.$router.push("/user")
        })
      }
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
