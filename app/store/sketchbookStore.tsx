import { create } from 'zustand'

type CellActionsStore = {
  setType: (type: "text" | "image" | "canvas" | "empty") => void;
  setSetType: (fn: CellActionsStore['setType']) => void;

  mergeSelected: () => void;
  setMergeSelected: (fn: () => void) => void;

  unmergeSelected: () => void;
  setUnmergeSelected: (fn: () => void) => void;
};

export const useCellActions = create<CellActionsStore>((set, get) => ({
  setType: () => {},
  setSetType: (fn) => set({ setType: fn }),

  mergeSelected: () => {},
  setMergeSelected: (fn) => set({ mergeSelected: fn }),

  unmergeSelected: () => {},
  setUnmergeSelected: (fn) => set({ unmergeSelected: fn }),
}));
