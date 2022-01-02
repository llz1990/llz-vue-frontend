<template>
  <el-dialog
    title="添加相册"
    :visible.sync="dialogFormVisible"
  >
    <el-form :model="form">
      <!-- 名称 -->
      <el-form-item
        label="相册名称"
        label-width="120px"
      >
        <el-input
          v-model="form.listName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <!-- 描述 -->
      <el-form-item
        label="描述"
        label-width="120px"
      >
        <el-input
          v-model="form.descInfo"
          autocomplete="off"
        ></el-input>

      </el-form-item>
      <!-- 上传相册背景图 -->
      <el-form-item
        label="相册背景图"
        label-width="120px"
      >
        <input
          type="file"
          id="file"
          @change="uploadPic($event)"
        >
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="onSubmit"
      >确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addPic } from "@/api/list";
export default {
  name: "add-pic",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogFormVisible: this.isShow,
      form: {
        listName: "",
        descInfo: "",
        backUrlBase64: "",
      },
    };
  },
  methods: {
    /**
     * 上传文件
     */
    uploadPic(event) {
      const files = event.target.files;
      const file = files[0];
      const reader = new FileReader();
      const self = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const fileBase64 = e.target.result;
        const fileStr = fileBase64.split(";base64,")[1];
        self.form.backUrlBase64 = fileStr;
      };
    },

    /**
     * 提交表单，增加相册合集
     */
    onSubmit() {
      this.dialogFormVisible = false;
      const params = this.form;
      addPic(params).then(({ code, data }) => {
        if (code === 200) {
          this.$message({
            message: "添加相册成功",
            type: "success",
            duration: 3 * 1000,
          });
          this.$emit("refreshList"); // 添加完成后重新拉取数据
        }
      });
    },
  },
};
</script>


<style lang="less" scoped>
.input-item {
  border: 0px;
}
</style>;
