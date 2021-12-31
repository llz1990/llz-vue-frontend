<template>
  <div class="file-container">
    <el-row class="row-item">
      <el-col
        :span="6"
        v-for="item in picList"
        :key="item.id"
        :offset="1"
      >
        <el-card
          :body-style="{ padding: '2px' }"
          class="card-item"
        >
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            @click.stop="toViewPic"
          />
          <div style="padding: 14px">
            <span>相册</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button
                type="text"
                class="button"
              >操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "fileList",
  data() {
    return {
      currentDate: new Date(),
      picList: [
        { id: 1, name: "llz" },
        { id: 2, name: "llz" },
        { id: 3, name: "llz" },
        { id: 4, name: "llz" },
        { id: 5, name: "llz" },
        { id: 6, name: "llz" },
        { id: 7, name: "llz" },
        { id: 8, name: "llz" },
        { id: 9, name: "llz" },
      ],
    };
  },
  methods: {
    toViewPic() {
      this.$router.push({ path: "/fileManager/fileDetail" });
    },
  },
};
</script>

<style lang="less" scoped>
.file-container {
  .row-item {
    margin-top: 10px;
    padding: 10px;

    .card-item {
      margin-bottom: 15px;
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>
