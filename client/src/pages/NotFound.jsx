import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container center">
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for doesn't exist or has moved.</p>
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
