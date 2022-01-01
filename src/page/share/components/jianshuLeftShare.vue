<template>
  <div class="shareArea cflex sharelast">
    <p class="shareTitle">分享组件三：仿简书侧栏分享</p>
    <div class="bottom">
      <el-tooltip
        class="item"
        effect="dark"
        content="分享文章"
        placement="left"
      >
        <el-button
          class="shareItem"
          v-popover:leftShareList
        >
          <icon-svg icon-class="share" />
          <el-popover
            ref="leftShareList"
            popper-class="moreShareList leftShareList"
            placement="left"
            trigger="click"
          >
            <div>
              <ul class="cflex">
                <a
                  href="#"
                  @click="shareToWeixin()"
                >
                  <li>
                    <div class="item">
                      <icon-svg icon-class="wechat" />
                      <span>分享到微信</span>
                    </div>
                  </li>
                </a>
                <a
                  href="#"
                  @click="shareToWeibo()"
                >
                  <li>
                    <icon-svg icon-class="weibo" />
                    <span>分享到微博</span>
                  </li>
                </a>
                <a
                  href="#"
                  @click="shareToQQ()"
                >
                  <li>
                    <icon-svg icon-class="qq" />
                    <span>分享到QQ</span>
                  </li>
                </a>
                <a
                  href="#"
                  @click="shareToQQzone()"
                >
                  <li>
                    <icon-svg icon-class="qq_zone" />
                    <span>分享到QQ空间</span>
                  </li>
                </a>
                <a
                  href="#"
                  @click="shareToDouban()"
                >
                  <li>
                    <icon-svg icon-class="douban" />
                    <span>分享到豆瓣</span>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <icon-svg icon-class="twitter" />
                    <span>分享到Witter</span>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <icon-svg icon-class="facebook" />
                    <span>分享到Facebook</span>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <icon-svg icon-class="google" />
                    <span>分享到Google</span>
                  </li>
                </a>
              </ul>
            </div>
          </el-popover>
        </el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "jianshuLeftShare",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    shareToWeixin() {
      this.$emit("shareToWeixin");
    },
    shareToQQ() {
      this.$emit("shareToQQ");
    },
    shareToQQzone() {
      this.$emit("shareToQQzone");
    },
    shareToWeibo() {
      this.$emit("shareToWeibo");
    },
    shareToDouban() {
      this.$emit("shareToDouban");
    },
  },
};
</script>

<style lang="less" scoped>
.shareArea {
  width: 340px;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  .shareTitle {
    border-bottom: 1px solid #e8e8e8;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
  }
  .bottom {
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    .shareItem {
      width: 50px;
      height: 50px;
      border: 1px solid #dcdcdc;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
    .title {
      padding: 10px;
      box-sizing: border-box;
      width: 100%;
      font-size: 14px;
    }
    .shareUl {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        cursor: pointer;
        .item {
          background: #eff2f7;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .svg-icon {
            font-size: 24px;
          }
          .active {
            color: #ff6c60;
          }
        }
        .moreBtn {
          position: relative;
          font-size: 14px;
          width: auto;
          height: 40px;
          text-align: center;
          padding: 4px 18px;
          border-radius: 50px;
          border: 1px solid #dcdcdc;
        }
      }
    }
  }
}
</style>
