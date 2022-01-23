<template >
  <div class="container my-3">
    <div class="d-flex justify-content-between my-5">
      <h3>Records</h3>
      <RouterLink tag="button" class="btn btn-primary" :to="{ name: 'register' }">
          Add new record
        </RouterLink>
    </div>
    
    <Spinner v-if="is_loading" />
    <Table v-else :records="records" :headers="headers">
      <template v-slot:default="{ record }">
        <td v-for="(title, index) in headers" :key="index">
          {{ record[title] }}
        </td>
      </template>
      <template #empty>
          <th :colspan="headers.length" class="text-center">
              No records found.
          </th>
      </template>
    </Table>
  </div>
</template>
<script>
import axios from "axios";
import Spinner from "~/components/utils/Spinner.vue";
import Table from "~/components/utils/Table.vue";

export default {
  components: {
    Spinner,
    Table,
  },
  data() {
    return {
      records: [],
      is_loading: true,
      headers: [
        "id",
        "name",
        "email",
        "phone",
        "address",
        "nationality",
        "education_background",
        "gender",
        "mode_of_contact",
      ],
    };
  },
  async created() {
    try {
      const {
        data: { records },
      } = await axios.get(`/users`);
      this.records = records;
    //   this.is_loading = false;
    } catch (error) {}
  },
};
</script>