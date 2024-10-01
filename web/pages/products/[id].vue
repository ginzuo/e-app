<template>
    <div>
        <NuxtLink to="/dashboard" class="ml-3">Back</NuxtLink>

        <template>
            <ProductCard
                :id="data.product.id"
                :title="data.product.title"
                :price="data.product.price"
                :description="data.product.description"
                :images="data.product.images[0]"
                :category="data.product.category.name"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { gql } from 'graphql-tag'

const route = useRoute()

const query = gql`
    query product($id: ID!) {
        product(id: $id) {
            id
            title
            price
            description
            images
            category {
                id
                name
                image
            }
        }
    }
`

const { data } = await useAsyncQuery<Product>(query, {
    id: route.params.id
})
</script>