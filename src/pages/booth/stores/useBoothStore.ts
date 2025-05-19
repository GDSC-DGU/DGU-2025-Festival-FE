import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BoothState {
  likedBooths: Set<string>;
  likeCounts: Record<string, number>;
  showOnlyLiked: boolean;
  selectedBoothId: string | null;
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
  getLikeCount: (id: string) => number;
  toggleShowOnlyLiked: () => void;
  setSelectedBoothId: (id: string | null) => void;
}

export const useBoothStore = create<BoothState>()(
  persist(
    (set, get) => ({
      likedBooths: new Set(),
      likeCounts: {},
      showOnlyLiked: false,
      selectedBoothId: null,

      toggleLike: (id) => {
        const current = new Set(get().likedBooths);
        const likeCounts = { ...get().likeCounts };
        if (current.has(id)) {
          current.delete(id);
          likeCounts[id] = Math.max(0, (likeCounts[id] || 1) - 1);
        } else {
          current.add(id);
          likeCounts[id] = (likeCounts[id] || 0) + 1;
        }
        set({ likedBooths: current, likeCounts });
      },

      isLiked: (id) => get().likedBooths.has(id),
      getLikeCount: (id) => get().likeCounts[id] || 0,

      toggleShowOnlyLiked: () => {
        set((state) => ({ showOnlyLiked: !state.showOnlyLiked }));
      },
      setSelectedBoothId: (id) => set({ selectedBoothId: id }),
    }),
    {
      name: 'liked-booths-storage',
      partialize: (state) => ({
        likedBooths: Array.from(state.likedBooths), // Set → string[]
        likeCounts: state.likeCounts,
        showOnlyLiked: state.showOnlyLiked,
        selectedBoothId: state.selectedBoothId,
      }),
      
      merge: (persisted, current) => {
        const state = persisted as Partial<BoothState>;
        return {
          ...current,
          likedBooths: new Set(state.likedBooths || []),
          likeCounts: state.likeCounts ?? {},
          showOnlyLiked: state.showOnlyLiked ?? false,
          selectedBoothId: state.selectedBoothId ?? null,
        };
      }         
    }
  )
);
