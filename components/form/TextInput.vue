<template>
  <label class="flex flex-col">
    <span class="mb-2 text-xl font-thin text-slate-400">{{ label }}</span>
    <input class="bg-white px-5 py-3 font-light text-lg rounded-full" :type="type" :name="name" :defaultValue="defaultValue" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    defaultValue: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' }
  },
  setup: () => {

  }
}
</script>
