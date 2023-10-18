<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {ref} from "vue";

const horizontalMenuItems = [
    {
        title: 'Home',
        text: 'Home',
        href: route('home'),
        active: route().current('home'),
    },
    {
        title: 'Dashboard',
        text: 'Dashboard',
        href: route('dashboard'),
        active: route().current('dashboard'),
    },
    {
        title: 'Events',
        text: 'Events',
        href: route('events'),
        active: route().current('events'),
    },
    {
        title: 'Posts',
        text: 'Posts',
        href: route('posts'),
        active: route().current('posts'),
    },
];
const horizontalDropdownMenuItems = [
    {
        title: 'Profile',
        text: 'Profile',
        href: route('profile.edit'),
    },
];

const bgNavigationColor = ref('white');

const logOut = function () {
    axios.post('logout')
        .then(value => location.reload())
}
</script>
<template>
    <v-toolbar app>
        <v-container>
            <v-toolbar-items>
                <v-btn
                    class="py-6"
                    :ripple="false"
                    :color="bgNavigationColor"
                    :href="route('home')"
                >
                    <ApplicationLogo
                        class="block h-9 w-auto fill-current text-gray-800"
                    />
                </v-btn>
                <v-btn
                    v-for="item in horizontalMenuItems"
                    :key="item.title"
                    :href="item.href"
                    :title="item.title"
                    :active="item.active"
                >{{ item.text }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-menu open-on-hover>
                    <template v-slot:activator="{ isActive, props }">
                        <v-btn
                            v-bind="props"
                        >
                            {{ $page.props.auth.user.name }}
                            <template v-slot:append>
                                <v-icon v-if="isActive">mdi-chevron-up</v-icon>
                                <v-icon v-else>mdi-chevron-down</v-icon>
                            </template>
                        </v-btn>
                    </template>

                    <v-list class="py-0">
                        <v-list-item
                            v-for="(item, index) in horizontalDropdownMenuItems"
                            :href="item.href"
                            :key="index"
                        >
                            {{ item.text }}
                        </v-list-item>
                        <v-list-item @click="logOut">
                            Log Out
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-container>
    </v-toolbar>
</template>
