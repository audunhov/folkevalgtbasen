<template>
  <div>
    <Suspense>
      <div>
        <div v-if="user">
          Hei {{ user.email }}
          <span v-if="user.email_confirmed_at" class="px-2 bg-green-500 rounded-full text-white">Confirmed</span>
        </div>
        <button @click="signOut">Logg ut</button>
      </div>
      <template #fallback>
        <h1>Laster...</h1>
      </template>
    </Suspense>
  </div>
</template>
  
<script setup lang="ts">
const supabase = useSupabaseClient();
const { call } = useLoading();
const user = useSupabaseUser();

async function signOut() {
  try {
    call(async () => {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
      user.value = null;
    });
  } catch (error) {
    if (error instanceof Error) alert(error.message);
    else alert(String(error));
  }
}
</script>
  