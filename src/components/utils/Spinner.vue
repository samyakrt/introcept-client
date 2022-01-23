<template>
  <div class="spinner-border" :class="{'spinner-border-sm': small}" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default:() => false
        }
    }
}
</script>