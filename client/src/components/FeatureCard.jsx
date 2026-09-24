export default function FeatureCard({ title, text, tag}) {
    return (
        <article className="card">
            <span className="card-tag">{tag}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}