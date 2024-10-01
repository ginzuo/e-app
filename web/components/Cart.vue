<template>
    <Drawer>
        <DrawerTrigger>
            <Icon name="solar:cart-bold" class="text-emerald-900 size-10" />
        </DrawerTrigger>
        <DrawerContent class="h-[450px] bg-emerald-50 rounded-t-xl">
            <DrawerHeader>
                <DrawerTitle>
                    <span class="text-emerald-950 text-2xl font-bold flex items-left -mt-6">Cart</span>
                </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
                <Button class="py-6 text-xl" @click.prevent="">Pay</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>

<script setup lang="ts">
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
</script>