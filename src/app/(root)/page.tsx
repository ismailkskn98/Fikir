import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading text-red-600">
          Girişiminizi tanıtın, <br /> Girişimcilerle bağlantı kurun
        </h1>
        <p className="sub-heading !max-w-3xl">Fikirlerinizi gönderin, tekliflere oy verin ve sanal yarışmalarda fark edilin.</p>
        <SearchForm />
      </section>
    </>
  );
}
