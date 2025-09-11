import Contacts from "@/components/contactsPage/contacts/Contacts";
import CTAContacts from "@/components/contactsPage/ctaContacts/CTAContacts";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function ContactsPage() {
  return (
    <>
      <Contacts />
      <MarqueeLine />
      <CTAContacts />
    </>
  );
}
