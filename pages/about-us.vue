<script setup lang="ts">
defineI18nRoute({
  paths: {
    en: '/about-us',
    de: '/ueber-uns',
  }
})

const {locale} = useI18n()

const navLocale = computed(() => window?.navigator.language)

</script>

<template>
  <h1>{{ $t('aboutUs') }}</h1>

  <h2>useI18n().locale</h2>
  <p>{{ locale }}</p>

  <h2>navigator.language</h2>
  <p>{{ navLocale }}</p>
</template>