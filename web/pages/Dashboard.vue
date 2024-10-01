<template>
    <main class="relative bg-emerald-50 min-h-screen w-full px-4">
        <Head>
            <Title>Dashboard</Title>
        </Head>

        <div class="pt-6">
            <div class="text-center text-3xl font-extrabold text-emerald-900 mb-4">
                E-Shop Dashboard
            </div>

            <Greet />

            <div class="relative my-3">
                <Icon
                    name="mdi:search"
                    class="absolute top-3 left-3 text-emerald-900 text-2xl"
                />
                <input
                    class="w-full py-3 pl-12 pr-4 rounded-lg bg-white border-2 border-emerald-300 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                    type="text"
                    placeholder="Search products..."
                    v-model="search"
                />
            </div>

            <div class="mb-6 flex items-center justify-center">
                <label for="category" class="text-lg font-semibold text-emerald-900 mr-2">
                    Filter by Category:
                </label>
                <select
                    id="category"
                    v-model="selectedCategory"
                    class="py-2 px-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                >
                    <option value="">All Categories</option>
                    <option
                        v-for="category in data.categories"
                        :key="category.id"
                        :value="category.name"
                    >
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-y-auto max-h-[560px] pb-6">
                <ProductCard
                    v-for="{ id, title, price, images, category } in filteredProducts"
                    :id="id"
                    :key="id"
                    :title="title"
                    :price="price"
                    :images="images.find(img => img) || './assets/index.png'"
                    :category="category.name"
                />
            </div>
        </div>

        <AppBar class="fixed bottom-0 left-0 right-0" />
    </main>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { gql } from 'graphql-tag'
import Greet from "~/components/Greet.vue";

const search = ref('')
const selectedCategory = ref('')

const query = gql`
    query {
        products {
            id
            title
            price
            images
            category {
                id
                name
            }
        }
        categories {
            id
            name
        }
    }
`

const { data } = await useAsyncQuery<Product>(query)

const filteredProducts = computed(() => {
    if (!data.value || !data.value.products) return []

    return data.value.products.filter(product => {
        const matchesCategory = !selectedCategory.value || product.category.name === selectedCategory.value
        const matchesSearch = product.title.toLowerCase().includes(search.value.toLowerCase())

        return matchesCategory && matchesSearch
    })
})
</script>
