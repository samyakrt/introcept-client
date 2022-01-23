<template>
  <div class="spinner-border" :class="{small: 'border-sm'}" role="status">
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