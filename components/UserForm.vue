<template>
    <form @submit.prevent="onSave">
        <div class="form-group">
            <label for="">Name:</label>
            <input v-model="editAuthor.name" type="text" class="form-control" placeholder="Please enter name">
        </div>
        <div class="form-group">
            <label for="">Description:</label>
            <textarea v-model="editAuthor.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="">Image:</label>
            <input v-model="editAuthor.img" type="text" placeholder="http://thubnailpicture00.png" class="form-control-file">
            <div class="previewIamge"></div>
        </div>
        <button @click.prevent="closeModal()" class="btn btn-primary">
        Close
        </button>
        <button type="submit" class="btn btn-success">
            Create
        </button>
    </form>
</template>

<script>
export default {
    props : {
        author : {
            type : Object,
            default :() => ({
                name  :"",
                description : "",
                img : "" 
            })
        }
    },
    data(){
        return {
            editAuthor : this.author ? {...this.author} : 
            {
                name  : "",
                description : "",
                img : ""
            }
        }
    },
    methods:{
        closeModal(){
            this.$modal.closes({name : "userFormModal"})
        },
        onSave(){
            this.$emit("submit" , this.editAuthor)
        }
    }
}
</script>