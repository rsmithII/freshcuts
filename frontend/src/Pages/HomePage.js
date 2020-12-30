import React from 'react'
import { Link } from 'react-router-dom'

import CutsPage from '../Container/CutsPage'

export default function HomePage(props) {
    return (
        <div>
            <CutsPage />
            <Link to="/login">Logout</Link>
        </div>
    )
}
