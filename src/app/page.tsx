import React from "react";
import CardsRow from "@/components/homeCards/row";

const page = () => {
  return (
    <div className=" bg-[var(--bg)]">
      {/* top  cards section  */}
      <section>
        <CardsRow />
      </section>
    </div>
  );
};

export default page;
