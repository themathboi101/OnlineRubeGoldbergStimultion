class Bob{
	constructor(x,y,r)
	{
	// assign options to the paper thingy
		this.x=x;
		this.y=y;
		this.width=50;
        this.height=50;
	var options={
		'restitution':0.3,
		'friction': 5,
		'density':1,

	}
	    
		this.body=Bodies.circle(this.x, this.y, 50, options)
		World.add(world, this.body);
		

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
            //make a ellipse,radius,delete ground class on line 30
            ellipse(paperpos.x,paperpos.y,50);   
	}
}