export default function TeamCard({ name, role, initials }) {
    return (
       <div className="team-card">
        <div className="avatar">{initials}</div>
        <h3>{name}</h3>
        <p>{role}</p>
       </div> 
    );
}