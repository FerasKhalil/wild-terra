import { Suspense } from "react";
import AdventuresPageClient from "./page.client";

export const metadata = {
  title: "Adventures | WildTerra Travel",
  description: "Browse all adventure travel experiences offered by WildTerra.",
};

export default function AdventuresPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-64" />
            <div className="h-4 bg-gray-200 rounded w-96" />
            <div className="flex gap-8 mt-10">
              <div className="w-72 h-96 bg-gray-200 rounded-xl hidden lg:block" />
              <div className="flex-1 space-y-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <AdventuresPageClient />
    </Suspense>
  );
}
