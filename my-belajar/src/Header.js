import React from 'react'

    class Header extends React.Component {
        Constructor(){
        
        }

        render() {
            return(
       <div>
          <h1> This is Header component</h1>
        <ul>
            <li>Home</li>
            <li>List students</li>
            <li>Add students</li>
         </ul>
        </div>
        )
    }
}

          
    export default Header;