'use client'
import { addProduct } from '@/lib/features/productsSlice'
import { makeStore } from '@/lib/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()

        // Check for initial data load
        // storeRef.current.dispatch(addProduct({ title: 'Test Product' }));

    }

    return <Provider store={storeRef.current}>{children}</Provider>
}