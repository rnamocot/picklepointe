import Link from "next/link";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="inner">
        <p className="big" aria-hidden="true">
          OUT
        </p>
        <h1 className="display-md">That ball landed out of bounds.</h1>
        <p className="lede">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on court.</p>
        <Link href="/" className="btn btn-lime btn-lg">
          Back to home <Arrow width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}
