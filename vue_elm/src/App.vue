<template>
  <div>
    123456
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from 'common/js/util';

  const ERR_OK = 0;

  export default{
    data(){
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      }
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        console.log(response);
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data);
          console.log(this.seller);
        }
      });
    }
  }
</script>

<style>
</style>
