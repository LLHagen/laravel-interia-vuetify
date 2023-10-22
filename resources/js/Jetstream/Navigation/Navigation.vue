<script setup>
import {ref} from "vue";
import {usePage} from "@inertiajs/vue3";
import verticalMenuItems from "@/Jetstream/Navigation/verticalMenuItems.js";
import horizontalDropdownMenuItems from "@/Jetstream/Navigation/horizontalDropdownMenuItems.js";


const logOut = function () {
    axios.post('logout')
        .then(value => location.reload())
}
const drawer = ref(false);
const authUser = usePage().props.auth.user;
</script>
<template>
    <v-app-bar
        prominent
    >
        <v-app-bar-nav-icon
            :active="drawer"
            @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>My site</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu
            open-on-hover
        >
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    {{ authUser.name }}
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                    v-for="(item, index) in horizontalDropdownMenuItems"
                    :key="index"
                    :href="item.href"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>

                <v-list-item
                    @click="logOut"
                >
                    <v-list-item-title>Log Out</v-list-item-title>
                </v-list-item>

            </v-list>
        </v-menu>

        <!--        <v-btn variant="text" icon="mdi-magnify"></v-btn>-->
        <!--        <v-btn variant="text" icon="mdi-filter"></v-btn>-->
        <!--        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>-->
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        :floating="true"
        :permanent="true"
    >
        <v-list>
            <v-list-item
                v-for="(item, index) in verticalMenuItems"
                :key="index"
                :href="item.href"
            >
                {{ item.title }}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
