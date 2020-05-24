class Rectangle extends Shape {
    public width: number;
    public height: number;
    constructor(width: number, height: number){
        this.width=width;
        this.height=height;
    }
    public getWidth() {
        return this.width;
    }
    public getHeight() {
        return this.height;
    }
    public draw(ctx){
        console.log("Dessin de rectangle");
        ctx.beginPath();
        ctx.rect(this.getCenter().getX(), this.getCenter().getY(), this.width, this.height);
        ctx.stroke();
    }
}