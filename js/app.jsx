var React = require('react');
var Slider = require('./slider.jsx');
var Form = require('./form.jsx');
var Closet = require('./closet.jsx');
var SearchForm = require('./searchform.jsx');
(function() {

	var SlideStyle = {
		height: '200px',
		width: '400px',
		float: 'left'
	};

	var shirts1 = 'http://g03.a.alicdn.com/kf/HTB1WaMTIFXXXXXgXVXXq6xXFXXXQ/Denim-font-b-Shirt-b-font-for-font-b-Women-b-font-font-b-Chambray-b.jpg';
	var shirts2 = 'http://www.thenauticalcompany.com/images/uploads/CLOTHING/armor%20lux/women-white-red-striped-breton%20top.jpg';
	var shirts3 = 'http://image1.superdry.com/static/images/products/upload4444275082509586271.jpg';
	var pants1 = 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=104060140';
	var pants2 = 'http://www.vulcan100.com/image/data/0/abercrombie-fitch/2013/Women-Clothing/Abercrombie-Fitch-And-Fitch-Women-Shorts-White-2225.jpg';
	var pants3 = 'https://slack-redir.net/link?url=http%3A%2F%2Fwww.hangzhou-piat.com%2Fuploadfile%2F20110125%2F20110125164841748.jpg';
	var shoes1 = 'http://www.dxsneaker.com/images/r/converse-shoes-white-chuck-taylor-all-star-classic-womens-mens-canvas-lo-sneakers-2039-1.jpg';
	var shoes2 = 'http://www.tactics.com/a/3fu7/9/rainbow-womens-premier-leather-narrow-strap-sandals-dark-brown.jpg';
	var shoes3 = 'http://www.wearingideas.com/wp-content/uploads/2015/05/Mens-Casual-Shoes-5.jpg';

	var Images = React.createClass({
		render: function () {
			return (<div>
				<img src={this.props.imgs}/>
				</div>)
		}
	});

	var Homepage = React.createClass({

		getInitialState: function () {
			return {
				items: []
			}
		},

		componentDidMount: function () {
			this.setState({items: [shirts1, shirts2, shirts3]})
		},

		updatePage: function (images) {
			this.setState({items: images})
		},

	  render: function(){
	  	var imgs = this.state.items.map(function(element, index) {
			return (<Images imgs={element} key={index} />);
		});
	  	console.log(imgs)
	  	return(
	    <div>
	    <Form />
	    <SearchForm update/>
	      
				{imgs}
	    </div>

	  )}
	});
	React.render(<Homepage/>, document.getElementById('content'));

})();
