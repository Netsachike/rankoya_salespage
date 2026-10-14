import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge doesn't know our @utility type sizes, and would read
 * `text-section` as a colour and drop it next to `text-fg`. Register them as
 * font sizes so size and colour classes coexist.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "hero-home",
            "section",
            "lead",
            "display",
            "h1",
            "h2",
            "h3",
            "body",
            "body-lg",
            "small",
            "caption",
            "overline",
            "metric",
            "metric-xl",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
