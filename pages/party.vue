<template>
    <div>
        <h1>Alle partier</h1>
        <ul>
            <li v-for="party in parties" :key="party.id">
                <a :href="`/party/${party.id}`">
                    {{ party.name }}{{ party.abbreviation ? ` (${party.abbreviation})` : '' }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Database } from '../types/supabase';

const supabase = useSupabaseClient<Database>();

let { data: parties, error } = await supabase
    .from('party')
    .select('*')
    .order('id', { ascending: true })

</script>