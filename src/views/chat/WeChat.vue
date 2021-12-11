<template>
  <div class="one-for-all">
    <div class="input-area">
      <div class="login-area">
        <el-input
          v-model="nickname"
          placeholder="input your nikename"
          class="nickname"
          :disabled="nickname_block"
        ></el-input>
        <el-button
          type="primary"
          round
          @click="connect"
          :disabled="nickname_block"
          >链接</el-button
        >
        <el-button type="danger" round @click="disconnect">断开链接</el-button>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea1"
        clearable
        class="textarea"
      >
      </el-input>
      <el-button type="primary" round @click="submit">submit</el-button>
    </div>
    <div class="screen">
        <h1>ddd</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea1: "",
      nickname: "",
      nickname_block: false,
    };
  },
  methods: {
    connect() {
      if (this.nickname == "" || this.nickname == null) {
        this.$message.error("nickname can not be null!");
      } else {
        this.nickname_block = true;
      }
    },
    disconnect() {
      this.nickname_block = false;
    },
  },
};
</script>

<style scoped>
.input-area {
  display: flex;
  flex-direction: column;
}
.login-area {
  display: flex;
  margin-bottom: 10px;
}
.nickname {
  margin-right: 10px;
}
.textarea {
  margin-bottom: 10px;
}
</style>