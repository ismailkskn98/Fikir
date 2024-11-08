import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import type { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const params = await searchParams;
  const query = params.query;

  const posts = (await client.fetch(STARTUPS_QUERY)) as StartupCardType[];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading text-red-600">
          Girişiminizi tanıtın, <br /> Girişimcilerle bağlantı kurun
        </h1>
        <p className="sub-heading !max-w-3xl">Fikirlerinizi gönderin, tekliflere oy verin ve sanal yarışmalarda fark edilin.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `"${query}" için arama sonucu` : "Tüm Girişimler"}</p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? posts.map((post, index) => <StartupCard key={index} post={post} />) : <p className="no-results">No startups found</p>}
        </ul>
      </section>
    </>
  );
}
