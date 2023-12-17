import TicketCard from "@/app/components/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to fetch ticketes");
  }
};

export default async function Home() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }: any) => category)),
  ];

  return (
    <>
      <section className="p-5">
        <div>
          {tickets &&
            uniqueCategories?.map((uniqueCategory: any, index: number) => (
              <div key={index} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets
                    .filter((ticket: any) => ticket.category === uniqueCategory)
                    .map((filteredTicket: any, index: number) => (
                      <TicketCard
                        key={index}
                        id={index}
                        ticket={filteredTicket}
                      />
                    ))}
                </div>
              </div>
            ))}
          <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
        </div>
      </section>
    </>
  );
}
