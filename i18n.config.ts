// i18n.config.ts
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    availableLocales: ['en', 'ru', 'uz'],
    routePrefix: false,
    strategy: 'path',
    fallbackLocale: 'en',
    messages: {
      en: {
        training: {
          title: 'Training Programs',
          program1: {
            name: 'Men Workout',
            description: 'A complete workout program designed for men to gain muscle and strength.',
            price: '$50 per month',
            benefits: [
              'Personalized training plans',
              'Progressive overload techniques',
              'Muscle-building exercises',
              'Nutritional guidance',
              '24/7 access to support',
            ]
          },
          program2: {
            name: 'Men Pro Workout',
            description: 'A workout program focusing on building muscle and strength with a focus on compound exercises.',
            price: '$75 per month',
            benefits: [
              'Advanced muscle-building techniques',
              'Focus on compound lifts',
              'Strength training routines',
              'Detailed workout log',
              'Progress tracking tools',
            ]
          },
          program3: {
            name: 'Women Workout',
            description: 'A workout program designed for women to achieve a toned physique and improve overall fitness.',
            price: '$40 per month',
            benefits: [
              'Bodyweight and resistance training',
              'Exercises for toning and shaping',
              'Calorie tracking and nutrition tips',
              'Flexibility and mobility routines',
              'Motivational support and community',
            ]
          },
        },
        about: {
          title: 'About Me',
          trainerName: 'Trainer Name',
          trainerDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi a elit ultricies blandit. Aenean euismod vitae elit at euismod.',
        },
        chooseUs: {
          title: 'Why Choose Us?',
          reason1: 'Personalized Training Plans',
          reason2: 'Expert Guidance',
          reason3: 'Progress Tracking',
          reason4: 'Community Support',
        },
        forWhom: {
          title: 'For Whom?',
          program1: {
            name: 'LOSE WEIGHT',
            description: 'For those who want to lose weight in a healthy way.',
          },
          program2: {
            name: 'GAIN MUSCLE',
            description: 'For those who can\'t gain muscle or want to increase progress.',
          },
          program3: {
            name: 'GET SHREDDED',
            description: 'When you want to get shredded and gain maximum muscle in a safe and professional way.',
          },
          program4: {
            name: 'INCREASE YOUR STRENGTH',
            description: 'For those who want to increase power and learn how to lift heavy weights.',
          },
        },
        faq: {
          title: 'Frequently Asked Questions',
          question1: {
            text: 'What are the benefits of your training programs?',
            answer: 'Our training programs offer personalized plans, expert guidance, progress tracking, and community support to help you reach your fitness goals.',
          },
          question2: {
            text: 'How do I access the training programs?',
            answer: 'You can access our programs through our app, available on the App Store and Google Play. You can also find more information on our website.',
          },
          question3: {
            text: 'What if I have an injury?',
            answer: 'If you have an injury, please consult with a medical professional before starting any new workout program. Our app also includes a feature to allow you to exclude certain exercises based on your injury.',
          },
          question4: {
            text: 'What kind of diet should I follow?',
            answer: 'We offer personalized nutrition guidance based on your individual needs and goals. You can access our nutrition plans and recipes through our app.',
          },
          question5: {
            text: 'Can I contact you for personalized advice?',
            answer: 'Yes, you can contact us through our app or website for personalized advice. Our team of experts is here to support you on your fitness journey.',
          },
        },
        header: {
          title: 'Uzbekistan\'s #1 Bodybuilding platform',
          subtitle: 'Train with the Best',
          downloadGooglePlay: 'Download on Google Play',
          downloadAppStore: 'Download on App Store',
        },
        features: {
          title: 'Unleash Your Potential',
          feature1: {
            title: 'Personalized Training Plans',
            description: 'Get customized workout routines tailored to your fitness level and goals.',
          },
          feature2: {
            title: 'Progress Tracking',
            description: 'Monitor your progress with detailed stats and charts.',
          },
          feature3: {
            title: 'Expert Guidance',
            description: 'Receive advice and support from Uzbekistan\'s #1 bodybuilder.',
          },
          feature4: {
            title: 'Nutritional Guidance',
            description: 'Get personalized meal plans and nutrition advice from our experts.',
          },
          feature5: {
            title: 'Interactive Community',
            description: 'Connect with other fitness enthusiasts and share your journey.',
          },
          feature6: {
            title: 'Exercise Library',
            description: 'Access a vast library of exercises with video demonstrations.',
          },
        },
        programs: {
          title: 'Training Programs Tailored to You',
          program1: {
            name: 'Beginner Bodybuilding',
            description: 'A great starting point for newcomers. Learn basic exercises and techniques.',
          },
          program2: {
            name: 'Intermediate Strength & Conditioning',
            description: 'Step up your game with advanced exercises and strength training protocols.',
          },
          program3: {
            name: 'Advanced Muscle Building',
            description: 'Target specific muscle groups and optimize your gains with this program.',
          },
        },
        expert: {
          title: 'Meet Our Expert',
          trainerName: 'Trainer Sem kakoy.to',
          trainerDescription: 'Razdalbay takoy',
        },
        "navigation": {
    "title": "Athlete Hub",
    "fitness_plans": "Fitness Plans",
    "programs": "Programs",
    "about": "About",
    "for_whom": "For Whom?",
    "faq": "Faq"
  }
      },
      ru: {
        training: {
          title: 'Программы тренировок',
          program1: {
            name: 'Тренировка для мужчин',
            description: 'Полная программа тренировок, разработанная для мужчин, чтобы набрать мышечную массу и силу.',
            price: '50 долларов в месяц',
            benefits: [
              'Персонализированные планы тренировок',
              'Техники прогрессивной перегрузки',
              'Упражнения для наращивания мышц',
              'Советы по питанию',
              'Круглосуточная поддержка',
            ]
          },
          program2: {
            name: 'Продвинутая тренировка для мужчин',
            description: 'Программа тренировок, направленная на наращивание мышечной массы и силы с акцентом на базовые упражнения.',
            price: '75 долларов в месяц',
            benefits: [
              'Продвинутые техники наращивания мышц',
              'Фокус на базовые упражнения',
              'Программы силовых тренировок',
              'Подробный журнал тренировок',
              'Инструменты для отслеживания прогресса',
            ]
          },
          program3: {
            name: 'Тренировка для женщин',
            description: 'Программа тренировок, разработанная для женщин, чтобы добиться подтянутого тела и улучшить общую физическую форму.',
            price: '40 долларов в месяц',
            benefits: [
              'Тренировки с собственным весом и отягощениями',
              'Упражнения для тонуса и формирования тела',
              'Отслеживание калорий и советы по питанию',
              'Упражнения на гибкость и подвижность',
              'Мотивационная поддержка и сообщество',
            ]
          },
        },
        about: {
          title: 'Обо мне',
          trainerName: 'Имя Тренера',
          trainerDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi a elit ultricies blandit. Aenean euismod vitae elit at euismod.',
        },
        chooseUs: {
          title: 'Почему мы?',
          reason1: 'Персонализированные планы тренировок',
          reason2: 'Экспертные советы',
          reason3: 'Отслеживание прогресса',
          reason4: 'Поддержка сообщества',
        },
        forWhom: {
          title: 'Для кого?',
          program1: {
            name: 'ПОХУДЕТЬ',
            description: 'Для тех, кто хочет похудеть здоровым образом.',
          },
          program2: {
            name: 'НАБРАТЬ МЫШЦЫ',
            description: 'Для тех, кто не может набрать мышечную массу или хочет улучшить результаты.',
          },
          program3: {
            name: 'СДЕЛАТЬ РЕЛЬЕФ',
            description: 'Когда вы хотите сделать рельеф и набрать максимальную мышечную массу безопасным и профессиональным способом.',
          },
          program4: {
            name: 'УВЕЛИЧИТЬ СИЛУ',
            description: 'Для тех, кто хочет увеличить силу и научиться поднимать тяжелые веса.',
          },
        },
        faq: {
          title: 'Часто задаваемые вопросы',
          question1: {
            text: 'В чем преимущества ваших программ тренировок?',
            answer: 'Наши программы тренировок предлагают персонализированные планы, экспертные советы, отслеживание прогресса и поддержку сообщества, чтобы помочь вам достичь своих фитнес-целей.',
          },
          question2: {
            text: 'Как получить доступ к программам тренировок?',
            answer: 'Вы можете получить доступ к нашим программам через наше приложение, доступное в App Store и Google Play. Вы также можете найти больше информации на нашем сайте.',
          },
          question3: {
            text: 'Что делать, если у меня травма?',
            answer: 'Если у вас есть травма, проконсультируйтесь с врачом, прежде чем начинать какую-либо новую программу тренировок. В нашем приложении также есть функция, позволяющая исключать определенные упражнения в зависимости от вашей травмы.',
          },
          question4: {
            text: 'Какую диету мне нужно соблюдать?',
            answer: 'Мы предлагаем персонализированные советы по питанию, исходя из ваших индивидуальных потребностей и целей. Вы можете получить доступ к нашим планам питания и рецептам через наше приложение.',
          },
          question5: {
            text: 'Можно ли связаться с вами для получения персонализированных советов?',
            answer: 'Да, вы можете связаться с нами через наше приложение или сайт для получения персонализированных советов. Наша команда экспертов поможет вам на вашем фитнес-пути.',
          },
        },
        "navigation": {
    "title": "Хаб Атлетов",
    "fitness_plans": "Фитнес-планы",
    "programs": "Программы",
    "about": "О нас",
    "for_whom": "Для кого?",
    "faq": "ЧаВо"
  },
        header: {
          title: 'Лучшая платформа для бодибилдинга в Узбекистане',
          subtitle: 'Тренируйтесь с лучшими',
          downloadGooglePlay: 'Скачать в Google Play',
          downloadAppStore: 'Скачать в App Store',
        },
        features: {
          title: 'Раскройте свой потенциал',
          feature1: {
            title: 'Персонализированные планы тренировок',
            description: 'Получите индивидуальные тренировки, разработанные с учетом вашего уровня физической подготовки и целей.',
          },
          feature2: {
            title: 'Отслеживание прогресса',
            description: 'Отслеживайте свой прогресс с помощью подробной статистики и графиков.',
          },
          feature3: {
            title: 'Экспертная помощь',
            description: 'Получите советы и поддержку от лучшего бодибилдера Узбекистана.',
          },
          feature4: {
            title: 'Рекомендации по питанию',
            description: 'Получите персонализированные планы питания и советы по питанию от наших экспертов.',
          },
          feature5: {
            title: 'Интерактивное сообщество',
            description: 'Общайтесь с другими энтузиастами фитнеса и делитесь своим прогрессом.',
          },
          feature6: {
            title: 'Библиотека упражнений',
            description: 'Получите доступ к обширной библиотеке упражнений с видео демонстрациями.',
          },
        },
        programs: {
          title: 'Тренировочные программы, разработанные для вас',
          program1: {
            name: 'Начальный бодибилдинг',
            description: 'Отличная отправная точка для новичков. Изучите базовые упражнения и техники.',
          },
          program2: {
            name: 'Средний уровень силы и выносливости',
            description: 'Поднимите свою игру с помощью продвинутых упражнений и протоколов силовых тренировок.',
          },
          program3: {
            name: 'Продвинутая мышечная масса',
            description: 'Целенаправленно тренируйте определенные группы мышц и оптимизируйте свои результаты с помощью этой программы.',
          },
        },
        expert: {
          title: 'Познакомьтесь с нашим экспертом',
          trainerName: 'Тренер Сем какой.то',
          trainerDescription: 'Раздолбай такой',
        },
        
      },
      uz: {
        "navigation": {
          "title": "Sportchilar Markazi",
          "fitness_plans": "Fitnes Rejalari",
          "programs": "Dasturlar",
          "about": "Biz haqimizda",
          "for_whom": "Kimga?",
          "faq": "Tez-tez beriladigan savollar"
        },
        training: {
          title: 'Mashg\'ulot Dasturlari',
          program1: {
            name: 'Erkaklar uchun Mashg\'ulot',
            description: 'Erkaklar uchun mushak massasini va kuchini oshirishga qaratilgan to\'liq mashg\'ulot dasturi.',
            price: 'Oyiga $50',
            benefits: [
              'Shaxsiylashtirilgan mashg\'ulot rejalari',
              'Progressiv yuklanish texnikalari',
              'Mushaklarni o\'stirish uchun mashqlar',
              'Oziqlanish bo\'yicha maslahatlar',
              '24/7 qo\'llab-quvvatlash',
            ]
          },
          program2: {
            name: 'Erkaklar uchun Pro Mashg\'ulot',
            description: 'Murakkab mashqlarga e’tibor qaratilgan holda, mushak massasi va kuchini oshirishga qaratilgan mashg’ulot dasturi.',
            price: 'Oyiga $75',
            benefits: [
              'Mushaklarni o\'stirishning ilg\'or texnikalari',
              'Murakkab mashqlarga e’tibor qaratish',
              'Kuch mashqlari dasturlari',
              'Batafsil mashg\'ulot jurnali',
              'Progressni kuzatish vositalari',
            ]
          },
          program3: {
            name: 'Ayollar uchun Mashg\'ulot',
            description: 'Ayollar uchun chiroyli tanani shakllantirish va umumiy jismoniy holatini yaxshilashga qaratilgan mashg\'ulot dasturi.',
            price: 'Oyiga $40',
            benefits: [
              'Tananing vazni va qarshilik mashqlari',
              'Tanani shakllantirish va tonusini oshirish uchun mashqlar',
              'Kaloriya hisobi va ovqatlanish bo\'yicha maslahatlar',
              'Egiluvchanlik va harakatlanish mashqlari',
              'Motivatsion qo\'llab-quvvatlash va jamoa',
            ]
          },
        },
        about: {
          title: 'Mening haqimda',
          trainerName: 'Trener Nomi',
          trainerDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi a elit ultricies blandit. Aenean euismod vitae elit at euismod.',
        },
        chooseUs: {
          title: 'Bizni nima uchun tanlash kerak?',
          reason1: 'Shaxsiylashtirilgan mashg\'ulot rejalari',
          reason2: 'Ekspert maslahatlari',
          reason3: 'Progressni kuzatish',
          reason4: 'Jamoa qo\'llab-quvvatlashi',
        },
        forWhom: {
          title: 'Kimlar uchun?',
          program1: {
            name: 'OZISH',
            description: 'Sog\'lom usulda ozishni istaganlar uchun.',
          },
          program2: {
            name: 'MUSKUL O\'STIRISH',
            description: 'Muskul o\'stirishga qodir bo\'lmagan yoki progressini yaxshilashni istaganlar uchun.',
          },
          program3: {
            name: 'REL\'YEFGA KELTIRISH',
            description: 'Siz xavfsiz va professional usulda tanangizga rel\'yef berishni va maksimal muskul massasini olishni istasangiz.',
          },
          program4: {
            name: 'KUCHNI O\'STIRISH',
            description: 'Kuchini oshirishni va og\'irlik ko\'tarishni o\'rganishni istaganlar uchun.',
          },
        },
        faq: {
          title: 'Tez-tez so\'raladigan savollar',
          question1: {
            text: 'Mashg\'ulot dasturlaringizning afzalliklari qanday?',
            answer: 'Bizning mashg\'ulot dasturlarimiz sizga fitness maqsadlaringizga erishishingizga yordam berish uchun shaxsiylashtirilgan rejalari, ekspert maslahatlari, progressni kuzatish va jamoa qo\'llab-quvvatlashini taklif etadi.',
          },
          question2: {
            text: 'Mashg\'ulot dasturlaringizga qanday qilib kirishim mumkin?',
            answer: 'Siz App Store va Google Play-da mavjud bo\'lgan bizning ilovamiz orqali dasturlarimizga kirishingiz mumkin. Shuningdek, siz veb-saytimizda qo\'shimcha ma’lumot topishingiz mumkin.',
          },
          question3: {
            text: 'Agar mening jarohatim bo\'lsa-chi?',
            answer: 'Agar sizda jarohat bo\'lsa, iltimos, har qanday yangi mashg\'ulot dasturini boshlashdan oldin tibbiy mutaxassis bilan maslahatlashing. Bizning ilovamizda shuningdek, jarohatingizga qarab ma’lum mashqlarni chiqarib tashlashingiz mumkin bo\'lgan xususiyat mavjud.',
          },
          question4: {
            text: 'Qanday ovqatlanishim kerak?',
            answer: 'Biz sizning shaxsiy ehtiyojlaringiz va maqsadlaringizga qarab shaxsiylashtirilgan ovqatlanish bo\'yicha maslahatlar beramiz. Siz bizning ovqatlanish rejalari va retseptlarimizga ilovamiz orqali kirishingiz mumkin.',
          },
          question5: {
            text: 'Shaxsiy maslahat olish uchun siz bilan bog\'lanishim mumkinmi?',
            answer: 'Ha, siz shaxsiy maslahat olish uchun bizning ilovamiz yoki veb-saytimiz orqali biz bilan bog\'lanishingiz mumkin. Ekspertlarimiz jamoasi sizga fitness safaringizda yordam berishga tayyor.',
          },
        },
        header: {
          title: 'O\'zbekistonning #1 bodibilding platformasi',
          subtitle: 'Eng yaxshilar bilan mashq qiling',
          downloadGooglePlay: 'Google Play-dan yuklab oling',
          downloadAppStore: 'App Store-dan yuklab oling',
        },
        features: {
          title: 'Potensialingizni oching',
          feature1: {
            title: 'Shaxsiy mashq rejalari',
            description: 'Sizning fitness darajangiz va maqsadlaringizga moslashtirilgan mashq rejalarini oling.',
          },
          feature2: {
            title: 'Progressni kuzatish',
            description: 'Batafsil statistika va jadvallar yordamida progressni kuzatib boring.',
          },
          feature3: {
            title: 'Ekspert yo\'l-yo\'riq',
            description: 'O\'zbekistonning #1 bodibildershi tomonidan maslahat va qo\'llab-quvvatlashni oling.',
          },
          feature4: {
            title: 'Oziqlanish bo\'yicha yo\'l-yo\'riq',
            description: 'Mutaxassislarimizdan shaxsiy ovqatlanish rejalari va oziqlanish bo\'yicha maslahatlarni oling.',
          },
          feature5: {
            title: 'Interaktiv jamoa',
            description: 'Boshqa fitness ixlosmandlari bilan bog\'laning va o\'zingizning progressingizni baham ko\'ring.',
          },
          feature6: {
            title: 'Mashqlar kutubxonasi',
            description: 'Video namoyishlar bilan keng mashqlar kutubxonasiga kirish imkoniyatiga ega bo\'ling.',
          },
        },
        programs: {
          title: 'Sizga moslashtirilgan mashq dasturlari',
          program1: {
            name: 'Boshlang\'ich bodibilding',
            description: 'Yangi boshlanuvchilar uchun ajoyib boshlang\'ich nuqta. Asosiy mashqlar va texnikalarni o\'rganing.',
          },
          program2: {
            name: 'O\'rtacha kuch va chidamlilik',
            description: 'Takomillashgan mashqlar va kuch mashqlar protokollari yordamida o\'yinni darajasini oshiring.',
          },
          program3: {
            name: 'Ilg\'or mushak massasini oshirish',
            description: 'Ma\'lum mushak guruhlarini maqsadli ravishda mashq qiling va ushbu dastur yordamida o\'sishingizni optimallashtiring.',
          },
        },
        expert: {
          title: 'Bizning mutaxassisimiz bilan tanishing',
          trainerName: 'Trener Sem kakoy.to',
          trainerDescription: 'Razdalbay takoy',
        },
      
    },
    }}))