<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" alt="奇樂 Logo" height="40">
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">遊戲介紹</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/funding">募資計畫</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/updates">開發進度</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/community">社群</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .navbar {
    padding: 1rem 0;
  }
  
  .nav-link {
    color: #ffffff;
    margin: 0 0.5rem;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #ffd700;
  }
  
  .router-link-active {
    color: #ffd700 !important;
  }
  </style>