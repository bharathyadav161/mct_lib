import React,{Component} from 'react';

class Footer extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

render(){
    return(
                    <p className="footer" align="center" style={{backgroundColor:'#212529',color:'white'}} ><b>All rights reserved &copy;</b><a href="https://medhatrust.org/login">medhatrust</a><br/><br/> <a href='#'>Instagram  </a><a href='#'>facebook  </a> </p>
          );
}

}

export default Footer;