<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2">用户名</label>
            <div class="col-sm-10">
                <input type="text" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ["placeholder"],
        data:function () {
            return{username:"zzy"}
        },
        methods:{
            userNameChange(){
                // 调用父组件的方法
                this.$emit("updateUserName",this.username)
            }

        }
    }
</script>