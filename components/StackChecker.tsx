'use client';

import { useState } from 'react';
import interactionsData from '@/data/interactions.json';

interface Source {
  title: string;
  url: string;
  publisher: string;
}

interface Entry {
  id: string;
  a: string;
  b: string;
  aliases_a: string[];
  aliases_b: string[];
  category: string;
  severity: 'low' | 'moderate' | 'high';
  mechanism: string;
  summary: string;
  sources: Source[];
  last_reviewed: string;
}

const entries = (interactionsData as { entries: Entry[] }).entries;

function substanceMatches(entered: string, primary: string, aliases: string[]): boolean {
  const norm = entered.toLowerCase().trim();
  if (!norm) return false;
  return norm === primary.toLowerCase() || aliases.map(a => a.toLowerCase()).includes(norm);
}

function findInteractions(stack: string[]): Entry[] {
  return entries.filter(entry => {
    const matchesA = stack.some(s => substanceMatches(s, entry.a, entry.aliases_a));
    const matchesB = stack.some(s => substanceMatches(s, entry.b, entry.aliases_b));
    return matchesA && matchesB;
  });
}

const severityLabel = { high: 'High', moderate: 'Moderate', low: 'Low' };
const severityClasses = {
  high: 'bg-red-100 text-red-800',
  moderate: 'bg-amber-100 text-amber-800',
  low: 'bg-green-100 text-green-800',
};

const EXAMPLES = [
  { label: "St. John's Wort + Warfarin", stack: "St. John's Wort\nWarfarin" },
  { label: 'Fish Oil + Warfarin', stack: 'Fish Oil\nWarfarin' },
  { label: 'Magnesium + Ciprofloxacin', stack: 'Magnesium\nCiprofloxacin' },
  { label: 'Red Yeast Rice + Atorvastatin', stack: 'Red Yeast Rice\nAtorvastatin' },
];

export default function StackChecker() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<Entry[] | null>(null);
  const [parsedStack, setParsedStack] = useState<string[]>([]);

  function handleCheck() {
    const parsed = input
      .split(/[\n,]+/)
      .map(s => s.trim())
      .filter(Boolean);
    setParsedStack(parsed);
    setResults(findInteractions(parsed));
  }

  function loadExample(stack: string) {
    setInput(stack);
    setResults(null);
    setParsedStack([]);
  }

  return (
    <div>
      <div className="space-y-2">
        <label htmlFor="stack-input" className="block text-sm font-medium text-zinc-700">
          Enter supplements and medications — one per line or comma-separated:
        </label>
        <textarea
          id="stack-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleCheck();
          }}
          placeholder={"St. John's Wort\nWarfarin\nVitamin C"}
          rows={5}
          className="w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-zinc-400">Try an example:</span>
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => loadExample(ex.stack)}
              className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-800 transition-colors"
            >
              {ex.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-zinc-400">Ctrl+Enter to check</p>
      </div>

      <button
        onClick={handleCheck}
        disabled={!input.trim()}
        className="mt-4 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Check Stack
      </button>

      {results !== null && (
        <div className="mt-8 space-y-4">
          {results.length === 0 ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <span className="font-medium">No interactions found</span> for:{' '}
                {parsedStack.join(', ')}.
              </p>
              <p className="mt-1 text-xs text-green-700">
                This database covers {entries.length} known interactions. A clean result here does
                not rule out interactions not in the dataset.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-zinc-500">
                Found{' '}
                <span className="font-medium text-zinc-800">
                  {results.length} interaction{results.length !== 1 ? 's' : ''}
                </span>{' '}
                in your stack:
              </p>
              {results.map(entry => (
                <div key={entry.id} className="border border-zinc-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className="font-semibold text-zinc-900 capitalize">
                      {entry.a} + {entry.b}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${severityClasses[entry.severity]}`}
                    >
                      {severityLabel[entry.severity]} severity
                    </span>
                  </div>

                  <p className="text-sm text-zinc-700 leading-relaxed">{entry.summary}</p>

                  <div className="p-3 bg-zinc-50 rounded-md text-sm text-zinc-600 leading-relaxed">
                    <span className="font-medium text-zinc-700">Mechanism: </span>
                    {entry.mechanism}
                  </div>

                  <p className="text-xs text-zinc-400">
                    Source:{' '}
                    {entry.sources.map((src, i) => (
                      <span key={i}>
                        {i > 0 && ', '}
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-zinc-600"
                        >
                          {src.title}
                        </a>{' '}
                        ({src.publisher})
                      </span>
                    ))}
                    {' · '}Last reviewed: {entry.last_reviewed}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
