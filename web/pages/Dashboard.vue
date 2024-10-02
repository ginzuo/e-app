<template>
    <div class="relative bg-emerald-50 min-h-screen w-full px-4">
        <Head>
            <Title>Dashboard</Title>
        </Head>

        <div class="pt-6">
            <div class="text-center text-2xl font-extrabold text-emerald-900 mb-4">
                One Stop Shop
            </div>

            <Greet />

            <div class="relative my-3">
                <Icon
                    name="mdi:search"
                    class="absolute top-3 left-3 text-emerald-900 text-2xl"
                />
                <input
                    v-model="search"
                    class="w-full py-3 pl-12 pr-4 rounded-lg bg-white border-2 border-emerald-300 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                    type="text"
                    placeholder="Search products..."
                >
            </div>

            <label for="category" class="text-sm font-semibold text-emerald-900 mr-2">
                Select Category:
            </label>
            <div class="mb-6 flex items-center justify-center">
                <div class="flex space-x-4 overflow-x-scroll h-auto">
                    <Button
                        v-for="category in data.categories"
                        :key="category.id"
                        :class="{
                'bg-emerald-500 text-white': selectedCategory === category.name,
                'bg-white text-emerald-900': selectedCategory !== category.name
            }"
                        class="py-2 text-sm rounded-full px-2 shadow-sm hover:bg-emerald-500 hover:text-white focus:outline-none whitespace-nowrap"
                        @click="selectedCategory = category.name"
                    >
                        {{ category.name }}
                    </Button>
                </div>
            </div>


            <div class="rounded-xl -mt-4 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-y-auto max-h-[610px] pb-6">
                <ProductCard
                    v-for="{ id, title, price, images } in filteredProducts"
                    :id="id"
                    :key="id"
                    :title="title"
                    :price="price"
                    :images="images.find(img => img) || './assets/index.png'"
                />
            </div>
        </div>

        <AppBar class="fixed bottom-0 left-0 right-0" />
    </div>
</template>

<script setup lang="ts">
import type {Product} from '~/types'
import Greet from "~/components/Greet.vue";
import { products } from "~/graphql/Queries"

const search = ref('')
const selectedCategory = ref('')

const { data } = await useAsyncQuery<Product>(products)

const filteredProducts = computed(() => {
    if (!data.value || !data.value.products) return []

    return data.value.products.filter(product => {
        const matchesCategory = !selectedCategory.value || product.category.name === selectedCategory.value
        const matchesSearch = product.title.toLowerCase().includes(search.value.toLowerCase())

        return matchesCategory && matchesSearch
    })
})
</script>
