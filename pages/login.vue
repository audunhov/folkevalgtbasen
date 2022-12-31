<template>
    <div>
        <Account v-if="user" />
        <Auth v-else />
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>
