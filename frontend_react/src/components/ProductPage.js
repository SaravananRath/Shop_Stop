import React , { Component } from 'react'

class ProductPage extends Component{
    componentDidMount(){
        this.props.getProduct()
    }
    componentWillUnmount(){
        this.props.removeProduct()

    }
    // getDefaultProps(){
    //

    // }

    renderCarousel() {
        var Carousel = require('react-responsive-carousel').Carousel;
       return ((this.props.product.imageUrls)?(<div className='carousel'><Carousel  axis='vertical' autoPlay  width='400px'>{this.props.product.imageUrls.map((url,index)=>{
            return(
                <img src={'/'+url} key={index} alt='not available'/>
            )
        })}</Carousel></div>):(<div>No</div>))
    }
    renderDetails(){
        if(this.props.product){

            return(<div><h3>Props</h3></div>)
        }
        return(<div>No Props</div>)
    }

    render(){
        return(
            <div>

                {/*{(this.props.product.imageUrls)?(this.props.product.imageUrls.map((url,index)=>{*/}
                    {/*console.log('/'+url)*/}
                    {/*return(*/}
                        {/*<img src={'/'+url} key={index} alt='not available'/>*/}
                    {/*)*/}
                {/*})):(<div>No</div>)}*/}
                {this.renderCarousel()}
                {this.renderDetails()}
            </div>

        )
    }
}
export default ProductPage