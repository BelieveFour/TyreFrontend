import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

  // fetch data
  const product = await fetch(`https://backend-qdc6.onrender.com/`, { cache: 'no-cache' }).then((res) => res.json())
  return {
    title: product.product[0].title,
    description: product.product[0].description,
  }
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
