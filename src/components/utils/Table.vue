<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th v-for="(title,index) in headers" :key="index">
                    {{title}}
                </th>
            </tr>
        </thead>
        <tbody v-if="records.length">
            <tr v-for="record in records" :key="record.id">
                <slot :record="record"></slot>
            </tr>
        </tbody>   
        <tbody v-else>
            <slot name="empty"></slot>
        </tbody>
    </table>
</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>