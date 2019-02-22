import React from 'react'
import Friend from './Friend.js'
const Friendlist = () => {
    const friends = [
        {
            name: "Ben",
            age: 29,
            pets: [
                {
                    name: "spot",
                    breed: "tabby"
                }, {
                    name: "John Johnson",
                    breed: "husky"
                }, {
                    name: "Bear the bear",
                    breed: "Grizzly"
                }
            ]
        }, {
            name: "Bob",
            age: 31,
            pets: [
                {
                    name: "Sally",
                    breed: "Australian Shepard"
                }
            ]
        }, {
            name: "Marcus",
            age: 25,
            pets: [
                {
                    name: "Indy",
                    breed: "Akita"
                }, {
                    name: "Anna",
                    breed: "persian cat"
                }
            ]
        }, {
            name: "Jacob",
            age: 20,
            pets: [
                {
                    name: "fluffy",
                    breed: "sphynx cat"
                }, {
                    name: "patches",
                    breed: "sphynx cat"
                }, {
                    name: "tiger",
                    breed: "sphynx cat"
                }, {
                    name: "oscar",
                    breed: "sphynx cat"
                }
            ]
        }, {
            name: 'Polly',
            age: '21',
            pets: [
                {
                    name: "Star",
                    breed: 'GoldFish'

                }
            ]
        }, {
            name: 'Nico',
            age: '20',
            pets: [
                {
                    name: 'Lola',
                    breed: 'Australian Shepard'
                }
            ]
        }
    ]
    const mappedFriendlist = friends.map((person, i) =>
        <Friend
            key={i}
            name={person.name}
            age={person.age}
            pets={person.pets}
        />)
    return (
        <div className='friend-list'>
            {mappedFriendlist}
        </div>
    )


}









export default Friendlist