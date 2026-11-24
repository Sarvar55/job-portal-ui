import { cloneElement, isValidElement, useId } from "react";

const POSITIONS = {
  top: {
    bubble: "bottom-full mb-3 translate-y-1",
    arrow: "-bottom-1.5 border-r border-b",
  },
  bottom: {
    bubble: "top-full mt-3 -translate-y-1",
    arrow: "-top-1.5 border-l border-t",
  },
};

/**
 * Hover/focus tooltip styled to match the site's dark, gradient-accented UI.
 * Wrap a single focusable element; it receives aria-describedby automatically.
 */
const Tooltip = ({ content, position = "top", children }) => {
  const id = useId();
  const { bubble, arrow } = POSITIONS[position] ?? POSITIONS.top;

  const trigger = isValidElement(children)
    ? cloneElement(children, { "aria-describedby": id })
    : children;

  return (
    <span className="relative inline-flex group/tooltip">
      {trigger}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${bubble} z-50 w-64 max-w-[80vw] rounded-xl border border-gray-700/60 bg-gray-900/95 px-4 py-3 text-left text-xs leading-relaxed text-gray-200 shadow-2xl shadow-black/40 backdrop-blur-sm opacity-0 invisible scale-95 transition-all duration-200 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:translate-y-0 group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100 group-focus-within/tooltip:translate-y-0`}
      >
        <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500" />
        {content}
        <span
          aria-hidden="true"
          className={`absolute left-1/2 -translate-x-1/2 ${arrow} h-3 w-3 rotate-45 border-gray-700/60 bg-gray-900`}
        />
      </span>
    </span>
  );
};

export default Tooltip;
