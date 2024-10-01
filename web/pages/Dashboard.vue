<template>
    <main class="relative bg-emerald-50 h-dvh w-full px-2">
        <Head>
            <Title>Dashboard</Title>
        </Head>

        <div class="px-4 pt-10">
            <div class="text-center text-2xl font-bold text-emerald-900 mb-3">
                E-Shop Dashboard
            </div>

            <Greet />

            <div class="py-2 mb-4 relative">
                <Icon name="mdi:search" class="size-7 absolute top-3.5 left-2 text-emerald-900 text-xl" />
                <input class="py-2 px-10 w-full rounded-full outline-0 bg-emerald-900/90" type="text" placeholder="Search" v-model="search" />
            </div>

            <div class="flex flex-wrap justify-evenly h-[560px] overflow-scroll gap-2 m-1 rounded-xl">
                <ProductCard
                    v-for="{ id, title, price, images } in data.products"
                    :id="id"
                    :key="id"
                    :title="title"
                    :price="price"
                    :images="images[0]"
                />
            </div>
        </div>

        <AppBar class="absolute bottom-0 left-0 right-0" />
    </main>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { gql } from 'graphql-tag'
import Greet from "~/components/Greet.vue";

const search = ref('')

const query = gql`
    query products {
        products {
            id
            title
            price
            images
            category {
                id
                name
                image
            }
        }
    }
`

const { data } = await useAsyncQuery<Product>(query)
</script>