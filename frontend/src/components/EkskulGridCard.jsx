/* eslint-disable react/prop-types */

import { Card } from "./ui/card";

// components/EkskulCard.jsx
const EkskulGridCard = ({ title, image }) => {
  return (
    <Card>
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t"
      />
      <div className="p-3 text-center font-semibold">{title}</div>
    </Card>
  );
};

export default EkskulGridCard;
