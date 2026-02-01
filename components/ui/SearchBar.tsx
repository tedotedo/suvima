'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CONDITIONS } from '@/data/conditions';
import { Condition } from '@/types';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  placeholder = 'Search conditions...',
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Condition[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const search = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = CONDITIONS.filter(
      (condition) =>
        condition.name.toLowerCase().includes(lowerQuery) ||
        condition.shortDescription.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered.slice(0, 5));
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      window.location.href = `/conditions/${results[selectedIndex].slug}`;
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="
            w-full px-4 py-3 pl-12
            bg-white dark:bg-[var(--neutral-800)]
            border border-[var(--neutral-200)] dark:border-[var(--neutral-700)]
            rounded-xl
            text-[var(--neutral-800)] dark:text-[var(--neutral-100)]
            placeholder:text-[var(--neutral-400)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent
            transition-shadow
          "
          aria-label="Search conditions"
          aria-expanded={isOpen && results.length > 0}
          aria-controls="search-results"
          role="combobox"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          id="search-results"
          role="listbox"
          className="
            absolute top-full left-0 right-0 mt-2
            bg-white dark:bg-[var(--neutral-800)]
            border border-[var(--neutral-200)] dark:border-[var(--neutral-700)]
            rounded-xl shadow-lg
            overflow-hidden z-50
          "
        >
          {results.map((condition, index) => (
            <Link
              key={condition.id}
              href={`/conditions/${condition.slug}`}
              role="option"
              aria-selected={index === selectedIndex}
              className={`
                block px-4 py-3
                ${
                  index === selectedIndex
                    ? 'bg-[var(--primary-50)] dark:bg-[var(--primary-900)]'
                    : 'hover:bg-[var(--neutral-50)] dark:hover:bg-[var(--neutral-700)]'
                }
                transition-colors
              `}
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-[var(--neutral-800)] dark:text-[var(--neutral-100)]">
                {condition.name}
              </div>
              <div className="text-sm text-[var(--neutral-500)] dark:text-[var(--neutral-400)] line-clamp-1">
                {condition.shortDescription}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
