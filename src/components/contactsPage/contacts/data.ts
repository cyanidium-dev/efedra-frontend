import {
  ADDRESS,
  CITY,
  EMAIL,
  GOOGLE_MAPS_URL,
  PHONE,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";

export const leftContactItems = [
  {
    label: "Контактний номер",
    value: PHONE.replace(contactsPhoneRegex, "+38 ($1) $2 $3 $4"),
    href: `tel:${PHONE}`,
  },
  {
    label: "Графік роботи",
    value: "Пн-Нд: 09:00 - 20:00",
  },
  {
    label: "Ліцензія МОЗ України",
    value: "від 01.02.2021 №317/21/М",
  },
];

export const rightContactItems = [
  {
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    label: "Адреса",
    value: [CITY, ADDRESS],
    href: GOOGLE_MAPS_URL,
  },
];
