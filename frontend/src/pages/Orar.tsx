import "../Orar.css";

export default function Orar() {
  return (
    <div className="orar-container">
      <div className="orar-content">
        <h1>Orar de lucru</h1>

        <ul className="orar-list">
          <li>
            <strong>Luni:</strong> 08:00 - 16:00
          </li>
          <li>
            <strong>Marți:</strong> 08:00 - 16:00
          </li>
          <li>
            <strong>Miercuri:</strong> 08:00 - 16:00
          </li>
          <li>
            <strong>Joi:</strong> 08:00 - 16:00
          </li>
          <li>
            <strong>Vineri:</strong> 08:00 - 16:00
          </li>
          <li className="inchis">
            <strong>Sâmbătă:</strong> Închis
          </li>
          <li className="inchis">
            <strong>Duminică:</strong> Închis
          </li>
        </ul>
      </div>
    </div>
  );
}