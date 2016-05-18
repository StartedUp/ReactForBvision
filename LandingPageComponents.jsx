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
			      <input type="radio" name="optradio" />{this.props.radioName}
			    </label>
  			
 		);
 	}
 });