import { useCallback } from "react";
import { useRefEvent } from "reev/react";

const addE = (target, ...args) => target.addEventListener(...args);

const addV = (a, b) => [a[0] + b[0], a[1] + b[1]];
const subV = (a, b) => [a[0] - b[0], a[1] - b[1]];

export const useRefs = () => {
  const refs = useCallback((i) => {
    if (!refs[i]) {
      refs[i] = (target) => (refs[i].current = target);
      refs[i].current = void 0;
    }
    return refs[i];
  }, []);
  return refs;
};

export const useFileSelect = (onChange) => {
  const self = useRefEvent({
    onChange,
    change(e) {
      e.preventDefault();
      if (e.target instanceof HTMLInputElement)
        self.onChange(...Array.from(e.target.files));
    },
    mount(target) {
      addE(target, "change", self.change);
    },
  });
  return self;
};

// https://github.com/GoogleChromeLabs/file-drop/blob/master/lib/filedrop.ts
export const useFileDrop = (onDrop) => {
  const self = useRefEvent({
    onDrop,
    reset() {
      self.data = void 0;
      self.count = 0;
      self.active = false;
    },
    drop(e) {
      e.preventDefault();
      self.reset();
      self.onDrop(self, ...Array.from(e.dataTransfer.files));
    },
    paste(e) {
      e.preventDefault();
      self.onDrop(self, ...Array.from(e.clipboardData.files));
    },
    dragenter(e) {
      if (++self.count > 1) return;
      self.active = true;
      self.onDrop(self);
    },
    dragleave(e) {
      if (--self.count !== 0) return;
      self.active = false;
      self.reset();
      self.onDrop(self);
    },
    dragend(e) {
      self.reset();
    },
    dragover(e) {
      e.preventDefault();
    },
    mount(target) {
      self.count = 0; // drag enter count
      self.target = target;
      addE(target, "drop", self.drop);
      addE(target, "dragend", self.dragend);
      addE(target, "dragover", self.dragover);
      addE(target, "dragenter", self.dragenter);
      addE(target, "dragleave", self.dragleave);
      addE(target, "paste", self.paste);
    },
  });
  return self;
};

export const useClick = (onClick) => {
  const self = useRefEvent({
    onClick,
    click(e) {
      self.onClick(e);
    },
    mount(target) {
      addE(target, "click", self.click);
    },
  });
  return self;
};

export const useDrag = (onDrag) => {
  const self = useRefEvent({
    onDrag,
    move(e) {
      self._active = self.active;
      self._value = self.value;
      self.value = [e.clientX, e.clientY];
      if (self._active) {
        self.delta = subV(self.value, self._value);
        self.movement = addV(self.movement, self.delta);
      } else {
        self.delta = [0, 0];
        self.movement = [0, 0];
      }
      self.onDrag(self);
    },
    down(e) {
      self.event = e;
      self._active = false;
      self.active = true;
      self.delta = [0, 0];
      self.movement = [0, 0];
      self.target.setPointerCapture(e.pointerId);
      self.onDrag(self);
    },
    up(e) {
      self.event = e;
      self._active = true;
      self.active = false;
      self.delta = [0, 0];
      self.movement = [0, 0];
      self.target.releasePointerCapture(e.pointerId);
      self.onDrag(self);
    },
    mount(target) {
      self.target = target;
      addE(target, "pointermove", self.move);
      addE(target, "pointerdown", self.down);
      addE(target, "pointerleave", self.up);
      addE(target, "pointerup", self.up);
    },
  });
  return self;
};
