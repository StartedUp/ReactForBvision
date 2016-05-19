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
			      <input type="radio" name="optradio" data-toggle="modal" data-target={this.props.Toggle}/>{this.props.radioName}
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