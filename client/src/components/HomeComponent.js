import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
            <div className="">
            <h1 align="center" style={{color:'white'}}><b>Medha charatable trust</b> </h1>
            </div>
            <div className="">
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
                <img src="https://medhatrust.org/MCT_logo.png" alt="Your Image" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>

            <br/>
            <h6>
            
            <br/><br/> </h6>
            </div>
            <div className="row darkbg justify-content-center">
            <table>
    <tr> <th colspan="2"><h6>Library Timings</h6></th> </tr>
    <tr> <td><h6>Opening Time</h6> </td> <td> <h6>9.00 A.M.</h6></td></tr>
    <tr> <td>Closing Time </td> <td> 6.00 P.M.</td></tr>
            </table>
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;