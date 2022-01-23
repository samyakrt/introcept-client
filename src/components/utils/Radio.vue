<template>
  <div class="form-check mx-3">
    <input
      class="form-check-input"
      type="radio"
      :name="value"
      :value="modelValue"
      :id="value"
      :checked="modelValue === value"
      @input="handleSelect"
    />
    <label class="form-check-label" :for="value">
      {{ value }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String],
    },
    value: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleSelect = () => {
      emit("update:modelValue", props.value);
    };
    return {
      handleSelect,
    };
  },
};
</script>