import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/Appcontext'

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useAppContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        if (isSeller) {
            navigate("/seller")
        }
    }, [isSeller])
    return !isSeller && (
        <form action="">

        </form>
    )
}

export default SellerLogin