 var Tab =React.createClass ({
 	render:function() {
 		var href = "#"+(this.props.TabName).replace(" ","_").replace(" ","_");
 		return (
 			<li><a data-toggle="tab" href={href}>{this.props.TabName}</a></li>
 		);
 	}
 });
 var RadioButton = React.createClass({
 	render: function(){
 		return (
			    <label className="radio-inline">
			      <input type="radio" name="optradio" id={this.props.radioName}/>{this.props.radioName}
			    </label>
 		);
 	}
 });
 var TextBox = React.createClass({
 		render: function(){
 		return (
 			<div className="form-group">
      <label for={this.props.Label}>{this.props.Label}</label>
      <input type="text" className="form-control" id={this.props.Label} placeholder={this.props.PlaceValue} />

    </div>
 		);
 	}
 });
 var NewClaim = React.createClass({
 	render: function(){
 		return (
 			<div style={{textAlign: 'center',marginTop:"50px"}}>
              <form className="form col-sm-4 col-sm-offset-4" role="form">
                <TextBox Label='Manufacturer' PlaceValue='Apple, Samsung, etc'/>
                <TextBox Label='Model' PlaceValue='iPhone 5, Galaxy S4, etc.'/>                                
                <TextBox Label='Color' PlaceValue='Black, White, etc'/>
                <TextBox Label='Wireless number for this device' PlaceValue='123-456-7890'/>
                <Buton Bname="Next" />
              </form>
              
            </div>
 		);
 	}
 });
 var ReuseClaim = React.createClass({
 	render: function(){
 		return (
 			<div style={{textAlign: 'center',marginTop:"50px"}}>
              <form className="form col-sm-4 col-sm-offset-4" role="form">
                <TextBox Label='Mobile number of affected device' PlaceValue='000-000-0000'/>
                <TextBox Label='Last name' PlaceValue='Last name'/>                                
                <TextBox Label='Zip/postal code' PlaceValue='Zip/postal code'/>
                <Buton Bname="Next" />
              </form>
            </div>
 		);
 	}
 });
 var Buton = React.createClass({
 		nextPage: function(){
 			if(document.getElementById('New Claim').checked) {
        window.open("NewClaim.html","_self" );
      }else if(document.getElementById('Reuse Claim').checked) {
        window.open("ReuseClaim.html","_self" );
      }
    },
 		render: function(){
 		return (
 			<div style={{textAlign: 'center'}}>
              	<button type="button" onClick={this.nextPage} className="btn btn-success btn-lg">{this.props.Bname}</button>
            </div>
 		);
 	}
 });