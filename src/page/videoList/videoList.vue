<template>
  <div class="video-container">
    <!-- 视频元素 -->
    <div
      class="videolist-item"
      v-for="item in videoList"
      :key="item.id"
    >
      <video
        width="320"
        height="240"
        controls
      >
        <source :src="dealPicUrl(item.videoUrl)">
      </video>
      <!-- 视频下方的描述 -->
      <div class="videoitem-bottom">
        <div class="videoitem-bottom-head">
          <img
            v-lazy="item.creatorAvatar || defaultAvatar"
            alt=""
          >
        </div>
        <div class="video-title">{{item.videoTitle || ''}}</div>
      </div>
    </div>
    <!-- 添加视频区域 -->
    <div
      class="detail-info-add-item"
      @click.stop="addVideo"
    >
      <i
        class="el-icon-plus"
        style="font-size: 60px"
      ></i>
    </div>
    <!-- 添加视频弹窗 -->
    <addVideo
      ref="addVideo"
      v-if="isShowVideoDialog"
      :isShow="isShowVideoDialog"
      @refreshVideo="getAllVideos"
    ></addVideo>
  </div>
</template>

<script>
import defaultAvatar from "../../assets/img/defaultAvatar.png";
import { getAllVideos } from "@/api/list";
import { dealPicUrl } from "../../utils/mUtils";
import addVideo from "./components/addVideo.vue";
export default {
  name: "videoList",
  components: {
    addVideo,
  },
  data() {
    return {
      defaultAvatar: defaultAvatar,
      videoList: [],
      isShowVideoDialog: false,
    };
  },
  created() {
    this.getAllVideos();
  },
  methods: {
    dealPicUrl(url) {
      return dealPicUrl(url);
    },
    /**
     * 查询视频合集
     */
    getAllVideos() {
      getAllVideos().then(({ code, data }) => {
        if (code === 200 && data && data.length > 0) {
          this.videoList = data;
        } else {
          this.videoList = [];
        }
      });
    },

    /**
     * 添加视频
     */
    addVideo() {
      this.isShowVideoDialog = true;
      if (this.$refs.addVideo) {
        this.$refs.addVideo.dialogFormVisible = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.video-container {
  padding: 32px 0 0 32px;
  height: 100%;
  background-color: #fafafa;
  .videolist-item {
    display: inline-block;
    width: 25%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 25px;
    margin-top: 30px;
    vertical-align: top;
  }

  .detail-info-add-item {
    display: inline-block;
    position: relative;
    background: #ffffff;
    margin-top: 30px;
    margin-left: 10px;
    width: 320px;
    height: 240px;
    text-align: center;
    cursor: pointer;

    .el-icon-plus {
      line-height: 210px;
    }

    #file {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
    }
  }

  .videoitem-bottom {
    margin-top: 5px;
    padding-left: 44px;
    position: relative;
    min-height: 36px;
    overflow: hidden;

    .videoitem-bottom-head {
      width: 36px;
      height: 36px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 18px;
      background-size: 100% 100%;
      background-repeat: no-repeat;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .video-title {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #111622;
      letter-spacing: 0;
      line-height: 22px;
      font-weight: 500;
      margin-top: -2px;
      max-height: 44px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
