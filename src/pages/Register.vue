<template>
  <form class="container" @submit.prevent="saveUser">
    <h3>add new record</h3>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <InputField v-model="user.name" name="name" />
        <ErrorMessage :errors="v$.user.name.$errors" />
        <div class="text-danger" v-text="errors.get('name')"></div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <InputField v-model="user.email" type="email" name="Email" />
        <ErrorMessage :errors="v$.user.email.$errors" />
        <div class="text-danger" v-text="errors.get('email')"></div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <InputField v-model="user.address" name="Address" />
        <ErrorMessage :errors="v$.user.address.$errors" />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <InputField v-model="user.phone" type="number" name="Telephone" />
        <ErrorMessage :errors="v$.user.phone.$errors" />
        <div class="text-danger" v-text="errors.get('phone')"></div>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <div class="mb-3">
          <label for="nationality" class="form-label">Nationality</label>
          <select
            name="nationality"
            id="nationality"
            class="form-select"
            v-model="user.nationality"
          >
            <option value="" selected hidden>Select nationality</option>
            <option
              v-for="(nationality, index) in nationalities"
              :key="index"
              :value="nationality"
            >
              {{ nationality }}
            </option>
          </select>
        </div>
        <ErrorMessage :errors="v$.user.nationality.$errors" />
        <div class="text-danger" v-text="errors.get('nationality')"></div>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <div class="mb-3">
          <label for="gender" class="form-label">Select Gender</label>
          <div class="d-flex flex-wrap justify-content">
            <Radio v-model="user.gender" value="male" />
            <Radio v-model="user.gender" value="female" />
          </div>
          <ErrorMessage :errors="v$.user.gender.$errors" />
          <div class="text-danger" v-text="errors.get('gender')"></div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <label for="form-label">Preferred mode of contact</label>
        <select
          name="mode_of_contact"
          v-model="user.mode_of_contact"
          class="form-select"
        >
          <option value="" selected hidden>Select Mode of contact</option>
          <option
            v-for="(mode, index) in mode_of_contact"
            :key="index"
            :value="mode"
          >
            {{ mode }}
          </option>
        </select>
        <ErrorMessage :errors="v$.user.mode_of_contact.$errors" />
        <div class="text-danger" v-text="errors.get('gender')"></div>
      </div>
      <div class="col-12">
        <label for="education_background" class="form-label"
          >Education Background:</label
        >
        <textarea
          name="education_background"
          id="education_background"
          cols="30"
          rows="5"
          class="form-control"
          v-model="user.education_background"
        ></textarea>
        <ErrorMessage :errors="v$.user.education_background.$errors" />
        <div class="text-danger" v-text="errors.get('gender')"></div>
      </div>
    </div>
    <div class="button-group mt-4">
      <button type="submit" class="btn btn-primary" :disabled="is_loading">
        <Spinner small v-if="is_loading" />
        Save
      </button>
      <RouterLink tag="button" class="btn btn-secondary mx-3" :to="{ name: 'home' }">
        Cancel
      </RouterLink>
    </div>
  </form>
</template>

<script>
import InputField from "~/components/utils/InputField.vue";
import useVuelidate from "@vuelidate/core";
import Radio from "~/components/utils/Radio.vue";
import nationalities from "~/data/nationality.json";
import ErrorMessage from "~/components/utils/ErrorMessage.vue";
import validationRules from "~/validations/register";
import axios from "axios";
import swal from "sweetalert";
import Errors from "~/helpers/Errors";
import Spinner from "~/components/utils/Spinner.vue";

export default {
  components: {
    InputField,
    Radio,
    ErrorMessage,
    Spinner,
  },
  setup(props) {
    return {
      v$: useVuelidate(),
    };
  },
  data: () => ({
    user: {
      name: "",
      phone: "",
      email: "",
      address: "",
      nationality: "",
      education_background: "",
      gender: "",
      mode_of_contact: "",
    },
    is_loading: false,
    errors: new Errors(),
    mode_of_contact: ["none", "email", "phone"],
    nationalities: [],
  }),
  created() {
    this.nationalities = nationalities.map(({ nationality }) => nationality);
  },
  validations() {
    return validationRules;
  },
  methods: {
    async saveUser() {
      const result = await this.v$.$validate();
      if (!result) {
        swal({
          title: "Please fill the details in the form",
          icon: "error",
        });
        return;
      }
      try {
        this.is_loading = true;
        const {
          data: { message },
        } = await axios.post(`/users`, this.user);
        this.is_loading = false;
        await swal({
          title: message,
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          swal({
            title: "Please check the form again!",
            icon: "error",
          });
          this.errors.record(response.data.errors);
        } else {
          swal({
            title: "Something went wrong!",
            icon: "error",
          });
        }
      }
    },
  },
};
</script>
<style scoped>
.row {
  --bs-gutter-y: 1rem;
}
</style>