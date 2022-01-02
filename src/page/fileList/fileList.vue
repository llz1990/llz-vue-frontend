<template>
  <div class="file-container">
    <el-row class="row-item">
      <!-- 相册框列表 -->
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
          <img
            :src="dealPicUrl(item.backUrl)"
            class="image"
            @click.stop="toViewPic"
          />
          <div
            class="delete-item"
            @click.stop="deletePic(item.listId)"
          >
            <icon-svg icon-class="delete" />
          </div>

          <div style="padding: 14px">
            <span>{{item.listName || ''}}</span>
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
    <addPic
      ref="addPic"
      v-if="isShowPicDialog"
      :isShow="isShowPicDialog"
      @refreshList="getAllPicList"
    ></addPic>
  </div>
</template>

<script>
import addPic from "./components/addPic";
import { getAllPicList, deletePic } from "@/api/list";
import { dealPicUrl } from "../../utils/mUtils";
export default {
  name: "fileList",
  data() {
    return {
      currentDate: new Date(),
      picList: [],
      isShowPicDialog: false,
    };
  },
  components: { addPic },
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
    toViewPic() {
      this.$router.push({ path: "/fileManager/fileDetail" });
    },
    /**
     * 现有相册组添加相册
     */
    addPicList() {
      this.isShowPicDialog = true;
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

  .image {
    width: 100%;
    height: 300px;
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
