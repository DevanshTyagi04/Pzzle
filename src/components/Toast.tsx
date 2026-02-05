"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useToastStore } from "@/store/toast";

export default function Toast() {
  const { content } = useToastStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !content) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-4">
      <div className="flex max-w-sm items-start gap-3 rounded-2xl bg-dark-900 px-5 py-4 text-light-100 shadow-lg animate-slide-up">
        <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
        <div className="text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}
