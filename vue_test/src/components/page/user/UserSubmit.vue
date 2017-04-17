<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <button type="button" v-on:click="test" class="btn btn-default">提交</button>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            test(){
                alert("用户名：" + this.$parent.$data.username +
                    "密码：" + this.$parent.$refs.upass.$data.userpass + ":"
                    + this.$parent.$data.index);
            }
        }
    }
</script>