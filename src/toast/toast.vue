<template>
  <div class="__vue_toast_component_wrap__" v-if="show">{{text}}</div>
</template>

<style>
  .__vue_toast_component_wrap__{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.35);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
  }
</style>
