import { component$ } from "@builder.io/qwik";

export const LongText = component$(() => {
    const compy = Array(100000).fill(0).map((_, i) => (
    <span key={i}>This is a lot of text to simulate a heavy component. Line {i + 1}</span>
    ))
    return (
        <div style="height:100vh;overflow:scroll" >
            <h1 >This is a heavy component with a text</h1>
            {compy}
        </div>
    );
});
