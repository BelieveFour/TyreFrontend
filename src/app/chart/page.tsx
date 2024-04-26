import Chart from "@/components/Charts/page";
import type { Metadata, ResolvingMetadata } from 'next'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";


export async function generateMetadata(): Promise<Metadata> {

  // fetch data
  const product = await fetch(`https://backend-qdc6.onrender.com/`, { cache: 'no-cache' }).then((res) => res.json())
  return {
    title: product.product[0].title,
    description: product.product[0].description,
  }
}


// export const metadata: Metadata = {
//   title: "Chart",
//   description:
//     "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };


const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Chart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
