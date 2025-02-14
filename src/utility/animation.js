export const slipeUp = (delay) => {
    return {
        initial: {
            y: -50,
            opacity:0
        },
        animate:{
            y: 0,
            opacity: 1,
            Transition:{
                duration: 0.5,
                delay
            }
        }
    }
}