// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Cafe.css";

const Cafe = ({ cafe }) => {
  return (
    <div className="cafe-card">
      <img src={cafe.picture} alt={cafe.title} />
      <h2>{cafe.title}</h2>
      <p>{cafe.address}</p>
      <ul>
        {cafe.criteria.map((criterion, index) => (
          <li key={index}>{criterion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cafe;
