import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Individual Scores",
};

export default function Individual() {
  return (
    <>
      <div className="animate-fade overflow-hidden">Individual Scores</div>
    </>
  );
}
