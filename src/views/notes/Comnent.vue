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
        <!-- <el-timeline> -->
        <div v-for="item in items" :key="item.id" class="card">
          <!-- <el-timeline-item :timestamp="item.timestamp" placement="top"> -->
          <el-card>
            <h4>{{ item.content }}</h4>
            <p>{{ item.submitUser }} 提交于 2018/4/12 20:46</p>
          </el-card>
          <!-- </el-timeline-item> -->
        </div>
        <!-- </el-timeline> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        },
        {
          id: 2,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
        },
        {
          id: 3,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
        },
        {
          id: 4,
          content: "谢谢,很有帮助",
          submitUser: "nicolas",
          timestamp: "2018/4/12 20:46",
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
.card {
  padding-bottom: 5px;
}
</style>