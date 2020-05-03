import React from 'react';
// Props
interface ComponentProps {
    nombreTienda: string;
}

function Header({ nombreTienda }: ComponentProps) {
    return (
        <h1 className='encabezado'>{nombreTienda}</h1>
    )
}

export default Header;