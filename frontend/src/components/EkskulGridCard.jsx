/* eslint-disable react/prop-types */
// components/EkskulCard.jsx
const EkskulGridCard = ({ title, image }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t"
      />
      <div className="p-3 text-center font-semibold">{title}</div>
    </div>
  );
};

export default EkskulGridCard;
