<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><Header></Header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px"></el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  background-color: #42b983;
}
.aside {
  background-color: #42b932;
}
.main {
  height: 100%;
}
</style>
