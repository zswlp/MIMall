<template>
<transition name="slide">
  <div class="modal" v-show="showModal">
    <div class="mask">
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <div class="btn-group">
          <a href="javascript:;" class="btn" v-if='btnType==1' v-on:click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn" v-if='btnType==2' v-on:click="$emit('cancel')">取消</a>
          <div class="btn-group" v-if='btnType==3'>
                <a href="javascript:;" class="btn"  v-on:click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">取消</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: {
    // 弹框类型：小small 中 middle 大large 表单 from
    modalType: {
      type: String,
      default: "form",
    },
    // 弹框标题
    title:String,
    // 按钮类型：1：确定类型 2：取消类型  3：确定取消
    btnType:String,
    sureText:{
        type:String,
        default:'确定'
    },
    cancelText:{
        type:String,
        default:'取消'
    },
    showModal:Boolean,
  },
};
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>
