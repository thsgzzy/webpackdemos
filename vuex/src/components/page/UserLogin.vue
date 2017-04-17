<template>
    <div id="user-login" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" placeholder="请输入你的用户名" v-on:updateUserName="setUserName"></user-name>
            <user-pass ref="upass"></user-pass>
            <user-areas v-on:childChange="setValue"></user-areas>
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
    import username from "./UserName.vue";
    import userpass from "./UserPass.vue";
    import userareas from "./userArea.vue";
    import usersubmit from "./UserSubmit.vue";
    export default{
        data(){
            return {
                username: "",
//                userpass: "",
                userarea:""

            }
        },
        methods:{
            setUserName(uname){
                this.username = uname;
            },
            setValue(key,value){
                this.userarea = value;
                this.$data[key] = value;
            }
        },
        components: {
            "user-name": username,
            "user-pass": userpass,
            "user-areas": userareas,
            "user-submit": usersubmit
        }
    }
</script>