export const Header = ({ name, subtitle }) => (
  <div>
    <h1 className="text-2xl font-bold text-color-main opacity-0 animate-fade-in delay-0100 ">
      {name}
    </h1>
    <p className="font-medium text-sm sm:text-base text-color-sub opacity-0 animate-fade-in delay-0150">
      {subtitle}
    </p>
  </div>
);
