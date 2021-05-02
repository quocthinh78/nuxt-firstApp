<template>
    <section>
        <div class="container">
            <div class="center">
                <h3>Author {{author.name}} : Learning about literatures</h3>
                <div class="author">
                    <button class="btn btn-success">Start Now</button>
                    <button class="btn btn-primary" @click.prevent="showModal()">Create a account</button>
                </div>
            </div>
            <hr>
            <div class="row mb-5">
                <CardList v-for="(book) in books" :key="book._id" :picture="book.picture" :title="book.title" />
            </div>
        </div>
        <v-modal name="userFormModal">
            <h2>Create a new User</h2>
            <form action="">
                <div class="form-group">
                    <label for="">Name:</label>
                    <input type="text" class="form-control" placeholder="Please enter name">
                </div>
                <div class="form-group">
                    <label for="">Description:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Image:</label>
                    <input type="file" class="form-control-file">
                    <div class="previewIamge"></div>
                </div>
                <button @click.prevent="closeModal()" class="btn btn-primary">
                Close
                </button>
                <button @click.prevent="createModal()" class="btn btn-success">
                    Create
                </button>
            </form>
            
        </v-modal>
    </section>
</template>

<script>
import axios from "axios"
import CardList from "@/components/CardList"
export default {
    // validate(context){
    //     console.log(context);
    //     return /^[0-9]{0,9}$/.test(context.params.id);
    // },
    asyncData(context) {
        return axios.get(`https://nuxt-author-default-rtdb.firebaseio.com/author/${context.params.id}.json`)
        .then(res =>{
            return {
                author : res.data
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
        showModal(){
            console.log('modals ...')
            this.$modal.opens({name : "userFormModal"})
        },
        closeModal(){
            this.$modal.closes({name : "userFormModal"})
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