<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="form-group">
        <label class="col-sm-2">地区</label>
        <div class="col-sm-10">
            <select v-model="selectedIndex" class="form-group" v-on:change="seletecChange">
                <option v-for="a in areas" v-bind:value="a.id">{{a.text}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default{
        data:function () {
            return {
                selectedIndex:0,
                areas:[
                    {"id":0,"text":"--请选择--"},
                    {"id":1,"text":"北京"},
                    {"id":2,"text":"上海"}
                ]
            }
        },

        methods:{
            seletecChange(){
                this.$emit("childChange","userarea",this.selectedIndex)
            }
        }
    }
</script>