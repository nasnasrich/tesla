import { SvgIcon } from "@mui/material";

const TeslaIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{
        fontSize: 32,
        borderRadius: "50%",
        padding: "4px",
        backgroundColor: "darkslategray",
        boxShadow: 1,
        ...props.sx,
      }}
    >
      {/* Tesla T logo (clean & minimal) */}
      <path
        d="M12 2c-3 0-5.6.3-7.6.8l.6 1.5c1.7-.4 4.1-.7 7-.7s5.3.3 7 .7l.6-1.5C17.6 2.3 15 2 12 2zm0 3.6c-2.3 0-4.1.2-5.6.5L12 22l5.6-15.9c-1.5-.3-3.3-.5-5.6-.5z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default TeslaIcon;
