<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2">用户名</label>
            <div class="col-sm-10">
                <input type="text" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="placeholder_z">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ["placeholder_z"],
        data: function () {
            return {username: ""}
        },
        methods:{
            userNameChange(){
                // 调用父组件的方法
//                this.$emit("updateUserName",this.username)
                this.$store.state.user_name = this.username;
            }
        }
    }
</script>