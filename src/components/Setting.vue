<template>
    <div class="setting">
        <van-nav-bar title="系统设置" left-arrow @click-left="goBack"></van-nav-bar>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

