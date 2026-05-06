import ErrorPage from "../components/ErrorPage";
export default function Error400() {
  return <ErrorPage code="400" message="Bad Request - Permintaan tidak valid" />;
}