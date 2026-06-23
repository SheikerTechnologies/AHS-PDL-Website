/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        <p className="text-sm text-text-muted animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
