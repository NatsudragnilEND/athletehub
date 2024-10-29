<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen overflow-hidden" :class="{ 'dark-mode': darkMode }">
    <header class="relative flex items-center justify-center dfdf" :style="{ background: 'url(/backg.png)', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' }">
      <div class="mt-8 p-6 rounded-lg text-white text-center" style="padding: 15% 0;">
        <h1 class="text-3xl font-bold mb-4">{{ $t('header.title') }}</h1>
        <h2 class="text-xl font-medium mb-6">{{ $t('header.subtitle') }}</h2>
        <section class="flex justify-center">
          <div class="flex flex-col items-center gap-4" id="get">
            <a href="https://play.google.com/store/apps/details?id=aydiNash"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              <font-awesome-icon :icon="['fab', 'google-play']" />
              {{ $t('header.downloadGooglePlay') }}
            </a>
            <a href="https://apps.apple.com/us/app/aydiNash/idaydiNash"
              class="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              <font-awesome-icon :icon="['fab', 'apple']" />
              {{ $t('header.downloadAppStore') }}
            </a>
          </div>
        </section>
      </div>
    </header>
    <div class="container mx-auto px-4 py-8">
      <section id="Plans" class="mt-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {{ $t('features.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in appFeatures" :key="index"
            class="bg-white shadow-md-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition duration-300 ease-in-out hover:scale-105">
            <img :src="feature.iconClass" class="fa-2x text-gray-400 dark:text-gray-500 mb-4" style="max-height: 250px; object-fit: cover; width: 100%;" />
            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              {{ $t('features.feature' + (index + 1).toString() + '.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ $t('features.feature' + (index + 1).toString() + '.description') }}
            </p>
          </div>
        </div>
      </section>

      <section class="mt-12" id="Programs">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {{ $t('training.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(program, index) in trainingProgramsMen" :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition duration-300 ease-in-out hover:scale-105">
            <img :src="program.image" style="width: 100%; max-height: 500px !important; height: 100%; object-fit: cover;" alt="Program Image"
              class="w-48 h-48 rounded-lg mb-4 m-auto transition duration-500 ease-in-out hover:scale-105">
            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              {{ $t('training.program' + (index + 1).toString() + '.name') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ $t('training.program' + (index + 1).toString() + '.description') }}
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              {{ $t('training.program' + (index + 1).toString() + '.price') }}
            </p>
            <ul class="list-disc text-gray-600 dark:text-gray-400 pl-4 text-left">
              <li v-for="(benefit, benefitIndex) in program.benefits" :key="benefitIndex">
                <span style="color: purple; font-weight: bold; font-size: 19px;">-</span> {{ $t(`training.program${index + 1}.benefits[${benefitIndex}]`) }}
              </li>
            </ul>

          </div>
        </div>
      </section>

      <section class="mt-12" id="About">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {{ $t('about.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105">
            <img :src="'/trainer.png'" alt="Expert Image"
              class="w-48 h-64 object-cover rounded-lg mb-4 m-auto transition duration-500 ease-in-out hover:scale-105">
            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              {{ $t('about.trainerName') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 w-128">
              {{ $t('about.trainerDescription') }}
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {{ $t('chooseUs.title') }}
            </h3>
            <ul class="list-disc text-gray-600 dark:text-gray-400 pl-4">
              <li>
                <font-awesome-icon :icon="['fas', 'check-circle']" class="text-gray-800 dark:text-gray-200" />
                {{ $t('chooseUs.reason1') }}
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check-circle']" class="text-gray-800 dark:text-gray-200" />
                {{ $t('chooseUs.reason2') }}
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check-circle']" class="text-gray-800 dark:text-gray-200" />
                {{ $t('chooseUs.reason3') }}
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check-circle']" class="text-gray-800 dark:text-gray-200" />
                {{ $t('chooseUs.reason4') }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mt-12" id="For-whom">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {{ $t('forWhom.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(program, index) in forWhomPrograms" :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition duration-300 ease-in-out hover:scale-105">
            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              {{ $t('forWhom.program' + (index + 1).toString() + '.name') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ $t('forWhom.program' + (index + 1).toString() + '.description') }}
            </p>
          </div>
        </div>
      </section>

      <section class="mt-12" id="Faq">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {{ $t('faq.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(question, index) in faqQuestions" :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105">
            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              {{ $t('faq.question' + (index + 1).toString() + '.text') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ $t('faq.question' + (index + 1).toString() + '.answer') }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useI18n } from 'vue-i18n';
const { messages, t, locale } = useI18n();
library.add(fas, fab);

const appFeatures = ref([
  {
    title: 'Personalized Training Plans',
    description: 'Get customized workout routines tailored to your fitness level and goals.',
    iconClass: '/one.png',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your progress with detailed stats and charts.',
    iconClass: '/two.png',
  },
  {
    title: 'Expert Guidance',
    description: 'Receive advice and support from Uzbekistan\'s #1 bodybuilder.',
    iconClass: '/three.png',
  },
  {
    title: 'Nutritional Guidance',
    description: 'Get personalized meal plans and nutrition advice from our experts.',
    iconClass: '/four.png',
  },
  {
    title: 'Interactive Community',
    description: 'Connect with other fitness enthusiasts and share your journey.',
    iconClass: '/five.png',
  },
  {
    title: 'Exercise Library',
    description: 'Access a vast library of exercises with video demonstrations.',
    iconClass: '/six.png',
  },
]);

const trainingPrograms = ref([
  {
    name: 'Beginner Bodybuilding',
    description: 'A great starting point for newcomers. Learn basic exercises and techniques.',
    image: '/beginner.png',
  },
  {
    name: 'Intermediate Strength & Conditioning',
    description: 'Step up your game with advanced exercises and strength training protocols.',
    image: '/intermediate.png',
  },
  {
    name: 'Advanced Muscle Building',
    description: 'Target specific muscle groups and optimize your gains with this program.',
    image: '/advanced.png',
  },
]);

const trainingProgramsMen = ref([
  {
    name: 'Men Workout',
    description: 'A complete workout program designed for men to gain muscle and strength.',
    image: '/one1.png', // Download an image of a man lifting weights for this
    price: '$50 per month',
    benefits: [
      'Personalized training plans',
      'Progressive overload techniques',
      'Muscle-building exercises',
      'Nutritional guidance',
      '24/7 access to support',
    ],
  },
  {
    name: 'Men Workout',
    description: 'A workout program focusing on building muscle and strength with a focus on compound exercises.',
    image: '/two1.png', // Download an image of a man doing compound exercises for this
    price: '$75 per month',
    benefits: [
      'Advanced muscle-building techniques',
      'Focus on compound lifts',
      'Strength training routines',
      'Detailed workout log',
      'Progress tracking tools',
    ],
  },
  {
    name: 'Women Workout',
    description: 'A workout program designed for women to achieve a toned physique and improve overall fitness.',
    image: '/three1.png', // Download an image of a woman doing a workout routine for this
    price: '$40 per month',
    benefits: [
      'Bodyweight and resistance training',
      'Exercises for toning and shaping',
      'Calorie tracking and nutrition tips',
      'Flexibility and mobility routines',
      'Motivational support and community',
    ],
  },
]);

const forWhomPrograms = ref([
  {
    name: 'LOSE WEIGHT',
    description: 'For those who want to lose weight in a healthy way.',
  },
  {
    name: 'GAIN MUSCLE',
    description: 'For those who can\'t gain muscle or want to increase progress.',
  },
  {
    name: 'GET SHREDDED',
    description: 'When you want to get shredded and gain maximum muscle in a safe and professional way.',
  },
  {
    name: 'INCREASE YOUR STRENGTH',
    description: 'For those who want to increase power and learn how to lift heavy weights.',
  },
]);

const faqQuestions = ref([
  {
    text: 'What are the benefits of your training programs?',
    answer: 'Our training programs offer personalized plans, expert guidance, progress tracking, and community support to help you reach your fitness goals.',
  },
  {
    text: 'How do I access the training programs?',
    answer: 'You can access our programs through our app, available on the App Store and Google Play. You can also find more information on our website.',
  },
  {
    text: 'What if I have an injury?',
    answer: 'If you have an injury, please consult with a medical professional before starting any new workout program. Our app also includes a feature to allow you to exclude certain exercises based on your injury.',
  },
  {
    text: 'What kind of diet should I follow?',
    answer: 'We offer personalized nutrition guidance based on your individual needs and goals. You can access our nutrition plans and recipes through our app.',
  },
  {
    text: 'Can I contact you for personalized advice?',
    answer: 'Yes, you can contact us through our app or website for personalized advice. Our team of experts is here to support you on your fitness journey.',
  },
]);

const darkMode = ref(false);

onMounted(() => {
  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode) {
    darkMode.value = storedDarkMode === 'true';
  }
});

useHead({
  title: 'Athlete hub',
  meta: [
    { name: 'description', content: 'Expert Guidance' },
    { property: 'og:title', content: 'Unleash Your Potential' },
    { property: 'og:description', content: 'Personalized Training Plans' },
    { property: 'og:image', content: 'https://athletehub.vercel.app/her.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://athletehub.vercel.app' }
  ]
})
</script>

<style>
.fa-solid {
  color: #525557;
}

body {
  font-family: 'Arial', sans-serif;
}

/* Add some background animation for the body */
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

/* Add some subtle background pattern */
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

/* Mobile Responsive Styling */
@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
  
  header img {
    max-width: 90%;
    object-fit: cover;
  }

  .container {
    padding: 0;
  }

  .grid {
    grid-template-columns: 1fr;
    /* Display items in a single column */
  }

  .grid>div {
    margin-bottom: 20px;
  }
h1{
  font-size: 16px !important;
}
h2{
  font-size: 15px !important;
}
  .dfdf {
    flex-direction: column !important;
  }
}

.dfdf {
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
}

.dark-mode {
  --primary-color: #212121;
  --secondary-color: #141414;
  --text-color: #fff;
  --accent-color: #ff6347;

  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  color: var(--text-color);
}

.dark-mode .bg-white {
  background-color: #171717;
}

.dark-mode .bg-gray-100 {
  background-color: #1A1A1A;
}

.dark-mode .bg-gray-800 {
  background-color: #212121;
}

.dark-mode .text-gray-800 {
  color: #fff;
}

.dark-mode .text-gray-600 {
  color: #ddd;
}

.dark-mode .text-gray-400 {
  color: #999;
}

.dark-mode .text-gray-200 {
  color: #ddd;
}

.dark-mode .bg-green-500 {
  background-color: #4CAF50;
}

.dark-mode .bg-green-700 {
  background-color: #367c38;
}

.dark-mode .bg-gray-600 {
  background-color: #666;
}

.dark-mode .bg-gray-900 {
  background-color: #333;
}

.dark-mode .text-white {
  color: #fff;
}

img {
  user-select: none;
}
</style>