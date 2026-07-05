import { create } from "zustand";
import { useAuth } from "./AuthSlice";

export const useWishlist = create( ( set , get)=>({

     validateUser : ()=>{
      const user = useAuth.getState().CurrentUser 
      return user
     },
       WislListData : [],
    ToggleWishlistBtn : async(value)=>{
       const user = get().validateUser()
       const {WislListData} = get()
       if( ! user ){
        return ' No Auth '
       }

       const key = `wishlist_${user.id}`;
       const currentWishlist = JSON.parse(localStorage.getItem(key) || '[]');
       const isExistesProductWithUser = currentWishlist.filter(el => el.productId === value.id);
       
       if( !isExistesProductWithUser.length ){
        const newItem = {
            userId : user.id,
            productId : value.id,
            payload : value,
            id: Date.now()
        };
        const updated = [...currentWishlist, newItem];
        localStorage.setItem(key, JSON.stringify(updated));
        set({WislListData : [ ...WislListData , value ] })
        return 'add'

       }else{
        const updated = currentWishlist.filter(el => el.productId !== value.id);
        localStorage.setItem(key, JSON.stringify(updated));
        const filter = WislListData.filter( el => el.id !==value.id )
        set({ WislListData : filter })
        return 'remove'
       }
    },

     FetchWishListProducts : async()=>{
         const user = get().validateUser()
         if (!user) {
             set({WislListData : []})
             return
         }
         const key = `wishlist_${user.id}`;
         const currentWishlist = JSON.parse(localStorage.getItem(key) || '[]');
         const payload = currentWishlist.map(  el => el.payload )
         set({WislListData : payload})
     },

     ClearWishList : ()=>{ set({ WislListData : [] }) }

}) )