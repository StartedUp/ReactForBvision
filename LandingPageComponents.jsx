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
      <input type={this.props.type} className="form-control" id={this.props.Label} placeholder={this.props.PlaceValue} />

    </div>
 		);
 	}
 });
 var NewClaim = React.createClass({
 	render: function(){
 		return (
 			<div style={{textAlign: 'center',marginTop:"50px"}}>
      <h4>Let's submit your claim so you can get a replacement ASAP</h4>
                              <h6>Please tell us about your device</h6>
              <form className="form col-sm-4 col-sm-offset-4" role="form">
                <TextBox type="text" Label='Manufacturer' PlaceValue='Apple, Samsung, etc'/>
                <TextBox type="text" Label='Model' PlaceValue='iPhone 5, Galaxy S4, etc.'/>                                
                <TextBox type="text" Label='Color' PlaceValue='Black, White, etc'/>
                <TextBox type="number" Label='Wireless number for this device' PlaceValue='123-456-7890'/>
                <Buton id="newClaimBtn" Bname="Next" />
              </form>
              
            </div>
 		);
 	}
 });
 var ReuseClaim = React.createClass({
 	render: function(){
 		return (
 			<div style={{textAlign: 'center',marginTop:"50px"}}>
      <h4>Your claim security is of utmost importance to us. Providing us with the following documents helps verify your identity</h4>
                               <h6>DOWNOAD AND COMPLETE THE AFFIDAVIT</h6>
              <form className="form col-sm-4 col-sm-offset-4" role="form">
                <TextBox type="number" Label='Mobile number of affected device' PlaceValue='000-000-0000'/>
                <TextBox type="text" Label='Last name' PlaceValue='Last name'/>                                
                <TextBox type="text" Label='Zip/postal code' PlaceValue='Zip/postal code'/>
                <Buton id="reuseBtn" Bname="Next" />
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
              	<button type="button" onClick={this.nextPage} id={this.props.id} className="nextBtn">{this.props.Bname}</button>
            </div>
 		);
 	}
 });