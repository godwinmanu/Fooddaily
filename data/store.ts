import create from "zustand";

interface AppState {
  showCart: boolean;
  // orders: string[];
  setShowCart: () => void;
  // addOrder: (order: string) => void;
  // removeOrder: (id: string) => void;
}

export const useStore = create<AppState>()((set) => ({
  // initial state
  showCart: false,

  // methods for manipulating state
  setShowCart: () => {
    set((state) => ({
      showCart: !state.showCart,
    }));
  },
  /* addOrder: (order: string) => {
    set((state) => ({
      order: [
        ...state.todos,
        {
          id: uuidv4(),
          description,
          completed: false,
        } as Todo,
      ],
    }));
  }, */
}));
