import React , {useState} from 'react'

//app toggle
export const useToggle = isToggled => {
    const [toggle, setToggle] = useState(isToggled)
    const toggler = () => setToggle(!toggle)
    return {toggle, toggler}
}


