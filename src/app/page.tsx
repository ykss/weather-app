import Link from "next/link";

import { getCurrentWeather } from "@/utils/getCurrentWeather";

import style from "./style.module.css";

export default async function Home() {
  const seoul = await getCurrentWeather("seoul");
  const newYork = await getCurrentWeather("ny");
  const london = await getCurrentWeather("london");

  return (
    <>
      <div className={style.header}>
        <h1>날씨 앱 🌤️</h1>
        <button className={style.refresh}>새로고침</button>
      </div>
      <ul className={style.list}>
        <li>
          <h2>{seoul.current.temp_c}℃</h2>
          <Link href="/seoul">서울 / {seoul.current.condition.text} </Link>
          <img
            src={seoul.current.condition.icon}
            width={40}
            height={40}
            alt="icon"
          />
        </li>
        <li>
          <h2>{newYork.current.temp_c}℃</h2>
          <Link href="/ny">뉴욕 / {newYork.current.condition.text}</Link>
          <img
            src={newYork.current.condition.icon}
            width={40}
            height={40}
            alt="icon"
          />
        </li>
        <li>
          <h2>{london.current.temp_c}℃</h2>
          <Link href="/london">런던 / {london.current.condition.text}</Link>
          <img
            src={london.current.condition.icon}
            width={40}
            height={40}
            alt="icon"
          />
        </li>
      </ul>
    </>
  );
}
