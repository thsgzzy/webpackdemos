<template>
    <div id="user-login" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" v-on:updateUserName="setUserName" placeholder_z="请输入用户名"></user-name>
            <user-pass ref="upass"></user-pass>
            <user-area v-on:childChange="setValue"></user-area>
            <user-submit></user-submit>
        </form>
    </div>
</template>

<style>
    @import "../../../src/css/bootstrap.min.css";

    #user-login {
        margin-top: 50px;
    }
</style>

<script>
    import username from './user/UserName.vue'
    import userpass from './user/UserPass.vue'
    import userarea from './user/UserArea.vue'
    import usersubmit from './user/UserSubmit.vue'

    export default{
        data(){
            return {
                username: "",
                userpass: "",
                index:""
            }
        },
        methods: {
            setUserName(uname){
                this.username = uname;
            },
            setValue(key, index){
                console.log(key, index);
                this.index = index;
            }
        },
        components: {
            "user-name": username,
            "user-pass": userpass,
            "user-area": userarea,
            "user-submit": usersubmit,
        }
    }
</script>