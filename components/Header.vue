<template>
    <div class="nav">
        <ul>
            <li>
                <nuxt-link :to="{path : '/'}">home</nuxt-link>
            </li>
             <li>
                <nuxt-link :to="{path : '/user'}">user</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{path : '/settings'}">settings</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .nav {
        height : 70px;
        background-color : rgb(14, 219, 41);
        ul {
            display : flex;
            justify-content: flex-start;
            align-items: center;
            height : inherit;
            padding-left: 0;
            li { 
                margin-left : 30px;
                list-style: none;
                a{
                    text-decoration : none;
                    color : #fff;
                    font-size: 20px;
                }
            }
        }
    }
    
        /* exact link will show the primary color for only the exact matching link */
        a.nuxt-link-exact-active {
             font-weight: bold;
        color: #00c58e;
        }
</style>