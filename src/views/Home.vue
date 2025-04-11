<!-- Home.vue -->
<template>
  <div class="home">
    <Header />
    
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>奇樂 - 全新的社交推理遊戲體驗</h1>
          <p>在這裡，每個玩家都是故事的主角</p>
          <div class="cta-buttons">
            <a href="#funding" class="cta-primary">支持我們</a>
            <a href="#about" class="cta-secondary">了解更多</a>
          </div>
        </div>
      </section>

      <!-- 遊戲特色 -->
      <section id="features" class="features">
        <h2>遊戲特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <!-- <img src="@/assets/feature1.png" alt="多人互動"> -->
            <h3>即時多人互動</h3>
            <p>支援 6-12 人同時在線遊玩，帶來真實的社交體驗</p>
          </div>
          <div class="feature-card">
            <!-- <img src="@/assets/feature2.png" alt="角色系統"> -->
            <h3>獨特角色系統</h3>
            <p>超過 20 種特殊角色，每個角色都有獨特的能力和玩法</p>
          </div>
          <div class="feature-card">
            <!-- <img src="@/assets/feature3.png" alt="遊戲模式"> -->
            <h3>多樣遊戲模式</h3>
            <p>經典模式、快速模式、自訂模式，滿足不同玩家需求</p>
          </div>
        </div>
      </section>

      <!-- 開發進度 -->
      <section id="progress" class="progress">
        <h2>開發進度</h2>
        <div class="progress-timeline">
          <div class="timeline-item completed">
            <h3>概念發想</h3>
            <p>完成遊戲核心機制設計</p>
          </div>
          <div class="timeline-item completed">
            <h3>原型開發</h3>
            <p>基礎功能實現和測試</p>
          </div>
          <div class="timeline-item current">
            <h3>封閉測試</h3>
            <p>進行中 - 預計 2025 Q2 完成</p>
          </div>
          <div class="timeline-item">
            <h3>公測階段</h3>
            <p>預計 2025 Q3</p>
          </div>
        </div>
      </section>

      <!-- 募資計畫 -->
      <section id="funding" class="funding">
        <h2>募資計畫</h2>
        <div class="funding-status">
          <div class="funding-progress">
            <div class="progress-bar" :style="{ width: '65%' }"></div>
          </div>
          <div class="funding-numbers">
            <p class="current">已募集: NT$ 650,000</p>
            <p class="target">目標: NT$ 1,000,000</p>
          </div>
          <button class="support-button">立即支持</button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<style scoped>
.home {
  padding-top: 64px; /* Header height */
}

.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-buttons {
  margin-top: 2rem;
}

.cta-primary, .cta-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  margin: 0 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.cta-primary {
  background-color: #ffd700;
  color: #1a1a1a;
}

.cta-secondary {
  border: 2px solid #ffffff;
  color: #ffffff;
}

section {
  padding: 4rem 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 10px;
}

.feature-card img {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

.progress-timeline {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.timeline-item {
  text-align: center;
  position: relative;
}

.timeline-item::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -1rem;
  width: 2rem;
  height: 2px;
  background: #ddd;
}

.timeline-item:last-child::after {
  display: none;
}

.timeline-item.completed {
  color: #4CAF50;
}

.timeline-item.current {
  color: #2196F3;
}

.funding {
  background: #f5f5f5;
}

.funding-status {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.funding-progress {
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  margin: 2rem 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.funding-numbers {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.support-button {
  padding: 1rem 3rem;
  background: #ffd700;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .progress-timeline {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-item::after {
    display: none;
  }
}
</style>
