import { globalCss } from "@stitches/react";
import { forwardRef } from "react";

const { random } = Math;

const styleWithPos = (top, left, right, bottom, style = {}, pos = 0) => {
  if (top) style.top = pos;
  if (left) style.left = pos;
  if (right) style.right = pos;
  if (bottom) style.bottom = pos;
  return style;
};

export const Image = ({ size }) => (
  <svg viewBox="0 0 15 15" width={size} height={size}>
    <path
      d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const Blob = forwardRef(
  (
    {
      opacity = 0.75,
      size = "75%",
      color = "255, 0, 66",
      top,
      left,
      right,
      bottom,
      style,
      pos,
      ...other
    },
    ref
  ) => (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      ref={ref}
      style={styleWithPos(top, left, right, bottom, style, pos)}
      {...other}
    >
      <path id="blob" fill={`rgba(${color}, ${opacity})`}>
        <animate
          repeatCount="indefinite"
          attributeName="d"
          dur={`${(10 + random() * 10) << 0}s`}
          values="M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z"
        />
      </path>
    </svg>
  )
);

export const Wave = ({ opacity = 1, size = "100%", ...other }) => (
  <svg
    style={{ bottom: 0 }}
    viewBox="0 0 1474 762"
    width="100%"
    height={size}
    preserveAspectRatio="none"
    {...other}
  >
    <path fill={`rgba(0, 99, 255, ${opacity})`}>
      <animate
        repeatCount="indefinite"
        attributeName="d"
        dur={`${(10 + random() * 10) << 0}s`}
        values="
            M 0,762 V 0,457 C 246, 361.5 492, 296 738,296 C 983,296 1228,361.5 1474,457 C 1474,457 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 461.5 492, 506 738,506 C 983,506 1228,461.5 1474,407 C 1474,407 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 511.5 492, 556 738,556 C 983,556 1228,511.5 1474,457 C 1474,457 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 611.5 492, 666 738,666 C 983,666 1228,611.5 1474,557 C 1474,557 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 511.5 492, 556 738,556 C 983,556 1228,511.5 1474,457 C 1474,457 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 461.5 492, 506 738,506 C 983,506 1228,461.5 1474,407 C 1474,407 1474,762 1474,762 Z;
            M 0,762 V 0,457 C 246, 361.5 492, 296 738,296 C 983,296 1228,361.5 1474,457 C 1474,457 1474,762 1474,762 Z;
          "
      />
    </path>
  </svg>
);

export const Closs = forwardRef(
  ({ size, top, left, right, bottom, style, pos, ...other }, ref) => (
    <svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      ref={ref}
      style={styleWithPos(top, left, right, bottom, style, pos)}
      {...other}
    >
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
);

export const Save = forwardRef(
  ({ size = "1rem", top, left, right, bottom, style, pos, ...other }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      ref={ref}
      style={styleWithPos(top, left, right, bottom, style, pos)}
      {...other}
    >
      <path
        d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
);

export const Sides = forwardRef(({ size, ...other }, ref) => (
  <span ref={ref} {...other}>
    <span />
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      transform="translate(-8, 0)"
      style={{ position: "absolute" }}
    >
      <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="#FF3385" />
    </svg>
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      style={{ position: "absolute" }}
      transform="translate(8, 0)"
    >
      <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="#5FB4E4" />
    </svg>
  </span>
));

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    color: "#fff",
    font: "inherit",
    fontWeight: "inherit",
  },
  input: { display: "none" },
  a: { color: "#fff" },
  img: {
    pointerEvents: "none",
    useSelect: "none",
    objectFit: "none",
    height: "75vh",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundPosition: "0 0, 10px 10px",
    backgroundSize: "20px 20px",
    // all SVG
    ">svg": { position: "absolute", zIndex: -1 },
    ">div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "1rem",
      color: "#fff",
      fontSize: "1.25rem",
      fontStyle: "italic",
    },
    // Sides Separator
    ">span": {
      position: "absolute",
      backgroundColor: "#000",
      borderRadius: 9999,
      width: "3rem",
      height: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      "> span": {
        width: "0.5rem",
        height: "100vh",
        opacity: 0.5,
        position: "absolute",
        backgroundColor: "#000",
      },
    },
  },
});
