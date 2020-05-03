import * as React from 'react';
// Props
interface ComponentsProps {
    añoActual: number;
}
const Footer = ({ añoActual }: ComponentsProps) => {
    return (
        <footer>
            <p>Todos los Derechos reservados &copy{añoActual}</p>
        </footer>
    )
};

export default Footer;