import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Standings",
};

export default function Team() {
  return (
    <>
      <div className="animate-fade overflow-hidden">Team Standings</div>
    </>
  );
}
