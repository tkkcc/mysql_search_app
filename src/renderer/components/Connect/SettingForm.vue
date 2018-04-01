<template>
  <v-container fluid grid-list-xl>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-layout class="row justify-center">
        <v-flex xs8>
          <v-text-field label="Host" v-model="host" required></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field label="Port" v-model="port" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout class="row justify-center">
        <v-flex xs6>
          <v-text-field label="User" v-model="user" required></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Password" 
          v-model="password" 
          required 
          :append-icon="e1 ? 'visibility' : 'visibility_off'" 
          :append-icon-cb="() => (e1 = !e1)" 
          :type="e1 ? 'password' : 'text'"></v-text-field>
        </v-flex>
      </v-layout>

      <!-- <v-select
      label="Item"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>
    <v-checkbox
      label="Do you agree?"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox> -->

      <!-- <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn> -->
    </v-form>
  </v-container>
</template>
<script>
//   import axios from 'axios'

export default {
  data: () => ({
    e1:true,
    host: "localhost",
    user: "rot",
    password: "",
    port: 3306
    // valid: true,
    // name: "",
    // nameRules: [
    //   v => !!v || "Name is required",
    //   v => (v && v.length <= 10) || "Name must be less than 10 characters"
    // ],
    // email: "",

    // emailRules: [
    //   v => !!v || "E-mail is required",
    //   v =>
    //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    //     "E-mail must be valid"
    // ],
    // select: null,
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    // checkbox: false
  }),

  methods: {
    submit() {
      // if (this.$refs.form.validate()) {
      //   // Native form submission is not yet supported
      //   axios.post('/api/submit', {
      //     name: this.name,
      //     email: this.email,
      //     select: this.select,
      //     checkbox: this.checkbox
      //   })
      // }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>