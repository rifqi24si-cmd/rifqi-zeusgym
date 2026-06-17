import PageHeader from "../components/PageHeader";
import { useState, useEffect, useRef } from "react";

export default function Hooks() {
  // useState example
  const [count, setCount] = useState(0);

  // useEffect example: update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useRef example: focus and previous value
  const inputRef = useRef(null);
  const prevRef = useRef("");
  const [value, setValue] = useState("");

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div>
      <PageHeader title="React Hooks" subtitle="useState • useEffect • useRef" />

      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">useState — Counter</h2>
        <p className="text-sm text-gray-500 mb-4">What: local state for component (counter example).</p>
        <div className="flex items-center gap-3">
          <button onClick={() => setCount((c) => c - 1)} className="px-3 py-1 rounded bg-slate-100">-</button>
          <div className="text-xl font-bold">{count}</div>
          <button onClick={() => setCount((c) => c + 1)} className="px-3 py-1 rounded bg-slate-100">+</button>
          <button onClick={() => setCount(0)} className="px-3 py-1 rounded bg-red-100 text-red-700">Reset</button>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">useEffect — Side effects</h2>
        <p className="text-sm text-gray-500 mb-4">Why: perform side-effects when state or props change. Here we update the document title.</p>
        <p className="text-sm">Open the browser tab title — it reflects the counter value.</p>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">useRef — Access DOM & persist value</h2>
        <p className="text-sm text-gray-500 mb-4">When: keep mutable value across renders without triggering re-renders.</p>
        <div className="flex gap-3 items-center">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something"
            className="border rounded px-3 py-2"
          />
          <button onClick={() => inputRef.current && inputRef.current.focus()} className="px-3 py-1 rounded bg-slate-100">Focus</button>
        </div>
        <p className="mt-3 text-sm">Previous value: <strong>{prevRef.current}</strong></p>
      </section>

      <div className="text-sm text-gray-500">Tips: useState stores local UI state; useEffect runs after render; useRef holds mutable refs without re-render.</div>
    </div>
  );
}
