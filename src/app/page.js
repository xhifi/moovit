import Image from "next/image";
import Header from "@/components/header/Header";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <section className="px-14 mt-24">
        <Services />
      </section>
    </>
  );
}
