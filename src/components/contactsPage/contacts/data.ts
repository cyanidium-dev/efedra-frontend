import {
  ADDRESS,
  CITY,
  EMAIL,
  GOOGLE_MAPS_URL,
  LICENSE_INFO,
  PHONE,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";

export interface ContactItem {
  label: string;
  value: string | string[];
  href?: string;
}

export const leftContactItems: ContactItem[] = [
  {
    label: "Контактний номер",
    value: PHONE.replace(contactsPhoneRegex, "+38 ($1) $2 $3 $4"),
    href: `tel:${PHONE}`,
  },
  {
    label: "Графік роботи",
    value: "Пн-Нд: 09:00 - 20:00",
  },
  LICENSE_INFO,
];

export const rightContactItems: ContactItem[] = [
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
