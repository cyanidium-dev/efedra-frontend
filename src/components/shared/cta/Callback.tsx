"use client";
import { useState } from "react";
import MainButton from "../buttons/MainButton";
import CallBackModal from "../modals/CallBackModal";

export default function Callback() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <MainButton
        onClick={() => setIsModalShown(true)}
        className="px-5 lg:px-5 text-[12px] font-normal lg:text-[18px] lg:font-medium md:max-w-[255px]"
      >
        Замовити дзвінок
      </MainButton>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
