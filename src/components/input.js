import React from 'react';
import ReactDOM from 'react-dom';
import '../components/input.css'; 
import ShowList from '../components/ShowLIst';
class Input extends React.Component{
    constructor(props){
    super(props);
    this.state={
        input : '',
        arraylist:[],
        random:'',
    }
        
        this.inputValueChange=this.inputValueChange.bind(this);
         this.onclick=this.onclick.bind(this);
         this.randomValue=this.randomValue.bind(this);
         this.removeItems=this.removeItems.bind(this);
         this.removeAllList=this.removeAllList.bind(this);
    
}
    inputValueChange(e)
    {
      this.setState({input:e.target.value},function(){
      console.log(this.state.input)}); 
    }
    onclick(event)
    {
        // //  event.preventDefault();  
        // let newArray=this.state.arraylist;
        // // this.newArray.push(this.state.input);
        // // this.setState({arraylist:this.newArray});
        // console.log("debasree");
        let{arraylist,input}=this.state;
        arraylist.push(input);
        console.log(this.state.arraylist); 
        this.setState({arrayList:input}) 
        this.setState({input:""});      

    }
    randomValue()
    {
        // console.log("shree");
        this.setState({random:this.state.arraylist[Math.floor(Math.random()*this.state.arraylist.length)]});
        // // console.log("shree");
        this.setState({input:""});
    } 
    removeItems(index)
    {
        // console.log(this.state.arraylist);
        // this.setState({arraylist:})
        //  console.log("shree");
        //  console.log(this.key);
        let { arraylist } = this.state;
        arraylist.splice(index, 1);
        this.setState({
            arraylist: arraylist
        })


    }
    removeAllList()
    {
        let {arraylist}=this.state;
        arraylist.splice(0,arraylist.length);
        this.setState({
            arraylist: arraylist
        })
        console.log(this.state.arraylist);
        console.log("madam");

    }

    render(){
        return(
        <div className="container">
            <div className="widget">
                <div>
                    <button disabled="" className="big-button" onClick={this.randomValue}>What should I do?</button>
                </div>
                <div>
                    <div className="widget-header">
                        <h3 className="widget-header__title">Your Options</h3>
                        <button disabled="" className="button button--link" onClick={this.removeAllList}>Remove All</button>
                    </div>
                </div>
                <div className="widget-body"><ol>
                                { this.state.arraylist.map((lists,index)=>{
                                        return(<li className="list" key={index}>{lists} <button className="remove" onClick={()=> this.removeItems(index)} >Remove</button></li>)
                                    })}
                                </ol>
                </div>
                 <div className="widget-input widget">
                   <input placeholder="Enter your option here" className="input input-box" type="text" value={this.state.input} onChange={this.inputValueChange}/>
                    <button disabled="" className="button button-click" onClick={this.onclick}>Add Option</button>
                  </div>
                  <div className="widget-body card" style={{border:"1 solid red"}}>
                      {this.state.random}
                      </div>
             </div>
        </div>
        );
    }
}
export default Input;