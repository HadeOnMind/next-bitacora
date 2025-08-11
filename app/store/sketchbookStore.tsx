import { create } from 'zustand'

type SketchbookStore = {
  // States
  counter: number

  // Actions
  increment: () => void
  decrement: () => void
}

export const useSketchbookStore = create<SketchbookStore>((set) => ({
  counter: 0,

  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}))
