import React from 'react'

import { useTheme } from '../../context/ThemeContext';
const ContactSection = () => {

    const { isDarkMode } = useTheme();

    return (
        <section
            id="contact"
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                } relative overflow-hidden`}
        >
            HiHi còn tiếp ^-^ cùng chờ nhé
        </section>
    )
}

export default ContactSection
