<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/">
          <span class="fa-stack fa-lg">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-list fa-stack-1x"></i>
          </span>
          Snippets
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span class="fa-stack fa-lg">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-info fa-stack-1x"></i>
          </span>
          About
        </router-link>
      </li>
      <li>
        <a href="https://github.com/NSSure/sure-snippets" title="Source code">
          <span class="fa-stack fa-lg">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x"></i>
          </span>
          Source
        </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
};
</script>

<style scoped>
.nav {
  background-color: #007ACC;
  display: flex;
  flex-direction: column;
  height: 100%;
}

ul {
  list-style-type: none;
}

li {
  color: #f7f7f7;
  cursor: pointer;
  font-weight: bold;
  display: flex;
}

li:hover {
  background-color: #41B883;
}

li a {
  color: #f7f7f7;
  text-decoration: none;
  padding: 15px;
}

li a:hover {
  color: #ffe0f5;
}

.title {
  font-size: 1.25rem;
}
</style>
