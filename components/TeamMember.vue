<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容" v-model="queryInfo.query">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            style="margin-left: 30px"
            >添加用户</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button type="success">从文件导入</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="number" label="学号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="class" label="班级"> </el-table-column>
        <el-table-column prop="depart" label="部门"> </el-table-column>
        <el-table-column prop="position" label="职务"> </el-table-column>
        <el-table-column prop="year" label="年份"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <br />
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
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
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
        {
          number: "20477108",
          name: "王小虎",
          class: "软件212",
          depart: "项目部",
          position: "干事",
          year: "2022",
        },
      ],
      queryInfo: {
        query: "",
        pageNum: 1, //当前页
        pageSize: 5,
      },
      userList: [],
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      currentPage4: 4,
      addForm: {
        username: "",
        password: "",
        email: "",
      },
      addFromRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
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
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
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
  methods: {
    async getUserList() {
      const { data: res } = await this.$axios.get("alluser", {
        params: this.queryInfo,
      });
      this.userList = res.data;
      this.total = res.numbers;
    },

    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      this.getUserList();
    },

    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("adduser", this.addForm);
        if (res != "success") {
          return this.$message.error("操作失败");
        }
        this.$message.success("操作成功");
        this.addDialogVisible = false;
        this.getUserList();
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
      const { data: res } = await this.$http.delete("deleteUser?id=" + id);
      if (res != "success") {
        return this.$message.error("操作失败");
      }
      this.$message.success("操作成功");

      this.getUserList();
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
        this.getUserList();
      });
    },
  },
};
</script>

<style scoped>
</style>
