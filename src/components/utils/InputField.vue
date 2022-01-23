<template>
    <div class=" mb-3">
      <label :for="name" class="form-label"> Enter {{ name }}: </label>
    <input :type="type" class="form-control" @input="handleChange" />
    </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String],
    },
    name: {
      type: String,
      required: true,
    },
    
    type: {
      type: String,
      default: () => "text",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    
    const handleChange = (e) => {
        emit("update:modelValue",event.currentTarget.value)
    }
    return {
      handleChange,
    };
  },
};
</script>