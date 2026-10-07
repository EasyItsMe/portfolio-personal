"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

interface ToastContextType {
  showToast: (message: string, type?: "success" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: "success" | "info"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const showToast = useCallback((message: string, type: "success" | "info" = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#0f1322] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 text-sm font-medium animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-purple-400 shrink-0" />
          )}
          <span>{toast.message}</span>
          <button
            onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
            className="text-gray-400 hover:text-white ml-1 p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
