<template>
  <div class="video-container">
    <video
      width="320"
      height="240"
      controls
    >
      <source src="@/assets/video/001.mp4">
    </video>

    <video
      width="320"
      height="240"
      controls
    >
      <source src="https://vd2.bdstatic.com/mda-nadnqd4bd8rh1qef/cae_h264_nowatermark_delogo/1642210266569833971/mda-nadnqd4bd8rh1qef.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1642251038-0-0-2277ac2a0cbe4134205acba5afc2509e&bcevod_channel=searchbox_feed&pd=1&vt=1&cd=0&watermark=0&did=&logid=1238040253&vid=10161996388581696816&pt=0&appver=&model=&cr=0&abtest=peav_l52&sle=1&sl=775&split=797029">
    </video>
  </div>
</template>

<script>
export default {
  name: "videoList",
  created() {},
};
</script>

<style lang="less" scoped>
.video-container {
}
</style>
