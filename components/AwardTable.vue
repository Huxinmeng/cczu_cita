<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            style="margin-left: 30px"
          >添加奖项
          </el-button
          >
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
        >
        </el-table-column>
        <el-table-column
          prop="level"
          label="奖项级别"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="game_time"
          label="比赛时间"

          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column prop="if_proved" label="是否有证明材料" :formatter="formatBoolean">
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
              @click="deleteUser(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <div></div>
    </el-card>

    <el-dialog
      title="添加用户信息"
      :visible.sync="addDialogVisible"
      @close="addDialogClosed"
    >
      <el-form
        label-width="120px"
        :model="addForm"
        :rules="addFromRules"
        ref="addFormRef"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
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
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="editForm.username"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
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
          "game_name": "第七届中国国际“互联网+”创新创业大赛",
          "player_name": "黄文凯",
          "operation_time": "2022-11-02T14:16:28",
          "level": "一等奖",
          "proved_img_or_url": null,
          "operation_user": 1,
          "id": 1,
          "game_time": "2021-07-01T00:00:00",
          "type": "校级",
          "if_proved": true
        },
      ],
      total_count: 1,
      userList: [],
      total: 0,
      currentPage1: 1,
      addDialogVisible: false,
      editDialogVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
      },
      addFromRules: {
        username: [
          {required: true, message: "请输入用户名称", trigger: "blur"},
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          {required: true, message: "请输入邮箱", trigger: "blur"},
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      editForm: {
        username: "",
        password: "",
        email: "",
      },
      editFromRules: {
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          {required: true, message: "请输入邮箱", trigger: "blur"},
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getAwardList(1);
  },
  methods: {
    handleCurrentChange(newPage) {
      this.currentPage1 = newPage;
      // console.log(this.currentPage1)
      this.getAwardList(this.currentPage1);
    },
    formatBoolean: function (row, column, cellValue) {
      var ret = ''
      if (cellValue) {
        ret = '是'
      } else {
        ret = '否'
      }
      return ret
    },
    async getAwardList(page) {
      const award = await this.$axios.$get(
        "/man/list/award?page=" + page,
        {
          withCredentials: true,
        }
      );
      if (award["code"] != 0) return;
      this.tableData = award["data"];
      this.total_count = award["total_count"];
    },

    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const {data: res} = await this.$http.post("adduser", this.addForm);
        if (res != "success") {
          return this.$message.error("操作失败");
        }
        this.$message.success("操作成功");
        this.addDialogVisible = false;
      });
    },
    async deleteUser(id) {
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
      const {data: res} = await this.$http.delete("deleteUser?id=" + id);
      if (res != "success") {
        return this.$message.error("操作失败");
      }
      this.$message.success("操作成功");
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
        const {data: res} = await this.$http.post("edituser", this.editForm);
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
