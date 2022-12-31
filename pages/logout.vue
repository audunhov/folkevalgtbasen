<template>
    <div>
        <h1>Logger ut...</h1>
    </div>
</template>

<script setup>
const router = useRouter();
const goBack = () => router.back();
await logOut();
goBack();
</script>