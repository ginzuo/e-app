<template>
    <div class="bg-emerald-900 h-dvh w-full px-2">
        <div class="flex flex-col items-center justify-center h-dvh gap-10">
            <div class="-mt-20">
                <img src="~/assets/index.png" />
            </div>

            <span class="-mt-28 text-emerald-50 text-2xl text-center font-bold">
            Welcome to E-App Shop<br/> unli shopping without limits.
        </span>

            <NuxtLink class="px-28 py-6 rounded-full bg-emerald-50 hover:bg-emerald-300" to="/dashboard">
                <span class="text-emerald-900 font-bold">Start Shopping</span>
            </NuxtLink>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
</script>
