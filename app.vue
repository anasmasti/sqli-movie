<template>
  <Head>
    <Title>SQLI Movie</Title>
  </Head>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
      crossorigin: 'anonymous',
    },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
  ],
});
</script>