import { Metadata } from "next";
import Link from "next/link";
import Table from "../components/table";

export const metadata: Metadata = {
  title: "Event Standings",
};

export default function Event() {
  return (
    <div className="text-lg animate-fade container py-2 px-7 my-10 overflow-hidden">
      <Table />
    </div>
  );
}
