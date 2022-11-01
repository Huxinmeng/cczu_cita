<template>
  <div class="mark">
    <div class="alert">
      <!-- 内容 -->
      <div class="cont">
       <div class="dowebok">

         <div class="logo"></div>

         <div class="form-item" >

             <input id="username" type="text" autocomplete="off" placeholder="邮箱">

         </div>

         <div class="form-item">

             <input id="password" type="password" autocomplete="off" placeholder="登录密码">

         </div>

         <div class="form-item"><button id="submit">登 录</button></div>

         <div class="reg-bar">

             <a class="reg" href="javascript:">立即注册</a>

             <a class="forget" href="javascript:">忘记密码</a>

         </div>

     </div>
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button @click="sure">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allBol: false,
      arrL: [
        { name: '花木兰', id: 1,  bol: false },
      
      ],
      arrR: []
    }
  },
  methods: {
    // 点击全选
    all() {
      // 清空一个数组
      this.arrR = []; // 第一种
      // this.arrR.length = 0; // 第二种
      this.arrL.map(item => {
        item.bol = this.allBol;
        if(this.allBol) {
          this.arrR.push(item);
        }
      })
    },
    // 点击单选
    only(n) {
     if (this.arrL[n].bol) {
       this.arrR.push(this.arrL[n])
     }else {
       let index = this.arrR.indexOf(this.arrL[n]);
       this.arrR.splice(index,1);
       this.allBol = false
     }
    },
    // 删除
    del(obj, index) {
      let n = this.arrL.indexOf(obj);
      this.arrL[n].bol = false;
      this.arrR.splice(index, 1)
    },
    // 点击确定
    sure() {
      let arr = [];
      this.arrR.map(item => {
        arr.push(item.name)
      })
      this.$emit('ok', arr.join(','));
    },
    // 点击取消
    cancel() {
      this.$emit('cancel')
    },
  }
};
</script>

<style scoped>

.mark {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert{
  background-color:rgba(36, 29, 29, 0.082);
  width: 400px;
  height: 400px;
}
.cont {
  display: flex;
  height: 300px;
}
.cont>div {
  flex: 1;
}
.form-item{
    margin:50px;
}
.btns {
  height: 100px;
  text-align: center;
}
.left dd {
  height: 50px;
  margin-bottom: 10px;
  position: relative;
}
.left dd label {
  display: flex;
  height: 50px;
  align-items: center;
  cursor: pointer;
}
.left dd label:hover {
  background: #f0f0f0;
}
.left dd label img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 5px;
}
.form-item button { width: 360px; height: 50px; border: 0; border-radius: 25px; font-size: 18px; color: #1f6f4a; outline: none; cursor: pointer; background-color: #fff; }
.left dd em {
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  right: 0;
  top: 0;
  transition: all 0.8s;
}
.left dd em:hover{
  transform: rotate(360deg);
}

</style>
