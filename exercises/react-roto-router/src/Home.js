import React from 'react'

const Home= () => {
    // styling for the header
    const headerStyle ={
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        textAlign: 'center',
        color: 'White',
        backgroundColor: 'black',
        padding: '20pt',
        width: '200pt',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        margin: '30pt'

    }
// minor styling for the p tags 
const pStyle = {
    width: '300pt',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column'

}

    return(
        // added the styling for the whole page within the main wrapper 
        <div style =
        {{backgroundImage: "url(" + "https://images.unsplash.com/photo-1533921101945-d0fa230f58a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" + ")" 
        , backgroundSize: 'contain',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'}}>
        <h1 style={headerStyle}>Roto Plumbing</h1>
        <div style={pStyle}>
        <p>Lorem ipsum  dolor sit amet consectetur adipisicing elit. Laborum, accusamus! Fugit totam commodi error in non beatae, cupiditate quos, quaerat laborum necessitatibus recusandae ipsum obcaecati? Blanditiis eius quisquam voluptatibus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio quia, debitis laborum dignissimos omnis id tempora ullam placeat adipisci laudantium quod a. Iusto iure aliquam minus laboriosam sapiente adipisci?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti, nesciunt nisi, sint soluta nihil quo, impedit quibusdam deleniti minus blanditiis eos recusandae! Perferendis, repudiandae beatae! Temporibus commodi beatae velit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis nostrum dicta dignissimos, suscipit voluptates aut odit facilis, incidunt accusamus totam mollitia, rem sunt? Quis temporibus harum alias rem corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium ratione ipsum, deleniti consequatur minima expedita cupiditate recusandae iusto tenetur! Veniam quibusdam omnis repellat modi quod placeat consequatur dolore similique!</p>
        </div>
        </div>
    )
    }




export default Home
