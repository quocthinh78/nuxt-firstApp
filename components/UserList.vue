<template>
     <li>
        <nuxt-link class="user" :to="`/user/${id}`">
            <div class="card">
            <img :src="img" alt="">
                <div class="card-body">
                    <h3>
                        {{name}}
                    </h3>
                    <p>{{description}}</p>
                </div>
            </div>
        </nuxt-link>
    </li>
</template>

<script>
export default {
    props : {
        id :{
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        img : {
            type : String , 
            required : true
        }
    }
}
</script>

<style lang="scss">
    li{
        list-style: none;
        .user {
            .card {
                display:flex;
                padding-bottom: 15px;
                border-bottom : 1px solid #ccc;
                img {
                width: 300px;
                height : 200px;
                margin-right:30px;
                }
                .card-body{
                    display: flex;
                }
            }
        }
    }
</style>