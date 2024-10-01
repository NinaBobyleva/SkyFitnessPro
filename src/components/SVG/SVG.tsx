type SVGType = {
  icon: string;
  className?: string;
};

const SVG: React.FC<SVGType> = ({ icon, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`/img/sprite.svg#${icon}`}></use>
    </svg>
  );
};

export default SVG;
