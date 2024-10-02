<template>
    <div>
        <Drawer v-model:open="isDrawerOpen">
            <DrawerContent class="h-dvh bg-emerald-50 rounded-t">
                <DrawerHeader>
                    <DrawerTitle>
                        <div class="flex items-center justify-between">
                            <span class="text-emerald-950 text-2xl font-bold flex items-left">Product Details</span>
                            <Icon name="mdi:close" class="text-red-600 ml-4 h-6 w-6 cursor-pointer text-emerald-950" @click.prevent="router.push('/dashboard')" />
                        </div>
                    </DrawerTitle>
                </DrawerHeader>
                <div class="p-4">
                    <p><strong>Title:</strong> {{ data.product.title }}</p>
                    <p><strong>Price:</strong> {{ data.product.price }}</p>
                    <p><strong>Description:</strong> {{ data.product.description }}</p>
                    <p><strong>Category:</strong> {{ data.product.category.name }}</p>
                    <img :src="data.product.images[0]" alt="Product Image" class="mt-4 w-full h-auto">
                </div>
                <DrawerFooter>
                    <Button class="py-6 text-xl" @click.prevent="handleAddToCart">Add to Cart</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
</template>

<script setup lang="ts">
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import type { Product } from '~/types'
import { product } from "~/graphql/Queries"

const isDrawerOpen = ref(false)
const route = useRoute()
const router = useRouter()

const { data } = await useAsyncQuery<Product>(product, {
    id: route.params.id
})

const handleAddToCart = () => {
    router.push('/dashboard')
}

onMounted(() => {
    isDrawerOpen.value = true // Auto-trigger drawer when component mounts
})
</script>
