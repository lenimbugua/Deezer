<template>
  <div class="toast-wrapper z-50">
    <div class="toast bg-pink-400"><slot /></div>
  </div>
</template>

<style scoped>
.toast-wrapper {
  position: fixed;
  width: 100%;
  bottom: 40px;
}
.toast {
  padding: 20px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}
</style>
