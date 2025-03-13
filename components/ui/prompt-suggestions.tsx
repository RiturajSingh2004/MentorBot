interface PromptSuggestionsProps {
  label: string
  append: (message: { role: "user"; content: string }) => void
  suggestions: string[]
  customLabel?: React.ReactNode  // Add this new optional prop
}

export function PromptSuggestions({
  label,
  append,
  suggestions,
  customLabel,  // Add this to the props
}: PromptSuggestionsProps) {
  return (
    <div className="space-y-6">
      {customLabel ? (
        // Render custom label if provided
        <h2 className="text-center text-2xl font-bold">{customLabel}</h2>
      ) : (
        // Otherwise render the standard label
        <h2 className="text-center text-2xl font-bold">{label}</h2>
      )}
      <div className="flex gap-6 text-sm">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => append({ role: "user", content: suggestion })}
            className="h-max flex-1 rounded-xl border bg-background p-4 hover:bg-muted"
          >
            <p>{suggestion}</p>
          </button>
        ))}
      </div>
    </div>
  )
}