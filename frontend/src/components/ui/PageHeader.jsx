import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="mb-6">
      {/* Subtitle and Title */}
      <div className="mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-6 bg-yellow-400 rounded-sm"></div>
          <p className="text-black font-medium">Tentang</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mt-1">
          {title}
        </h1>
      </div>

      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center text-sm md:text-base font-medium text-green-600 space-x-1">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
<<<<<<< HEAD
            {index > 0 && <ChevronRight className="w-4 h-4 inline-block text-yellow-400" />}
=======
            {index > 0 && <ChevronRight className="w-4 h-4 inline-block" />}
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
            {item.href ? (
              <Link
                to={item.href}
                className="hover:underline hover:text-green-800 transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-green-800">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string, // if not provided, it's the current page
    })
  ).isRequired,
};

export default PageHeader;
