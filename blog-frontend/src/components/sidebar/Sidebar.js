import "./Sidebar.css"


function Sidebar() {
    const hashCol = () => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aspernatur at ducimus dolorem qui molestiae dolore officia quisquam vel ratione vero neque non illum rem amet perspiciatis, reiciendis ex?
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar_bottom">
                {hashCol()}
            </div>

        </div>
    )
}

export default Sidebar;


  // const [temp, setTemp] = useState([])
    // const hashCol = (topic) => (
    //     <div className="sidebar__recentItem">
    //         <span className="sidebar__hash">#</span>
    //         <p>{topic}</p>
    //     </div>
    // )

    // return (
    //     <div className="sidebar">
    //         <div className="sidebar__bottom">

    //             {hashCol(hashDetail)}

    //         </div>
    //     </div>
    // )