<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容" v-model="searchWord" clearable @clear="getTeacherList(1)">
            <el-button slot="append" icon="el-icon-search" @click="searchByWord(1)"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            style="margin-left: 30px"
          >添加导师信息
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
          prop="name"
          label="姓名"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="position"
          label="职称"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="img_url"
          label="个人照片"
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
  name: "TeacherTable",
  data() {
    return {
      tableData: [
        {
          "name": "孙威",
          "img_url": "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/sun_resize.jpg",
          "operation_time": "2022-10-16T18:45:36",
          "operation_user": 1,
          "position": "阿里云大数据讲师、慧科集团高级讲师、互联网高级架构师",
          "id": 1,
          "description": "掌握云原生开发、微服务架构设计、推荐系统工程实现。多年互联网公司就业经历，能够组织规划中大型分布式项目开发交付。有丰富的大数据和云计算等前沿技术的教学实施经验。"
        },
      ],
      total_count: 1,
      userList: [],
      total: 0,
      currentPage: 1,
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
      searchWord: ''
    };
  },
  created() {
    this.getTeacherList(1);
  },
  methods: {
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      // console.log(this.currentPage1)
      this.getTeacherList(this.currentPage);
    },
    async getTeacherList(page) {
      if (this.searchWord == '' || this.searchWord == null) {
        const teacherList = await this.$axios.$get(
          "/man/list/teacher?page=" + page,
          {
            withCredentials: true,
          }
        ).catch((err) => {
          this.$message.error("验证过期，请重新登录");
          this.$router.push("/man-login");
        });
        if (teacherList["code"] != 0) return;
        this.tableData = teacherList["data"];
        this.total_count = teacherList["total_count"];
      } else {
        this.searchByWord(page)
      }
    }, async searchByWord(page) {
      const teacher = await this.$axios.$get(`/man/search/teacher?page=${page}&query=${this.searchWord}`,
        {
          withCredentials: true,
        }).catch((err) => {
        if (err.response.status == 401 || err.response.status == 422) {
          this.$message.error("验证过期，请重新登录");
          this.$router.push("/man-login");
        }
      });
      if (teacher["code"] != 0) return;
      this.tableData = teacher["data"];
      this.total_count = teacher["total_count"];
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
