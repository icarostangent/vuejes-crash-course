const app = Vue.createApp({
    data() {
        return {
            firstName: 'josh',
            lastName: 'ashley',
            email: 'josh@icarostangent.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app')
