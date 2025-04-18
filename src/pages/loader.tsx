// components/Loader.tsx
import { useEffect, useState } from "react";

export default function Loader({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(show);

  // trigger fade-out when `show` goes false
  useEffect(() => {
    if (show) setVisible(true);
    else {
      // wait for fadeOut before unmount
      const t = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(t);
    }
  }, [show]);

  if (!visible) return null;
  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#F2B6B4] to-[#FECF5A] z-50
        ${show ? "animate-fadeIn" : "animate-fadeOut"}
      `}
    >
      {/* spinning ring */}
      <div className="loader" />
      </div>
  );
}



