<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input
            placeholder="请输入搜索内容"
            v-model="searchWord"
            clearable
            @clear="getAwardList(1)"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchByWord(1)"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            style="margin-left: 30px"
            >添加奖项
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success">从文件导入</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="id" width="60"></el-table-column>
        <el-table-column
          prop="player_name"
          label="获奖人员"
          :show-overflow-tooltip="true"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="game_name"
          label="比赛全名"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="奖项类型"
          :show-overflow-tooltip="true"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="level"
          label="奖项级别"
          :show-overflow-tooltip="true"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="game_time"
          label="比赛时间"
          sortable
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="if_proved"
          label="是否有证明材料"
          :formatter="formatBoolean"
        >
        </el-table-column>
        <el-table-column
          prop="proved_img_or_url"
          label="证明材料url"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column prop="operation_user" label="操作id" width="80">
        </el-table-column>
        <el-table-column
          prop="operation_time"
          label="操作时间"
          :show-overflow-tooltip="true"
          sortable
        >
        </el-table-column>
        <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteAward(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <div></div>
    </el-card>

    <el-dialog
      title="添加奖项"
      :visible.sync="addDialogVisible"
      @close="addDialogClosed"
    >
      <el-form
        label-width="120px"
        :model="addForm"
        :rules="addFromRules"
        ref="addFormRef"
      >
        <el-form-item label="获奖人员" prop="name">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="比赛全名" prop="game_name">
          <el-input v-model="addForm.game_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="获奖类型" prop="type">
          <el-input v-model="addForm.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="获奖级别" prop="level">
          <el-input v-model="addForm.level" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="比赛时间" prop="game_time">
          <el-input
            v-model="addForm.game_time"
            autocomplete="off"
            type="time"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否有证明材料" prop="if_proved">
          <el-input v-model="addForm.if_proved" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="证明材料url" prop="proved_img_or_url">
          <el-input
            v-model="addForm.proved_img_or_url"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAward">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="修改用户信息"
      :visible.sync="editDialogVisible"
      @close="editDialogClosed"
    >
      <el-form
        label-width="120px"
        :model="editForm"
        :rules="editFromRules"
        ref="editFormRef"
      >
        <el-form-item label="获奖人员" prop="name">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="比赛全名" prop="game_name">
          <el-input v-model="editForm.game_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="获奖类型" prop="type">
          <el-input v-model="editForm.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="获奖级别" prop="level">
          <el-input v-model="editForm.level" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="比赛时间" prop="game_time">
          <el-input v-model="editForm.game_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否有证明材料" prop="if_proved">
          <el-input v-model="editForm.if_proved" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="证明材料url" prop="proved_img_or_url">
          <el-input
            v-model="editForm.proved_img_or_url"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total_count"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "AwardTable",
  data() {
    return {
      tableData: [
        {
          game_name: "第七届中国国际“互联网+”创新创业大赛",
          player_name: "黄文凯",
          operation_time: "2022-11-02T14:16:28",
          level: "一等奖",
          proved_img_or_url: null,
          operation_user: 1,
          id: 1,
          game_time: "2021-07-01T00:00:00",
          type: "校级",
          if_proved: true,
        },
      ],
      total_count: 1,
      userList: [],
      total: 0,
      currentPage: 1,
      addDialogVisible: false,
      editDialogVisible: false,
      addForm: {
        game_name: null,
        player_name: null,
        operation_time: null,
        level: null,
        proved_img_or_url: null,
        operation_user: null,
        id: null,
        game_time: null,
        type: null,
        if_proved: null,
      },
      addFromRules: {
        name: [
          { required: true, message: "请输入获奖人员姓名", trigger: "blur" },
          {
            min: 2,
            max: 5,
            message: "长度在 2 到 5 个字符",
            trigger: "blur",
          },
        ],
        game_name: [
          { required: true, message: "请输入比赛全名", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        type: [
          { required: true, message: "请输入奖项类型", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        level: [
          { required: true, message: "请输入奖项级别", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        game_time: [
          { required: true, message: "请输入比赛时间", trigger: "blur" },
        ],
        if_proved: [
          { required: true, message: "请输入是否有证明材料", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      editForm: {
        game_name: null,
        player_name: null,
        operation_time: null,
        level: null,
        proved_img_or_url: null,
        operation_user: null,
        id: null,
        game_time: null,
        type: null,
        if_proved: null,
      },
      editFromRules: {
        name: [
          { required: true, message: "请输入获奖人员姓名", trigger: "blur" },
          {
            min: 2,
            max: 5,
            message: "长度在 2 到 5 个字符",
            trigger: "blur",
          },
        ],
        game_name: [
          { required: true, message: "请输入比赛全名", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        type: [
          { required: true, message: "请输入奖项类型", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        level: [
          { required: true, message: "请输入奖项级别", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        game_time: [
          { required: true, message: "请输入比赛时间", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        if_proved: [
          { required: true, message: "请输入是否有证明材料", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      searchWord: "",
    };
  },
  created() {
    this.getAwardList(1);
  },
  methods: {
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      // console.log(this.currentPage1)
      this.getAwardList(this.currentPage);
    },
    formatBoolean: function (row, column, cellValue) {
      var ret = "";
      if (cellValue) {
        ret = "是";
      } else {
        ret = "否";
      }
      return ret;
    },
    async getAwardList(page) {
      if (this.searchWord == "" || this.searchWord == null) {
        const award = await this.$axios
          .$get("/man/list/award?page=" + page, {
            withCredentials: true,
          })
          .catch((err) => {
            this.$message.error("验证过期，请重新登录");
            this.$router.push("/man-login");
          });
        if (award["code"] != 0) return;
        this.tableData = award["data"];
        this.total_count = award["total_count"];
      } else {
        await this.searchByWord(page);
      }
    },
    async searchByWord(page) {
      const award = await this.$axios
        .$get(`/man/search/award?page=${page}&query=${this.searchWord}`, {
          withCredentials: true,
        })
        .catch((err) => {
          if (err.response.status == 401 || err.response.status == 422) {
            this.$message.error("验证过期，请重新登录");
            this.$router.push("/man-login");
          }
        });
      if (award["code"] != 0) return;
      this.tableData = award["data"];
      this.total_count = award["total_count"];
    },

    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    async addAward() {
      await this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await this.$axios
          .post("/man/insert/award", this.addForm, { withCredentials: true })
          .catch((err) => {
            if (err.response.status == 401 || err.response.status == 422) {
              this.$message.error("验证过期，请重新登录");
              this.$router.push("/man-login");
            } else {
              this.$message.error("操作失败");
            }
          });
        // console.log(res)
        if (res.status != 201) {
          return this.$message.error("操作失败");
        }
        this.$message.success("操作成功");
        await this.getActivityList(this.currentPage);
        this.addDialogVisible = false;
      });
    },
    async deleteAward(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除用户，是否继续？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmResult != "confirm") {
        return this.$message.info("已取消删除");
      }
      const res = await this.$axios
        .delete("/man/delete/award?del_id=" + id, { withCredentials: true })
        .catch((err) => {
          this.$message.error("操作失败");
        });
      // if (res.status != 200) {
      //   return this.$message.error("操作失败");
      // }
      this.$message.success("操作成功");
      await this.getActivityList(this.currentPage);
    },
    async showEditDialog(id) {
      this.editDialogVisible = true;
    },
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    editUser() {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("edituser", this.editForm);
        if (res != "success") {
          return this.$message.error("操作失败");
        }
        this.$message.success("操作成功");
        this.editDialogVisible = false;
      });
    },
  },
};
</script>

<style scoped>
</style>
