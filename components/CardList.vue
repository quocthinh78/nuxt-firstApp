<template>
    <div class="col-lg-3">
        <div class="card">
            <div class="front-card">
                <img :src="picture" alt="">
            </div>
            <div class="back-card">
                <h5 class="mt-4">{{title}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        picture : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true
        }
    }
}
</script>