class Circle extends Shape {
    public radius: number;
    constructor(radius: number){
        this.radius=radius;
    }
    public getRadius() {
        return this.radius;
    }
    public draw(ctx) {
        console.log("Dessin de cercle");
        ctx.beginPath();
        ctx.arc(this.getCenter().getX(), this.getCenter().getY(), this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}