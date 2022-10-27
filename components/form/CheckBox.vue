<template>
  <label class="flex gap-x-2 items-center">
    <input class="bg-white" type="checkbox" :name="name" :defaultValue="defaultValue">
    <span class="text-base font-thin text-slate-400 leading-none">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    defaultValue: { type: String, default: '' },
    label: { type: String, default: '' }
  }
}
</script>
