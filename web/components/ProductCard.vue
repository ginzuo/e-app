<template>
    <div class="relative flex size-[180px border-2 border-emerald-300 text-emerald-900 rounded-xl">
        <NuxtLink :to="`/products/${id}`">
            <div class="flex items-center justify-center m-auto">
                <NuxtImg
                    :src="images"
                    class="rounded-xl size-36 p-1"
                />
            </div>
            <div class="m-1">
                <p class="text-sm">{{ title }}</p>
                <p :class="{hidden: !price}" class="absolute bottom-1 right-2 font-bold text-xl text-emerald-50">${{ price }}</p>
                <p :class="{hidden: !description}">{{ description }}</p>
                <p :class="{hidden: !category}">Location: {{ category }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    images: {
        type: Object,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
})
</script>