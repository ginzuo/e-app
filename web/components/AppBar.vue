<template>
    <div class="bg-emerald-50 p-3 text-center">
        <div class="flex m-auto justify-evenly items-center gap-7">
            <Cart />
            <NuxtLink to="/">
                <Icon name="fluent:home-12-filled" class="text-emerald-900 size-7" />
            </NuxtLink>
            <NuxtLink to="/login">
                <Icon name="iconamoon:profile-fill" class="text-emerald-900 size-7" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>