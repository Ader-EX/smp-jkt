import PropTypes from "prop-types";

const Jumbotron = ({
  welcomeText,
  title,
  description,
  buttonText,
  buttonLink,
  bgImage,
}) => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-start gap-6 px-6 sm:px-12 lg:px-24">
        <div className="text-white text-sm uppercase tracking-wider mb-0">
          {welcomeText}
        </div>
        <h1 className="text-2xl font-bold text-white sm:text-5xl lg:text-6xl mt-0 max-w-[60%] leading-loose">
          {title}
        </h1>
        <p className="text-gray-200 text-sm sm:text-base max-w-full sm:max-w-[70%]">
          {description || ""}
        </p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 mt-4"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

Jumbotron.propTypes = {
  welcomeText: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};

export default Jumbotron;
