export const Header = ({ name, subtitle }) => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900 ark:text-white opacity-0 animate-fade-in delay-100 ">
      {name}
    </h1>
    <p className="font-medium text-sm sm:text-base text-gray-600 ark:text-gray-300 opacity-0 animate-fade-in delay-200">
      {subtitle}
    </p>
  </div>
);
