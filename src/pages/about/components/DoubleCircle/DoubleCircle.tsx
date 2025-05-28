import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
type DoubleCircleProps = {
  title: string;
};

const DoubleCircle = ({ title }: DoubleCircleProps) => {
  const animation = useOnScreenAnimation<HTMLImageElement>();

  return (
    <div
      ref={animation.ref}
      className={`fade-up ${animation.isVisible ? "visible" : ""}`}
      style={{ width: "100px", margin: "0 auto" }}
    >
      <svg
        width="100%"
        viewBox="0 0 71 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="gdgoc-mask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="71"
          height="44"
        >
          <rect width="71" height="44" fill="white" />
          <path
            d="M49.06 1C60.29 1 69.4 10.19 69.4 21.53C69.4 32.87 60.29 42.06 49.06 42.06C43.85 42.06 39.1 40.08 35.5 36.83C31.9 40.08 27.15 42.06 21.94 42.06C10.71 42.06 1.6 32.87 1.6 21.53C1.6 10.19 10.71 1 21.94 1C27.15 1 31.9 2.98 35.5 6.23C39.1 2.98 43.85 1 49.06 1Z"
            fill="black"
          />
        </mask>
        <path
          d="M49.06 1C60.29 1 69.4 10.19 69.4 21.53C69.4 32.87 60.29 42.06 49.06 42.06C43.85 42.06 39.1 40.08 35.5 36.83C31.9 40.08 27.15 42.06 21.94 42.06C10.71 42.06 1.6 32.87 1.6 21.53C1.6 10.19 10.71 1 21.94 1C27.15 1 31.9 2.98 35.5 6.23C39.1 2.98 43.85 1 49.06 1Z"
          stroke="#4338CA"
          strokeWidth="2"
          fill="white"
          mask="url(#gdgoc-mask)"
        />
        <text
          x="35.5"
          y="26"
          textAnchor="middle"
          fill="#4338CA"
          fontSize="10"
          fontWeight="bold"
        >
          {title}
        </text>
      </svg>
    </div>
  );
};

export default DoubleCircle;
