<template>
    <div class="min-h-screen flex flex-col gap-5 items-center">
        <NuxtLoadingIndicator />
        <header class="p-5 shadow-sm w-full sticky top-0 bg-slate-100">
            <nav>
                <ul class="navbar">
                    <li><a href="/">Folkevalgtbasen</a></li>
                    <li><a href="/party">Partier</a></li>
                    <li><a href="/politician">Politiker</a></li>
                    <li><a href="/organ">Organ</a></li>
                    <li><a href="/about">Om oss</a></li>
                </ul>
            </nav>
        </header>
        <main class="max-w-screen-lg w-full flex-1 px-5">
            <div class="w-full">
                <NuxtPage />
            </div>
        </main>
        <footer class="bg-gray-700 w-full text-white">
            <div class="max-w-screen-lg p-5 m-auto">
                <div v-if="user" class="flex flex-col">
                    <a href="/login">Logget inn som {{ user.email }}</a>
                    <a href="/logout">Logg ut</a>
                </div>
                <a href="/login" v-else>Logg inn</a>
            </div>
        </footer>
    </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style scoped>
.navbar {
    display: grid;
    gap: 1.25em;
    grid-template-columns: 75% repeat(4, 1fr);
}

.navbar :not(:first-child) {
    text-align: end;
}
</style>