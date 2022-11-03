<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容" v-model="searchWord" clearable @clear="getPartnerList(1)">
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
          >添加用户
          </el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button type="success">从文件导入</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" border style="width: 100%" height="450">
        <el-table-column prop="id" label="id" sortable>
        </el-table-column>
        <el-table-column prop="number" label="学号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="class_" label="班级"></el-table-column>
        <el-table-column prop="department" label="部门" sortable></el-table-column>
        <el-table-column prop="position" label="职务"></el-table-column>
        <el-table-column prop="year" label="年份" sortable></el-table-column>
        <el-table-column label="操作">
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
  name: "TeamMember",
  data() {
    return {
      tableData: [
        {
          "operation_time": "2022-11-03T22:00:51",
          "number": "20496120",
          "department": "其他",
          "phone": null,
          "year": 2022,
          "operation_user": 1,
          "name": "黄文凯",
          "class_": "大数据201",
          "id": 1,
          "sex": "男",
          "position": "主席团"
        },
      ],
      total_count: 1,
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      currentPage: 1,
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
      searchWord: "",
      currentActId: null
    };
  }, created() {
    this.getPartnerList(1);
  },
  methods: {
    async getPartnerList(page) {
      if (this.searchWord == "" || this.searchWord == null) {
        const award = await this.$axios
          .$get("/man/list/student?page=" + page, {
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
        .$get(`/man/search/student?page=${page}&query=${this.searchWord}`, {
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
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.getPartnerList(this.currentPage);
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
        this.getPartnerList();
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

      this.getPartnerList();
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
        this.getPartnerList();
      });
    },
  },
};
</script>

<style scoped>
</style>
