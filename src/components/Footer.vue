<!-- Footer.vue -->
<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>聯絡我們</h3>
          <p>Email: contact@qile-game.com</p>
          <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-discord"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>快速連結</h3>
          <ul>
            <li><router-link to="/faq">常見問題</router-link></li>
            <li><router-link to="/privacy">隱私政策</router-link></li>
            <li><router-link to="/terms">使用條款</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>訂閱更新</h3>
          <div class="newsletter">
            <input type="email" placeholder="輸入您的 Email">
            <button>訂閱</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 奇樂桌遊 版權所有</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 3rem 2rem 1rem;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .footer-section h3 {
    color: #ffd700;
    margin-bottom: 1rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    color: #ffffff;
    font-size: 1.5rem;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    color: #ffffff;
    text-decoration: none;
  }
  
  .newsletter input {
    padding: 0.5rem;
    width: 200px;
    margin-right: 0.5rem;
  }
  
  .newsletter button {
    padding: 0.5rem 1rem;
    background-color: #ffd700;
    border: none;
    cursor: pointer;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #333;
  }
  </style>