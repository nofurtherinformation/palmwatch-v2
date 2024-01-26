import { SearchableListLayout } from "@/components/SearchableListLayout";
import queryClient from "@/utils/getMillData";
import React from "react";

export default async function Page() {
  await queryClient.init();
  const options = queryClient.getSearchList().Suppliers;

  return (
    <main className="max-w-3xl mx-auto">
      <section className="prose flex flex-col py-4">
        <h1 className="p-0 m-0">Suppliers Search</h1>
        <p>
          Search below for palm oil suppliers and learn more about the palm oil mill utilization of each.
        </p>
      </section>
      <div>
        <SearchableListLayout
        // @ts-ignore
          options={options}
          label="Suppliers"
          columns={2}
          rows={20}
        />
      </div>
    </main>
  );
}
