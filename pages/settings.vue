<template>
    <div>
        <div class="nav">
                <ul>
                <li><nuxt-link to="/settings">General</nuxt-link></li>
                <li><nuxt-link to="/settings/deck">Deck</nuxt-link></li>
                <li><nuxt-link to="/settings/schedule">Schedule</nuxt-link></li>
            </ul>
        </div>
        <nuxt-child />
    </div>
</template>