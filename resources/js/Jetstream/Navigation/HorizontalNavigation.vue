<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {ref} from "vue";

const dialog = false;
const horizontalMenuItems = [
    {
        title: 'Home',
        text: 'Home',
        href: route('dashboard'),
        active: route().current('dashboard'),
    },
    {
        title: 'Events',
        text: 'Events',
        href: route('events'),
        active: route().current('events'),
    },
];
const bgHover = ref('white');
</script>
<template>
    <v-toolbar app height="70">
        <v-container>
            <v-toolbar-items>
                    <v-btn
                        class="py-6"
                        :ripple="false"
                        :color="bgHover"
                        :href="route('dashboard')"
                    >
                        <ApplicationLogo
                            class="block h-9 w-auto fill-current text-gray-800"
                        />
                    </v-btn>
                <v-btn
                    class="py-6"
                    v-for="item in horizontalMenuItems"
                    :key="item.title"
                    :href="item.href"
                    :title="item.title"
                    :active="item.active"
                >{{ item.text }}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        </v-container>
    </v-toolbar>
</template>
