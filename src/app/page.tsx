export default function Home() {
  return (
    <div className="[--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white dark:bg-gray-950">
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="text-2xl font-bold">example.com</div>
          <div className="space-y-6">
            <p className="mt-1.5 leading-relaxed">
              Quick description about the domain. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <svg
                  className="w-5.5 h-[1lh] shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Price{" "}
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    USD 00.000
                  </code>{" "}
                  or{" "}
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    IDR 000.000.000
                  </code>
                  .
                </p>
              </li>
              <li className="flex">
                <svg
                  className="w-5.5 h-[1lh] shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">Full support during domain transfer.</p>
              </li>
              <li className="flex">
                <svg
                  className="w-5.5 h-[1lh] shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">Good investment.</p>
              </li>
            </ul>
            <p>
              If you interested please contact Name at{" "}
              <code className="font-mono font-medium text-gray-950 dark:text-white">
                <a
                  href="mailto:user@example.com"
                  className="underline-offset-3 text-gray-950 underline decoration-sky-400 hover:decoration-2 dark:text-white"
                >
                  user@example.com
                </a>
              </code>
            </p>
          </div>
          <hr className="border-(--pattern-fg) my-6 w-full" />
          <p className="mb-3">Other domain for sale:</p>
          <p className="font-semibold">
            <a
              href="https://example.com"
              className="underline-offset-3 text-gray-950 underline decoration-sky-400 hover:decoration-2 dark:text-white"
            >
              example.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-x-(--pattern-fg) relative -right-px col-start-2 row-span-full row-start-1 border-x bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="border-x-(--pattern-fg) relative -left-px col-start-4 row-span-full row-start-1 border-x bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="bg-(--pattern-fg) relative -bottom-px col-span-full col-start-1 row-start-2 h-px"></div>
      <div className="bg-(--pattern-fg) relative -top-px col-span-full col-start-1 row-start-4 h-px"></div>
    </div>
  );
}
