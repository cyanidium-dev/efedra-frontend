import MainButton from "../buttons/MainButton";
import Container from "../container/Container";
import Image from "next/image";
import Callback from "./Callback";

interface MeetCenterCTAProps {
  imageOne: string;
  imageTwo: string;
  className?: string;
}

export default function MeetCenterCTA({
  imageOne,
  imageTwo,
  className = "",
}: MeetCenterCTAProps) {
  return (
    <section className={className}>
      <div className="sm:hidden relative w-full h-[292px] mb-6 rounded-[20px] overflow-hidden">
        <Image
          src={imageOne}
          alt="cosmetic procedure"
          fill
          className="object-cover"
        />
      </div>
      <Container className="sm:flex gap-7">
        <div className="hidden sm:block relative w-full h-auto rounded-[20px] overflow-hidden">
          <Image
            src={imageOne}
            alt="cosmetic procedure"
            fill
            className="object-cover"
          />
        </div>
        <div className="sm:w-[calc(55%-14px)] lg:w-[calc(50%-14px)] shrink-0">
          <div className="mb-8">
            <h2 className="sm:max-w-[240px] lg:max-w-[380px] mb-1.5 font-evolenta text-[18px] lg:text-[32px] font-normal leading-[133%] uppercase text-center sm:text-left">
              Бажаєте познайомитися з нашим центром особисто?
            </h2>
            <div className="hidden sm:block relative aspect-[338/214] w-auto h-[140px] lg:h-[180px] xl:h-[214px] ml-auto mt-[-9px] rounded-[20px] overflow-hidden">
              <Image
                src={imageTwo}
                alt="background"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="lg:max-w-[342px] mb-4 text-[14px] lg:text-[16px] font-normal leading-[120%] text-center sm:text-left">
              Заповніть форму зворотнього звʼязку і ми обовʼязково зателефонуємо
              Вам!
            </p>
            <Callback
              buttonText="Записатися на консультацію"
              variant="bordered"
              withArrow
              buttonClassName="lg:w-[331px] h-14 px-6 lg:px-6 text-[14px] lg:text-[16px] font-medium leading-[120%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
