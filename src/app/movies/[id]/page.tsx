import Ui from "@/app/movies/[id]/ui";

export default function MovieDetailPage({ params }) {
  return <Ui id={params.id} />;
}
