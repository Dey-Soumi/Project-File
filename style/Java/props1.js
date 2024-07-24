///const Box=(props)=>{
    class Box extends React.Component{
        state={color:"black"};

        changeColor(color){
            this.setsState({colo:color});
        }
    render(){
       return(
        <div classsname='box'>
            <h1 className={this.state.color}>{this.props.heading}</h1>
            <p>land is a motherland</p>
            <button onclick={()=>this.changeColor("red")}>Red</button>
            <button  onclick={()=>this.changeColor("green")}>Green</button>
            <button  onclick={()=>this.changeColor("blue")}>Blue</button>
            
        </div>
    );
              }
};
const App=()=>{
    // converting app component into class component
     

     return(
        <div classname='row'>
            <div classname='col'>
                <Box heading='First Heading'/> 
            </div>
            <div classname='col'>
                <Box heading='second Heading'/> 
            </div>
            <div classname='col'>
                <Box heading='Third Heading'/> 
            </div>
        </div>
    );
     };
};
ReactDom.render(
<App/>,
document.getElementById('react-container')
);