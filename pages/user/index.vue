<template>
    <div class="container list-user">
        <div class="box d-flex justify-content-between">
            <h3 class="title">List of  user</h3>
            <button class="btn btn-success" @click.prevent="showModal()">show</button>
        </div>
        <ul class="list">
           <UserList
            v-for="author in authors"
            :id="author.id"
            :key="author.id"
            :name="author.name"
            :description="author.description"
            :img="author.img"
            />
        </ul>
        
    </div>
</template>

<script>
import UserList from "@/components/UserList"
export default {
    // fetch(context) {
    //     return new Promise((resolve , reject) =>{
    //         setTimeout(() =>{
    //             resolve({
    //                 authors : [{
    //                 _id : 1,
    //                 name : "Nhà văn Tô Hoài",
    //                 description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    //                 img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yvgOuv4gvSY3gsaZO4gNB46u0CsG8BhMtg&usqp=CAU"
    //                 },
    //                 {
    //                     _id : 2,
    //                     name : "Nhà văn Nguyễn Huy Thiệp",
    //                     description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    //                     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMlXDs8k0oNAKg1bn_wqvxhKkQlqXHTbwHg&usqp=CAU"
    //                 },{
    //                     _id : 3,
    //                     name : "Nhà văn Nam Cao",
    //                     description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    //                     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6QyQyTpAbP0fVIvP7kd2y8Xv0VU6NTrEwQ&usqp=CAU"
    //                 }] 
    //             });
    //             // reject(new Error());
    //         },1000)
    //     })
    //     .then(data => {
    //         context.store.dispatch("setAuthor" , data.authors)
    //     })
    //     .catch(e =>{
    //         context.error(e)
    //     })
    // },
    computed : {
        authors(){
            return this.$store.getters.getAuthor;
        }
    },
    // created(){
    //     console.log(this.authors)
    //     this.$store.dispatch("setAuthor" , this.authors);
    //     console.log(this.$store.getters.getAuthor)
    // },
    methods :{
        showModal(){
        this.$modal.opens({name : "userFormModal"})
        },
        
    },
    components : {
        UserList,
    }
}
</script>
<style lang="scss" scoped>
    .list-user{
        .box {
            margin : 30px 0;
        }
        .list {
            padding-left: 0;     
        }
    }
    
</style>