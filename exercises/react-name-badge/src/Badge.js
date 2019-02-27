import React from 'react'

const Badge = props => {
    const mainBadge = {
        border: "solid black 1pt",
        borderRadius: '10pt',
        width: "460pt",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"


    }
    const badgeStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyContent: 'space evenly',
        gridGap: "5pt",
        width: '90%',

    }

    return (
        <div style={mainBadge}>
            <div style={{
                margin: '0',
                width: '100%',
                backgroundColor: 'red',
                height: '30pt',
                borderTopLeftRadius: '8pt',
                borderTopRightRadius: '8pt'
            }}
            >
                <p style={{ margin: '0', padding: '5pt', display: 'flex', }}>Badge: </p>
            </div>
            <div style={badgeStyle}>
                <p>Name: {props.badge.firstNameInput} {props.badge.lastNameInput}</p>
                <p>Phone: {props.badge.phoneInput}</p>
                <p>Place of Birth: {props.badge.birthInput}</p>
                <p>Favorite Food: {props.badge.foodInput}</p>
                <p>Email: {props.badge.emailInput}</p>
                <p
                    style={{
                        gridColumn: '1/3',
                        border: 'solid black 1pt'

                    }}>{props.badge.aboutInput}</p>
            </div>
        </div >
    )

}





export default Badge