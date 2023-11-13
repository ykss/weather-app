import Link from "next/link";

import { getCurrentWeather } from "@/utils/getCurrentWeather";

import style from "./style.module.css";

export default async function Home() {
  const res = await getCurrentWeather("seoul");

  console.log();

  return (
    <>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul">서울 / {res.current.condition.text}</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
      <button>테스트</button>
    </>
  );
}
