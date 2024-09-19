// type SVGType = {
//     icon: string;
//     className?: string;
//   };
  
//   export default function SVG({ icon, className }: SVGType) {
//     return (
//       <svg className={className}>
//         <use xlinkHref={`/img/sprite.svg#${icon}`}></use>
//       </svg>
//     );
//   }
  
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
