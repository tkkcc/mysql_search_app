<template>
  <!-- <v-layout row justify-center> -->
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :persistent=true>
      <!-- <v-btn color="primary" dark slot="activator">Open Dialog</v-btn> -->
      <v-card color='cyan lighten-4'>
        <v-toolbar dark color="primary">
          <!-- <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn> -->
          <v-toolbar-title class=mx-auto>Connect to Your Database</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
          <!-- <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <v-container>
          <setting-form/>
        </v-container>
      </v-card>
    </v-dialog>
  <!-- </v-layout> -->
</template>
<script>
import SettingForm from "./Connect/SettingForm.vue";
export default {
  props: {
    value: {
      type: String,
      default: "localhost"
    }
  },
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  components: {
    SettingForm
  }
};
</script>

<style scoped>

* {
  overflow: hidden;
}
v-card{
  
  /* background-color: cyan; */
  /* height: 100vh; */
}
</style>