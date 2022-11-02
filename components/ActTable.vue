<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容" v-model="searchWord" clearable @clear="getActivityList(1)">
            <el-button slot="append" icon="el-icon-search" @click="searchByWord(1)"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            style="margin-left: 30px"
          >添加活动
          </el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button type="success">从文件导入</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="活动id" width="60"></el-table-column>
        <el-table-column
          prop="first_title"
          label="第一标题"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="second_title"
          label="第二标题"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="img_url"
          label="活动图片"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="resize_img_url"
          label="活动小图"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="活动时间"
          sortable
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column prop="detail_page_id" label="活动详情id" width="50">
        </el-table-column>
        <el-table-column
          prop="detail_page_url"
          label="活动详情url"

          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="活动类型"
          :formatter="formatType"
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
              @click="deleteUser(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <div></div>
    </el-card>

    <el-dialog
      title="添加活动"
      :visible.sync="addDialogVisible"
      @close="addDialogClosed"
    >
      <el-form
        label-width="120px"
        :model="addForm"
        :rules="addFromRules"
        ref="addFormRef"
      >
        <el-form-item label="第一标题" prop="first_title">
          <el-input v-model="addForm.first_title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="第二标题" prop="second_title">
          <el-input v-model="addForm.second_title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动图片" prop="img_url">
          <el-input v-model="addForm.img_url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动小图" prop="resize_img_url">
          <el-input v-model="addForm.resize_img_url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="time">
          <el-input v-model="addForm.time" autocomplete="off" type="date"></el-input>
        </el-form-item>
        <el-form-item label="活动详情id" prop="detail_page_id">
          <el-input v-model="addForm.detail_page_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动详情url" prop="detail_page_url">
          <el-input v-model="addForm.detail_page_url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动类型" prop="type">
          <el-input v-model="addForm.type" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAct">确 定</el-button>
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
  name: "ActTable",
  data() {
    return {
      tableData: [
        {
          time: "2022-09-30T00:00:00",
          first_title: "",
          img_url:
            "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/activity_1.jpg",
          detail_page_id: 1,
          operation_time: "2022-10-16T18:46:43",
          id: 1,
          second_title: "欢迎来到科技创新协会",
          resize_img_url:
            "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/activity_1_resize.jpg",
          detail_page_url: null,
          operation_user: 1,
        },
      ],
      total_count: 1,
      userList: [],
      total: 0,
      currentPage: 1,
      addDialogVisible: false,
      editDialogVisible: false,
      addForm: {
        first_title: "",
        second_title: "",
        img_url: "",
        resize_img_url: "",
        time: "",
        detail_page_id: "",
        detail_page_url: "",
        type: "",
      },
      addFromRules: {
        first_title: [
          {required: true, message: "请输入第一标题", trigger: "blur"},
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
        second_title: [
          {required: true, message: "请输入第二标题", trigger: "blur"},
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
        img_url: [
          {required: false, message: "请输入图片地址", trigger: "blur"},
        ],
        resize_img_url: [
          {required: false, message: "请输入小图地址", trigger: "blur"},
        ],
        time: [
          {required: true, message: "请选择时间", trigger: "blur"},
        ],
        detail_page_id: [
          {required: false, message: "请输入详情页面id", trigger: "blur"},
        ],
        detail_page_url: [
          {required: false, message: "请输入详情页面网址", trigger: "blur"},
        ],
        type: [
          {required: false, message: "请输入活动类型(默认为0)", trigger: "blur"},
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
    this.getActivityList(1);
  },
  methods: {
    formatType: function (row, column, cellValue) {
      var ret = null
      switch (cellValue) {
        case 0:
          ret = '普通活动'
          return ret
        case 1:
          ret = '竞赛活动'
          return ret
        default:
          ret = '普通活动'
          return ret
      }
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      // console.log(this.currentPage1)
      this.getActivityList(this.currentPage);
    },
    async getActivityList(page) {
      if (this.searchWord == '' || this.searchWord == null) {
        const activity = await this.$axios.$get(
          "/man/list/activity?page=" + page,
          {
            withCredentials: true,
          }
        ).catch((err) => {
          if (err.response.status == 401 || err.response.status == 422) {
            alert("验证过期，请重新登录");
            // this.$router.push("/man-login");
          }
        });
        if (activity["code"] != 0) return;
        this.tableData = activity["data"];
        this.total_count = activity["total_count"];
      } else {
        await this.searchByWord(page)
      }
    },
    async searchByWord(page) {
      const activity = await this.$axios.$get(`/man/search/activity?page=${page}&query=${this.searchWord}`,
        {
          withCredentials: true,
        }).catch((err) => {
        if (err.response.status == 401 || err.response.status == 422) {
          alert("验证过期，请重新登录");
          this.$router.push("/man-login");
        }
      });
      if (activity["code"] != 0) return;
      this.tableData = activity["data"];
      this.total_count = activity["total_count"];
    },
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    async addAct() {
      await this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await this.$axios.post("/man/insert/activity", this.addForm, {withCredentials: true}).catch((err) => {
          if (err.response.status == 401 || err.response.status == 422) {
            alert("验证过期，请重新登录")
            this.$router.push("/man-login");
          } else {
            alert("添加失败")
          }
        });
        if (res['code'] != 0) {
          return this.$message.error("操作失败");
        }
        this.$message.success("操作成功");
        this.tableData.append(this.addForm)
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
