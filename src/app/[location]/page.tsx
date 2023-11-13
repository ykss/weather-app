import React from "react";
import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
};

const Detail = async ({ params }: Props) => {
  const name = params.location === "seoul" ? "서울" : "";
  const res = await getForecast(params.location);

  console.log(res);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast?.forecastday.map((data, idx) => (
          <li key={idx}>
            {data.date} / 평균 기온 : {data.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
};

export default Detail;
