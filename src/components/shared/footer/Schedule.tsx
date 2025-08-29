import FooterSubtitle from "./FooterSubtitle";

export default function Schedule() {
  return (
    <div>
      <FooterSubtitle>Графік роботи:</FooterSubtitle>
      <div className="mb-4 text-[12px] font-normal leading-[123%]">
        <p>Стоматологія:</p>
        <p>Пн-Пт: 09:00 - 18:00</p>
      </div>
      <div className="text-[12px] font-normal leading-[123%]">
        <p>Естетична медицина:</p>
        <p>Пн-Нд: 09:00 - 18:00</p>
      </div>
    </div>
  );
}
