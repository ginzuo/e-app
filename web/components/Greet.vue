<template>
    <div>
        <p class="font-bold text-emerald-900 text-xl">{{ greeting }}, {{ username ? username : 'Guest' }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const username = ref('');

const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};

const greeting = computed(() => getGreeting());
</script>

