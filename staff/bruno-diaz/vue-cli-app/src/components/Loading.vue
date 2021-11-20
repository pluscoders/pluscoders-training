<template>
  <div class="loadding">
    <div class="loadding__ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped lang="scss">
.loadding {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &__ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
}

.loadding__ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: loadding__ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.loadding__ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.loadding__ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.loadding__ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loadding__ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
