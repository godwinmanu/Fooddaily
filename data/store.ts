import { Product } from "@/components/Cart";
import create from "zustand";

let storage;
if (typeof window !== "undefined") {
  storage = localStorage.getItem("orders");
}
const orders = storage ? JSON.parse(storage) : [];

interface AppState {
  showCart: boolean;
  orders: Product[];
  setShowCart: () => void;
  addOrder: (newOrder: Product) => void;
  removeOrder: (order: Product) => void;
  updateOrderQuantity: (order: Product) => void;
}

export const useOrderStore = create<AppState>()((set, get) => ({
  // initial state
  showCart: false,
  orders: orders,

  // methods for manipulating state
  setShowCart: () => {
    set((state: AppState) => ({
      showCart: !state.showCart,
    }));
  },

  addOrder: (newOrder) => {
    const existedOrder = get().orders.find((order) => order.id === newOrder.id);

    if (!existedOrder) {
      const cart = document.getElementById("cart");
      if (cart) {
        let dataCount = Number(cart.getAttribute("data-count"));

        cart.setAttribute("data-count", `${dataCount + 1}`);
      }

      set((state) => ({
        orders: [newOrder, ...state.orders],
      }));

      setTimeout(() => {
        if (typeof window !== "undefined") {
          localStorage.setItem("orders", JSON.stringify(get().orders));
        }
      }, 700);
    }
  },

  updateOrderQuantity: (order) => {
    console.log(order);

    const updatedOrders = get().orders.map((item, index) => {
      if (item.id === order.id) {
        return order;
      }
      return item;
    });

    set(() => ({
      orders: updatedOrders,
    }));

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
      }
    }, 700);
  },

  removeOrder: (order) => {
    const updatedOrders = get().orders.filter((item) => {
      return item.id !== order.id;
    });

    set(() => ({
      orders: updatedOrders,
    }));

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
      }
    }, 700);
  },
}));
