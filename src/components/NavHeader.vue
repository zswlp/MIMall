<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javescript:;">MUI</a>
          <a href="javescript:;">云服务</a>
          <a href="javescript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javescript:;" v-if='username'>{{username}}</a>
          <a href="javescript:;" v-if="!username" @click="login">登录</a>
          <a href="javescript:;" v-if='username'>我的订单</a>
          <a href="javescript:;" class="my-cart" @click='goToCart'
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="javescript:;"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) of phoneList"
                  :key="index"
                >
                  <a :href="item.imageHost" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name" v-text="item.name"></div>
                    <div class="pro-price">{{ item.price | currency }}</div></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视E55A</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1177元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米cc9电视</div>
                    <div class="pro-price">1177元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "jack",
      phoneList: [],
    };
  },
  mounted() {
    this.getProductList();
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  methods: {
    login(){ this.$router.push('/login')},
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          if (res.list.lenth >= 6) {
            this.phoneList = res.list(0, 6);
          }
          else{
          this.phoneList = res.list;

          }
        });
    },
    goToCart(){
      this.$router.push('/cart')
    }
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 3rem;
    line-height: 3rem;
    background: #333;
    color: #b0b0b0;
  }
  .container {
    @include flex();
  }
  a {
    display: inline-block;
    color: #b0b0b0;
    margin-right: 1rem;
  }
  .my-cart {
    width: 7rem;
    background: #ff6600;
    text-align: center;
    color: #fff;
    .icon-cart {
      @include bgImg(1.3rem, 1rem, "/imgs/icon-cart-checked.png");
      margin-right: 0.7rem;
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 6rem;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 4rem;
        height: 4rem;
        background: #ff6600;
        a {
          display: inline-block;
          width: 8rem;
          height: 4rem;

          transition: margin 0.2s;
          &::after {
            content: "";
            display: inline-block;
            width: 4rem;
            height: 4rem;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 4rem;
          }
          &::before {
            content: "";
            display: inline-block;
            width: 4rem;
            height: 4rem;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 4rem;
          }
          &:hover:before {
            margin-left: -4rem;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        width: 643px;
        display: inline-block;
        //   width:12rem;
        padding-left: 13rem;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 1.3rem;
          margin-right: 1.5rem;
          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.666%;
              height: 220px;
              font-size: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 18rem;
        .wrapper {
          height: 2.5rem;
          border: 0.07rem solid #e0e0e0;
          @include flex();
          input {
            border: none;
            box-sizing: border-box;
            border: 0.07rem solid #e0e0e0;
            width: 16rem;
            height: 2.5rem;
            padding-left: 1rem;
          }
          a {
            @include bgImg(1.2rem, 1.2rem, "/imgs/icon-search.png");
            margin-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
