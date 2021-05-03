<template>
    <section>
        <div class="container">
            <div class="center">
                <h3>Author {{author.name}} : Learning about literatures</h3>
                <div class="author">
                    <button class="btn btn-success">Start Now</button>
                    <button class="btn btn-primary" @click.prevent="showModal('createCard')">Create a Card</button>
                    <button class="btn btn-primary" @click.prevent="showModal('userFormModal')">Edit a User</button>
                </div>
            </div>
            <hr>
            <div class="row mb-5">
                <CardList v-for="(book) in books" :key="book._id" :picture="book.picture" :title="book.title" />
            </div>
        </div>
    </section>
</template>

<script>
import CardList from "@/components/CardList"
export default {
    // validate(context){
    //     console.log(context);
    //     return /^[0-9]{0,9}$/.test(context.params.id);
    // },
    asyncData(context) {
        return context.$axios.$get(`https://nuxt-author-default-rtdb.firebaseio.com/author/${context.params.id}.json`)
        .then(res =>{
            return {
                author : res
            }
        })
        .catch(e =>{
            console.log(e)
        })
    },
    data(){
        return {
            books : [{
                _id : 1,
                picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcjLNhh9TlQg_Qn8Mw6uDpc7ECGmVj_E23Q&usqp=CAU",
                title : "Book"
            },{
                _id : 2,
                picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcjLNhh9TlQg_Qn8Mw6uDpc7ECGmVj_E23Q&usqp=CAU",
                title : "Book"
            },{
                _id : 3,
                picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcjLNhh9TlQg_Qn8Mw6uDpc7ECGmVj_E23Q&usqp=CAU",
                title : "Book"
            },{
                _id : 4,
                picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcjLNhh9TlQg_Qn8Mw6uDpc7ECGmVj_E23Q&usqp=CAU",
                title : "Book"
            }]
        }
    },
    methods :{
        showModal(name){
            if(name === "userFormModal"){
                this.$modal.opens({name : "userFormModal" ,payload : {...this.author , id : this.$route.params.id}})
            }else if( name === 'createCard'){
                this.$modal.opens({name : "createCard" })
            }
        },
    },
    head(){
        return {
            title : `${this.author.name}`
        }
    },
    components : {
        CardList
    }
}
</script>

<style lang="scss" scoped>
    .center {
        text-align: center;
        margin-top : 30px;
        padding-bottom : 20px;   
    }
    .card {
        padding :1rem;
        text-align: center;
    }

</style>