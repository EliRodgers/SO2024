import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Standings",
};

export default function Event() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        Event Standings
      </div>
    </>
  );
}
