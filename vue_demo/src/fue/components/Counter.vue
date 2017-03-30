<template>
    <div>
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'

    export default{

        computed: mapState([
            //映射 this.count 为 store.state.count
            'count'
        ]),

        methods: mapActions([
            //// 映射 this.increment() 为 this.$store.dispatch('increment')
            'increment',
            'decrement'
        ])
    }
</script>
<style>
</style>