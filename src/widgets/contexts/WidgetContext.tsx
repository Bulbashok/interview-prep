import { createContext, useContext } from 'react';

interface WidgetContext {
  completeWidget: () => void;
}

export const WidgetContext = createContext<WidgetContext | null>(null);

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);

  return context;
};
