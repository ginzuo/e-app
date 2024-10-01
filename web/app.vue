<template>
  <Body class="antialiased">
      <NuxtLayout>
          <NuxtPage />
      </NuxtLayout>
  </Body>
</template>

<script lang="ts" setup>
useHead({
  title: 'eApp',
  meta: [
      { name: 'description', content: 'Nuxt' },
      {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
  ],
});
</script>