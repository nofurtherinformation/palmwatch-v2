import React from "react";
import queryClient from "@/utils/getMillData";
import { BrandData, BrandInfo } from "@/components/BrandInfo";
import { IqrOverTime } from "@/components/IqrOverTimeLineChart";
import { PalmwatchMap } from "@/components/Map";
import { QueryProvider } from "@/components/QueryProvider";
import path from "path";
import { UmlData } from "@/utils/dataTypes";
// years from 2001 to 2022
const yearRange = Array.from({ length: 22 }, (_, i) => 2001 + i);

export default async function Page({ params }: { params: { uml: string } }) {
  const uml = decodeURIComponent(params.uml);
  const dataDir = path.join(process.cwd(), "public", "data");
  await queryClient.init(dataDir);

  const data = queryClient.getUml(uml).objects();
  const entry = data?.[0] as UmlData | undefined;

  if (!entry) {
    return <div>Mill Not Found</div>;
  }
  // @ts-ignore
  const umlId = entry?.["UML ID"];
  const millName = entry?.["Mill Name"];
  const brandData = queryClient.getBrandUsage(umlId) as BrandData
  const lineChartData = yearRange.map((year) => ({
    year,
    // @ts-ignore
    "Tree Loss (km2)": entry?.[`treeloss_km_${year}`],
  }));

  return (
    <main className="relative flex flex-col items-center justify-center w-[90%] max-w-[1400px] mx-auto">
      <div className="p-4 flex flex-row space-x-4 my-8 w-full shadow-xl">
        <div>
          {/* @ts-ignore */}
          <h1 className="text-4xl font-bold">{millName}</h1>
          <h2 className="text-xl">Palm Oil Usage</h2>
        </div>
        <div></div>
      </div>

      <div className="my-4 p-4 bg-white/30 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg mx-auto h-[40vh] w-full">
        <QueryProvider>
          <PalmwatchMap
            geoDataUrl="/data/mill-catchment.geojson"
            dataTable={data}
            geoIdColumn="UML ID"
            dataIdColumn="UML ID"
            choroplethColumn="treeloss_km_2020"
            choroplethScheme="forestLoss"
          />
        </QueryProvider>
      </div>
      <div className="flex flex-row space-x-4 w-full">
        <div className="p-4 bg-white/30 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg mx-auto  w-full">
          <BrandInfo data={brandData} />
        </div>
        <div className="bg-white/30 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg mx-auto w-full">
          <div className="h-[40vh] relative w-full">
            <IqrOverTime type="mill" data={lineChartData} />
          </div>
        </div>
      </div>
      <div className="my-4 p-4 bg-white/30 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg mx-auto w-full">
        <code>{JSON.stringify(entry, null, 2)}</code>
      </div>
    </main>
  );
}
