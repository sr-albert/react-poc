import FPSCounter from "../../components/FPSCounter";
import { browserDetech } from "../../helpers/browser.helper";

export default function DebuggingView() {
  // get browser and client information
  const browser = {
    userAgent: navigator.userAgent,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    browserName: browserDetech(),
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 9999,
        maxWidth: "20%",
        gap: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FPSCounter />
      {Object.entries(browser).map(([key, value]) => (
        <p
          key={key}
          style={{
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {value}
        </p>
      ))}
    </div>
  );
}
