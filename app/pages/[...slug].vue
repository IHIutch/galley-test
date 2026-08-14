<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(
  () => `content:${route.path}`,
  () => queryCollection('content').path(route.path).first(),
  { watch: [() => route.path] }
)
</script>

<template>
  <main>
    <ContentRenderer v-if="page" :value="page" />
    <p v-else>Page not found.</p>
  </main>
</template>
