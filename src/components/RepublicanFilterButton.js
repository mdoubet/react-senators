import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

//https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/1200px-Republican_Disc.svg.png
//https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DemocraticLogo.svg/2000px-DemocraticLogo.svg.png


const RepublicanFilterButton = () => (
    <div>
        <IconButton
            iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
            tooltipPosition="bottom-right"
        />
    </div>
);

export default RepublicanFilterButton;

// export default class extends Component {
//     constructor(props){
//         super(props);
//
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleSubmit(){
//         this.props.onSubmit();
//
//     }
//
//
//
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Find Senator:
//                     <input type="button" onSubmit={this.handleSubmit} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }