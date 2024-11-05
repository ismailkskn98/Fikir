import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const params = await searchParams;
  const query = params.query;

  const posts = [
    {
      _id: 1,
      views: 55,
      title: "Biz Robotlar",
      category: "Robotlar",
      description: "Bu bir açıklamadır",
      image:
        "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
        _id: 1,
        name: "İsmail",
      },
      createdAt: new Date(),
    },
  ];

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
