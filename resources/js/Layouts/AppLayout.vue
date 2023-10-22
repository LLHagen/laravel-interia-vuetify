<script setup>
import Navigation from "@/Jetstream/Navigation/Navigation.vue";
</script>
<template>
    <v-app>
        <v-layout>
            <Navigation />

            <v-main style="height: 500px;">
                <v-card-text>
                    <v-container>
                        <slot />
                    </v-container>
                </v-card-text>
            </v-main>
        </v-layout>
    </v-app>
</template>

