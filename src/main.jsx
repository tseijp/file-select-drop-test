import { useState, useMemo, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { Image, Blob, Wave, Closs, Save, Sides, globalStyles } from "./icons";
import {
  useFileSelect,
  useFileDrop,
  useClick,
  useDrag,
  useRefs,
} from "./hooks";

const LENGTH = 5;

const ITEMS = [...Array(LENGTH).keys()];

const CONFIG = { repeat: -1, ease: "slomo.out" };
const { sin, cos, random, PI } = Math;

const App = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const refs = useRefs();

  const onRead = (blob) => {
    console.log(blob);
    if (!blob) return;
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setFileName(blob.name);
      setFileUrl(reader.result);
    };
  };

  const onSave = () => {
    if (!fileUrl) return;
    const el = document.createElement("a");
    document.body.appendChild(el);
    el.href = fileUrl;
    el.download = fileName;
    el.click();
    document.body.removeChild(el);
  };

  const save1 = useClick(onSave);
  const save2 = useClick(onSave);
  const cross = useClick(() => setFileUrl(null));
  // const select = useFileSelect(console.log) // (_, blob) => void onRead(blob));
  const select = useFileSelect((blob) => void onRead(blob));

  const drop = useFileDrop(({ active }, blob) => {
    onRead(blob);
    setIsDrag(active);
  });

  const drag = useDrag(({ target, movement: [x] }) => {
    gsap.to(target, { x });
  });

  const style = useMemo(() => {
    const fff = isDrag !== !!fileUrl ? "#313131" : "#fff";
    const f3f = isDrag !== !!fileUrl ? "#333333" : "#f3f3f3";
    return {
      backgroundColor: fff,
      backgroundImage: `
        repeating-linear-gradient(45deg, ${f3f} 25%, transparent 25%, transparent 75%, ${f3f} 75%, ${f3f}),
        repeating-linear-gradient(45deg, ${f3f} 25%, ${fff} 25%, ${fff} 75%, ${f3f} 75%, ${f3f})
      `,
    };
  }, [isDrag, fileUrl]);

  globalStyles();

  useEffect(() => {
    if (fileUrl) return;
    ITEMS.forEach((j) => {
      ITEMS.forEach((i) => {
        const target = refs(i + j * LENGTH).current;
        if (!target) return;
        const rad = random() * PI * 2;
        const max = window.innerWidth > window.innerHright ? "w" : "h";
        const x = `${1.4 * 50 * cos(rad)}v${max}`;
        const y = `${1.4 * 50 * sin(rad)}v${max}`;
        const duration = 25 + 75 * random();
        gsap
          .timeline()
          .from(target, { duration, x, y, opacity: 1, ...CONFIG })
          .to(target, { duration, opacity: 0, ...CONFIG })
          .progress(random());
      });
    });
  }, [fileUrl, refs]);

  if (fileUrl)
    return (
      <main style={style} ref={drop.ref}>
        <Blob size="5rem" top left opacity={0.75} />
        <Closs size="2rem" top left pos="1.5rem" ref={cross.ref} />
        <Blob size="5rem" bottom left color="0,0,0" />
        <Save size="2rem" bottom left pos="1.5rem" ref={save1.ref} />
        <Blob size="5rem" bottom right color="5,144,236" />
        <Save size="2rem" bottom right pos="1.5rem" ref={save2.ref} />
        <Sides size="2.5rem" ref={drag.ref} />
        <img src={fileUrl} alt={fileUrl} />
      </main>
    );

  return (
    <main style={style} ref={drop.ref}>
      {ITEMS.map((j) =>
        ITEMS.map((i) => (
          <Blob
            key={`${i}-${j}`}
            ref={refs(i + j * LENGTH)}
            size={`${2.5 + 2.5 * sin(i + j * LENGTH)}rem`}
            opacity={0.5 + 0.5 * sin(i + j * LENGTH)}
          />
        ))
      )}
      {ITEMS.map((i) => (
        <Blob
          key={i}
          opacity={0.2 + (0.2 * i) / LENGTH}
          size={`${45 + 15 * (1 - i / LENGTH)}%`}
        />
      ))}
      {ITEMS.map((i) => (
        <Wave
          key={i}
          opacity={0.5 + (0.5 * i) / LENGTH}
          size={`${50 * (1 - i / LENGTH)}%`}
        />
      ))}
      <div>
        <label style={{ cursor: "pointer" }}>
          <input type="file" ref={select.ref} />
          <Image size="3rem" />
        </label>
        <span>
          Drop or <u>Paste</u>
        </span>
      </div>
    </main>
  );
};

createRoot(document.getElementById("root")).render(<App />);
