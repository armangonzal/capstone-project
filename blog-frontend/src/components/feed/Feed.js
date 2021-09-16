import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap';

import "./Feed.css"

//  user
function Feed() {
    //post 
    const [posts, setPosts] = useState([]);

    
    return (
        <div className="feed">

            {/*  Space reserved for txt editor */}



            <div className="feed_separationLine">
                <hr className="feed_horizontal" />
                <span className="feed_sorts">
                    <span className="feed_sort">
                        Sort by:
                    </span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="feed_dropDown">
                            Recent
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* <Dropdown.Item onClick={e => setSortOption("top")}>Top</Dropdown.Item>
                            <Dropdown.Item onClick={e => setSortOption("recent")}>Recent</Dropdown.Item> */}
                            <Dropdown.Item >Top</Dropdown.Item>
                            <Dropdown.Item>Recent</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            </div>
        </div>
    )
}

export default Feed;