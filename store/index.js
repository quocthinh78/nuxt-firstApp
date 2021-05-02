import Vuex from "vuex";
import axios from "axios"
const createStore = () => {
    return new Vuex.Store({
        state: {
            authors: []
        },
        getters: {
            getAuthor: (state) => state.authors
        },
        actions: {
            // nuxtServerInit(vuexContext, context) {
            //     return new Promise((resolve, reject) => {
            //             setTimeout(() => {
            //                 resolve({
            //                     authors: [{
            //                             _id: 1,
            //                             name: "Nhà văn Tô Hoài",
            //                             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            //                             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yvgOuv4gvSY3gsaZO4gNB46u0CsG8BhMtg&usqp=CAU"
            //                         },
            //                         {
            //                             _id: 2,
            //                             name: "Nhà văn Nguyễn Huy Thiệp",
            //                             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            //                             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMlXDs8k0oNAKg1bn_wqvxhKkQlqXHTbwHg&usqp=CAU"
            //                         }, {
            //                             _id: 3,
            //                             name: "Nhà văn Nam Cao",
            //                             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            //                             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6QyQyTpAbP0fVIvP7kd2y8Xv0VU6NTrEwQ&usqp=CAU"
            //                         }
            //                     ]
            //                 });
            //                 // reject(new Error());
            //             }, 1000)
            //         })
            //         .then(data => {
            //             vuexContext.commit("setAuthor", data.authors)
            //         })
            // },
            nuxtServerInit(vuexContext, context) {
                return axios.get("https://nuxt-author-default-rtdb.firebaseio.com/author.json")
                    .then(res => {
                        let authorsList = [];
                        for (let key in res.data) {
                            authorsList.push({...res.data[key], id: key })
                        }
                        vuexContext.commit("setAuthor", authorsList)
                    })
            },
            setAuthor(context, payload) {
                context.commit("setAuthor", payload);
            }
        },
        mutations: {
            setAuthor: (state, payload) => {
                state.authors = payload
            }
        }
    })
}
export default createStore;