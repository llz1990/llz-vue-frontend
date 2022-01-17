<template>
  <div class="file-container">
    <!-- 相册框列表 -->
    <el-row
      class="row-item"
      v-show="showList"
    >
      <el-col
        :span="6"
        v-for="item in picList"
        :key="item.id"
        :offset="1"
      >
        <el-card
          shadow="hover"
          :body-style="{ padding: '2px' }"
          class="card-item"
        >
          <div class="image-tag">
            <img
              v-lazy="dealPicUrl(item.backUrl)"
              @click.stop="toViewPic(item.listId)"
            />
          </div>
          <div
            class="delete-item"
            @click.stop="deletePic(item.listId)"
          >
            <icon-svg icon-class="delete" />
          </div>

          <div style="padding: 14px">
            <span>{{item.listName || ''}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.descInfo || '' }}</time>
              <el-button
                type="text"
                class="button"
                @click="editPicList(item.listId)"
              >编辑相册</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 增加相册框的区域 -->
      <el-col
        :span="6"
        :offset="1"
      >
        <el-card
          shadow="hover"
          :body-style="{ padding: '2px' }"
          class="card-item card-item-add"
        >
          <i
            @click="addPicList"
            class="el-icon-plus"
            style="font-size: 60px"
          ></i>
        </el-card>
      </el-col>
    </el-row>
    <!-- 展示相册详情 -->
    <fileDetail
      v-if="showDetail"
      :picDetail="picDetail"
      @showPicList="showPicList"
    ></fileDetail>
    <addPic
      ref="addPic"
      v-if="isShowPicDialog"
      :isShow="isShowPicDialog"
      :title="title"
      :listId="listId"
      @refreshList="getAllPicList"
    ></addPic>
  </div>
</template>

<script>
import addPic from "./components/addPic";
import fileDetail from "./components/fileDetail.vue";
import { getAllPicList, deletePic } from "@/api/list";
import { dealPicUrl } from "../../utils/mUtils";
export default {
  name: "fileList",
  data() {
    return {
      currentDate: new Date(),
      picList: [],
      isShowPicDialog: false,
      showList: true,
      showDetail: false,
      picDetail: {},
      listId: "",
    };
  },
  components: { addPic, fileDetail },
  created() {
    this.getAllPicList();
  },
  methods: {
    dealPicUrl(url) {
      return dealPicUrl(url);
    },
    /**
     * 获取所有的相册合集
     */
    getAllPicList() {
      getAllPicList().then(({ code, data }) => {
        if (code === 200 && data && data.length > 0) {
          this.picList = data;
        } else {
          this.picList = [];
        }
      });
    },
    toViewPic(listId) {
      this.showList = false;
      this.showDetail = true;
      this.picDetail = this.picList.filter((item) => item.listId === listId)[0];
    },
    showPicList() {
      this.showList = true;
      this.showDetail = false;
    },
    /**
     * 现有相册组添加相册
     */
    addPicList() {
      this.isShowPicDialog = true;
      this.title = "添加相册";
      if (this.$refs.addPic) {
        this.$refs.addPic.dialogFormVisible = true;
      }
    },
    /**
     * 编辑当前相册
     */
    editPicList(listId) {
      this.isShowPicDialog = true;
      this.listId = listId;
      this.title = "编辑相册";
      if (this.$refs.addPic) {
        this.$refs.addPic.dialogFormVisible = true;
      }
    },
    /**
     * 删除相册
     */
    deletePic(listId) {
      const params = { listId };
      deletePic(params)
        .then(({ code, data }) => {
          if (code === 200) {
            this.$message({
              message: "删除相册成功",
              type: "success",
              duration: 3 * 1000,
            });
            this.getAllPicList();
          }
        })
        .catch((error) => {
          this.$message({
            message: "删除相册失败",
            type: "error",
            duration: 3 * 1000,
          });
        });
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
      height: 400px;
      width: 100%;
      position: relative;
      cursor: pointer;

      .delete-item {
        position: absolute;
        top: 3px;
        right: 3px;
        background: #fff;
      }

      &.card-item-add {
        display: flex;
        align-items: center;
        justify-content: center;
      }
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

  .image-tag {
    width: 100%;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
