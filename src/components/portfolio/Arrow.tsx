export default function Arrow({ external = false }: { external?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-arrow">
      {external ? "↗" : "→"}
    </span>
  );
}
