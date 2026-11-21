import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { JsonLd, PageHero } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Pickleball Court in Trece Martires, Cavite",
  description:
    "Reserve an indoor pickleball court, open play slot or clinic at Pickle Pointe, Barangay Conchu, Trece Martires City. Pick a time, see your estimate and send your request.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Book a court", path: "/book" }])} />
      <PageHero
        crumb="Book a court"
        image="/images/indoor-pickleball-doubles-match.jpg"
        title={
          <>
            Claim your court. <span className="hl">Bring the heat.</span>
          </>
        }
        intro="Choose your slot, see the estimate instantly and send your request. We'll confirm by text."
      />
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <Suspense>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
