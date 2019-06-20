import React, {Component} from 'react' ;
import ComponentWrapper from './HourlyContainer.style' ;
import HomeAction from '../../redux/home/actions.js' ;
import {connect} from 'react-redux' ;
import gif from '../../static/load.gif' ;

const {requestData} = HomeAction ;

class HourlyContainer extends Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount() {
        this.props.requestData('abc') ;
    }

    render () {
        console.log(requestData) ;
        return (
            <ComponentWrapper>
                {
                    (!this.props.ok) ? 
                    (<img className="img-loader" alt="loading..." src={gif}/>) :
                    (this.props.data.map(temp => {
                        return (<p> {temp} </p>) ;
                    }))
                }
            </ComponentWrapper>
        ) ;
    }
}

const mapStateToProps = state => {
    return {data : state.data, ok : state.recieveData}
}

export default connect(mapStateToProps, {requestData}) (HourlyContainer) ;