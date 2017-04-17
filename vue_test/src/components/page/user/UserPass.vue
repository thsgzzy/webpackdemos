<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2">密码</label>
            <div class="col-sm-10">
                <input type="text" v-model="userpass" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {userpass: ""}
        }
    }
</script>