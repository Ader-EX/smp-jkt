/* eslint-disable react/prop-types */

const SidebarNews = ({ sidebarActivities, tag = "pengumuman" }) => {
  return (
    <div>
      {" "}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary-base text-white px-6 py-4">
          <h3 className="font-bold text-lg">TERBARU</h3>
        </div>
        <div className="p-0">
          {sidebarActivities.map((item, index) => (
            <a
              href={`/${tag}/${item.id}`}
              key={index}
              className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-200 transition-colors"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-16 object-cover  mr-4 flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-primary-bgText leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-primary-bgText">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNews;
