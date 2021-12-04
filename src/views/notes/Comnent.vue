<template>
  <div>
    <div class="one-for-all">
      <div class="submit-comment">
        <span>{{ commitTime }} 评论</span>
        <div class="input-line">
          <div class="userImg"></div>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="发表您的见解吧！"
            v-model="textarea"
            class="text-area"
          >
          </el-input>
        </div>
        <el-button type="primary" round>提交评论</el-button>
      </div>
    </div>
    <el-divider> </el-divider>
    <div class="comment-list">
      <div class="block">
        <div v-for="item in items" :key="item.id" class="card">
          <el-card>
            <div class="main-reply">
              <div class="userImg-small"></div>
              <span class="reply-username">{{ item.submitUser }}:</span>
              <span class="reply-content-style">{{ item.content }}</span>
              <span class="reply-time-style">{{ item.timestamp }}</span>
              <el-link
                type="primary"
                class="reply-link"
                @click="item.temp = true"
                >回复</el-link
              >
            </div>
            <div class="open-reply-main" v-if="item.temp">
              <div class="create-reply">
                <div class="replyImg-small"></div>
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="发表您的见解吧！"
                  v-model="textarea"
                  class="text-area"
                >
                </el-input>
              </div>
              <div class="reply-button-style">
                <el-button size="small" round @click="item.temp = false"
                  >取消回复</el-button
                >
                <el-button type="danger" size="small" round>发表评论</el-button>
              </div>
            </div>
            <div v-if="item.reply != null" class="reply">
              <div v-for="something in item.reply" :key="something.id">
                <el-card>
                  <div class="reply-list">
                    <div class="userImg-small"></div>
                    <span class="reply-username"
                      >{{ something.submitUser }} 回复
                      {{ something.replyWhos }}:</span
                    >
                    <span class="reply-content-style">{{
                      something.content
                    }}</span>
                    <span class="reply-time-style">{{
                      something.timestamp
                    }}</span>
                    <el-link
                      type="primary"
                      class="reply-link"
                      @click="something.temp = true"
                      >回复</el-link
                    >
                  </div>
                  <div class="open-reply-list" v-if="something.temp">
                    <div class="create-reply">
                      <div class="replyImg-small"></div>
                      <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="发表您的见解吧！"
                        v-model="textarea"
                        class="text-area"
                      >
                      </el-input>
                    </div>
                    <div class="reply-button-style">
                      <el-button
                        size="small"
                        round
                        @click="something.temp = false"
                        >取消回复</el-button
                      >
                      <el-button type="danger" size="small" round
                        >发表评论</el-button
                      >
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    replyAction() {},
  },
  data() {
    return {
      commitTime: 1,
      textarea: "",
      items: [
        {
          id: 1,
          content: "yes you are good",
          submitUser: "north",
          timestamp: "2018/4/12 20:46",
          temp: false,
          reply: [
            {
              id: 1,
              content: "stupid",
              submitUser: "bob",
              replyWhos: "north",
              timestamp: "2018/4/12 20:46",
              temp: false,
            },
            {
              id: 2,
              content: "who are you",
              submitUser: "alice",
              replyWhos: "bob",
              timestamp: "2018/4/12 20:46",
              temp: false,
            },
          ],
        },
        {
          id: 2,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
          temp: false,
        },
        {
          id: 3,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
          temp: false,
          reply: [
            {
              id: 1,
              content: "stupid",
              submitUser: "bob",
              replyWhos: "north",
              timestamp: "2018/4/12 20:46",
              temp: false,
            },
            {
              id: 2,
              content: "who are you",
              submitUser: "alice",
              replyWhos: "bob",
              timestamp: "2018/4/12 20:46",
              temp: false,
            },
          ],
        },
        {
          id: 4,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
          temp: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.one-for-all {
  /* background-color: coral; */
  padding: 20px;
}
.submit-comment {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.userImg {
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background: url("../../assets/user.jpeg") no-repeat center;
  background-size: 60px;
}
.userImg-small {
  border-radius: 15px;
  width: 30px;
  height: 30px;
  background: url("../../assets/user.jpeg") no-repeat center;
  background-size: 30px;
  margin-right: 10px;
}
.replyImg-small {
  border-radius: 23px;
  width: 46px;
  height: 46px;
  background: url("../../assets/reply.jpg") no-repeat center;
  background-size: 46px;
}
.input-line {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
}
.text-area {
  padding-left: 20px;
}
.comment-list {
  /* background-color: #C0C4CC; */
  padding: 20px;
}
.main-reply {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
}
.reply-link {
  margin-left: 10px;
}
.card {
  padding-bottom: 5px;
}
.reply {
  padding-left: 40px;
}
.reply-time-style {
  margin-left: 10px;
  font-size: 12px;
  color: #606266;
}
.reply-content-style {
  font-weight: bold;
  margin-left: 10px;
}
.reply-username {
  color: #606266;
}
.reply-list {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.create-reply {
  display: flex;
  flex-direction: row;
}
.reply-button-style {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
}
.open-reply-main {
  padding-left: 40px;
}
.open-reply-list {
  padding-left: 40px;
  padding-top: 20px;
}
</style>