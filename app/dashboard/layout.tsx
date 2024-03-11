import Header from "@/components/header";
import { Suspense } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Header />

        {children}
      </section>
    </Suspense>
  );
}
