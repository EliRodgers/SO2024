import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Standings",
};

export default function Event() {
  return (
    <>
      <div className="animate-fade overflow-hidden">Event Standings</div>
    </>
  );
}
