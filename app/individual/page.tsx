import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Individual Scores",
};

export default function Individual() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        Individual Scores
      </div>
    </>
  );
}
