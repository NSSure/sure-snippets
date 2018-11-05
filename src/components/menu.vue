<template>
  <div>
      <ul class="nav">
            <div class="nav-left">
                <span class="nav-title"><router-link to="/">SURE SNIPPETS</router-link></span>
            </div>
            <div class="nav-right">
                <ul class="nav-right">
                    <li><router-link to="/">Snippets</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><a href="https://gitlab.com/NSSure/sure-snippets" title="Source code"><i class="fa fa-gitlab fa-lg"></i></a></li>
                </ul>
            </div>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<style scoped>
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #D2293E;
    }

    .nav {
        display: flex;
        width: auto;
    }

    .nav-left {
        display: flex;
        width: auto;
        justify-content: flex-start;
    }

    .nav-right {
        display: flex;
        width: auto;
        justify-content: flex-end;
    }

    .nav-title {
        color: #f7f7f7;
        font-weight: bold;
        font-size: 1.25rem;
        padding: 15px;
    }

    .nav-title a {
        color: #f7f7f7;
        text-decoration: none;
        cursor: pointer;
    }

    .nav-title a:hover {
        color: #FFE0F5;
    }

    ul {
        list-style-type: none;
    }

    li {
        color: #f7f7f7;
        cursor: pointer;
        font-weight: bold;
    }
    
    li a {
        color: #f7f7f7;
        text-decoration: none;
        padding: 15px;
    }

    li a:hover {
        color: #FFE0F5;
    }

    .title {
        font-size: 1.25rem;
    }
</style>
