Y.AreaSeries = Y.Base.create("areaSeries", Y.CartesianSeries, [Y.Fills], {
	drawSeries: function()
    {
        this.get("graphic").clear();
        this.drawFill();
    }
},
{
    ATTRS: {
        type: {
            /**
             * Indicates the type of graph.
             */
            value:"area"
        },
        direction: {
            value:"horizontal"
        },
        
        styles: {
            getter: function()
            {
                var styles = this.get("area");
                styles.padding = this.get("padding");
            },

            setter: function(val)
            {
                this.set("area", val);
                if(val.hasOwnProperty("padding"))
                {
                    this.set("padding", val.padding);
                }
            }
        }
    }
});



		

		
