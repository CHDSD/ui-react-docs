/**
 * Created by xiening on 2017/2/14.
 */
import React from 'react';
import './style.scss';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0,
            animateshow:false,
            itembg: {'background':'#0e90d2'}
        }
    }
    check_title_index(index){
        return index === this.state.currentIndex ? "Tab_title active" : "Tab_title";
    }
    check_item_index(index){
        return index === this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }
    render() {
        let _this = this;
        //var animatestyle = {};
        var animatestyle = this.state.animateshow ? {animation: 'tabanimate 300ms linear'} : {};
        var isanimate = true ;
        //if(this.state.animateshow){
        //    isanimate = true;
        //}else{
        //    isanimate = false;
        //}

        //console.debug(isanimate);
        //var animatestyle = {};
        return(

            //if(isanimate){
            //    animatestyle = {background:'red'}
            //}else{
            //    animatestyle =  {background:''}
            //}
          //var text = this.state.liked ? 'like' : 'haven\'t liked';
            <div>
                {/*动态生成Tab导航*/}
                <div className="Tab_title_wrap">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index,animateshow:isanimate}) } } className={ this.check_title_index(index) }>{ element.props.name }</div>
                        );
                    })
                    }
                </div>
                {/*Tab内容区域*/}
                <div className="Tab_item_wrap" style={this.state.itembg}>
                    { React.Children.map(this.props.children , (element,index) => {
                        return(
                            <div className={ this.check_item_index(index) } style={animatestyle}>{ element }</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Tabs;