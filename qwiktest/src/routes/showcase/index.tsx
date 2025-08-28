import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LongText } from "~/components/heavy-components/longText";
export default component$(() => {
  const loaded = useSignal([false, false, false, false, false, false]);

  useVisibleTask$(() => {
    const idle = () =>
      new Promise<void>((resolve) => {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => resolve());
        } else {
          setTimeout(() => resolve(), 100);
        }
      });

    (async () => {
      for (let i = 0; i < loaded.value.length; i++) {
        await idle(); // wait until browser is idle
        loaded.value = loaded.value.map((v, idx) => (idx === i ? true : v));
      }
    })();
  }, { strategy: 'document-idle' });

  return (
    <>
      <h1>Hello</h1>
      <p>I will now lazy load very heavy components</p>
      {loaded.value[0] && <LongText />}
      {loaded.value[1] && <LongText />}
      {loaded.value[2] && <LongText />}
      {loaded.value[3] && <LongText />}
      {loaded.value[4] && <LongText />}
      {loaded.value[5] && <LongText />}
      {loaded.value[6] && <LongText />}
    </>
  );
});
export const head: DocumentHead = {
  title: "ZZZZZZZZZZZZZ"
};
