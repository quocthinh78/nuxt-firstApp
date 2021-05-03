<template>
    <section class="popular">
        <div class="banner">
            <img src="https://theme.hstatic.net/200000020612/1000524269/14/ms_banner_img3.jpg?v=768" alt="">
        </div>
        <div class="container">
            <div class="popular-decks">
                <h3>Popular for you</h3>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <h5 class="card-title">
                                Deck1
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    middleware: "router-log"
}
</script>
<style lang="scss" scoped>
    .popular {
        .banner {
            img { 
                width: 100%;
                height: 300px;
            }
        }
        .popular-decks{
            margin : 50px 0;
            .card {
                margin-top : 20px;
        }
        }
        
    }
</style>

