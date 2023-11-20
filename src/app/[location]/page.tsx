import React from "react";

import HomeButton from "@/components/HomeButton";

import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export const generateMetadata = ({ searchParams }: Props) => {
  return {
    title: `${searchParams.name}의 날씨 예보`,
    description: "날씨는 뭐죠!?",
  };
};

const Detail = async ({ params, searchParams }: Props) => {
  const name = searchParams.name;
  const res = await getForecast(params.location);

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
