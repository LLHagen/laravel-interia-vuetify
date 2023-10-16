<script setup>
import HorizontalNavigation from "@/Jetstream/Navigation/HorizontalNavigation.vue";

</script>
<template>
    <v-app>
        <div class="bg-gray-100">

        <HorizontalNavigation></HorizontalNavigation>
        <slot></slot>
        </div>
    </v-app>
</template>

