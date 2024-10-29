<template>
  <div :class="{ 'dark-mode': darkMode }">
    <nav class="bg-white shadow-md py-4 dark:bg-gray-800 dark:text-white">
      <div class="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <a href="#" class="text-2xl font-bold text-gray-800 flex items-center mb-4 md:mb-0 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="35" height="35">
            <circle cx="100" cy="100" r="95" fill="#282828" stroke="#8A2BE2" stroke-width="5" />
            <rect x="60" y="90" width="80" height="20" fill="#8A2BE2" rx="5" />
            <rect x="35" y="80" width="20" height="40" fill="#C0C0C0" rx="5" />
            <rect x="25" y="85" width="10" height="30" fill="#FFD700" rx="3" />
            <rect x="145" y="80" width="20" height="40" fill="#C0C0C0" rx="5" />
            <rect x="165" y="85" width="10" height="30" fill="#FFD700" rx="3" />
          </svg>
          <span class="ml-2">{{ $t('navigation.title') }}</span>
        </a>
        <div class="flex flex-col items-center md:flex-row md:items-center dd">
          
          
          
          <ul class="hidden md:flex items-center space-x-6">
            <li><a href="#Plans" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.fitness_plans') }}</a></li>
            <li><a href="#Programs" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.programs') }}</a></li>
            <li><a href="#About" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.about') }}</a></li>
            <li><a href="#For-whom" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.for_whom') }}</a></li>
            <li><a href="#Faq" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.faq') }}</a></li>
          </ul>
          <languageSwitcher />
          <div class="md:hidden" @click="showMobileMenu = !showMobileMenu">
            <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-600 dark:text-gray-400" />
          </div>
          <div class="relative bruu inline-block text-gray-600 dark:text-gray-400 cursor-pointer md:ml-4">
            <font-awesome-icon
              :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
              class="w-6 h-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center p-1"
              @click="toggleDarkMode"
              :style="{color: darkMode?  'white' : 'black'}" />
          </div>
        </div>
      </div>
    </nav>
    <Transition name="v" class="fixed inset-0 z-10 bg-black flex items-center justify-center">
      <div :class="{'wh': !darkMode}" v-if="showMobileMenu" class="bg-white dark:bg-gray-800 rounded-lg h-full shadow-lg p-6 w-full" @click.stop>
        <button class="absolute top-4 right-4" @click="showMobileMenu = false">
          <font-awesome-icon :icon="['fas', 'times']" class="text-gray-600 dark:text-gray-400" />
        </button>
        <ul class="space-y-4">
          <li><a href="#Plans" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.fitness_plans') }}</a></li>
          <li><a href="#Programs" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.programs') }}</a></li>
          <li><a href="#About" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.about') }}</a></li>
          <li><a href="#For-whom" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.for_whom') }}</a></li>
          <li><a href="#Faq" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100">{{ $t('navigation.faq') }}</a></li>
          <li>
            <div @click="toggleDarkMode" class="flex items-center justify-center gap-2">
              <font-awesome-icon
                :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
                class="w-6 h-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center p-1"
                :style="{color: darkMode?  'white' : 'black'}" />
              <span class="font-bold">{{ darkMode ? 'Dark Mode' : 'Light Mode' }}</span>
            </div>
          </li>
        </ul>
      </div>
    </Transition>
    <NuxtPage class="pb-12" />
    <footer class="pt-12 pb-12 bg-white text-center dark:bg-gray-800 dark:text-white">
      <div class="container mx-auto px-4 py-8">
        <p class="text-gray-600 dark:text-gray-400">© 2023 <a href="#" class="text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Bodybuilduz</a>
        </p>
        <ul class="flex justify-center mt-4 space-x-6">
          <li>
            <a href="#" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100"><font-awesome-icon
                :icon="['fab', 'facebook-f']" /></a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100"><font-awesome-icon
                :icon="['fab', 'twitter']" /></a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-900 transition duration-300 dark:text-gray-300 dark:hover:text-gray-100"><font-awesome-icon
                :icon="['fab', 'instagram']" /></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

import { ref } from 'vue';
const darkMode = ref(true);
const showMobileMenu = ref(false);

onMounted(() => {
  darkMode.value = JSON.parse(localStorage.getItem('darkMode'))
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value);
}
</script>

<style>
.fa-solid {
  color: #525557;
}

body {
  font-family: 'Arial', sans-serif;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ff6347, #ff9933);
  opacity: 0.1;
  z-index: -1;
  animation: backgroundAnimation 10s linear infinite;
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: -2;
  pointer-events: none;
}

body {
  width: 100%;
  margin: auto;
  scroll-behavior: smooth;
}

/* Dark Mode Styles */
.dark-mode nav {
  background-color: #121212; /* Set the overall dark mode background */
  color: #fff;
}

.dark-mode footer {
  background-color: #121212; /* Set the overall dark mode background */
  color: #fff;
}

.dark-mode .container a {
  color: #fff;
}

.dark-mode svg {
  color: #fff;
}

.dd {
  gap: 15px;
}

@media (max-width: 768px) {
  nav .container > a {
    margin-bottom: 10px;
  }
.bruu{
  display: none;
}
  nav .container > div {
    align-items: center;
  }

  nav .container > section {
    margin-bottom: 10px;
  }
  .container{
    flex-direction: row !important;
    justify-content: space-around;
    gap: 15px;
  }
  .dd {
    flex-direction: row !important;
    justify-content: space-between;
    gap: 15px;
  }
  .ddd{
    gap: 5px;
    margin-top: 15px;
  }
  .bbb{
  display: none;
  }
}
.wh{
  background: white !important;
}
@media (max-width: 388px) {
  .bdb{
    padding: 5px 10px;
    font-size: 11px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>