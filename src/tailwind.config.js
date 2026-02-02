// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                'glow-horizontal': 'glowHorizontal 2s ease-in-out infinite',
                'glow-vertical': 'glowVertical 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                glowHorizontal: {
                    '0%, 100%': { opacity: 0.3, transform: 'scaleX(0.95)' },
                    '50%': { opacity: 1, transform: 'scaleX(1)' },
                },
                glowVertical: {
                    '0%, 100%': { opacity: 0.3, transform: 'scaleY(0.95)' },
                    '50%': { opacity: 1, transform: 'scaleY(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '33%': { transform: 'translateY(-10px) translateX(10px)' },
                    '66%': { transform: 'translateY(5px) translateX(-5px)' },
                },
            },
        },
    },
}