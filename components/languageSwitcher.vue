<template>
    <div class="language-switcher" @click="toggleDropdown">
      <button class="language-buttonn">
        <span :class="flagIconClass"></span>
        <span class="current-locale">{{ currentLocale }}</span>
        <span class="dropdown-arrow">▼</span>
      </button>
  
      <transition name="slide-fade">
        <ul v-if="showDropdown" class="language-dropdown">
          <li v-for="locale in availableLocales" @click="toggleDropdown" :key="locale.code">
            <button
              @click="selectLocale(locale)"
              class="language-link"
            >
              <span class="language-name">{{ locale }}</span>
            </button>
          </li>
        </ul>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  const { locale, availableLocales, i18n } = useI18n();
  import Cookies from 'js-cookie';
  const showDropdown = ref(false);
  const currentLocale = computed(() => {
    return locale.value;
  });
  onMounted(() => {
    const savedLocale = Cookies.get('locale');
    if (savedLocale) {
      locale.value = savedLocale;
    }
  });
  const flagIconClass = computed(() => {
    switch (locale.value) {
      case 'en':
        return 'fi fi-us';
      case 'ru':
        return 'fi fi-ru';
      case 'uz':
        return 'fi fi-uz';
      default:
        return '';
    }
  });
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  const hideDropdown = () => {
    showDropdown.value = false;
  };
  
  const selectLocale = (localeCode) => {
    locale.value = localeCode;
    Cookies.set('locale', localeCode, { expires: 365 });
    hideDropdown();
  };
  </script>
  
  <style scoped>
  .language-switcher {
    position: relative;
    display: inline-block;
  }
  
  .language-buttonn {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    color: #5c417c; /* Purple text */
  }
  
  .language-buttonn:hover {
    background-color: #e0e0e0;
  }
  
  .flagIconClass {
    font-size: 20px;
    margin-right: 8px;
    color: #5c417c; /* Purple flag icon */
  }
  
  .current-locale {
    margin-right: 8px;
    color: #5c417c; /* Purple locale text */
  }
  
  .dropdown-arrow {
    font-size: 12px;
    margin-left: 4px;
    color: #5c417c; /* Purple arrow */
  }
  
  .language-dropdown {
    position: absolute;
    top: 107%;
    left: 0;
    z-index: 10 !important;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 59px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .language-link {
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    color: #333;
    width: 100%;
    transition: background-color 0.2s ease;
  }
  
  .language-link:hover {
    background-color: #f0f0f0;
  }
  
  .language-name {
    margin-left: 8px;
    color: #d87093; /* Pink language name */
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  </style>