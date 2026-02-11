

function Home(){
    const x=()=>{
        alert("hi")
    }
    return (
        <div className="box">
            <div className="section">
            <h2>Home component</h2>
            <p>sample content</p>
            <button onClick={x}>btn</button>
            </div>
        <div>
            <div className="img">
            <h2>My Image</h2>
            <a href="https://google.com" target="_blank">
            <img src="../public/banner-right-image.png" width="200" />
            </a>
            </div>
        </div> 
        </div>
    )
}
export default Home;