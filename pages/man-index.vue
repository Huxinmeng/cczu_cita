<template>
  <div>
    <Nav/>

    <el-container>
      <el-aside width="200px">
        <el-scrollbar width="100%">
          <el-menu
            unique-opened
            text-color="black"
            active-text-color="black"
            :router="true"
          >
            <el-menu-item @click="change(1)">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>成员</span>
              </template>
            </el-menu-item>
            <el-menu-item @click="change(2)">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>活动</span>
              </template>
            </el-menu-item>
            <el-menu-item @click="change(3)">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>项目</span>
              </template>
            </el-menu-item>
            <el-menu-item @click="change(4)">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>获奖情况</span>
              </template>
            </el-menu-item>
            <el-menu-item @click="change(5)">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导师信息</span>
              </template>
            </el-menu-item>
            <el-menu-item>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>三氪情报局</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <div v-if="index == 1">
          <TeamMember/>
        </div>
        <div v-if="index == 2">
          <ActTable/>
        </div>
        <div v-if="index == 3">
          <ProjectTable/>
        </div>
        <div v-if="index == 4">
          <AwardTable/>
        </div>
        <div v-if="index == 5">
          <TeacherTable/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import FooterTwo from "../components/FooterTwo";
import PageHeader from "../components/PageHeader";
import TeamPage from "../components/TeamPage";
import TeamMember from "../components/TeamMember";
import ActTable from "../components/ActTable";
import ProjectTable from "../components/ProjectTable";
import AwardTable from "~/components/AwardTable";
import TeacherTable from "~/components/TeacherTable";

export default {
  components: {
    TeacherTable,
    TeamPage,
    PageHeader,
    FooterTwo,
    Nav,
    TeamMember,
    ActTable,
    ProjectTable,
    AwardTable
  },
  data() {
    return {
      index: 0,
    };
  },
  head() {
    return {
      title:
        "科创协会 - C.A.Science and Technology Innovation Association | 管理页面",
    };
  },
  created() {
    // this.judgeLogin();
  },
  methods: {
    change(nu) {
      this.index = nu;
      console.log(this.index);
    },
    async judgeLogin() {
      const response = await this.$axios
        .post("/man/login", null, {withCredentials: true})
        .then((res) => {
        })
        .catch((error) => {
          // console.log(error);
          alert("验证过期，请重新登录");
          this.$router.push("/man-login");
        });
    },
  },
};
</script>
<style scoped>
a {
  display: block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  text-decoration: none;
  color: white;
  background-color: #55585a;
}

a:hover {
  background-color: #ff6700;
}
</style>
