import ApproachDentistryDesk from "@/components/shared/icons/ApproachDentistryDesk";
import ApproachDentistryMob from "@/components/shared/icons/ApproachDentistryMob";
import ApproachMedicineDesk from "@/components/shared/icons/ApproachMedicineDesk";
import ApproachMedicineMob from "@/components/shared/icons/ApproachMedicineMob";

export const categoriesData = {
  dentistry: {
    hero: {
      title: "Стоматологія, якій можна довіряти",
      description:
        "Сучасні технології, делікатний підхід і впевненість в результаті.",
      imageOne: "/images/categoryPage/hero/dentistryOne.webp",
      imageTwo: "/images/categoryPage/hero/dentistryTwo.webp",
    },
    approach: {
      imageMob: ApproachDentistryMob,
      imageDesk: ApproachDentistryDesk,
      imageTwo: "/images/categoryPage/approach/dentistryTwo.webp",
      list: [
        {
          title: "Лікування без болю",
          description:
            "Використовуємо сучасні методи анестезії та технології, щоб лікування проходило комфортно та безболісно.",
        },
        {
          title: "Індивідуальні плани",
          description:
            "Кожен пацієнт отримує персональний план лікування з урахуванням стану здоров’я, потреб і побажань.",
        },
        {
          title: "Сучасне обладнання",
          description:
            "Оснащені новітньою технікою, що дозволяє діагностувати точно, лікувати ефективно й з мінімальним втручанням.",
        },
        {
          title: "Стерильність і безпека",
          description:
            "Дотримуємось усіх медичних протоколів стерильності та гігієни. Ваше здоров’я — під надійним захистом.",
        },
      ],
    },
  },
  aesthetic: {
    hero: {
      title: "Естетична медицина: делікатна турбота про вашу красу",
      description: "Безпечно. Ефективно. Естетично.",
      imageOne: "/images/categoryPage/hero/medicineOne.webp",
      imageTwo: "/images/categoryPage/hero/medicineTwo.webp",
    },
    approach: {
      imageMob: ApproachMedicineMob,
      imageDesk: ApproachMedicineDesk,
      imageTwo: "/images/categoryPage/approach/medicineTwo.webp",
      list: [
        {
          title: "Увага до деталей",
          description:
            "Дбайливо опрацьовуємо кожен етап — від консультації до результату.",
        },
        {
          title: "Тільки сертифіковані препарати",
          description:
            "Використовуємо офіційні, безпечні засоби з перевіреним походженням..",
        },
        {
          title: "Лікарі з кваліфікацією",
          description:
            "Процедури проводять лише фахівці з медичною освітою та досвідом.",
        },
        {
          title: "Натуральний результат",
          description: "Працюємо на гармонію, а не на перебільшений ефект.",
        },
      ],
    },
  },
};
