<template>
  <div id="app">
    <!-- <landing-page></landing-page> -->
    <TableComponent :data="[
        { firstName: 'John', birthday: '04/10/1940', songs: 72 },
        { firstName: 'Paul', birthday: '18/06/1942', songs: 70 },
        { firstName: 'George', birthday: '25/02/1943', songs: 22 },
        { firstName: 'Ringo', birthday: '07/07/1940', songs: 2 },
        ]" sort-by="songs" sort-order="asc">
      <TableColumn show="firstName" label="First name"></TableColumn>
      <TableColumn show="songs" label="Songs" data-type="numeric"></TableColumn>
      <TableColumn show="birthday" label="Birthday" :filterable="false" data-type="date:DD/MM/YYYY"></TableColumn>
    </TableComponent>
    <button>adddda</button>
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage";
import mysql from "mysql";
import { TableComponent, TableColumn } from "vue-table-component";

export default {
  data() {
    return {filterable:false};
  },
  components: {
    LandingPage,
    TableComponent,
    TableColumn
  },
  methods: {
    sql() {
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "0",
        database: "bookdb"
      });
      connection.connect();
      connection.query("select name from author", (error, results, fields) => {
        if (error) throw error;
        results.forEach(result => console.log(result.name));
      });
      connection.end();
    }
  }
};
</script>

<style>
/* CSS */
body {
  -webkit-app-region: no-drag;

}
</style>