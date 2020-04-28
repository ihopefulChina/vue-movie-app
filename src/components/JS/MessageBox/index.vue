<template>
  <div class="messageBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <div @touchstart="handleCanel">{{ cancel }}</div>
      <div @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageBox"
};
</script>
<style scoped>
.messageBox {
  width: 240px;
  height: 120px;
  border-radius: 8px;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.4);
  border-top: 0.01rem solid #d9e1e7;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
}
.messageBox h2 {
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
.messageBox p {
  text-align: center;
  line-height: 40px;
}
.messageBox > div {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
.messageBox > div div {
  flex: 1;
  text-align: center;
  line-height: 40px;
  border-right: 1px solid #ccc;
}
.messageBox > div div:last-child {
  border: none;
}
</style>