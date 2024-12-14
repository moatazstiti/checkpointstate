import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            FullName:"Moataz",
            Bio:"FullStackJs",
            Profession:"Developer",
            Img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fbreakingbad%2Fcomments%2Fuuhetm%2Fwalter_white_the_never_ending_3d_portrait_adding%2F%3Ftl%3Dfr&psig=AOvVaw0M07WUcB1NZ4pAaRgGiCc5&ust=1734303854566000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjClruvqIoDFQAAAAAdAAAAABAJ"
        }
        this.state={count:0}
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState(prevState=>({
                count:prevState.count+1
            }))
        },1000)
    }
  render() {
    return (
      <div>
        <h2>{this.person.FullName}</h2>
        <h2>{this.person.Bio}</h2>
        <h2>{this.person.Profession}</h2>
        <img src={this.person.img}/>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
