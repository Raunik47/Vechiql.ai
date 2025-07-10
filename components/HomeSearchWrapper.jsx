// app/components/HomeSearchWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const HomeSearch = dynamic(() => import("./home-search"), {
  ssr: false,
});

export default function HomeSearchWrapper() {
  return <HomeSearch />;
}
