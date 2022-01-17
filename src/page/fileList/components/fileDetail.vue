<template>
  <div class="pic-detail-container">
    <!-- 头部展示相册信息 -->
    <div class="detail-header">
      <div
        class="back-item"
        @click="backPicList"
      >
        <icon-svg
          icon-class="back"
          class="back-svg-item"
        />
      </div>
      <img
        v-lazy="dealPicUrl(picDetail.backUrl) || ''"
        alt=""
        class="header-img-item"
      >
      <div class="header-info-item">
        <p class="up">{{picDetail.listName || ''}}</p>
        <p class="down">{{picDetail.descInfo || ''}}</p>
      </div>
    </div>
    <div class="detail-info">
      <!-- 展示相册的所有相片 -->
      <div
        class="detail-info-item"
        v-for="item in picDetailList"
        :key="item.id"
      >
        <div class="img-tag">
          <img
            v-lazy="dealPicUrl(item.picUrl) || ''"
            alt=""
          >
        </div>
        <p>{{item.picId || ''}}</p>
      </div>
      <!-- 增加相片区域 -->
      <div class="detail-info-add-item">
        <i
          class="el-icon-plus"
          style="font-size: 60px"
        ></i>
        <input
          type="file"
          id="file"
          @change="uploadPicDetail($event)"
        >
      </div>
    </div>

  </div>

</template>

<script>
import { dealPicUrl } from "../../../utils/mUtils";
import { getPicDetail, addPicDetail } from "@/api/list";
export default {
  name: "fileDetail",
  props: {
    picDetail: Object,
  },
  data() {
    return {
      picDetailList: [],
    };
  },
  created() {
    this.getPicDetail();
  },
  methods: {
    dealPicUrl(url) {
      return dealPicUrl(url);
    },
    /**
     * 返回到相册合集主界面
     */
    backPicList() {
      this.$emit("showPicList");
    },
    getPicDetail() {
      const params = {
        listId: this.picDetail.listId,
      };
      getPicDetail(params).then(({ code, data }) => {
        console.log("取到相册详情", data);
        this.picDetailList = data;
      });
    },

    /**
     * 上传单个照片
     */
    uploadPicDetail(event) {
      const files = event.target.files;
      const file = files[0];
      const reader = new FileReader();
      const self = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const fileBase64 = e.target.result;
        const fileStr = fileBase64.split(";base64,")[1]; // 单张照片base64编码
        const params = {
          listId: self.picDetail.listId,
          picUrlBase64: fileStr,
        };
        addPicDetail(params).then(({ code, data }) => {
          if (code === 200) {
            self.getPicDetail();
          }
        });
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pic-detail-container {
  padding: 10px;
  background: #f0f2f5;
}

.detail-header {
  margin-bottom: 10px;
  height: 100px;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;

  .back-item {
    height: 100px;
    width: 30px;
    background: #d3d3d3;
    border: solid 1px #f0f2f5;

    .back-svg-item {
      height: 100px;
      width: 30px;
    }
  }

  .header-img-item {
    margin-left: 20px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .header-info-item {
    height: 80px;
    margin-left: 20px;
    .up {
      font-size: 20px;
      line-height: 40px;
    }
    .down {
      font-size: 14px;
      line-height: 40px;
      opacity: 0.71;
    }
  }
}

.detail-info {
  padding-bottom: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  .detail-info-item {
    background: #ffffff;
    margin-top: 10px;
    margin-left: 10px;
    width: 180px;
    height: 210px;
    cursor: pointer;

    .img-tag {
      height: 180px;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      text-align: center;
    }
  }

  .detail-info-add-item {
    position: relative;
    background: #ffffff;
    margin-top: 10px;
    margin-left: 10px;
    width: 180px;
    height: 210px;
    text-align: center;

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
}
</style>