import TicketCard from "@/app/components/TicketCard";
export default function Home() {
  return (
    <>
      <section className="p-5">
        <div className="lg:grid grid-cols-2 xl:grid-cols-4">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </section>
    </>
  );
}
